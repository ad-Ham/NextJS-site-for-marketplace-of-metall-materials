import SearchNews from '/public/searchNews.svg'
import styles from './PromosPageSortPanel.module.scss'

export function PromosPageSortPanel() {
	return (<>
		<div className={styles.maindiv}>
			<div className={styles.selectsortbar}>
				<span className={styles.selectsortbarheader}>Сортировать:</span>
				<span className={styles.selectsortbardate}>Дата</span>
				<span className={styles.selectsortbarsell}>Продажа</span>
				<span className={styles.selectsortbarbuy}>Покупка</span>
				<button className={styles.postbutton}>Подать объявление</button>
			</div>
		</div>
		<style jsx>{`

		`}</style>
	</>)
}