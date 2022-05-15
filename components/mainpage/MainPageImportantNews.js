import Link from 'next/link'
import styles from './MainPageImportantNews.module.scss'
import { Card, Image, Text } from '@mantine/core';

export const MainPageImportantNews = ({ id, text, title, date, tags }) => {
	return (<>
		<div className={styles.importantnews}>
			<Card
				shadow="lg"
				p="sm"
				component="a"
				target="_blank"
			>
				<Card.Section size="sm" >
					{/* <Link href="/newspage"><a className={styles.a}><div className={styles.photo}></div></a></Link> */}
					<Image src="/photopromo.svg" height={160} alt="No way!" />
				</Card.Section>

				<Text weight={500} size="lg">
					<Link href="/newspage" className={styles.a} passHref>
						<h3 className={styles.importantheader}>{title}</h3>
					</Link>
				</Text>

				<Text size="sm">
					<p className={styles.importanttext}>{text}</p>
				</Text>

				<Text size="sm">
					<p className={styles.importantnewsbottomtext}>{date}</p>
					<p className={styles.importantnewsbottomtext}>{tags}</p>
				</Text>

			</Card>
		</div>
		{/* <div className={styles.importantnews}>
			<Link href="/newspage"><a className={styles.a}><div className={styles.photo}></div></a></Link>
			<div className={styles.rightside}>
				<Link href="/newspage"><a className={styles.a}><h3 className={styles.importantheader}>{title}</h3></a></Link>
				<p className={styles.importanttext}>{text}</p>
				<div className={styles.importantnewsbottom}>
					<p className={styles.importantnewsbottomtext}>16.22.22</p>
					<p className={styles.importantnewsbottomtext}>Какой-то тег</p>
				</div>
			</div>
		</div> */}
		<style jsx>{`
			
		`}</style>
	</>)
}