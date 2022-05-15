import styles from './PromosPageListHeader.module.scss'

export const PromosPageListHeader = () => {
	return (<>
		<div className={styles.maindiv}>
			<div className={styles.listheaderbar}>
				<div className={styles.date}>
					<p>Дата</p>
				</div>
				<div className={styles.category}>
					<p>Кат.</p>
				</div>
				<div className={styles.promoheader}>
					<p>Заголовок объявления</p>
				</div>
				<div className={styles.organization}>
					<p>Организация</p>
				</div>
				<div className={styles.region}>
					<p>Регион</p>
				</div>
			</div>
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}