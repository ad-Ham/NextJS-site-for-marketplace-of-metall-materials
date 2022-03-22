import Head from 'next/head'
import {MainLayout} from '../components/MainLayout'
import {Portions} from '../components/Portions'
import {PersonalData} from '../components/PersonalData'
import Adbannertop from '../public/adbannertop.svg'
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
					<PersonalData/>
					<Portions/>
				</div>
				<div className="rightside">

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