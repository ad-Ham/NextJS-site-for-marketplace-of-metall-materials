import Head from 'next/head'
import { Table, Grid, Badge, Card } from '@mantine/core';
import { MainPromos } from '../components/mainpage/MainPromos'
import { MainPageNews } from '../components/mainpage/MainPageNews'
import styles from '../styles/index.module.scss'
import { useState, useEffect } from 'react'
import { CaretUp, CaretDown } from 'tabler-icons-react';
const axios = require('axios').default;
const imageToBase64 = require('image-to-base64');


export async function getServerSideProps(context) {
	const res = await axios.get('http://localhost:3001/newsquery', {
		headers: {
			'Accept': 'application/json'
		}
	})
	//const images = new Map();
	let news = res.data.news

	let newsHot = res.data.newsHot
	newsHot['image'] = await imageToBase64(newsHot.photopath)
	let i;
	for (i=0;i<news.length;++i) {
		news[i]['image'] = await imageToBase64(news[i].photopath)
	 }
	
	
	const promos = await axios.get('http://localhost:3001/promosquery', {
		headers: {
			'Accept': 'application/json'
		}
	})
	return {
		props: {
			news: news,
			promos: promos.data.promos,
			newsHot: newsHot
		},
	}
}

export default function Index({ news, promos, newsHot }) {
	const [isMobile, setIsMobile] = useState(false)

	const [dollarPrice, setDollarPrice] = useState('')
	const [euroPrice, setEuroPrice] = useState('')

	const [metalls, setMetalls] = useState([])

	useEffect(() => {
		if (document.body.clientWidth < 900) {
			setIsMobile(true)
		}

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

		axios.get('http://localhost:3001/getMetalsPrice')
			.then(function (response) {
				setMetalls(response.data.metals)
			})
			.catch(function (error) {
				console.log(error);
			})
	}, [])

	return (
		<>
			<Head>
				<title>MetalMarket</title>
				<meta name="keywords" content="next, javascript" />
				<meta name="description" content="MetalMarket.pro" />
			</Head>
			<MainPromos promos={promos.slice(0, 9)}/>
			<MainPageNews news={news.slice(0, 100)} newsHot={newsHot} />
		</>
	)
}
