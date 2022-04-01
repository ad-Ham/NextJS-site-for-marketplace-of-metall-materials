import styles from './PromoBlock.module.scss'

export function PromoBlock() {
	return(<>
		<div className={styles.maindiv}>
			<div className={styles.headerblock}>
				<h1 className={styles.promoheader}>Металлические ограждения</h1>
				<div className={styles.photo}></div>
			</div>
			<div className={styles.desc}>
				<div className={styles.descrow}>
					<p className={styles.descheader}>Регион:</p>
					<p className={styles.desctext}>Владимир и Владимирская область</p>
				</div>
				<div className={styles.descrow}>
					<p className={styles.descheader}>E-mail:</p>
					<p className={styles.desctext}>example@mail.ru</p>
				</div>
				<div className={styles.descrow}>
					<p className={styles.descheader}>Телефон:</p>
					<p className={styles.desctext}>8-800-555-35-35</p>
				</div>
				<div className={styles.descrow}>
					<p className={styles.descheader}>Организация:</p>
					<p className={styles.desctext}>ООО "Рога и копыта"</p>
				</div>
				<div className={styles.descrow}>
					<p className={styles.descheader}>Категория:</p>
					<p className={styles.desctext}>Продажа (предложение)</p>
				</div>
				<div className={styles.descrow}>
					<p className={styles.descheader}>Описание:</p>
					<p className={styles.desctext}>Металлические ограждения 3D.<br/><br/>Для: автомобильных дорог, аэродромов, габионов, стадионов, промышленных объектов, гражданских объектов, коттеджей и дач.  </p>
				</div>
			</div>
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}