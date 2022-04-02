import Link from 'next/link'
import styles from './LoginForm.module.scss'

export function LoginForm() {
	return(<>
		<div className={styles.maindiv}>
			<input type="text" placeholder="E-mail адрес" className={styles.logininput}/>
			<input type="text" placeholder="Пароль" className={styles.loginpassword}/>
			<div className={styles.buttons}>
				<div className={styles.loginbuttonlogin}><Link href="/login"><a className={styles.buttontext}>Войти</a></Link></div>
				<div className={styles.loginbuttonreg}><Link href="/reg"><a className={styles.buttontext}>Регистрация</a></Link></div>
			</div>
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}