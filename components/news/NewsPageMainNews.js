import Link from 'next/link'
import styles from './NewsPageMainNews.module.scss'

export function NewsPageMainNews({ importantNews }) {
	console.log(importantNews);
	return (<>
		<div className={styles.maindiv}>
			<div className={styles.newsmainheader}>
				<h1 className={styles.newsmainheadertext}>Новости</h1>
			</div>

			<div className={styles.importantnewsheader}>
				{importantNews.map(importantNews => (
					<Link href="/newspage">
						<a key={importantNews.id}><h2 className={styles.importantnewsheadertext}>{importantNews.title}</h2></a>
					</Link>
				))}
			</div>
			<Link href="/newspage"><a className={styles.a}><div className={styles.photo}></div></a></Link>
			{importantNews.map(importantNews => (
				<p key={importantNews.id} className={styles.importantnewstext}>{importantNews.text}</p>
			))}
			{importantNews.map(importantNews => (
				<p key={importantNews.id} className={styles.importantnewsbottomtext}>Теги: {importantNews.tags}</p>
			))}
			{importantNews.map(importantNews => (
				<p key={importantNews.id} className={styles.importantnewsheaderdate}>{importantNews.date}</p>
			))}
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}