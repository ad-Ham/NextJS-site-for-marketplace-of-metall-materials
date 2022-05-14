import Head from 'next/head'
import { useState, useEffect } from 'react';
import { MainLayout } from '../../components/mainlayout/MainLayout'
import { Portions } from '../../components/Portions'
import { NewsPageMainNews } from '../../components/news/NewsPageMainNews'
import { NewsCardPhoto } from '../../components/news/NewsCardPhoto'
import { NewsPageSortPanel } from '../../components/news/NewsPageSortPanel'
import { NewsPages } from '../../components/news/NewsPages'
import { Adbannertop } from '../../components/Adbannertop'
import Link from 'next/link'
import styles from '../../styles/news/news.module.scss'
import { MainPageNewsNoPhoto } from '../../components/mainpage/MainPageNewsNoPhoto';
const axios = require('axios').default;

export async function getServerSideProps(context) {
	const news = await axios.get('http://localhost:3005/newsquery', {
		headers: {
			'Accept': 'application/json'
		}
	})
	return {
		props: {
			news: news.data.news,
		},
	}
}

export default function News({ news }) {

	const [otherNews, setOtherNews] = useState([])

	return (
		<MainLayout>
			<Head>
				<title>Новости - MetalMarket.pro</title>
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
