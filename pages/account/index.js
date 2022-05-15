import Head from 'next/head'
import { MainLayout } from '../../components/Layout/MainLayout'
import { PersonalData } from '../../components/profile/PersonalData'
import { Adbannertop } from '../../components/Adbannertop'
import Mypromosicon from '../public/mypromosicon.svg'
import Submitpromoicon from '../public/submitpromoicon.svg'
import Link from 'next/link'
import styles from '../styles/profile.module.scss'

export default function Profile() {
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
					<PersonalData />
					<div className={styles.buttonsrow}>
						<Link href="/mypromos" className={styles.profilebutton} passHref>
							<Mypromosicon />
							<p>Мои объявления</p>
						</Link>
						<Link href="/submitpromo" className={styles.profilebutton} passHref>
							<Submitpromoicon />
							<p>Подать объявление</p>
						</Link>
					</div>
				</div>
				<div className={styles.rightside}>
					<div className={styles.buttonsrow}>
						<Link href="/mypromos" className={styles.profilebutton} passHref>
							<Mypromosicon />
							<p>Мои объявления</p>
						</Link>
						<Link href="/submitpromo" className={styles.profilebutton} passHref>
							<Submitpromoicon />
							<p>Подать объявление</p>
						</Link>
					</div>
				</div>
			</div>
		</MainLayout>
	)
}