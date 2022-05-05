import Head from 'next/head'
import { MainLayout } from '../components/mainlayout/MainLayout'
import { Portions } from '../components/Portions'
import { Adbannertop } from '../components/Adbannertop'
import { MainPromos } from '../components/mainpage/MainPromos'
import { MainPageNews } from '../components/mainpage/MainPageNews'
import Link from 'next/link'
import styles from '../styles/index.module.scss'
import { useState, useEffect } from 'react'

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

export default function Index({ news, promos }) {
	const [isMobile, setIsMobile] = useState(false)
	useEffect(() => {
		console.log(document.body.clientWidth)
		if (document.body.clientWidth < 900) {
			setIsMobile(true)
		}
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
			<Adbannertop />
			<div className={styles.content, styles.bothsides}>

				<div className={styles.leftside}>
					<Portions />
					<Link href="https://www.example.com"><img src="/adbannerside.svg" alt="" /></Link>
				</div>
				<div className={styles.rightside}>
					<MainPromos firstImprotantPromos={promos.slice(0, 1)} secondImportantPromos={promos.slice(1, 2)} />
					<MainPageNews news={news.slice(1, 5)} importantNews={news.slice(0, 1)} />
				</div>

			</div>
			<style jsx>{`
				
			`}</style>
		</MainLayout>
	)
}

/*Index.getInitialProps = async() => {
	const news = knex.select('*').from('news');
	console.log(news);
	return {
		news
	}
}*/

export async function getServerSideProps() {
	const news = await knex.select(`id`, `title`, `text`).table('news');
	console.log(news);
	const promos = await knex.select(`id`, `title`, `country`, 'region', 'email', 'phoneNumber', 'organizationName', 'description').table('promos');
	console.log(promos);
	return { props: { news, promos } }
}


// export async function getServerSideProps() {
// 	const news = await knex.select(`id`, `title`, `text`).table('news');
// 	const promos = await knex.select(`id`, `title`, `text`).table('promos');
// 	console.log(news, promos);
// 	return { props: { news, promos } }
// }
