import { useState } from 'react';
import styles from './JurData.module.scss'

export const JurData = () => {
	const [orgName, setOrgName] = useState('');
	const [jurAdress, setJurAdress] = useState('');
	const [inn, setInn] = useState('');
	const [ogrn, setOgrn] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		const data = {
			orgName,
			jurAdress,
			inn,
			ogrn
		};
		console.log(data);
	};
	return (<>
		<div className={styles.maindiv}>
			<h2 className={styles.h2}>Юридические данные</h2>
				<input id='orgname' 
				       type="text" 
				       placeholder="Название организации" 
				       className={styles.input} 
				       onChange={e => setOrgName(e.target.value)} 
				       required
				       minLength='3'
				       maxLength='100'/>
				<input id='juradress' 
				       type="text" 
				       placeholder="Юридический адрес" 
				       className={styles.input} 
				       onChange={e => setJurAdress(e.target.value)} 
				       required
				       minLength='3'
				       maxLength='100'/>
				<input id='inn' 
					   type="number" 
					   placeholder="ИНН" 
					   className={styles.input} 
					   onChange={e => setInn(e.target.value)} 
					   required
				       minLength='3'
				       maxLength='100'/>
				<input id='ogrn' type="number" 
					   placeholder="ОГРН" 
					   className={styles.input} 
					   onChange={e => setOgrn(e.target.value)} 
					   required
				       minLength='3'
				       maxLength='100'/>
			<label className={styles.btnpanel}><input type="radio" className={styles.radiobtn} required/><p className={styles.p}>Я принимаю условия передачи информации*</p></label>
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}