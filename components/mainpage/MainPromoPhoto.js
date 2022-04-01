import  Link from 'next/link'
import styles from './MainPromoPhoto.module.scss'

export function MainPromoPhoto() {
	return(<>
		<div className={styles.mainpromophoto}>
			<Link href="/promopage"><a><div className={styles.photo}></div></a></Link>
			<Link href="/promopage"><a><h3 className={styles.promophotoheader}><b className={styles.promophotoheaderb}>Продажа</b> Деталь ДС-21, сталь, железо, чугун, иные материалы</h3></a></Link>
			<p className={styles.promophototext}>Деталь ДС-21, сталь, чугун, железо, трубы балки провода, медная катушка, в хорошем состоянии, в плачевном состоянии, требуется ремонт, материалы</p>
			<div className={styles.promophotobottomtext}>
				<p>Раздел</p>
				<p>22.02.2022</p>
			</div>
		</div>
		<style>{`
			
		`}</style>
	</>)
}