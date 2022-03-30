import Link from 'next/link'
import styles from '../styles/Portions.module.scss'

export function Portions(){
	return (<>
		<div className={styles.portionsMain}>
			<p className={styles.portionsHeader}>Разделы</p>
			<ul>
				<li className={styles.portionsList}><Link href="/news"><a className={styles.portiona}>Новости</a></Link></li>
				<li className={styles.portionsList}><Link href="/news"><a className={styles.portiona}>Аналитика</a></Link></li>
				<li className={styles.portionsList}><Link href="/news"><a className={styles.portiona}>Публикации</a></Link></li>
				<li className={styles.portionsList}><Link href="/news"><a className={styles.portiona}>ГОСТы</a></Link></li>
				<li className={styles.portionsList}><Link href="/news"><a className={styles.portiona}>Калькулятор металлурга</a></Link></li>
				<li className={styles.portionsList}><Link href="/news"><a className={styles.portiona}>Справочник металлурга</a></Link></li>
				<li className={styles.portionsList}><Link href="/news"><a className={styles.portiona}>Расчет ж/д тарифов</a></Link></li>
				<li className={styles.portionsList}><Link href="/news"><a className={styles.portiona}>Полезные материалы</a></Link></li>
				<li className={styles.portionsList}><Link href="/news"><a className={styles.portiona}>Прогнозы</a></Link></li>
				<li className={styles.portionsList}><Link href="/news"><a className={styles.portiona}>Индекс цен</a></Link></li>
				<li className={styles.portionsList}><Link href="/news"><a className={styles.portiona}>Индекс цен LME</a></Link></li>
				<li className={styles.portionsList}><Link href="/news"><a className={styles.portiona}>Конференции</a></Link></li>
				
			</ul>
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}