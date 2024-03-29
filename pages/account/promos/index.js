import Head from 'next/head'
import { MainLayout } from '../../../components/Layout/MainLayout'
import { MyPromosPageSearchPanel } from '../../../components/mypromos/MyPromosPageSearchPanel'
import { MyPromosPageCountPanel } from '../../../components/mypromos/MyPromosPageCountPanel'
import { MyPromosPageListHeader } from '../../../components/mypromos/MyPromosPageListHeader'
import { MyPromosPageList } from '../../../components/mypromos/MyPromosPageList'
import { MyPromosPages } from '../../../components/mypromos/MyPromosPages'
import { Adbannertop } from '../../../components/Adbannertop'
import Adbannerside from '/public/adbannerside.svg'
import Link from 'next/link'
import styles from '../../../styles/mypromos.module.scss'

export default function MyPromos() {
    return (
        <MainLayout>
            <Head>
                <title>Next Title</title>
                <meta name="keywords" content="next, javascript" />
                <meta name="description" content="this is" />
                <meta charSet="utf-8" />
            </Head>
            {/* <Adbannertop/> */}
            <div className={styles.content, styles.bothsides}>

                <div className={styles.leftside}>
                    <div className={styles.adbannerside}><Link href="https://www.example.com"><Adbannerside /></Link></div>
                </div>
                <div className={styles.rightside}>
                    <MyPromosPageSearchPanel />
                    <MyPromosPageCountPanel />
                    <MyPromosPageListHeader />
                    <div className={styles.promosrow}>
                        <MyPromosPageList />
                        <MyPromosPageList />
                        <MyPromosPageList />
                        <MyPromosPageList />
                        <MyPromosPageList />
                    </div>
                    <div className={styles.promosrow}>
                        <MyPromosPageList />
                        <MyPromosPageList />
                        <MyPromosPageList />
                        <MyPromosPageList />
                        <MyPromosPageList />
                    </div>
                    <div className={styles.promosrow}>
                        <MyPromosPageList />
                        <MyPromosPageList />
                        <MyPromosPageList />
                        <MyPromosPageList />
                        <MyPromosPageList />
                    </div>
                    <div className={styles.promosrow}>
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
				
			`}</style>
        </MainLayout>
    )
}