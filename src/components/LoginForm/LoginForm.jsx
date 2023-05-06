import { Input, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <Input type="email" name="email" borderColor="black" opacity={0.5} />
      </label>
      <label className={css.label}>
        Password
        <Input
          type="password"
          name="password"
          borderColor="black"
          opacity={0.5}
        />
      </label>
      <Button type="submit" colorScheme="blackAlpha">
        Sign in
      </Button>
    </form>
  );
};
