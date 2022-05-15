import styles from './EmailInput.module.scss'

export const EmailInput = () => {
	return(<>
		<div className={styles.maindiv}>
			<input type="text" placeholder="E-mail" className={styles.input}/>
			<button className={styles.button}>Отправить код</button>
		</div>
		<style jsx>{`

		`}</style>
	</>)
}