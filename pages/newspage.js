import Head from 'next/head'
import {MainLayout} from '../components/MainLayout/MainLayout'
import {Portions} from '../components/Portions'
import {MainPromos} from '../components/MainPage/MainPromos'
import {MainPageNews} from '../components/MainPage/MainPageNews'
import {NewsBlock} from '../components/newspage/NewsBlock'
import {MoreNewsCard} from '../components/newspage/MoreNewsCard'
import Adbannertop from '../public/adbannertop.svg'
import Adbannerside from '../public/adbannerside.svg'
import Link from 'next/link'

export default function NewsPage() {
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
					<NewsBlock/>
					<div className="moreniewsdiv">
						<p className="morenews">Еще новости:</p>
						<div className="morenewsrow">
							<MoreNewsCard/>
							<MoreNewsCard/>
							<MoreNewsCard/>
						</div>
					</div>
				</div>
				
			</div>
			<style jsx>{`
				.morenewsrow {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
				}

				.moreniewsdiv {
					margin-left: 30px;
					margin-top: 20px;
				}

				.morenews {
					font-weight: 500;
					font-size: 24px;
					line-height: 99.69%;
					color: #000;
					margin-bottom: 20px;
				}

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