import { Button, TextInput, Box, Group} from '@mantine/core';
import { useModals } from '@mantine/modals';
import styles from './LoginModal.module.scss'
import {RegisterForm} from '../login/RegisterForm'
import {LoginForm} from '../mainlayout/LoginForm'

export function LoginModal ()  {

const modals = useModals();
function openSecondModal() {
	modals.openModal({
          children: (
            < RegisterForm />
          ),
          onConfirm: () => modals.closeAll(),
          
        })
}

  const openMultiStepModal = () =>
    modals.openModal({
      title: 'Вход в учетную запись',
      closeOnConfirm: false,
      labels: { confirm: 'Зарегистрироваться' },
      children: (<>
            <LoginForm/>
						<div className={styles.regDiv}>
							<p>Вы еще не зарегистрированы?</p><a className={styles.regA} onClick={openSecondModal}>Зарегистрироваться</a>
						</div>
      </>)
    });
    return <Button style={{ position: 'fixed', right: '20px', background: '#ffffff', color: '#0000ff' }} onClick={openMultiStepModal}>Вход / Регистрация</Button>;

}