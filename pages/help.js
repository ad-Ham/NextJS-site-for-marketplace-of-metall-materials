import Head from 'next/head'
import { MainLayout } from '../components/mainlayout/MainLayout'
import { MainPageHelp } from '../components/help/MainPageHelp'
import Adbannertop from '/public/adbannertop.svg'
import Link from 'next/link'

export default function Help() {
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
                <div className="rightside">
                    <MainPageHelp />
                </div>
            </div>
            <style jsx>{`
                .adbannertop {
                    margin-top: 13px;
                }
			`}</style>
        </MainLayout>
    )
}