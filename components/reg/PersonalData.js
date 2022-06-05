import { useState } from 'react';
import styles from './PersonalData.module.scss'
import { Input,Text,Group } from '@mantine/core';

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
		<Group className={styles.maindiv}>
			<Text className={styles.h2}>Личные данные</Text>
					<Input id='surname' 
						   type="text" 
						   placeholder="Фамилия*" 
						   className={styles.inputpassword} 
						   onChange={e => setSurname(e.target.value)} 
						   required
						   minLength='1'
						   maxLength='100'/>
					<Input id='firstname' 
					       type="text" 
					       placeholder="Имя*" 
					       className={styles.inputpassword} 
					       onChange={e => setFirstname(e.target.value)} 
					       required
						   minLength='1'
						   maxLength='100'/>
					<Input id='lastname' 
						   type="text" 
						   placeholder="Отчество*" 
						   className={styles.inputpassword}
						   nChange={e => setLastname(e.target.value)} 
						   required
						   minLength='1'
						   maxLength='100'/>
					<Input id='phonenumber' 
						   type="tel" 
						   placeholder="Телефон*" 
						   className={styles.inputpassword} 
						   onChange={e => setPhoneNumber(e.target.value)} 
						   required
						   minLength='6'
						   maxLength='100'/>
				
		</Group>
		<style jsx>{`
			
		`}</style>
	</>)
}