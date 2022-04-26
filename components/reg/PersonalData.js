import { useState } from 'react';
import styles from './PersonalData.module.scss'

export function PersonalData() {
	const [surName, setSurname] = useState('');
	const [firstName, setFirstname] = useState('');
	const [lastName, setLastname] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		const data = {
			surName,
			firstName,
			lastName,
			phoneNumber
		};
		console.log(data);
	};
	return (<>
		<div className={styles.maindiv}>
			<h2 className={styles.h2}>Личные данные</h2>
			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={styles.secondblock}>
					<input id='surname' type="text" placeholder="Фамилия*" className={styles.inputpassword} onChange={e => setSurname(e.target.value)} />
					<input id='firstname' type="text" placeholder="Имя*" className={styles.inputpassword} onChange={e => setFirstname(e.target.value)} />
					<input id='lastname' type="text" placeholder="Отчество" className={styles.input} onChange={e => setLastname(e.target.value)} />
				</div>
				<div className={styles.firstblock}>
					<input id='phonenumber' type="text" placeholder="Телефон*" className={styles.input} onChange={e => setPhoneNumber(e.target.value)} />
				</div>
			</form>
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}