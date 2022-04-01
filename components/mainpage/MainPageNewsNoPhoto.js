import Link from 'next/link'
import styles from './MainPageNewsNoPhoto.module.scss'

export function MainPageNewsNoPhoto() {
	return(
		<>
			<div className={styles.newsphotocard}>
				<Link href="/newspage"><a className={styles.a}><h3 className={styles.newsphotoheader}>Чуть менее важная новость</h3></a></Link>
				<p className={styles.p}>Не может быть не верю как такое возможно обалдеть просто кто бы мог подумать как же так не верю своим глазам такое бывает только в сказке</p>
				<div className={styles.importantnewsbottom}>
					<p className={styles.importantnewsbottomtext, styles.p}>16.22.22</p>
					<p className={styles.importantnewsbottomtext, styles.p}>Какой-то тег</p>
				</div>
			</div>	
			<style jsx>{`
				
			`}</style>	
		</>
	)
}