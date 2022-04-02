import Head from 'next/head'
import { MainLayout } from '../components/MainLayout/MainLayout'
import { Portions } from '../components/Portions'
import { NewsPageMainNews } from '../components/News/NewsPageMainNews'
import { NewsCardPhoto } from '../components/News/NewsCardPhoto'
import { NewsPageSortPanel } from '../components/News/NewsPageSortPanel'
import { NewsPages } from '../components/News/NewsPages'
import Adbannertop from '../public/adbannertop.svg'
import Adbannerside from '../public/adbannerside.svg'
import Link from 'next/link'
import styles from '../styles/news.module.scss'

export default function News() {
	return (
		<MainLayout>
			<Head>
				<title>Next Title</title>
				<meta name="keywords" content="next, javascript" />
				<meta name="description" content="this is" />
				<meta charSet="utf-8" />
			</Head>
			<div className={styles.adbannertop}><Link href="https://www.example.com"><Adbannertop /></Link></div>
			<div className={styles.content, styles.bothsides}>

				<div className={styles.leftside}>
					<Portions />
					<div className={styles.adbannerside}><Link href="https://www.example.com"><Adbannerside /></Link></div>
				</div>
				<div className={styles.rightside}>
					<NewsPageMainNews />
					<NewsPageSortPanel />
					<div className={styles.newsrow}>
						<NewsCardPhoto />
						<NewsCardPhoto />
					</div>
					<div className={styles.newsrow}>
						<NewsCardPhoto />
						<NewsCardPhoto />
					</div>
					<div className={styles.newsrow}>
						<NewsCardPhoto />
						<NewsCardPhoto />
					</div>
					<NewsPages />
				</div>
			</div>
			<style jsx>{`
				
			`}</style>
		</MainLayout>
	)
}
