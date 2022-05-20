import Head from 'next/head'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { MainLayout } from '../../components/Layout/MainLayout'
import { MainPromos } from '../../components/mainpage/MainPromos'
import { MainPageNews } from '../../components/mainpage/MainPageNews'
import { PromoBlock } from '../../components/promopage/PromoBlock.js'
import { MorePromosCard } from '../../components/promopage/MorePromosCard'
import { Adbannertop } from '../../components/Adbannertop'
import Adbannerside from '../../public/adbannerside.svg'
import Link from 'next/link'
import styles from '../../styles/promopage.module.scss'

export default function Index() {
	const router = useRouter()
	const { pid } = router.query
	console.log(pid)

	const [singleNew, setSingleNew] = useState([])
	return (
		<>
			{/* <Adbannertop/> */}
			<div className={styles.content}>
			<PromoBlock />

				<div className={styles.leftside}>
					{/* <div className={styles.adbannerside}><Link href="https://www.example.com"><Adbannerside /></Link></div> */}
				</div>
				<div className={styles.rightside}>
					
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
		</>
	)
}