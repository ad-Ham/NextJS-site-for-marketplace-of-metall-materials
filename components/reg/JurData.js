import { useState } from 'react';
import styles from './JurData.module.scss'
import { Input,Text,Group } from '@mantine/core';

export const JurData = () => {
	const [orgName, setOrgName] = useState('');
	const [jurAdress, setJurAdress] = useState('');
	const [position, setPosition] = useState('');
	const [inn, setInn] = useState('');
	const [ogrn, setOgrn] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		const data = {
			orgName,
			jurAdress,
			position,
			inn,
			ogrn
		};
		console.log(data);
	};
	return (<>
		<Group className={styles.maindiv}>
			<Text className={styles.h2}>Юридические данные</Text>
				<Input id='orgname' 
				       type="text" 
				       placeholder="Название организации*" 
				       className={styles.input} 
				       onChange={e => setOrgName(e.target.value)} 
				       required
				       minLength='3'
				       maxLength='100'/>
				<Input id='juradress' 
				       type="text" 
				       placeholder="Юридический адрес*" 
				       className={styles.input} 
				       onChange={e => setJurAdress(e.target.value)} 
				       required
				       minLength='3'
				       maxLength='100'/>
				<Input id='position' 
				       type="text" 
				       placeholder="Должность*" 
				       className={styles.input} 
				       onChange={e => setPosition(e.target.value)} 
				       required
				       minLength='3'
				       maxLength='100'/>
				<Input id='inn' 
					   type="number" 
					   placeholder="ИНН*" 
					   className={styles.input} 
					   onChange={e => setInn(e.target.value)} 
					   required
				       minLength="10"
				       maxLength="12"/>
				<Input id='ogrn' type="number" 
					   placeholder="ОГРН*" 
					   className={styles.input} 
					   onChange={e => setOgrn(e.target.value)} 
					   required
				       minLength="13"
				       maxLength="13"/>
			<label className={styles.btnpanel}><input type="radio" className={styles.radiobtn} required/><p className={styles.p}>Я принимаю условия передачи данных*</p></label>
		</Group>
		<style jsx>{`
			
		`}</style>
	</>)
}