import Head from 'next/head'
import { MainLayout } from '../components/Layout/MainLayout'
import Link from 'next/link'
import styles from '../styles/404.module.scss'

const Page404 = () => {
	return (<>
			<Head>
				<title>Страница не найдена!</title>
				<meta name="keywords" content="next, javascript" />
				<meta name="description" content="Ошибка 404. Такой страницы не существует" />
				<meta charSet="utf-8" />
			</Head>
			<div>
				<div className={styles.maindiv}>
					<h2 className={styles.header404}>404<br />Страница не найдена</h2>
					<p className={styles.text404}>Упс! Что-то пошло не так... Пожалуйста, свяжитесь с технической поддержкой</p>
					<Link href="/" className={styles.button404}>На главную</Link>
				</div>
			</div></>
	)
}

export default Page404;