import Head from 'next/head'
import { MainLayout } from '../components/mainlayout/MainLayout'
import { EditPasswordPage } from '../components/editpassword/EditPasswordPage'
import {Adbannertop} from '../components/Adbannertop'
import Link from 'next/link'
import styles from "../styles/editpassword.module.scss"

export default function EditPassword() {
    return (
        <MainLayout>
            <Head>
                <title>Next Title</title>
                <meta name="keywords" content="next, javascript" />
                <meta name="description" content="this is" />
                <meta charSet="utf-8" />
            </Head>
            <Adbannertop/>
            <div className={styles.content, styles.bothsides}>
                <EditPasswordPage />
            </div>
            <style jsx>{`
			`}</style>
        </MainLayout>
    )
}