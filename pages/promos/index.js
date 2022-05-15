import Head from 'next/head'
import { PromosCategoriesSelector } from '../../components/promos/PromosCategoriesSelector'
import { PromosPageSearchPanel } from '../../components/promos/PromosPageSearchPanel'
import { PromosPageSortPanel } from '../../components/promos/PromosPageSortPanel'
import { PromosPageListHeader } from '../../components/promos/PromosPageListHeader'
import { PromosPageList } from '../../components/promos/PromosPageList'
import { PromosPages } from '../../components/promos/PromosPages'
import styles from '/styles/promos/promos.module.scss'
const axios = require('axios').default;

export const getServerSideProps = async (context) => {
    // const promos = await axios.get('http://localhost:3001/promosquery', {
    //     headers: {
    //         'Accept': 'application/json'
    //     }
    // })
    return {
        props: {
            promos: []//promos.data.promos,
        },
    }
}

const Promos = ({ promos }) => {
    console.log(promos)

    return (
        <>
            <Head>
                <title>Объявления</title>
                <meta name="keywords" content="next, javascript" />
                <meta name="description" content="this is" />
                <meta charSet="utf-8" />
            </Head>
            <div className={styles.content, styles.bothsides}>
                <div className={styles.leftside}>
                    <PromosCategoriesSelector />
                </div>
                <div className={styles.rightside}>
                    <PromosPageSearchPanel />
                    <PromosPageSortPanel />
                    <PromosPageListHeader />
                    <div className={styles.promosrow}>
                        {promos.map(promo => (
                            <PromosPageList key={promo.id} id={promo.id} title={promo.title} region={promo.region} organizationName={promo.organizationName} />
                        ))}
                    </div>
                    <PromosPages />
                </div>
            </div>
        </>
    )
}

export default Promos;