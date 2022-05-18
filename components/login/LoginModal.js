import { Button, TextInput, Box, Group} from '@mantine/core';
import { useModals } from '@mantine/modals';
import styles from './LoginModal.module.scss'
import {RegisterForm} from '../login/RegisterForm'
<<<<<<< HEAD
import styles from './LoginModal.module.scss'
=======
import {LoginForm} from '../mainlayout/LoginForm'
>>>>>>> ee85847ce7274f998bdd7320c9310eda668f990e

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
<<<<<<< HEAD
    return <Button className={styles.loginModal} style={{ position: 'fixed', right: '20px', background: '#ffffff', color: '#0000ff' }} onClick={openMultiStepModal}>Личный кабинет</Button>;
=======
    return <Button style={{ position: 'fixed', right: '20px', background: '#ffffff', color: '#0000ff' }} onClick={openMultiStepModal}>Вход / Регистрация</Button>;
>>>>>>> ee85847ce7274f998bdd7320c9310eda668f990e

}