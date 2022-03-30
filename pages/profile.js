import Head from 'next/head'
import {MainLayout} from '../components/MainLayout/MainLayout'
import {Portions} from '../components/Portions'
import {PersonalData} from '../components/Profile/PersonalData'
import Adbannertop from '../public/adbannertop.svg'
import Mypromosicon from '../public/mypromosicon.svg'
import Submitpromoicon from '../public/submitpromoicon.svg'
import Link from 'next/link'
import styles from '../styles/profile.module.scss'

export default function Profile() {
	return (
		<MainLayout>
			<Head>
				<title>Next Title</title>
				<meta name="keywords" content="next, javascript"/>
				<meta name="description" content="this is"/>
				<meta charSet="utf-8"/>
			</Head>
			<div className={styles.adbannertop}><Link href="https://www.example.com"><Adbannertop/></Link></div>
			<div className={styles.content, styles.bothsides}>
				
				<div className={styles.leftside}>
					<PersonalData/>
					<Portions/>
				</div>
				<div className={styles.rightside}>
					<div className={styles.buttonsrow}>
						<Link href="/mypromos"><a className={styles.profilebutton}>
							<Mypromosicon/>
							<p>Мои объявления</p>
						</a></Link>
						<Link href="/submitpromo"><a className={styles.profilebutton}>
							<Submitpromoicon/>
							<p>Подать объявление</p>
						</a></Link>
					</div>
				</div>
			</div>
			<style jsx>{`
				
			`}</style>
		</MainLayout>
	)
}