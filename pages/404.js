import Head from 'next/head'
import { MainLayout } from '../components/Layout/MainLayout'
import Link from 'next/link'
import styles from '../styles/404.module.scss'

const Page404 = () => {
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
				<div className={styles.maindiv}>
					<h2 className={styles.header404}>404<br />Страница не найдена</h2>
					<p className={styles.text404}>Упс! Что-то пошло не так... Пожалуйста, свяжитесь с технической поддержкой</p>
					<Link href="/" className={styles.button404}>На главную</Link>
				</div>
			</div>
			<style jsx>{`
				
			`}</style>
		</MainLayout>
	)
}

export default Page404;