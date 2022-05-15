import Head from 'next/head'
import { Adbannertop } from '../components/Adbannertop'
import styles from '../styles/404.module.scss'
import { PageUnderConstruction } from '../components/PageUnderConstruction'

export default function UnderContruction() {
	return (
		<>
			<Head>
				<title>Next Title</title>
				<meta name="keywords" content="next, javascript" />
				<meta name="description" content="this is" />
				<meta charSet="utf-8" />
			</Head>
			{/* <Adbannertop /> */}
			<div className={styles.content, styles.bothsides}>
				<PageUnderConstruction />
			</div>
		</>
	)
}