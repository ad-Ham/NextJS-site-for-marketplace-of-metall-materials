import Link from 'next/link'
import styles from './NewsPageMainNews.module.scss'

export function NewsPageMainNews({ id, title, text }) {
	return (<>
		<div className={styles.maindiv}>
			<div className={styles.newsmainheader}>
				<h1 className={styles.newsmainheadertext}>Новости</h1>
			</div>

			<div className={styles.importantnewsheader}>
				<Link href="/newspage">
					<a key={id}><h2 className={styles.importantnewsheadertext}>{title}</h2></a>
				</Link>
			</div>
			<Link href="/newspage"><a className={styles.a}><div className={styles.photo}></div></a></Link>
			<p key={id} className={styles.importantnewstext}>{text}</p>
			<p className={styles.importantnewsbottomtext}>Теги: импорт, лом, отходы, металлургия, цена, увеличилась</p>
			<p className={styles.importantnewsheaderdate}>22.02 18:00</p>
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}