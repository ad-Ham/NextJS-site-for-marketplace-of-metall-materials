import Head from 'next/head'
import { MainLayout } from '../components/mainlayout/MainLayout'
import { MainPageHelp } from '../components/help/MainPageHelp'
import Adbannertop from '/public/adbannertop.svg'
import Link from 'next/link'
import styles from "../styles/help.module.scss"

export default function Help() {
    return (
        <MainLayout>
            <Head>
                <title>Next Title</title>
                <meta name="keywords" content="next, javascript" />
                <meta name="description" content="this is" />
                <meta charSet="utf-8" />
            </Head>
            <div className={styles.adbannertop}><Link href="https://www.example.com"><Adbannertop /></Link></div>
            <div className={styles.content, styles.bothsides}>
                <div className={styles.rightside}>
                    <MainPageHelp />
                </div>
            </div>
            <style jsx>{`
			`}</style>
        </MainLayout>
    )
}