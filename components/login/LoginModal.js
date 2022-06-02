import { Button, TextInput, Box, Group} from '@mantine/core';
import { useModals } from '@mantine/modals';
import styles from './LoginModal.module.scss'
import {RegisterForm} from '../login/RegisterForm'
import { DoorEnter } from 'tabler-icons-react';
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
							<p style={{marginTop: 20, marginLeft: 50}}>Вы еще не зарегистрированы?</p><a className={styles.regA} style={{color:'#30d5c8', cursor: 'pointer', marginLeft:50}} onClick={openSecondModal}>Зарегистрироваться</a>
						</div>
      </>)
    });
    return  <DoorEnter size={35} strokeWidth={1.3} style={{ position: 'fixed', right: '20px', background: '#ffffff', color: '#007D34' }} onClick={openMultiStepModal}>Вход / Регистрация</DoorEnter>
    // <Button style={{ position: 'fixed', right: '20px', background: '#ffffff', color: '#0000ff' }} onClick={openMultiStepModal}>Вход / Регистрация</Button>;

}