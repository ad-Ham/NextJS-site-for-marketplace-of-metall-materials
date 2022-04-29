import { useState } from 'react';
import styles from './MainData.module.scss'

export function MainData() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		const data = {
			email,
			password,
		};
		console.log(data);
	};
	return (<>
		<div className={styles.maindiv}>
			<h2 className={styles.h2}>Основные данные</h2>
			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={styles.firstblock}>
					<input id='email' type="text" placeholder="E-mail адрес*" className={styles.input} onChange={e => setEmail(e.target.value)} />
				</div>
				<div className={styles.secondblock}>
					<input id='password' type="text" placeholder="Пароль*" className={styles.inputpassword} onChange={e => setPassword(e.target.value)} />
					<input id='repeatpassword' type="text" placeholder="Повторите пароль*" className={styles.input} />
				</div>
			</form>

		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}