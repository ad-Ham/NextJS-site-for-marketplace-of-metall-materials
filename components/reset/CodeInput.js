import styles from './CodeInput.module.scss'
import Link from 'next/link'

export function CodeInput() {
	return(<>
		<div className={styles.maindiv}>
			<input type="text" placeholder="Код восстановления доступа" className={styles.input}/>
			<Link href='/resetpassword'><a className={styles.button}>Подтвердить код</a></Link>
		</div>
		<style jsx>{`

		`}</style>
	</>)
}