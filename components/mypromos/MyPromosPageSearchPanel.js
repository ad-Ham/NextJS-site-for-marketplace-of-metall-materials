import styles from './MyPromosPageSearchPanel.module.scss'

export function MyPromosPageSearchPanel() {
	return (<>
		<div className={styles.maindiv}>
			<div className={styles.searchbar}>
				<input type="text" placeholder="Введите ваш запрос..." className={styles.promossearch} />
				<button className={styles.searchbutton}>Поиск</button>
			</div>
		</div>
		<style jsx>{`

		`}</style>
	</>)
}