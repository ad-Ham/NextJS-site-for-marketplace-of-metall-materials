import Link from 'next/link'
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './MainPromoPhoto.module.scss'
const axios = require('axios').default;

export function MainPromoPhoto({ id, text, title, date, category }) {
	// Взятие новости из бд и отображение на странице
	// const [news, setNews] = useState([])

	// useEffect(() => {
	// 	axios.get('http://localhost:3001/regquery', {
	// 		headers: {
	// 			'Accept': 'application/json'
	// 		}
	// 	})
	// 		.then(response => response.json())
	// 		.then(result => {
	// 			console.log(result);
	// 			setNews(result.data.news)
	// 		})
	// 		.catch(err => {
	// 			if (err) {
	// 				console.log(err);
	// 			}
	// 		})
	// }, [])

	// // Добавление новости в БД
	// const [newsStatus, setNewsStatus] = useState('')

	// const add = (e) => {
	// 	e.preventDefault();
	// 	const newpicture = e.target.header.value;
	// 	const newheader = e.target.text.value;
	// 	const newtext = e.target.type.value;
	// 	const newsection = e.target.type.value;
	// 	const newdate = e.target.type.value;

	// 	axios.post('http://localhost:3001/regquery', {
	// 		headers: {
	// 			'Accept': 'application/json'
	// 		},
	// 		body: JSON.stringify(data) // данные 
	// 	})
	// 		.then(response => response.json())
	// 		.then(result => {
	// 			console.log(result);
	// 			setNewsStatus('Успешно добавлено')
	// 			e.targer.reset()
	// 		})
	// 		.catch(err => {
	// 			if (err) {
	// 				console.log(err);
	// 			}
	// 		})
	// }

	return (<>
		<div className={styles.mainpromophoto}>

			<Link href="/promopage"><a><div id='newpicture' className={styles.photo}></div></a></Link>

			<Link href="/promopage"><a><h3 id='newheader' className={styles.promophotoheader}><b className={styles.promophotoheaderb}>{category}<br /><br /></b>{title}</h3></a></Link>

			<p id='newstext' className={styles.promophototext} >
				{text}
			</p>

			<div className={styles.promophotobottomtext}>

				<p id='newsection'>Раздел</p>

				<p id='newdate'>{date}</p>
			</div>
		</div>
		<style>{`
			
		`}</style>
	</>)
}




