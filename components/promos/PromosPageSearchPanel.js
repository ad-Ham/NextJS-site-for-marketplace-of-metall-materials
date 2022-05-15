import styles from './PromosPageSearchPanel.module.scss'

export const PromosPageSearchPanel = () => {
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