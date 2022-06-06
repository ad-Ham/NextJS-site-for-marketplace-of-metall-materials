import { Button, TextInput, Box, Group, UnstyledButton, Text, Space} from '@mantine/core';
import { useModals} from '@mantine/modals';
import styles from './LoginModal.module.scss'
import {RegisterForm} from '../login/RegisterForm'
import { ArrowBarToLeft } from 'tabler-icons-react';
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
    return <><UnstyledButton onClick={openMultiStepModal}>
      <Group>
                <ArrowBarToLeft
                  size={25}
                  strokeWidth={1.5}
                  color={'blue'}
                  style={{marginRight:-12}}
                />
                <Text size="md" color="blue" weight="600" >
                  Войти 
                </Text>
      </Group>
           </UnstyledButton>
           </>

}