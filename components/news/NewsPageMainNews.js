import Link from 'next/link'
import styles from './NewsPageMainNews.module.scss'

export const NewsPageMainNews = ({ importantNews }) => {
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
					<Link key={importantNews.id} href={`/news/${importantNews.id}`} as={`/news/${importantNews.id}`} id={importantNews.id} passHref>
						<h2 className={styles.importantnewsheadertext}>{importantNews.title}/{importantNews.id}</h2>
					</Link>
				))}
			</div>
			{importantNews.map(importantNews => (
				<Link key={importantNews.id} href="/newspage" id={importantNews.id} className={styles.a} passHref>
					<div className={styles.photo} />
				</Link>
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