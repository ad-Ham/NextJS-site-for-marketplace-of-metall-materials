import Link from 'next/link'
import styles from './MorePromosCard.module.scss'

export const MorePromosCard = () => {
	return (<>
		<div className={styles.maindiv}>
			<Link href="/promopage" className={styles.a} passHref>
				<div className={styles.photo}></div>
			</Link>
			<Link href="/promopage" className={styles.a} passHref>
				<h3 className={styles.promoheader}><b>Продажа</b> Деталь ДС-21, ст...</h3>
			</Link>
			<p className={styles.promotext}>Деталь ДС-21, сталь, чугун, железо, трубы балки провода, медная катушка, в хорошем состоянии, в плачевном состоянии, требуется ремонт, материалы.</p>
			<div className={styles.promobottom}>
				<p className={styles.promobottomtext}>22.02.2022</p>
				<p className={styles.promobottomtext}>18:00</p>
			</div>
		</div>
		<style jsx>{`

		`}</style>
	</>)
}