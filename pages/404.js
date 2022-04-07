import Head from 'next/head'
import {MainLayout} from '../components/mainlayout/MainLayout'
import {Portions} from '../components/Portions'
import {Block404} from '../components/Block404'
import {Adbannertop} from '../components/Adbannertop'
import Adbannerside from '../public/adbannerside.svg'
import Link from 'next/link'
import styles from '../styles/404.module.scss'

export default function Page404() {
	return (
		<MainLayout>
			<Head>
				<title>Next Title</title>
				<meta name="keywords" content="next, javascript"/>
				<meta name="description" content="this is"/>
				<meta charSet="utf-8"/>
			</Head>
			<Adbannertop/>
			<div className={styles.content, styles.bothsides}>
				<Block404/>
			</div>
			<style jsx>{`
				
			`}</style>
		</MainLayout>
	)
}