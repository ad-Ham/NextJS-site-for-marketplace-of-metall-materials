import Head from 'next/head'
import {MainLayout} from '../components/MainLayout'
import {Portions} from '../components/Portions'
import {PersonalData} from '../components/PersonalData'
import Adbannertop from '../public/adbannertop.svg'
import Mypromosicon from '../public/mypromosicon.svg'
import Submitpromoicon from '../public/submitpromoicon.svg'
import Link from 'next/link'

export default function Profile() {
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
					<div className="buttonsrow">
						<Link href="/mypromos"><a className="profilebutton">
							<Mypromosicon/>
							<p>Мои объявления</p>
						</a></Link>
						<Link href="/submitpromo"><a className="profilebutton">
							<Submitpromoicon/>
							<p>Подать объявление</p>
						</a></Link>
					</div>
				</div>
			</div>
			<style jsx>{`
				.buttonsrow {
					margin-top: 24px;
					display: flex;
					align-items: center;
					justify-content: space-around;
					border-bottom: 1px solid #848484;
					padding-bottom: 18px;
				}

				.profilebutton {
					width: 250px;
					height: 250px;
					background: #C4C4C4;
					border-radius: 10px;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-between;
					padding: 29px 0 18px 0;
					font-weight: 500;
					font-size: 24px;
					line-height: 99.69%;
					color: #000;
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
					padding-left: 25px;
					display: flex;
					flex-direction: column;
					width: 100%;
				}
			`}</style>
		</MainLayout>
	)
}