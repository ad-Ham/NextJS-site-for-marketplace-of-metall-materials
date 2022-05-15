import Link from 'next/link'
import styles from './LoginForm.module.scss'

export const LoginForm = () =>  {
	return (<>
		<div className={styles.maindiv}>
			<input type="text" placeholder="E-mail адрес" className={styles.logininput} />
			<input type="text" placeholder="Пароль" className={styles.loginpassword} />
			<div className={styles.buttons}>
				<div className={styles.loginbuttonlogin}><Link href="/login" className={styles.buttontext}>Войти</Link></div>
				<div className={styles.loginbuttonreg}><Link href="/reg" className={styles.buttontext}>Регистрация</Link></div>
			</div>
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}