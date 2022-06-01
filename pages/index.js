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
	const res = await axios.get('https://api.metalmarket.pro/newsquery', {
		headers: {
			'Accept': 'application/json'
		}
	})
	//const images = new Map();
	let news = res.data.news

	let newsHot = res.data.newsHot
	newsHot['image'] = await imageToBase64(newsHot.photopath)
	
	
	const promos = await axios.get('https://api.metalmarket.pro/promosquery', {
		headers: {
			'Accept': 'application/json'
		}
	})
	return {
		props: {
			news: news,
			promos: promos.data.promos
		},
	}
}

export default function Index({ news, promos }) {
	const [isMobile, setIsMobile] = useState(false)

	const [dollarPrice, setDollarPrice] = useState('')
	const [euroPrice, setEuroPrice] = useState('')

	const [metalls, setMetalls] = useState([])

	useEffect(() => {
		if (document.body.clientWidth < 900) {
			setIsMobile(true)
		}

		axios.get('https://api.metalmarket.pro/getExchangeRates')
			.then(function (response) {
				const dollarPrice = response.data.dollar_price
				const euroPrice = response.data.euro_price
				setDollarPrice(dollarPrice)
				setEuroPrice(euroPrice)
			})
			.catch(function (error) {
				console.log(error);
			})

		axios.get('https://api.metalmarket.pro/getMetalsPrice')
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
			<MainPromos promos={promos.slice(2, 9)} firstImportantPromos={promos.slice(0, 1)} secondImportantPromos={promos.slice(1, 2)} />
			<MainPageNews news={news.slice(0, 100)} importantNews={news.slice(0, 1)} />
		</>
	)
}
