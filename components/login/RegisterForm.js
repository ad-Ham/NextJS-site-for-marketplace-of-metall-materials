import Head from 'next/head'
import { useState } from 'react';
import { MainData } from '../reg/MainData'
import { PersonalData } from '../reg/PersonalData'
import { JurData } from '../reg/JurData'
import { RegButton } from '../reg/RegButton'
import styles from './RegisterForm.module.scss'
import React from 'react'
const axios = require('axios').default;

export function RegisterForm() {
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

		axios.post('https://api.metalmarket.pro/regquery', {
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
		})
			.then(response => response.json())
			.then(result => {
				console.log(result);
				e.target.reset()
			})
			.catch(err => {
				if (err) {
					console.log(err);
				}
			})
	}
	return (
		
		<React.Fragment>
			<Head>
				<title>Next Title</title>
				<meta name="keywords" content="next, javascript" />
				<meta name="description" content="this is" />
				<meta charSet="utf-8" />
			</Head>
			{/* <Adbannertop /> */}
				<h1 className={styles.regheader} style={{marginTop: -25}}>Регистрация</h1>
				<p className={styles.regtext}>Регистрация позволяет Вам участовать в обсуждении статей, добавлять объявления, обновлять информацию о Вашей компании, публиковать свои прайс-листы или получать ежедневно новости по металлургии. Наш сайт постоянно развивается и мы будем рады предложить Вам новые сервисы.</p>
				<MainData onChange={e => setMainData(e.target.value)} />
				<PersonalData onChange={e => setPersonalData(e.target.value)} />
				<JurData onChange={e => setJurData(e.target.value)} />
				<RegButton />
		</React.Fragment>
		
	)
}