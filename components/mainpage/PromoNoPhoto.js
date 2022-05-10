import Link from 'next/link'
import styles from './PromoNoPhoto.module.scss'

export function PromoNoPhoto({ id, title, date, category }) {
	return (<>
		<div className={styles.sides}>
			<Link href="/promopage"><a className={styles.a}>
				<div className={styles.leftside}>
					<p className={styles.buysell}>{category}</p>
					<p className={styles.date}>{date}</p>
				</div>
				<p className={styles.promonophototext}>{title}</p>
			</a></Link>
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}