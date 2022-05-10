import Head from 'next/head'
import { useState, useEffect } from 'react';
import { MainLayout } from '../components/mainlayout/MainLayout'
import { Portions } from '../components/Portions'
import { MainPromos } from '../components/mainpage/MainPromos'
import { MainPageNews } from '../components/mainpage/MainPageNews'
import { NewsBlock } from '../components/newspage/NewsBlock'
import { MoreNewsCard } from '../components/newspage/MoreNewsCard'
import { Adbannertop } from '../components/Adbannertop'
import Adbannerside from '../public/adbannerside.svg'
import Link from 'next/link'
import styles from '../styles/newspage.module.scss'
const axios = require('axios').default;

export default function NewsPage({ id }) {

	const [singleNew, setSingleNew] = useState([])



	useEffect(() => {
		axios.get('http://localhost:3001/singlenews', {
			id: id
		})
			.then(function (response) {
				console.log(response);
				const singleNew = response;
				setSingleNew(singleNew)
			})
			.catch(function (error) {
				console.log(error);
			})
	}, [])

	console.log(id)

	return (
		<MainLayout>
			<Head>
				<title>Next Title</title>
				<meta name="keywords" content="next, javascript" />
				<meta name="description" content="this is" />
				<meta charSet="utf-8" />
			</Head>
			{/* <Adbannertop/> */}
			<div className={styles.content, styles.bothsides}>

				<div className={styles.leftside}>
					<Portions />
					{/* <div className={styles.adbannerside}><Link href="https://www.example.com"><Adbannerside /></Link></div> */}
				</div>
				<div className={styles.rightside}>
					<NewsBlock />
					<div className={styles.moreniewsdiv}>
						<p className={styles.morenews}>Еще новости:</p>
						<div className={styles.morenewsrow}>
							<MoreNewsCard />
							<MoreNewsCard />
							<MoreNewsCard />
						</div>
					</div>
				</div>

			</div>
			<style jsx>{`
				
			`}</style>
		</MainLayout>
	)
}