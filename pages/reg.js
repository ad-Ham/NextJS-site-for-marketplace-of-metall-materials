import Head from 'next/head'
import {MainLayout} from '../components/MainLayout/MainLayout'
import {Portions} from '../components/Portions'
import {MainPromos} from '../components/MainPage/MainPromos'
import {MainPageNews} from '../components/MainPage/MainPageNews'
import {MainData} from '../components/reg/MainData'
import {PersonalData} from '../components/reg/PersonalData'
import {JurData} from '../components/reg/JurData'
import {RegButton} from '../components/reg/RegButton'
import Adbannertop from '../public/adbannertop.svg'
import Adbannerside from '../public/adbannerside.svg'
import Link from 'next/link'
import styles from '../styles/reg.module.scss'

export default function Index() {
	return (
		<MainLayout>
			<Head>
				<title>Next Title</title>
				<meta name="keywords" content="next, javascript"/>
				<meta name="description" content="this is"/>
				<meta charSet="utf-8"/>
			</Head>
			<div className={styles.adbannertop}><Link href="https://www.example.com"><Adbannertop/></Link></div>
			<div className={styles.content, styles.maindiv}>
				<div className={styles.regheaderblock}>
					<h1 className={styles.regheader}>Регистрация</h1>
					<p className={styles.regtext}>Впервые на нашем сайте? Заполните форму регистрации.</p>
				</div>
				<MainData/>
				<PersonalData/>
				<JurData/>
				<RegButton/>
			</div>
			<style jsx>{`
				
			`}</style>
		</MainLayout>
	)
}