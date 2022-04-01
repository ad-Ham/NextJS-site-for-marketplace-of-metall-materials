import Link from 'next/link'
import styles from './PromoNoPhoto.module.scss'

export function PromoNoPhoto() {
	return(<>
		<div className={styles.sides}>
			<Link href="/promopage"><a className={styles.a}>
				<div className={styles.leftside}>
					<p className={styles.buysell}>Покупка</p>
					<p className={styles.date}>22.02 12:00</p>
				</div>
				<p className={styles.promonophototext}>Деталь ДС-21, сталь, железо, чугун, иные материалы</p>
			</a></Link>
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}