import Head from 'next/head'
import { MainLayout } from '../components/mainlayout/MainLayout'
import { Portions } from '../components/Portions'
import { MyPromosPageSearchPanel } from '../components/mypromos/MyPromosPageSearchPanel'
import { MyPromosPageCountPanel } from '../components/mypromos/MyPromosPageCountPanel'
import { MyPromosPageListHeader } from '../components/mypromos/MyPromosPageListHeader'
import { MyPromosPageList } from '../components/mypromos/MyPromosPageList'
import { MyPromosPages } from '../components/mypromos/MyPromosPages'
import Adbannertop from '/public/adbannertop.svg'
import Adbannerside from '/public/adbannerside.svg'
import Link from 'next/link'

export default function MyPromos() {
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
                    <MyPromosPageSearchPanel />
                    <MyPromosPageCountPanel />
                    <MyPromosPageListHeader />
                    <div className="promosrow">
                        <MyPromosPageList />
                        <MyPromosPageList />
                        <MyPromosPageList />
                        <MyPromosPageList />
                        <MyPromosPageList />
                    </div>
                    <div className="promosrow">
                        <MyPromosPageList />
                        <MyPromosPageList />
                        <MyPromosPageList />
                        <MyPromosPageList />
                        <MyPromosPageList />
                    </div>
                    <div className="promosrow">
                        <MyPromosPageList />
                        <MyPromosPageList />
                        <MyPromosPageList />
                        <MyPromosPageList />
                        <MyPromosPageList />
                    </div>
                    <div className="promosrow">
                        <MyPromosPageList />
                        <MyPromosPageList />
                        <MyPromosPageList />
                        <MyPromosPageList />
                        <MyPromosPageList />
                    </div>
                    <MyPromosPages />
                </div>
            </div>
            <style jsx>{`
				.promosrow {
					flex-direction: row;
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
                    margin-left: 19px;
					width: 864px;
					align-items: center;

				}
			`}</style>
        </MainLayout>
    )
}