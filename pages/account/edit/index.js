import Head from 'next/head'
import { MainLayout } from '../../../components/Layout/MainLayout'
import { YourData } from '../../../components/editprofile/YourData'
import { JurData } from '../../../components/editprofile/JurData'
import { Adbannertop } from '../../../components/Adbannertop'
import Link from 'next/link'
import styles from "../../../styles/editprofile.module.scss"

const EditProfile = () => {
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
                <div className={styles.rightside}>
                    <YourData />
                    <JurData />
                </div>
            </div>
            <style jsx>{`
			`}</style>
        </MainLayout>
    )
}

export default EditProfile;