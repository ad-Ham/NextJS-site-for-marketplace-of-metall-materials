import Link from 'next/link'
import styles from './MainPageImportantNews.module.scss'

export function MainPageImportantNews({ id, text, title }) {
	return (<>
		<div className={styles.importantnews}>
			<Link href="/newspage"><a className={styles.a}><div className={styles.photo}></div></a></Link>
			<div className={styles.rightside}>
				<Link href="/newspage"><a className={styles.a}><h3 className={styles.importantheader}>{title}</h3></a></Link>
				<p className={styles.importanttext}>{text}</p>
				<div className={styles.importantnewsbottom}>
					<p className={styles.importantnewsbottomtext}>16.22.22</p>
					<p className={styles.importantnewsbottomtext}>Какой-то тег</p>
				</div>
			</div>
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}