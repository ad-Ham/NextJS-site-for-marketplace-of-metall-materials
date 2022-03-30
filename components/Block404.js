import Link from 'next/link'
import styles from '../styles/Block404.module.scss'

export function Block404() {
	return(<>
		<div className={styles.maindiv}>
			<h2 className={styles.header404}>404<br/>Страница не найдена</h2>
			<p className={styles.text404}>Упс! Что-то пошло не так... Пожалуйста, свяжитесь с технической поддержкой</p>
			<Link href="/"><a className={styles.button404}>На главную</a></Link>
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}