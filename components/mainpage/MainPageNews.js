import { MainPageImportantNews } from '../mainpage/MainPageImportantNews'
import { MainPageNewsPhoto } from '../mainpage/MainPageNewsPhoto'
import { MainPageNewsNoPhoto } from '../mainpage/MainPageNewsNoPhoto'
import Link from 'next/link'
import styles from './MainPageNews.module.scss'

export function MainPageNews({ news, importantNews }) {
	// console.log(news)
	// console.log(importantNews)
	return (<>
		<div className={styles.mainpagenews}>
			<div className={styles.newsmainheader}>
				<h2 className={styles.newsmainheadertext}>Новости</h2>
			</div >
			{importantNews.map(importantNews => (
				<MainPageImportantNews key={importantNews} id={importantNews.id} title={importantNews.title} text={importantNews.text} date={importantNews.date} tags={importantNews.tags} />
			))}

			<div className={styles.newsrow}>
				{news.map(news => (
					<MainPageNewsNoPhoto key={news} id={news.id} title={news.title} text={news.text} date={news.date} tags={news.tags} />
				))}
			</div>
			<div className={styles.newsrow}>
			</div>
		</div>
		<style jsx>{`

		`}</style>
	</>)
}