import Head from 'next/head'
import { MainLayout } from '../components/mainlayout/MainLayout'
import { Portions } from '../components/Portions'
import { PromosCategoriesSelector } from '../components/promos/PromosCategoriesSelector'
import { PromosPageSearchPanel } from '../components/promos/PromosPageSearchPanel'
import { PromosPageSortPanel } from '../components/promos/PromosPageSortPanel'
import { PromosPageListHeader } from '../components/promos/PromosPageListHeader'
import { PromosPageList } from '../components/promos/PromosPageList'
import { PromosPages } from '../components/promos/PromosPages'
import { Adbannertop } from '../components/Adbannertop'
import Adbannerside from '/public/adbannerside.svg'
import Link from 'next/link'
import styles from '../styles/promos.module.scss'

const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '213.189.221.184',
        port: 5432,
        user: 'metallsite',
        password: 'EyPu{4L}5zhHT~VtC8x~XniK8',
        database: 'metallsite'
    }
});


export default function Promos({ promos }) {
    return (
        <MainLayout>
            <Head>
                <title>Next Title</title>
                <meta name="keywords" content="next, javascript" />
                <meta name="description" content="this is" />
                <meta charSet="utf-8" />
            </Head>
            <Adbannertop />
            <div className={styles.content, styles.bothsides}>

                <div className={styles.leftside}>
                    <PromosCategoriesSelector />
                    <Portions />
                    <div className={styles.adbannerside}><Link href="https://www.example.com"><Adbannerside /></Link></div>
                </div>
                <div className={styles.rightside}>
                    <PromosPageSearchPanel />
                    <PromosPageSortPanel />
                    <PromosPageListHeader />
                    <div className={styles.promosrow}>
                        <PromosPageList promos={promos} />
                        {/* <PromosPageList />
                        <PromosPageList />
                        <PromosPageList />
                        <PromosPageList /> */}
                    </div>
                    {/* <div className={styles.promosrow}>
                        <PromosPageList />
                        <PromosPageList />
                        <PromosPageList />
                        <PromosPageList />
                        <PromosPageList />
                    </div>
                    <div className={styles.promosrow}>
                        <PromosPageList />
                        <PromosPageList />
                        <PromosPageList />
                        <PromosPageList />
                        <PromosPageList />
                    </div>
                    <div className={styles.promosrow}>
                        <PromosPageList />
                        <PromosPageList />
                        <PromosPageList />
                        <PromosPageList />
                        <PromosPageList />
                    </div> */}
                    <PromosPages />
                </div>
            </div>
            <style jsx>{`
				
			`}</style>
        </MainLayout>
    )
}

export async function getServerSideProps() {
    const promos = await knex.select(`id`, `title`, `country`, 'region', 'email', 'phoneNumber', 'organizationName', 'description').table('promos');
    console.log(promos);
    return { props: { promos } }
}