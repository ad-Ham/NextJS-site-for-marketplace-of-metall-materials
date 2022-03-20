import Head from 'next/head'
import {MainLayout} from '../components/MainLayout'
import {Portions} from '../components/Portions'
import {MainPromos} from '../components/MainPromos'
import {MainPageNews} from '../components/MainPageNews'
import Adbannertop from '../public/adbannertop.svg'
import Adbannerside from '../public/adbannerside.svg'
import Link from 'next/link'

export default function Index() {
	return (
		<MainLayout>
			<Head>
				<title>Next Title</title>
				<meta name="keywords" content="next, javascript"/>
				<meta name="description" content="this is"/>
				<meta charSet="utf-8"/>
			</Head>
			<div className="adbannertop"><Link href="https://www.example.com"><Adbannertop/></Link></div>
			<div className="content bothsides">
				
				<div className="leftside">
					<Portions/>
					<div className="adbannerside"><Link href="https://www.example.com"><Adbannerside/></Link></div>
				</div>
				<div className="rightside">
					<MainPromos/>
					<MainPageNews/>
				</div>
				
			</div>
			<style jsx>{`
				.adbannertop {
					margin-top: 13px;
				}

				.adbannerside {
					margin-top: 16px;
					margin-bottom: 180px;
				}

				.bothsides {
					display: flex;
					flex-direction: row;
				}

				.leftside {
					display: flex;
					flex-direction: column;
				}

				.rightside {
					display: flex;
					flex-direction: column;
					width: 100%;
				}
			`}</style>
		</MainLayout>
	)
}