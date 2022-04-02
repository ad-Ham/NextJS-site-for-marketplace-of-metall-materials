import styles from './JurData.module.scss'

export function JurData() {
	return(<>
		<div className={styles.maindiv}>
			<h2 className={styles.h2}>Юридические данные</h2>
			<input type="text" placeholder="Название организации" className={styles.input}/>
			<input type="text" placeholder="Юридический адрес" className={styles.input}/>
			<input type="text" placeholder="ИНН" className={styles.input}/>
			<input type="text" placeholder="ОГРН" className={styles.input}/>
			<label className={styles.btnpanel}><input type="radio" className={styles.radiobtn}/><p className={styles.p}>Я принимаю условия передачи информации*</p></label>

		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}