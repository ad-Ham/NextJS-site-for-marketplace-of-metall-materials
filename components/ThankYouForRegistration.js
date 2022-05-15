import Link from 'next/link'
import styles from '../styles/Block404.module.scss'

export const ThankYouForRegistration = () => {
	return (<>
		<div className={styles.maindiv}>
			<h2 className={styles.header}>Спасибо за регистрацию!!!</h2>
			<p className={styles.text}><br />Ожидайте письмо о подтверждении аккаунта на Ваш email </p>
			<Link href="/" className={styles.button404}>На главную</Link>
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}