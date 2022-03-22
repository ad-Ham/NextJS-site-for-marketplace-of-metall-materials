import Head from 'next/head'
import { MainLayout } from '../components/MainLayout'
import { Portions } from '../components/Portions'
import { MainPromosPages } from '../components/MainPromosPage'
import { PromosCardPhoto } from '../components/PromosCardPhoto'
import { PromosPageSortPanel } from '../components/PromosPageSortPanel'
import { NewsPages } from '../components/NewsPages'
import Adbannertop from '../public/adbannertop.svg'
import Adbannerside from '../public/adbannerside.svg'
import Link from 'next/link'

export default function Index() {
    return (
        <MainLayout>
            <Head>
                <title>Next Title</title>
                <meta name="keywords" content="next, javascript" />
                <meta name="description" content="this is" />
                <meta charSet="utf-8" />
            </Head>
            <div className="adbannertop"><Link href="https://www.example.com"><Adbannertop /></Link></div>
            <div className="content bothsides">

                <div className="leftside">
                    <Portions />
                    <div className="adbannerside"><Link href="https://www.example.com"><Adbannerside /></Link></div>
                </div>
                <div className="rightside">
                    <MainPromosPages />
                    <PromosPageSortPanel />
                    <div className="promosrow">
                        <PromosCardPhoto />
                        <PromosCardPhoto />
                    </div>
                    <div className="promosrow">
                        <PromosCardPhoto />
                        <PromosCardPhoto />
                    </div>
                    <div className="promosrow">
                        <PromosCardPhoto />
                        <PromosCardPhoto />
                    </div>
                    <NewsPages />
                </div>
            </div>
            <style jsx>{`
				.promosrow {
					display: flex;
					flex-direction: row;
					margin-bottom: 16px;
				}

				.adbannertop {
					margin-top: 13px;
				}

				.adbannerside {
					margin-top: 16px;
					margin-bottom: 180px;
				}

				.bothsides {
					width: 100%;
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
					width: 864px;
					align-items: center;

				}
			`}</style>
        </MainLayout>
    )
}