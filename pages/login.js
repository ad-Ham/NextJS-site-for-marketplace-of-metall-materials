import Head from 'next/head'
import {MainLayout} from '../components/MainLayout/MainLayout'
import {Portions} from '../components/Portions'
import {LoginBlock} from '../components/login/LoginBlock'
import {LoginForm} from '../components/login/LoginForm'
import Adbannertop from '../public/adbannertop.svg'
import Adbannerside from '../public/adbannerside.svg'
import Link from 'next/link'
import styles from '../styles/login.module.scss'

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
				<div className={styles.loginheaderblock}>
					<h1 className={styles.loginheader}>Вход в личный кабинет</h1>
				</div>
				<LoginBlock/>
				<LoginForm/>
			</div>
			<style jsx>{`
				
			`}</style>
		</MainLayout>
	)
}