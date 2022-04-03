import styles from './ResetHeader.module.scss'

export function ResetHeader() {
	return(<>
		<div className={styles.maindiv}>
			<h2 className={styles.header}>Восстановление доступа</h2>
			<p className={styles.text}>Для восстановления доступа к аккаунту введите e-mail, на который был зарегистрирован аккаунт. На этот адрес придет сообщение с кодом восстановления доступа.</p>
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}