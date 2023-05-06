import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import shortid from 'shortid';
import css from './PhonebookForm.module.css';
import { addContact } from 'redux/contacts/contactsOperations';
import {
  Input,
  InputLeftElement,
  InputGroup,
  Box,
  Stack,
  Button,
} from '@chakra-ui/react';
import { ImPhone, ImUserPlus } from 'react-icons/im';
export const PhonebookForm = () => {
  const nameInputId = shortid.generate();
  const tagInputId = shortid.generate();
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [contact, setContact] = useState({ name: '', number: '' });

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contactName = contact.name.toLowerCase();
    if (contacts.find(contact => contact.name.toLowerCase() === contactName)) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    dispatch(addContact(contact));
    console.log(contact);
    setContact({ name: '', number: '' });
  };

  const { name, number } = contact;

  return (
    <>
      <Box
        p="20px"
        color="white"
        mt="4"
        border="1px solid white"
        rounded="md"
        shadow="md"
      >
        <form className={css.phonebookForm} onSubmit={handleSubmit}>
          <label htmlFor={nameInputId} className={css.phonebookFormLabel}>
            Name:
            <Stack>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<ImUserPlus color="black" />}
                />
                <Input
                  colorScheme="black"
                  placeholder="Harry Potter"
                  _placeholder={{ opacity: 0.9, color: 'black' }}
                  focusBorderColor="black"
                  size="md"
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  value={name}
                  onChange={handleChange}
                  id={nameInputId}
                />
              </InputGroup>
            </Stack>
          </label>
          <label htmlFor={tagInputId} className={css.phonebookFormLabel}>
            Number:
            <Stack>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<ImPhone color="black" />}
                />

                <Input
                  colorScheme="black"
                  focusBorderColor="black"
                  placeholder="123-789"
                  _placeholder={{ opacity: 0.9, color: 'black' }}
                  size="md"
                  type="tel"
                  name="number"
                  onChange={handleChange}
                  value={number}
                  id={tagInputId}
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
              </InputGroup>
            </Stack>
          </label>
          <Button type="submit" colorScheme="blackAlpha">
            Add contact
          </Button>
        </form>
      </Box>
    </>
  );
};
