import { MantineProvider, TextInput, Button, Box } from '@mantine/core';
import { ModalsProvider, useModals } from '@mantine/modals';
import { useForm } from '@mantine/form';
import { axios, checkToken } from '/middleware/axios.js';
import { useState, useEffect } from 'react';
import { LoginForm } from '../mainlayout/LoginForm'

export const LoginButton = () => {

  const modals = useModals();

  const openContentModal = () => {
    const id = modals.openModal({
      title: 'Войти/Зарегистрироваться',
      children: (
        <LoginForm id={id} />
      ),
    });
  };

  return (
    <Button onClick={openContentModal} variant="light" color="gray" size="xs" uppercase>Войти/Зарегистрироваться</Button>
  );
}