import { useState } from 'react';
import styles from './MainData.module.scss'
import { Input } from '@mantine/core';

export const MainData = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordRepeat, setPasswordRepeat] = useState('');

	const changePasswordRepeat = e => {
		e.preventDefault();
		setPasswordRepeat(e.target.value)
	};
	return (<>
		<div className={styles.maindiv}>
			<h2 className={styles.h2}>Основные данные</h2>
			<div>
				<Input id='email' 
					   type="email" 
					   placeholder="E-mail адрес*" 
					   className={styles.input}
					   onChange={e => setEmail(e.target.value)}
					   required 
					   maxLength='255'/>
			</div>
			<div>
				<Input id='password' 
				       type="password" 
					   placeholder="Пароль*" 
					   className={styles.input} 
					   onChange={e => setPassword(e.target.value)}
					   required
					   minLength='6'
					   maxLength='100' />
				<Input id='passwordRepeat' 
					   type="password" 
					   required
					   minLength='6'
					   maxLength='100'
					   placeholder="Повторите пароль*" 
					   className={styles.input}
					   onChange={e => changePasswordRepeat(e)}/>
			</div>

		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}