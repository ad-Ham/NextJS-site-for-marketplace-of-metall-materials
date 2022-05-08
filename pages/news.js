import Head from 'next/head'
import { useState, useEffect } from 'react';
import { MainLayout } from '../components/mainlayout/MainLayout'
import { Portions } from '../components/Portions'
import { NewsPageMainNews } from '../components/news/NewsPageMainNews'
import { NewsCardPhoto } from '../components/news/NewsCardPhoto'
import { NewsPageSortPanel } from '../components/news/NewsPageSortPanel'
import { NewsPages } from '../components/news/NewsPages'
import { Adbannertop } from '../components/Adbannertop'
import Adbannerside from '../public/adbannerside.svg'
import Link from 'next/link'
import styles from '../styles/news.module.scss'
const axios = require('axios').default;

export default function News() {

	const [news, setNews] = useState([])


	useEffect(() => {
		axios.get('http://localhost:3001/newsquery', {
			headers: {
				'Accept': 'application/json'
			}
		})
			.then(function (response) {
				console.log(response);
				const news = response.data.data.news;
				setNews([news])
			})
			.catch(function (error) {
				console.log(error);
			})
	}, [])

	// console.log(news)

	return (
		<MainLayout>
			<Head>
				<title>Next Title</title>
				<meta name="keywords" content="next, javascript" />
				<meta name="description" content="this is" />
				<meta charSet="utf-8" />
			</Head>
			{/* <Adbannertop /> */}
			<div className={styles.content, styles.bothsides}>

				<div className={styles.leftside}>
					<Portions />
					{/* <div className={styles.adbannerside}><Link href="https://www.example.com"><Adbannerside /></Link></div> */}
				</div>
				<div className={styles.rightside}>
					{news.map(news => (
						<NewsPageMainNews key={news} id={news[0].id} title={news[0].title} text={news[0].text} />
					))}
					<NewsPageSortPanel />

					<div className={styles.newsrow}>
						{news.map(news => (
							<NewsCardPhoto key={news[1].id} title={news[1].title} text={news[1].text} />
						))}
						{news.map(news => (
							<NewsCardPhoto key={news[2].id} title={news[2].title} text={news[2].text} />
						))}
						{news.map(news => (
							<NewsCardPhoto key={news[3].id} title={news[3].title} text={news[3].text} />
						))}
						{news.map(news => (
							<NewsCardPhoto key={news[4].id} title={news[4].title} text={news[4].text} />
						))}
					</div>
					<NewsPages />
				</div>
			</div>
			<style jsx>{`
				
			`}</style>
		</MainLayout>
	)
}
