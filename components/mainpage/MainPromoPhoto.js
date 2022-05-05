import Link from 'next/link'
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './MainPromoPhoto.module.scss'
const axios = require('axios').default;

export function MainPromoPhoto() {
	// Взятие новости из бд и отображение на странице
	const [news, setNews] = useState([])

	useEffect(() => {
		axios.get('http://localhost:3001/regquery', {
			headers: {
				'Accept': 'application/json'
			}
		})
			.then(response => response.json())
			.then(result => {
				console.log(result);
				setNews(result.data.news)
			})
			.catch(err => {
				if (err) {
					console.log(err);
				}
			})
	}, [])

	// Добавление новости в БД
	const [newsStatus, setNewsStatus] = useState('')

	const add = (e) => {
		e.preventDefault();
		const newpicture = e.target.header.value;
		const newheader = e.target.text.value;
		const newtext = e.target.type.value;
		const newsection = e.target.type.value;
		const newdate = e.target.type.value;

		axios.post('http://localhost:3001/regquery', {
			headers: {
				'Accept': 'application/json'
			},
			body: JSON.stringify(data) // данные 
		})
			.then(response => response.json())
			.then(result => {
				console.log(result);
				setNewsStatus('Успешно добавлено')
				e.targer.reset()
			})
			.catch(err => {
				if (err) {
					console.log(err);
				}
			})
	}

	return (<>
		<div className={styles.mainpromophoto}>

			{news.map(newpicture_ => <div key={newpicture_} id='newpicture'>{newpicture_}</div>)}
			<Link href="/promopage"><a><div id='newpicture' className={styles.photo}></div></a></Link>

			{news.map(newheader_ => <h3 key={newheader_} id='newheader'>{newheader_}</h3>)}
			<Link href="/promopage"><a><h3 id='newheader' className={styles.promophotoheader}><b className={styles.promophotoheaderb}>Продажа</b> Деталь ДС-21, сталь, железо, чугун, иные материалы</h3></a></Link>

			{news.map(newtext_ => <p key={newtext_} id='newtext'>{newtext_}</p>)}
			<p id='newstext' className={styles.promophototext} >
				Деталь ДС-21, сталь, чугун, железо, трубы балки провода, медная катушка, в хорошем состоянии, в плачевном состоянии, требуется ремонт, материалы
			</p>

			<div className={styles.promophotobottomtext}>

				{news.map(newsection_ => <p key={newsection_} id='newsection'>{newtext_}</p>)}
				<p id='newsection'>Раздел</p>

				{news.map(newdate_ => <p key={newdate_} id='newdate'>{newtext_}</p>)}
				<p id='newdate'>22.02.2022</p>
			</div>
		</div>
		<style>{`
			
		`}</style>
	</>)
}