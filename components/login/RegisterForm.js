import Head from 'next/head'
import { useState } from 'react';
import { MainData } from '../reg/MainData'
import { PersonalData } from '../reg/PersonalData'
import { JurData } from '../reg/JurData'
import { RegButton } from '../reg/RegButton'
import styles from './RegisterForm.module.scss'
import React from 'react'
const axios = require('axios').default;
import { showNotification } from '@mantine/notifications';
import { useModals } from '@mantine/modals';

export function RegisterForm() {
	const modals = useModals();
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
				passwordRepeat.value
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
				ogrn.value,
				position.value
			],
		};

		if (data.mainData[1] !== data.mainData[2]) {
			showNotification({
				title: 'Неверные данные',
	            message: 'Пароли не совпадают',
	            autoClose: false,
	            
	            color: "red"
	        })
			return;
		}

		if (data.jurData[2].length !== 10) {
			showNotification({
				title: 'Неверные данные',
	            message: 'Неверный ИНН',
	            autoClose: false,

	            color: "red"
	        })
			return;
		} else if (data.jurData[3].length !== 13) {
			showNotification({
				title: 'Неверные данные',
	            message: 'Неверный ОГРН',
	            autoClose: false,
	            
	            color: "red"
	        })
			return;
		}

		axios.post('https://api.metalmarket.pro/validateEmail', {email: data.mainData[0]})
		.then(res => {
			if (res.data.id.length !== 0) {
				showNotification({
					title: 'Аккаунт с такой почтой уже существует',
		            message: 'Введите другую электронную почту',
		            autoClose: false,
		            
		            color: "red"
		        })
			} else {
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
					post: data.jurData[4]
				})
				.then(response => {
					modals.closeAll()
					showNotification({
						title: 'Заявка на регистрацию отправлена',
			            message: 'Дождитесь проверки данных. Обычно подтверждение аккаунта занимает от 5 минут до 24 часов',
			            autoClose: false,
			            
			            color: "green"
			        })
				})
				.catch(err => {
					if (err) {
						console.log(err);
					}
				})}})}

		
	
	return (
		
		<React.Fragment>
			<Head>
				<title>Next Title</title>
				<meta name="keywords" content="next, javascript" />
				<meta name="description" content="this is" />
				<meta charSet="utf-8" />
			</Head>

			<div className={styles.content}>
				<div className={styles.regheaderblock}>
					<h1 className={styles.regheader}>Регистрация</h1>
					<p className={styles.regtext}>Регистрация позволяет Вам участовать в обсуждении статей, добавлять объявления, обновлять информацию о Вашей компании, публиковать свои прайс-листы или получать ежедневно новости по металлургии. Наш сайт постоянно развивается и мы будем рады предложить Вам новые сервисы.</p>
				</div>
				<form onSubmit={Submit} className={styles.form}>
					<MainData onChange={e => setMainData(e.target.value)} />
					<PersonalData onChange={e => setPersonalData(e.target.value)} />
					<JurData onChange={e => setJurData(e.target.value)} />
					<RegButton />
				</form>
			</div>
			<style jsx>{`
				
			`}</style>

		</React.Fragment>
		
	)
}