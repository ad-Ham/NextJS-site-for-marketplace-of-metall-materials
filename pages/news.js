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
import { MainPageNewsNoPhoto } from '../components/mainpage/MainPageNewsNoPhoto';
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
				const news = response.data.news;
				setNews(news)
			})
			.catch(function (error) {
				console.log(error);
			})
	}, [])

	console.log(news)
	// console.log(news.id)


	const [otherNews, setOtherNews] = useState([])



	useEffect(() => {
		axios.get('http://localhost:3001/newsquery', {
			headers: {
				'Accept': 'application/json'
			}
		})
			.then(function (response) {
				console.log(response);
				const otherNews = response.data.news.slice(1, 100);
				setOtherNews(otherNews)
			})
			.catch(function (error) {
				console.log(error);
			})
	}, [])

	console.log(otherNews)

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
					<NewsPageMainNews importantNews={news.slice(0, 1)} />

					<NewsPageSortPanel />

					<div className={styles.newsrow}>
						{otherNews.map(otherNews => (
							<NewsCardPhoto key={otherNews} id={otherNews.id} title={otherNews.title} text={otherNews.text} date={otherNews.date} tags={otherNews.tags} />
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
