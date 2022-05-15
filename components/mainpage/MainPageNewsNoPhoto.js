import Link from 'next/link'
import styles from './MainPageNewsNoPhoto.module.scss'
import { Card, Image, Text } from '@mantine/core';

export const MainPageNewsNoPhoto = ({ id, text, title, date, tags }) => {
	return (
		<>
			<div className={styles.newsphotocard}>
				<Card
					shadow="lg"
					p="xs"
					component="a"
					target="_blank"
				>


					<Text weight={500} size="sm">
						<Link href="/newspage" className={styles.a} passHref>
							<h3 className={styles.newsphotoheader}>{title}</h3>
						</Link>
					</Text>

					<Text size="xs">
						<p className={styles.p}>{text}</p>
					</Text>

					<Text size="xs">
						<p className={styles.importantnewsbottomtext, styles.p}>{date}</p>
						<p className={styles.importantnewsbottomtext, styles.p}>{tags}</p>
					</Text>

				</Card>
			</div>
			{/* <div className={styles.newsphotocard}>
				<Link href="/newspage"><a className={styles.a}><h3 className={styles.newsphotoheader}>{title}</h3></a></Link>
				<p className={styles.p}>{text}</p>
				<div className={styles.importantnewsbottom}>
					<p className={styles.importantnewsbottomtext, styles.p}>16.22.22</p>
					<p className={styles.importantnewsbottomtext, styles.p}>Какой-то тег</p>
				</div>
			</div> */}
			<style jsx>{`
				
			`}</style>
		</>
	)
}