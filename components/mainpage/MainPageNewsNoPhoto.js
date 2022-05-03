import Link from 'next/link'
import styles from './MainPageNewsNoPhoto.module.scss'

export function MainPageNewsNoPhoto({ id, text, title }) {
	return (
		<>
			<div className={styles.newsphotocard}>
				<Link href="/newspage"><a className={styles.a}><h3 className={styles.newsphotoheader}>{title}</h3></a></Link>
				<p className={styles.p}>{text}</p>
				<div className={styles.importantnewsbottom}>
					<p className={styles.importantnewsbottomtext, styles.p}>16.22.22</p>
					<p className={styles.importantnewsbottomtext, styles.p}>Какой-то тег</p>
				</div>
			</div>
			<style jsx>{`
				
			`}</style>
		</>
	)
}