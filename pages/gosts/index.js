import Head from 'next/head'
import { MainPageHelp } from '../../components/help/MainPageHelp'
import { GostsMainText } from '../../components/gosts/GostsMainText'
import { GostsList } from '../../components/gosts/GostsList'
import Link from 'next/link'
import styles from "../../styles/gosts.module.scss"

const Gosts = () => {
    return (
        <>
            <Head>
                <title>Next Title</title>
                <meta name="keywords" content="next, javascript" />
                <meta name="description" content="this is" />
                <meta charSet="utf-8" />
            </Head>
            {/* <Adbannertop /> */}
            {/* <div className={styles.adbannertop}><Link href="https://www.example.com"><Adbannertop /></Link></div> */}
            {/* <div className={styles.content}>
                <div className={styles.leftside}> */}
                    {/* <div className={styles.adbannerside}><Link href="https://www.example.com"><Adbannerside /></Link></div> */}
                {/* </div> */}
                
                    <GostsMainText />
                    <GostsList />
                {/* </div>
            </div> */}
        </>
    )
}

export default Gosts;