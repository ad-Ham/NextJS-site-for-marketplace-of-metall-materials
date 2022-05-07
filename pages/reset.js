import Head from 'next/head'
import { MainLayout } from '../components/mainlayout/MainLayout'
import { Portions } from '../components/Portions'
import { ResetHeader } from '../components/reset/ResetHeader'
import { EmailInput } from '../components/reset/EmailInput'
import { CodeInput } from '../components/reset/CodeInput'
import { Adbannertop } from '../components/Adbannertop'
import Link from 'next/link'
import styles from '../styles/reset.module.scss'

export default function Index() {
	return (
		<MainLayout>
			<Head>
				<title>Next Title</title>
				<meta name="keywords" content="next, javascript" />
				<meta name="description" content="this is" />
				<meta charSet="utf-8" />
			</Head>
			{/* <Adbannertop/> */}
			<div className={styles.content, styles.maindiv}>
				<ResetHeader />
				<EmailInput />
				<CodeInput />
				<p className={styles.bottomtext}>Не пришел код в течение 5 минут? <Link href='/'><a className={styles.bottomlink}>Нажмите сюда</a></Link></p>
			</div>
			<style jsx>{`
				
			`}</style>
		</MainLayout>
	)
}