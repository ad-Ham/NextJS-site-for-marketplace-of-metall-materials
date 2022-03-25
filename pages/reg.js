import Head from 'next/head'
import {MainLayout} from '../components/MainLayout/MainLayout'
import {Portions} from '../components/Portions'
import {MainPromos} from '../components/MainPage/MainPromos'
import {MainPageNews} from '../components/MainPage/MainPageNews'
import {MainData} from '../components/reg/MainData'
import {PersonalData} from '../components/reg/PersonalData'
import {JurData} from '../components/reg/JurData'
import {RegButton} from '../components/reg/RegButton'
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
			<div className="content maindiv">
				<div className="regheaderblock">
					<h1 className="regheader">Регистрация</h1>
					<p className="regtext">Впервые на нашем сайте? Заполните форму регистрации.</p>
				</div>
				<MainData/>
				<PersonalData/>
				<JurData/>
				<RegButton/>
			</div>
			<style jsx>{`
				.regheaderblock {
					display: flex;
					align-items: center;
					flex-direction: column;
					padding-bottom: 15px;
					border-bottom: 1px solid #B6B6B6;
					width: 100%;
					margin-bottom: 12px;
				}

				.regtext {
					font-weight: 400;
					font-size: 18px;
					line-height: 99.69%;
					letter-spacing: 0.045em;
				}

				.regheader {
					margin-top: 30px;
					margin-bottom: 25px;
					font-weight: 600;
					font-size: 36px;
					line-height: 99.69%;
					letter-spacing: 0.045em;
				}

				.maindiv {
					display: flex;
					flex-direction: column;
					align-items: center;
					margin-bottom: 50px;
				}

				.adbannertop {
					margin-top: 13px;
				}

				.adbannerside {
					margin-top: 16px;
					margin-bottom: 180px;
				}
			`}</style>
		</MainLayout>
	)
}