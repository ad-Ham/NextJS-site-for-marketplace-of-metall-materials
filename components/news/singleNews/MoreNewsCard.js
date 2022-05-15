import Link from 'next/link'
import styles from './MoreNewsCard.module.scss'

export const MoreNewsCard = () => {
	return (<>
		<div className={styles.maindiv}>
			<Link href="/newspage" className={styles.a} passHref>
				<div className={styles.photo}></div>
			</Link>
			<Link href="/newspage" className={styles.a} passHref>
				<h3 className={styles.newsheader}>Спрос на сталь в Китае будет стабильным</h3>
			</Link>
			<p className={styles.newstext}>Согласно данным SteelOrbis, в 2022 году спрос на сталь в Китае будет удерживаться на уровне предыдущего года.</p>
			<p className={styles.newsbottom}>22.02.2022 18:00</p>
		</div>
		<style jsx>{`

		`}</style>
	</>)
}