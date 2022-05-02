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
		<div className={styles.maindiv}>
			{news.map(title => <h2>{news[0].title}</h2>)}
			<h2 className={styles.newsheader}></h2>
			<div className={styles.photo}></div>
			{news.map(text => <p>{news[0].text}</p>)}
			<p className={styles.newstext}></p>
			{news.map(tags => <p>{news[0].tags}</p>)}
			<p className={styles.newstags}></p>
			<RepostLayout />
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}