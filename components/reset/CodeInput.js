import styles from './CodeInput.module.scss'
import Link from 'next/link'

export const CodeInput = () => {
	return (<>
		<div className={styles.maindiv}>
			<input type="text" placeholder="Код восстановления доступа" className={styles.input} />
			<Link href='/resetpassword' className={styles.button}>Подтвердить код</Link>
		</div>
	</>)
}