import { Button, TextInput, Box, Group} from '@mantine/core';
import { useModals } from '@mantine/modals';
import {RegisterForm} from '../login/RegisterForm'
import styles from './LoginModal.module.scss'

export function LoginModal ()  {

const modals = useModals();

  const openMultiStepModal = () =>
    modals.openConfirmModal({
      title: 'Войти.Зарегестрироваться',
      closeOnConfirm: false,
      labels: { confirm: <a><span style={{color: '#00CED1', cursor: 'pointer'}}>Зарегистрироваться</span></a> },
      children: (
            <Box sx={{ maxWidth: 300 }} mx="auto">
				<form>
					<TextInput
					required
					label="Эдектронная почта"
					placeholder="your@email.com"
				/>
					<TextInput type="password" label="Пароль" required />
				</form>
				<Group mt="md">
					<div><Button fullWidth type="submit" color="green" >Войти</Button></div>
					<p style={{fontSize: "15px"}}>Вы еще не зарегестрированы?</p>
					
				</Group>
			</Box>
      ),
      onConfirm: () =>
        modals.openConfirmModal({
          children: (
            < RegisterForm />
          ),
          onConfirm: () => modals.closeAll(),
          
        }),
    });
    return <Button className={styles.loginModal} style={{ position: 'fixed', right: '20px', background: '#ffffff', color: '#0000ff' }} onClick={openMultiStepModal}>Личный кабинет</Button>;

}