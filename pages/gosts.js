import Head from 'next/head'
import { MainLayout } from '../components/mainlayout/MainLayout'
import { MainPageHelp } from '../components/help/MainPageHelp'
import { Portions } from '../components/Portions'
import Adbannerside from '../public/adbannerside.svg'
import Adbannertop from '/public/adbannertop.svg'
import { GostsMainText } from '../components/gosts/GostsMainText'
import { GostsList } from '../components/gosts/GostsList'
import Link from 'next/link'
import styles from "../styles/gosts.module.scss"

export default function Gosts() {
    return (
        <MainLayout>
            <Head>
                <title>Next Title</title>
                <meta name="keywords" content="next, javascript" />
                <meta name="description" content="this is" />
                <meta charSet="utf-8" />
            </Head>
            {/* <Adbannertop /> */}
            {/* <div className={styles.adbannertop}><Link href="https://www.example.com"><Adbannertop /></Link></div> */}
            <div className={styles.content, styles.bothsides}>
                <div className={styles.leftside}>
                    <Portions />
                    <div className={styles.adbannerside}><Link href="https://www.example.com"><Adbannerside /></Link></div>
                </div>
                <div className={styles.rightside}>
                    <GostsMainText />
                    <GostsList />
                </div>
            </div>
            <style jsx>{`
			`}</style>
        </MainLayout>
    )
}