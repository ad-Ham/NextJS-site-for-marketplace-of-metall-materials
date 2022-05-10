import Link from 'next/link'
import styles from './NewsPageMainNews.module.scss'

export function NewsPageMainNews({ importantNews }) {
	// console.log(importantNews.id);
	// console.log(importantNews.id);
	// console.log(importantNews.title);

	{
		importantNews.map(importantNews => (
			console.log(importantNews.id)
		))
	}

	return (<>
		<div className={styles.maindiv}>
			<div className={styles.newsmainheader}>
				<h1 className={styles.newsmainheadertext}>Новости</h1>
			</div>

			<div className={styles.importantnewsheader}>
				{importantNews.map(importantNews => (
					<Link href={'/newspage/[id]'} as={'/newspage/${importantNews.id}'} >
						<a key={importantNews.id} id={importantNews.id}><h2 className={styles.importantnewsheadertext}>{importantNews.title}/{importantNews.id}</h2></a>
					</Link>
				))}
			</div>
			{importantNews.map(importantNews => (
				<Link href="/newspage" id={importantNews.id} ><a className={styles.a}><div className={styles.photo}></div></a></Link>
			))}
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