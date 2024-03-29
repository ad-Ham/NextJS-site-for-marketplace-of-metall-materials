import Link from 'next/link'
import styles from './ResetForm.module.scss'

export const ResetForm = () => {
	return (<>
		<div className={styles.maindiv}>
			<input type="text" placeholder="Новый пароль" className={styles.logininput} />
			<input type="text" placeholder="Повторите новый пароль" className={styles.loginpassword} />
			<div className={styles.loginbuttonlogin}>
				<Link href="/login" className={styles.buttontext}>Сменить пароль</Link>
			</div>
		</div>
	</>)
}