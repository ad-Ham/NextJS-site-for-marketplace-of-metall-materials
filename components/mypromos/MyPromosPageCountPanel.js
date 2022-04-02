import styles from './MyPromosPageCountPanel.module.scss'

export function MyPromosPageCountPanel() {
	return (<>
		<div className={styles.maindiv}>
			<p className={styles.counttext}> Количество объявлений: 123</p>
			<button className={styles.postbutton}>Подать объявление</button>
		</div>
	</>)
}