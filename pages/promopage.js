import Head from 'next/head'
import { MainLayout } from '../components/mainlayout/MainLayout'
import { Portions } from '../components/Portions'
import { MainPromos } from '../components/mainpage/MainPromos'
import { MainPageNews } from '../components/mainpage/MainPageNews'
import { PromoBlock } from '../components/promopage/PromoBlock'
import { MorePromosCard } from '../components/promopage/MorePromosCard'
import { Adbannertop } from '../components/Adbannertop'
import Adbannerside from '../public/adbannerside.svg'
import Link from 'next/link'
import styles from '../styles/promopage.module.scss'

export default function Index() {
	return (
		<MainLayout>
			<Head>
				<title>Next Title</title>
				<meta name="keywords" content="next, javascript" />
				<meta name="description" content="this is" />
				<meta charSet="utf-8" />
			</Head>
			{/* <Adbannertop/> */}
			<div className={styles.content, styles.bothsides}>

				<div className={styles.leftside}>
					<Portions />
					{/* <div className={styles.adbannerside}><Link href="https://www.example.com"><Adbannerside /></Link></div> */}
				</div>
				<div className={styles.rightside}>
					<PromoBlock />
					<div className={styles.morepromosblock}>
						<h2 className={styles.morepromosheader}>Еще объявления:</h2>
						<div className={styles.morepromosrow}>
							<MorePromosCard />
							<MorePromosCard />
							<MorePromosCard />
						</div>
					</div>
				</div>

			</div>
			<style jsx>{`
				
			`}</style>
		</MainLayout>
	)
}