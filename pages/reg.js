import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react';
import { MainLayout } from '../components/mainlayout/MainLayout'
import { MainData } from '../components/reg/MainData'
import { PersonalData } from '../components/reg/PersonalData'
import { JurData } from '../components/reg/JurData'
import { RegButton } from '../components/reg/RegButton'
import { Adbannertop } from '../components/Adbannertop'
import styles from '../styles/reg.module.scss'
const axios = require('axios').default;

export default function Index() {
	const [regStatus, setRegStatus] = useState('')

	const [mainData, setMainData] = useState('');
	const [personalData, setPersonalData] = useState('');
	const [jurData, setJurData] = useState('');


	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');

	// const [surname, setSurname] = useState('');
	// const [firstname, setFirstname] = useState('');
	// const [lastname, setLastname] = useState('');
	// const [phonenumber, setPhoneNumber] = useState('');

	// const [orgname, setOrgName] = useState('');
	// const [juradress, setJurAdress] = useState('');
	// const [inn, setInn] = useState('');
	// const [ogrn, setOgrn] = useState('');

	const Submit = e => {
		e.preventDefault();
		const data = {
			mainData: [
				email.value,
				password.value,
			],

			personalData: [
				surname.value,
				firstname.value,
				lastname.value,
				phonenumber.value
			],

			jurData: [
				orgname.value,
				juradress.value,
				inn.value,
				ogrn.value
			],
		};

		console.log(JSON.stringify({
			email: data.mainData[0],
			password: data.mainData[1],
			surname: data.personalData[0],
			firstname: data.personalData[1],
			lastname: data.personalData[2],
			phonenumber: data.personalData[3],
			orgname: data.jurData[0],
			juradress: data.jurData[1],
			inn: data.jurData[2],
			ogrn: data.jurData[3],
		}));
		axios.post('http://localhost:3001/regquery', {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'User-Agent': '*'
			},
			body: JSON.stringify({
				email: data.mainData[0],
				password: data.mainData[1],
				surname: data.personalData[0],
				firstname: data.personalData[1],
				lastname: data.personalData[2],
				phonenumber: data.personalData[3],
				orgname: data.jurData[0],
				juradress: data.jurData[1],
				inn: data.jurData[2],
				ogrn: data.jurData[3],
			}) // данные 
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
				<form onSubmit={Submit} className={styles.form}>
					<MainData onChange={e => setMainData(e.target.value)} />
					<PersonalData onChange={e => setPersonalData(e.target.value)} />
					<JurData onChange={e => setJurData(e.target.value)} />
					{/* <button className='btn' type="submit"><RegButton /></button> */}
					<RegButton />
					{/* <Link href="/thankyou"><RegButton /></Link> */}
				</form>
			</div>
			<style jsx>{`
				
			`}</style>
		</MainLayout>
	)
}