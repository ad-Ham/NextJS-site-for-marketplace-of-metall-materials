import styles from './PersonalData.module.scss'

export function PersonalData() {
	return(<>
		<div className={styles.maindiv}>
			<h2 className={styles.h2}>Личные данные</h2>
			<div className={styles.secondblock}>
				<input type="text" placeholder="Фамилия*" className={styles.inputpassword}/>
				<input type="text" placeholder="Имя*" className={styles.inputpassword}/>
				<input type="text" placeholder="Отчество" className={styles.input}/>
			</div>
			<div className={styles.firstblock}><input type="text" placeholder="Телефон*" className={styles.input}/></div>
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}