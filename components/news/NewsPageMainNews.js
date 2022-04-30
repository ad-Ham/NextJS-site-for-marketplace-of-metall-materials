import Link from 'next/link'
import { useState, useEffect } from 'react';
import styles from './NewsPageMainNews.module.scss'

export function NewsPageMainNews() {

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
			<div className={styles.newsmainheader}>
				<h1 className={styles.newsmainheadertext}>Новости</h1>
			</div>
			<Link href="/newspage"><a className={styles.a}><div className={styles.photo}></div></a></Link>
			<div className={styles.importantnewsheader}>
				<Link href="/newspage"><a>
					{news.map(title => <h2>{title}</h2>)}
					<h2 className={styles.importantnewsheadertext}>Новость дня!</h2></a></Link>
				{news.map(date => <p>{date}</p>)}
				<p className={styles.importantnewsheaderdate}>22.02 18:00</p>
			</div>
			{news.map(text => <p>{text}</p>)}
			<p className={styles.importantnewstext}>В декабре 2021 года Россия импортировала 4 тыс. тонн медного лома и отходов, что на 22% больше, чем месяцем ранее, но на 38% меньше по сравнению с декабрем 2020 года. Средняя импортная цена за декабрь увеличилась на 1 $/т до 8,6 $/кг.</p>
			{news.map(tags => <p>{tags}</p>)}
			<p className={styles.importantnewsbottomtext}>Теги: импорт, лом, отходы, металлургия, цена, увеличилась</p>
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}