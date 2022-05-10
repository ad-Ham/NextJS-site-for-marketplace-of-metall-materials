import Head from 'next/head'
import { useState, useEffect } from 'react';
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
const axios = require('axios').default;


export default function Promos() {

    const [promos, setPromos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/promosquery', {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(function (response) {
                console.log(response);
                const promos = response.data.promos;
                setPromos(promos)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    console.log(promos)

    return (
        <MainLayout>
            <Head>
                <title>Next Title</title>
                <meta name="keywords" content="next, javascript" />
                <meta name="description" content="this is" />
                <meta charSet="utf-8" />
            </Head>
            {/* <Adbannertop /> */}
            <div className={styles.content, styles.bothsides}>

                <div className={styles.leftside}>
                    <PromosCategoriesSelector />
                    <Portions />
                    {/* <div className={styles.adbannerside}><Link href="https://www.example.com"><Adbannerside /></Link></div> */}
                </div>
                <div className={styles.rightside}>
                    <PromosPageSearchPanel />
                    <PromosPageSortPanel />
                    <PromosPageListHeader />
                    <div className={styles.promosrow}>
                        {promos.map(promos => (
                            <PromosPageList key={promos} id={promos.id} title={promos.title} region={promos.region} organizationName={promos.organizationName} />
                        ))}
                        {/* {promos.map(promos => (
                            <PromosPageList key={promos} id={promos[1].id} title={promos[1].title} region={promos[1].region} organizationName={promos[1].organizationName} />
                        ))}
                        {promos.map(promos => (
                            <PromosPageList key={promos} id={promos[2].id} title={promos[2].title} region={promos[2].region} organizationName={promos[2].organizationName} />
                        ))} */}
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