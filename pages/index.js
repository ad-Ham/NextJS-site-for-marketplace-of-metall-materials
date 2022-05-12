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

	const myURL = new URL('https://example.org');
	const [news, setNews] = useState([])
	const [dollarPrice, setDollarPrice] = useState('')
	const [euroPrice, setEuroPrice] = useState('')

	useEffect(() => {
		axios.get('http://localhost:3001/newsquery', {
			headers: {
				'Accept': 'application/json'
			}
		})
			.then(function (response) {
				const news = response.data.news;
				setNews(news)
			})
			.catch(function (error) {
				console.log(error);
			})
	}, [])

	useEffect(() => {
		axios.get('http://localhost:3001/getExchangeRates')
			.then(function (response) {
				const dollarPrice = response.data.dollar_price
				const euroPrice = response.data.euro_price
				setDollarPrice(dollarPrice)
				setEuroPrice(euroPrice)
			})
			.catch(function (error) {
				console.log(error);
			})
	}, [])

	const [metalls, setMetalls] = useState([])

	useEffect(() => {
		axios.get('http://localhost:3001/getMetalsPrice')
			.then(function (response) {
				setMetalls(response.data.metals)
			})
			.catch(function (error) {
				console.log(error);
			})
	}, [])

	const [promos, setPromos] = useState([])

	useEffect(() => {
		axios.get('http://localhost:3001/promosquery', {
			headers: {
				'Accept': 'application/json'
			}
		})
			.then(function (response) {
				console.log(response);
				const promos = response.data.promos;
				setPromos(promos)
			})
			.catch(function (error) {
				console.log(error);
			})
	}, [])


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
					<h2>Индексы цен на металл</h2>
					<p>{ dollarPrice }</p>
					<p>{ euroPrice }</p>
					{metalls.map(metalls => (
						<p key={metalls.id}>{metalls.name}: {metalls.price} {metalls.price_change}</p>
					))}
				</div>

			</div>
			<style jsx>{`
				
			`}</style>
		</MainLayout>
	)
}
