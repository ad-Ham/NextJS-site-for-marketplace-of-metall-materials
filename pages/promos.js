import Head from 'next/head'
import { MainLayout } from '../components/mainlayout/MainLayout'
import { Portions } from '../components/Portions'
import { PromosCategoriesSelector } from '../components/promos/PromosCategoriesSelector'
import { PromosPageSearchPanel } from '../components/promos/PromosPageSearchPanel'
import { PromosPageSortPanel } from '../components/promos/PromosPageSortPanel'
import { PromosPageListHeader } from '../components/promos/PromosPageListHeader'
import { PromosPageList } from '../components/promos/PromosPageList'
import { PromosPages } from '../components/promos/PromosPages'
import Adbannertop from '/public/adbannertop.svg'
import Adbannerside from '/public/adbannerside.svg'
import Link from 'next/link'

export default function Promos() {
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
                    <PromosCategoriesSelector />
                    <Portions />
                    <div className="adbannerside"><Link href="https://www.example.com"><Adbannerside /></Link></div>
                </div>
                <div className="rightside">
                    <PromosPageSearchPanel />
                    <PromosPageSortPanel />
                    <PromosPageListHeader />
                    <div className="promosrow">
                        <PromosPageList />
                        <PromosPageList />
                        <PromosPageList />
                        <PromosPageList />
                        <PromosPageList />
                    </div>
                    <div className="promosrow">
                        <PromosPageList />
                        <PromosPageList />
                        <PromosPageList />
                        <PromosPageList />
                        <PromosPageList />
                    </div>
                    <div className="promosrow">
                        <PromosPageList />
                        <PromosPageList />
                        <PromosPageList />
                        <PromosPageList />
                        <PromosPageList />
                    </div>
                    <div className="promosrow">
                        <PromosPageList />
                        <PromosPageList />
                        <PromosPageList />
                        <PromosPageList />
                        <PromosPageList />
                    </div>
                    <PromosPages />
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
					width: 864px;
					align-items: center;

				}
			`}</style>
        </MainLayout>
    )
}