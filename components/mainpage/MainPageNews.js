import {MainPageImportantNews} from '../mainpage/MainPageImportantNews'
import {MainPageNewsPhoto} from '../mainpage/MainPageNewsPhoto'
import {MainPageNewsNoPhoto} from '../mainpage/MainPageNewsNoPhoto'
import Link from 'next/link'
import styles from './MainPageNews.module.scss'

export function MainPageNews() {
	return(<>
		<div className={styles.mainpagenews}>
			<div className={styles.newsmainheader}>
				<h2 className={styles.newsmainheadertext}>Новости</h2>
			</div>
			<MainPageImportantNews/>
			<div className={styles.newsrow}>
				<MainPageNewsPhoto/>
				<MainPageNewsNoPhoto/>
			</div>
			<div className={styles.newsrow}>
				<MainPageNewsPhoto/>
				<Link href="/newspage"><a><MainPageNewsNoPhoto/></a></Link>
			</div>
		</div>
		<style jsx>{`

		`}</style>
	</>)
}