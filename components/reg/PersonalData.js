import { useState } from 'react';
import styles from './PersonalData.module.scss'
import { Input } from '@mantine/core';

export const PersonalData = () => {
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
				<div className={styles.secondblock}>
					<Input id='surname' 
						   type="text" 
						   placeholder="Фамилия*" 
						   className={styles.input} 
						   onChange={e => setSurname(e.target.value)} 
						   required
						   minLength='1'
						   maxLength='100'/>
					<Input id='firstname' 
					       type="text" 
					       placeholder="Имя*" 
					       className={styles.input} 
					       onChange={e => setFirstname(e.target.value)} 
					       required
						   minLength='1'
						   maxLength='100'/>
					<Input id='lastname' 
						   type="text" 
						   placeholder="Отчество" 
						   className={styles.input} o
						   nChange={e => setLastname(e.target.value)} 
						   required
						   minLength='1'
						   maxLength='100'/>
				</div>
				<div className={styles.firstblock}>
					<Input id='phonenumber' 
						   type="tel" 
						   placeholder="Телефон*" 
						   className={styles.input} 
						   onChange={e => setPhoneNumber(e.target.value)} 
						   required
						   minLength='6'
						   maxLength='100'/>
				</div>
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}