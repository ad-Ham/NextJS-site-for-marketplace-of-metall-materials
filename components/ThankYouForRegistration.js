import Link from 'next/link'
import styles from '../styles/Block404.module.scss'

export function ThankYouForRegistration() {
	return (<>
		<div className={styles.maindiv}>
			<h2 className={styles.header}>Спасибо за регистрацию!!!</h2>
			<p className={styles.text}><br />Ожидайте письмо о подтверждении аккаунта на Ваш email </p>
			<Link href="/"><a className={styles.button404}>На главную</a></Link>
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}