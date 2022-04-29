import Head from 'next/head'
import { useState } from 'react';
import { MainLayout } from '../components/MainLayout/MainLayout'
import { MainData } from '../components/reg/MainData'
import { PersonalData } from '../components/reg/PersonalData'
import { JurData } from '../components/reg/JurData'
import { RegButton } from '../components/reg/RegButton'
import { Adbannertop } from '../components/Adbannertop'
import styles from '../styles/reg.module.scss'

export default function Index() {
	const [regStatus, setRegStatus] = useState('')

	// const [mainData, setMainData] = useState('');
	// const [personalData, setPersonalData] = useState('');
	// const [jurData, setJurData] = useState('');


	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [surname, setSurname] = useState('');
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [phonenumber, setPhoneNumber] = useState('');

	const [orgname, setOrgName] = useState('');
	const [juradress, setJurAdress] = useState('');
	const [inn, setInn] = useState('');
	const [ogrn, setOgrn] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		const data = {
			email,
			password,
			surname,
			firstname,
			lastname,
			phonenumber,
			orgname,
			juradress,
			inn,
			ogrn
		}

		console.log(data);

		fetch('http://localhost:3000/regquery', {
			method: 'POST',
			headers: {
				'Accept': 'application/json'
			},
			body: JSON.stringify(data) // данные 
		})
			.then(response => response.json())
			.then(result => {
				console.log(result);
				setRegStatus('Вы успешно зарегестрированы')
				e.targer.reset()
			})
			.catch(err => {
				if (err) {
					console.log(err);
				}
			})
	}
	return (
		<MainLayout>
			<Head>
				<title>Next Title</title>
				<meta name="keywords" content="next, javascript" />
				<meta name="description" content="this is" />
				<meta charSet="utf-8" />
			</Head>
			<Adbannertop />
			<div className={styles.content, styles.maindiv}>
				<div className={styles.regheaderblock}>
					<h1 className={styles.regheader}>Регистрация</h1>
					<p className={styles.regtext}>Впервые на нашем сайте? Заполните форму регистрации.</p>
				</div>
				<form onSubmit={handleSubmit} className={styles.form}>
					<MainData onChange={e => setMainData(e.target.value)} />
					<PersonalData onChange={e => setPersonalData(e.target.value)} />
					<JurData onChange={e => setJurData(e.target.value)} />
					<button className='btn' type="submit"><RegButton /></button>
				</form>
			</div>
			<style jsx>{`
				
			`}</style>
		</MainLayout>
	)
}