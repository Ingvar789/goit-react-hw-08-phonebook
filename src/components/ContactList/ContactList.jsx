import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectStatusFilter,
} from 'redux/contacts/contactsSelectors';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { List, ListItem, ListIcon, Button } from '@chakra-ui/react';
import { ImUser } from 'react-icons/im';
export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectStatusFilter);

  const dispatch = useDispatch();

  const normaliseFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normaliseFilter)
  );

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <List spacing={7} p={0} mt={10}>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <ListItem
            key={id}
            display="flex"
            w="100%"
            p={1}
            justifyContent="space-between"
            alignItems="center"
            border="1px solid gray"
            borderRadius={10}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <ListIcon as={ImUser} color="purple.500" />
              {name}: {number}
            </div>

            <Button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};
