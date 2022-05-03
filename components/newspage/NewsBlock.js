import { RepostLayout } from '../newspage/RepostLayout'
import { useState, useEffect } from 'react';
import styles from './NewsBlock.module.scss'

export function NewsBlock() {

	const [news, setNews] = useState([])

	useEffect(() => {
		fetch('http://localhost:3000/newsquery', {
			method: 'GET',
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

		{news.map(news => <div className={styles.maindiv} key={news}>
			<h2 className={styles.newsheader}>
				{news.title}
			</h2>

			<div className={styles.photo}></div>

			<p className={styles.newstext}>
				{news.text}
			</p>

			<p className={styles.newstags}>
				{news.tags}
			</p>
		</div>
		)}
		<RepostLayout />
		<style jsx>{`
			
		`}</style>
	</>)
}