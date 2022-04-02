import styles from './MainData.module.scss'

export function MainData() {
	return(<>
		<div className={styles.maindiv}>
			<h2 className={styles.h2}>Основные данные</h2>
			<div className={styles.firstblock}><input type="text" placeholder="E-mail адрес*" className={styles.input}/></div>
			<div className={styles.secondblock}>
				<input type="text" placeholder="Пароль*" className={styles.inputpassword}/>
				<input type="text" placeholder="Повторите пароль*" className={styles.input}/>
			</div>
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}