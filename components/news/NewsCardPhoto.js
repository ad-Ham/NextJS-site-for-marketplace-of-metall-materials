import Link from 'next/link'
import styles from './NewsCardPhoto.module.scss'
import { Card, Image, Text } from '@mantine/core';


export function NewsCardPhoto({ id, text, title, date, tags }) {
	// console.log(news)
	console.log(id)



	return (<>
		<div className={styles.newsphotocard}>
			<Card
				shadow="lg"
				p="xs"
				component="a"
				target="_blank"
			>


				<Text weight={500} size="sm">
					<Link href="/newspage" id={id} ><a className={styles.a}><h3 className={styles.newsphotoheader}>{title}/{id}</h3></a></Link>
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
		<style jsx>{`
			
		`}</style>
	</>)
}