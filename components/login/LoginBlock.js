import Link from 'next/link'
import styles from './LoginBlock.module.scss'

export function LoginBlock() {
	return(<>
		<div className={styles.maindiv}>
			<h2 className={styles.blockheader}>Не удается войти.</h2>
			<p className={styles.blocktext}>Пожалуйста, проверьте правильность написания <b>логина и пароля.</b></p>
			<ul className={styles.blockul}>
				<li className={styles.blocklist, styles.blocktext}>Возможно, нажата клавиша <b>Caps Lock</b>?</li>
				<li className={styles.blocklist, styles.blocktext}>Может быть, у Вас включена неправильная <b>раскладка</b>? (русская или английская)</li>
			</ul>
			<p className={styles.blocktext}>Если войти всё равно не удаётся, Вы можете <Link href="/resetpasswordgetcode"><a className="blocklink">нажать сюда</a></Link>.</p>
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}