import Link from 'next/link'
import styles from './NewsCardPhoto.module.scss'

export function NewsCardPhoto({ news }) {

	console.log(news)
	return (<>
		<div className={styles.maindiv}>
			<Link href="/newspage"><a className={styles.a}><div className={styles.photo}></div></a></Link>
			<div>
				<Link href="/newspage">
					{news.map(news => (
						<a key={news.id}><h3 className={styles.newsheader}>{news.title}</h3></a>
					))}
				</Link>
				{news.map(news => (
					<p key={news.id} className={styles.newstext}>{news.text}</p>
				))}

				<div className={styles.newsbottom}>
					<p className={styles.newsdate}>22.02.2022 18:00</p>
					<p className={styles.newstag}>Какой-то тег</p>
				</div>
			</div>
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}