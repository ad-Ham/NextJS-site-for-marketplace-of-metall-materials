import Head from 'next/head'
import { Table, Grid, Badge, Card } from '@mantine/core';
import { MainPromos } from '../components/mainpage/MainPromos'
import { MainPageNews } from '../components/mainpage/MainPageNews'
import styles from '../styles/index.module.scss'
import { useState, useEffect } from 'react'
import { CaretUp, CaretDown } from 'tabler-icons-react';
const axios = require('axios').default;
const imageToBase64 = require('image-to-base64')


export async function getServerSideProps(context) {
	const mobile = (context.req.headers['user-agent']
	.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i) ? true : false)

	const res = await axios.get('https://api.metalmarket.pro/newsquery', {
		headers: {
			'Accept': 'application/json'
		}
	})
	let news = res.data.news

	let newsHot = res.data.newsHot

	if (!newsHot) {
		newsHot = news[0]
		news = news.slice(1)
	}
	
	let i;

	if (!mobile) {
		newsHot['image'] = await imageToBase64(newsHot.photopath)

		for (i=0;i<news.length;++i) {
			news[i]['image'] = await imageToBase64(news[i].photopath)
		}
	}
	
	const promos = await axios.get('https://api.metalmarket.pro/promosquery', {
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

export default function Index({ news, promos, newsHot, user }) {
	return (
		<>
			<Head>
				<title>MetalMarket</title>
				<meta name="keywords" content="next, javascript" />
				<meta name="description" content="MetalMarket.pro" />
			</Head>
			<MainPromos promos={promos.slice(2, 9)} firstImportantPromos={promos.slice(0, 1)} secondImportantPromos={promos.slice(1, 2)} />
			<MainPageNews news={news.slice(0, 7)} newsHot={newsHot} user={user}/>
		</>
	)
}
