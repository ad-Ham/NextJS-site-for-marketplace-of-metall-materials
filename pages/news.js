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


const knex = require('knex')({
	client: 'pg',
	connection: {
		host: '213.189.221.184',
		port: 5432,
		user: 'metallsite',
		password: 'EyPu{4L}5zhHT~VtC8x~XniK8',
		database: 'metallsite'
	}
});

export default function News({ news }) {
	return (
		<MainLayout>
			<Head>
				<title>Next Title</title>
				<meta name="keywords" content="next, javascript" />
				<meta name="description" content="this is" />
				<meta charSet="utf-8" />
			</Head>
			<Adbannertop />
			<div className={styles.content, styles.bothsides}>

				<div className={styles.leftside}>
					<Portions />
					<div className={styles.adbannerside}><Link href="https://www.example.com"><Adbannerside /></Link></div>
				</div>
				<div className={styles.rightside}>
					<NewsPageMainNews importantNews={news.slice(0, 1)} />
					<div className={styles.rightside}>
						<NewsPageSortPanel />
					</div>
					<div className={styles.newsrow}>
						<NewsCardPhoto news={news.slice(1, 5)} />
						{/* <NewsCardPhoto /> */}
					</div>
					{/* <div className={styles.newsrow}>
						<NewsCardPhoto />
						<NewsCardPhoto />
					</div>
					<div className={styles.newsrow}>
						<NewsCardPhoto />
						<NewsCardPhoto />
					</div> */}
					<NewsPages />
				</div>
			</div>
			<style jsx>{`
				
			`}</style>
		</MainLayout>
	)
}

export async function getServerSideProps() {
	const news = await knex.select(`id`, `title`, `text`).table('news');
	console.log(news);
	return { props: { news } }
}
