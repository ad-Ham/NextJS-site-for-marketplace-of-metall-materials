import Link from 'next/link'
import styles from './NewsCardPhoto.module.scss'

export function NewsCardPhoto({ title, text  }) {
	return (<>
		<div className={styles.maindiv}>
			<div>
				<Link href="/newspage">
					<a><h3 className={styles.newsheader}>{title}</h3></a>
				</Link>
					<p className={styles.newstext}>{text}</p>
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