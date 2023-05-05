import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectStatusFilter } from 'redux/contacts/contactsSelectors';
import { setFilter } from 'redux/contacts/filterSlice';
import { Input } from '@chakra-ui/react';

export const Filter = () => {
  const filter = useSelector(selectStatusFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <Input
        focusBorderColor="DarkViolet"
        type="text"
        name="filter"
        className="filterInput"
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
};
