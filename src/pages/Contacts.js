import { useEffect } from 'react';
import { Skeleton, Stack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactList } from 'components/ContactList/ContactList';
import { PhonebookForm } from 'components/PhonebookForm/PhonebookForm.jsx';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectIsLoading } from 'redux/contacts/contactsSelectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your Phonebook</title>
      </Helmet>
      <PhonebookForm />
      <Filter />
      <div>
        {isLoading && (
          <Stack>
            <Skeleton height="20px" />
          </Stack>
        )}
      </div>
      <ContactList />
    </>
  );
}
