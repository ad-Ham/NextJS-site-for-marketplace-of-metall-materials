import SearchNews from '/public/searchNews.svg'
import styles from './NewsPageSortPanel.module.scss'

export const NewsPageSortPanel = () => {
	return(<>
		<div className={styles.maindiv}>
			<div className={styles.searchbar}>
				<input type="text" placeholder="Поиск по новостям" className={styles.newssearch}/>
				<SearchNews/>
			</div>
			<div className={styles.selectsortbar}>
				<p className={styles.selectsortbarheader}>Сортировка по дате</p>
				<select name="" id="" className={styles.selectsortbartext}>
					<option value="">По убыванию</option>
					<option value="">По возрастанию</option>
				</select>
			</div>
			<div className={styles.selectsortbar}>
				<p className={styles.selectsortbarheader}>Выберите дату</p>
				<input type="date" className={styles.sortbarcalendar}/>
			</div>
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}