import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import css from './Navigation.module.css';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { ImBook } from 'react-icons/im';
export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.headerNav}>
      <NavLink className={css.link} to="/">
        <ImBook size={30} />
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
