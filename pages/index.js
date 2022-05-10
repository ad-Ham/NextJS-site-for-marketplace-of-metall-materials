import Head from 'next/head'
import { MainLayout } from '../components/mainlayout/MainLayout'
import { Portions } from '../components/Portions'
import { Adbannertop } from '../components/Adbannertop'
import { MainPromos } from '../components/mainpage/MainPromos'
import { MainPageNews } from '../components/mainpage/MainPageNews'
import Link from 'next/link'
import styles from '../styles/index.module.scss'
import { useState, useEffect } from 'react'
const axios = require('axios').default;

export default function Index() {
	const [isMobile, setIsMobile] = useState(false)
	useEffect(() => {
		console.log(document.body.clientWidth)
		if (document.body.clientWidth < 900) {
			setIsMobile(true)
		}
	}, [])



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
				setNews(news)
			})
			.catch(function (error) {
				console.log(error);
			})
	}, [])

	console.log(news)



	const [promos, setPromos] = useState([])

	useEffect(() => {
		axios.get('http://localhost:3001/promosquery', {
			headers: {
				'Accept': 'application/json'
			}
		})
			.then(function (response) {
				console.log(response);
				const promos = response.data.data.promos;
				setPromos(promos)
			})
			.catch(function (error) {
				console.log(error);
			})
	}, [])

	console.log(promos)

	return (
		<MainLayout>
			<Head>
				<title>Next Title</title>
				<meta name="keywords" content="next, javascript" />
				<meta name="description" content="this is" />
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			</Head>
			{/* <Adbannertop /> */}
			<div className={styles.content, styles.bothsides}>

				<div className={styles.leftside}>
					<Portions />
					{/* <Link href="https://www.example.com"><img src="/adbannerside.svg" alt="" /></Link> */}
				</div>
				<div className={styles.rightside}>
					<MainPromos promos={promos.slice(2, 9)} firstImportantPromos={promos.slice(0, 1)} secondImportantPromos={promos.slice(1, 2)} />
					<MainPageNews news={news.slice(1, 100)} importantNews={news.slice(0, 1)} />
				</div>
				<div className={styles.priceindex}>
					Индексы цен на металл
				</div>

			</div>
			<style jsx>{`
				
			`}</style>
		</MainLayout>
	)
}
