import Head from 'next/head'
import { Button, Table } from '@mantine/core';
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
		axios.get('http://localhost:3005/newsquery', {
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
		axios.get('http://localhost:3005/getExchangeRates')
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
		axios.get('http://localhost:3005/getMetalsPrice')
			.then(function (response) {
				setMetalls(response.data.metals)
			})
			.catch(function (error) {
				console.log(error);
			})
	}, [])

	const [promos, setPromos] = useState([])

	useEffect(() => {
		axios.get('http://localhost:3005/promosquery', {
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
			<div className={(styles.content, styles.bothsides)}>

				<div className={styles.leftside}>
					<Portions />
					{/* <Link href="https://www.example.com"><img src="/adbannerside.svg" alt="" /></Link> */}
				</div>
				<div className={styles.rightside}>
					<MainPromos promos={promos.slice(2, 9)} firstImportantPromos={promos.slice(0, 1)} secondImportantPromos={promos.slice(1, 2)} />
					<MainPageNews news={news.slice(1, 100)} importantNews={news.slice(0, 1)} />
				</div>
				<div className={styles.priceindex}>
					<div className={styles.priceindex2}>
						<h2 className={styles.h2name}>Курс ЦБ</h2>
						<div className={styles.priceButton}>
							<Button className={styles.priceButton2} size="md" color="orange" variant="outline" compact>1$ = { dollarPrice }</Button>
							<Button  size="md" color="orange" variant="outline" compact>1€ = { euroPrice }</Button>
						</div>
					</div>
					
						<h2 className={styles.h2name2}>Индекс цен</h2>
						<Table fontSize="15px">
							<thead>
								<tr>
									<th style={{fontWeight: 400, borderTop: ' 2px solid grey', borderBottom: ' 2px solid grey'}}>Металлы</th>
									<th style={{fontWeight: 400, borderTop: ' 2px solid grey', borderBottom: ' 2px solid grey'}}>Цена</th>
									<th style={{fontWeight: 400, borderTop: ' 2px solid grey', borderBottom: ' 2px solid grey'}}>Изм</th>
								</tr>
							</thead>
							<tbody>
									{metalls.map(metalls => (
										<tr className={styles.metalls}  key={metalls.id}>
											<td style={{fontWeight: 400}}>{metalls.name}:</td> 
											<td >{metalls.price}</td> 
											<td style={{color: (parseFloat(metalls.price_change) < 0 ? '#ff0000' : '#008000')}}>
												{metalls.price_change.toString().replace('-', '')}
											</td> 
										{/* {metalls.price_change.toString().replace('-', '')} */}
										</tr>
									))}
							</tbody>
							
						</Table>
					
				</div>

			</div>
			<style jsx>{`
				
			`}</style>
		</MainLayout>
	)
}
