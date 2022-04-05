import Head from 'next/head'
import {MainLayout} from '../components/MainLayout/MainLayout'
import {Portions} from '../components/Portions'
import {Adbannertop} from '../components/Adbannertop'
import {MainPromos} from '../components/MainPage/MainPromos'
import {MainPageNews} from '../components/MainPage/MainPageNews'
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
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
			</Head>
			<Adbannertop/>
			<div className={styles.content, styles.bothsides}>
				
				<div className={styles.leftside}>
					<Portions/>
					<Link href="https://www.example.com"><img src="/adbannerside.svg" alt=""/></Link>
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