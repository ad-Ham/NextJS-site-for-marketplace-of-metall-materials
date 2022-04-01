import Link from 'next/link'
import styles from './NewsCardPhoto.module.scss'

export function NewsCardPhoto() {
	return(<>
		<div className={styles.maindiv}>
			<Link href="/newspage"><a className={styles.a}><div className={styles.photo}></div></a></Link>
			<div>
				<Link href="/newspage"><a><h3 className={styles.newsheader}>Заголовок новости с фото!</h3></a></Link>
				<p className={styles.newstext}>В декабре 2021 года Россия импортировала 4 тыс. тонн медного лома и отходов, что....</p>
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