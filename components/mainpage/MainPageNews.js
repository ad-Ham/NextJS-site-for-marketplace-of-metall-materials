import { MainPageImportantNews } from '../mainpage/MainPageImportantNews'
import { MainPageNewsPhoto } from '../mainpage/MainPageNewsPhoto'
import { MainPageNewsNoPhoto } from '../mainpage/MainPageNewsNoPhoto'
import Link from 'next/link'
import styles from './MainPageNews.module.scss'

export function MainPageNews({ news }) {
	// console.log(news)
	return (<>
		<div className={styles.mainpagenews}>
			<div className={styles.newsmainheader}>
				<h2 className={styles.newsmainheadertext}>Новости</h2>
			</div >
			{news.map(news => (
				<MainPageImportantNews key={news} id={news[0].id} title={news[0].title} text={news[0].text} />
			))}
			<div className={styles.newsrow}>
				{news.map(news => (
					<MainPageNewsNoPhoto key={news} id={news[1].id} title={news[1].title} text={news[1].text} />
				))}
				{news.map(news => (
					<MainPageNewsNoPhoto key={news} id={news[2].id} title={news[2].title} text={news[2].text} />
				))}
				{news.map(news => (
					<MainPageNewsNoPhoto key={news} id={news[3].id} title={news[3].title} text={news[3].text} />
				))}
			</div>
			<div className={styles.newsrow}>
				{news.map(news => (
					<MainPageNewsNoPhoto key={news} id={news[4].id} title={news[4].title} text={news[4].text} />
				))}
			</div>
		</div>
		<style jsx>{`

		`}</style>
	</>)
}