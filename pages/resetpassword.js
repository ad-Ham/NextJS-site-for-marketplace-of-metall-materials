import Head from 'next/head'
import {MainLayout} from '../components/MainLayout/MainLayout'
import {Portions} from '../components/Portions'
import {ResetForm} from '../components/resetpassword/ResetForm'
import {Adbannertop} from '../components/Adbannertop'
import Link from 'next/link'
import styles from '../styles/resetpassword.module.scss'

export default function Index() {
	return (
		<MainLayout>
			<Head>
				<title>Next Title</title>
				<meta name="keywords" content="next, javascript"/>
				<meta name="description" content="this is"/>
				<meta charSet="utf-8"/>
			</Head>
			<Adbannertop/>
			<div className={styles.content, styles.maindiv}>
				<h2 className={styles.header}>Восстановление доступа</h2>
				<p className={styles.headertext}>Введите новый пароль</p>
				<ResetForm/>
			</div>
			<style jsx>{`
				
			`}</style>
		</MainLayout>
	)
}