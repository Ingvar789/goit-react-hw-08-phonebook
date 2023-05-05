import { Input, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <Input type="text" name="name" borderColor="DarkViolet" opacity={0.5} />
      </label>
      <label className={css.label}>
        Email
        <Input
          type="email"
          name="email"
          borderColor="DarkViolet"
          opacity={0.5}
        />
      </label>
      <label className={css.label}>
        Password
        <Input
          type="password"
          name="password"
          borderColor="DarkViolet"
          opacity={0.5}
        />
      </label>
      <Button type="submit">Sign up</Button>
    </form>
  );
};
