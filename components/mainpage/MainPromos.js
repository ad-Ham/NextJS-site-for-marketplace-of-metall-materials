import Link from 'next/link'
import { MainPromoPhoto } from '../mainpage/MainPromoPhoto'
import { PromoNoPhoto } from '../mainpage/PromoNoPhoto'
import styles from './MainPromos.module.scss'

export function MainPromos({ firstImprotantPromos, secondImportantPromos }) {
	console.log(firstImprotantPromos);
	console.log(secondImportantPromos);
	return (<>
		<div className={styles.promosMainBox}>
			<h2 className={styles.promosHeader}>Объявления</h2>
			<div className={styles.menucards}>
				{/* {firstImprotantPromos.map(firstImprotantPromos => (
					<MainPromoPhoto key={firstImprotantPromos} id={firstImprotantPromos.id} title={firstImprotantPromos.title} text={firstImprotantPromos.text} />
				))} */}
				<MainPromoPhoto />
				<MainPromoPhoto />
				<div className={styles.promos}>
					<PromoNoPhoto />
					<PromoNoPhoto />
					<PromoNoPhoto />
					<PromoNoPhoto />
					<PromoNoPhoto />
					<PromoNoPhoto />
					<PromoNoPhoto />
				</div>
			</div>
			<div className={styles.buttons}>
				<button className={styles.promosButton1}>Подать объявление</button>
				<Link href="/promos"><a className={styles.promosButton2}>Все объявления</a></Link>
			</div>
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}