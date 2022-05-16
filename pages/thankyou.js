import Head from 'next/head'
import { MainLayout } from '../components/Layout/MainLayout'
import { Adbannertop } from '../components/Adbannertop'
import styles from '../styles/404.module.scss'
import { ThankYouForRegistration } from '../components/ThankYouForRegistration'

export default function Thankyou() {
	return (
		<MainLayout>
			<Head>
				<title>Next Title</title>
				<meta name="keywords" content="next, javascript" />
				<meta name="description" content="this is" />
				<meta charSet="utf-8" />
			</Head>
			{/* <Adbannertop /> */}
			<div className={styles.content, styles.bothsides}>
				<ThankYouForRegistration />
			</div>
			<style jsx>{`
				
			`}</style>
		</MainLayout>
	)
}