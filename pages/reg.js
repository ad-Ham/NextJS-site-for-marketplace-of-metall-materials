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

	const [mainData, setMainData] = useState('');
	const [personalData, setPersonalData] = useState('');
	const [jurData, setJurData] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		const data = {
			mainData: [
				email.value,
				password.value,
				repeatpassword.value
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
		console.log(data);

		fetch('http://localhost:3000/regquery', {
			method: 'POST',
			headers: {
				'Accept': 'application/json'
			}
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