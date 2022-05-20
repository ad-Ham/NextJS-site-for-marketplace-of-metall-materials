import { RepostLayout } from './RepostLayout'
import { useState, useEffect } from 'react';
import styles from './NewsBlock.module.scss'
const axios = require('axios').default;

export const NewsBlock = () => {

	const [news, setNews] = useState([])

	useEffect(() => {
		axios.get('https://api.metalmarket.pro/newsquery', {
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

	return (<>
		<div className={styles.maindiv} >
			<h2 className={styles.newsheader}>
				Название
			</h2>

			<div className={styles.photo}></div>

			<p className={styles.newstext}>
				Описание
			</p>

			<p className={styles.newstags}>
				Теги
			</p>
		</div>
		{/* <RepostLayout /> */}
		<style jsx>{`
			
		`}</style>
	</>)
}