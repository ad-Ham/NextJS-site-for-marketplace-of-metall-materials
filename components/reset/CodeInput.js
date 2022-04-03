import styles from './CodeInput.module.scss'

export function CodeInput() {
	return(<>
		<div className={styles.maindiv}>
			<input type="text" placeholder="Код восстановления доступа" className={styles.input}/>
			<button className={styles.button}>Подтвердить код</button>
		</div>
		<style jsx>{`

		`}</style>
	</>)
}