import { MainPageImportantNews } from '../mainpage/MainPageImportantNews'
import { MainPageNewsPhoto } from '../mainpage/MainPageNewsPhoto'
import { MainPageNewsNoPhoto } from '../mainpage/MainPageNewsNoPhoto'
import Link from 'next/link'
import styles from './MainPageNews.module.scss'

export function MainPageNews({ news, importantNews }) {
	return (<>
		<div className={styles.mainpagenews}>
			<div className={styles.newsmainheader}>
				<h2 className={styles.newsmainheadertext}>Новости</h2>
			</div>
			{importantNews.map(importantNews => (
				<MainPageImportantNews id={importantNews.id} title={importantNews.title} text={importantNews.text} />
			))}
			<div className={styles.newsrow}>
				{news.map(news => (
					<MainPageNewsNoPhoto id={news.id} title={news.title} text={news.text} />
				))}
				{/* <MainPageNewsPhoto /> */}
			</div>
			{/* <div className={styles.newsrow}>
				<MainPageNewsPhoto />
				<MainPageNewsNoPhoto />
			</div> */}
		</div>
		<style jsx>{`

		`}</style>
	</>)
}