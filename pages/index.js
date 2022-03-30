import Head from 'next/head'
import {MainLayout} from '../components/MainLayout/MainLayout'
import {Portions} from '../components/Portions'
import {MainPromos} from '../components/MainPage/MainPromos'
import {MainPageNews} from '../components/MainPage/MainPageNews'
import Adbannertop from '../public/adbannertop.svg'
import Adbannerside from '../public/adbannerside.svg'
import Link from 'next/link'
import styles from '../styles/index.module.scss'
import {useState, useEffect} from 'react'

export default function Index() {
	const [isMobile,setIsMobile]=useState(false)
	useEffect(()=>{
		console.log(document.body.clientWidth)
		if (document.body.clientWidth<900) {
			setIsMobile(true)
		}
	}, [])
	return (
		<MainLayout>
			<Head>
				<title>Next Title</title>
				<meta name="keywords" content="next, javascript"/>
				<meta name="description" content="this is"/>
				<meta charSet="utf-8"/>
			</Head>
			{!isMobile &&<div className={styles.adbannertop}><Link href="https://www.example.com"><Adbannertop/></Link></div>}
			<div className={styles.content, styles.bothsides}>
				
				<div className={styles.leftside}>
					<Portions/>
					<div className={styles.adbannerside}><Link href="https://www.example.com"><Adbannerside/></Link></div>
				</div>
				<div className={styles.rightside}>
					<MainPromos/>
					<MainPageNews/>
				</div>
				
			</div>
			<style jsx>{`
				
			`}</style>
		</MainLayout>
	)
}