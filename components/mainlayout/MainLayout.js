import Link from 'next/link'
import { SearchHeader } from '../mainlayout/SearchHeader'
import { LoginHeader } from '../mainlayout/LoginHeader'
import { BurgerMenu } from '../BurgerMenu'
import Image from 'next/image'
// import smallLogo from '../../public/metal_small_logo'
// import profilePic from '../../public\metal_small_logo.png'
// import Logo from '/public/logo.svg'
import styles from './MainLayout.module.scss'

export function MainLayout({ children }) {
	return (
		<>
			<div className={styles.wrapper}>
				<nav className={styles.nav}>
					<div className={styles.container, styles.navcontainer}>
						<BurgerMenu />
						<Link href="/">
							<Image
								src="/metal_small_logo.png"
								width={45}
								height={45}
							/>
						</Link>
						<SearchHeader />
						{/* <Link href={'/promos'}><a className={styles.buysell}>Доска объявлений</a></Link> */}
						{/* <p>Курс валют</p> */}
						{/* <Link href={'/sell'}><a className={styles.buysell}>Продать</a></Link> */}
						<LoginHeader />
					</div>
				</nav>
				<main className={styles.main}>
					{children}
				</main>
				<footer className={styles.footer}>
					<div className={styles.container, styles.footercontainer}>
						<div className={styles.footerleft}>
							<Link href="/">
								<Image
									src="/metal_small_logo.png"
									width={45}
									height={45}
								/>
							</Link>
							<Link href={'/help'}><a className={styles.supportlink}>Техподдержка</a></Link>
						</div>
						<ul className={styles.footerul}>
							{/* <li>Телефон: <a href="tel:88005553535" className={styles.footerphone}>8-800-555-35-35</a></li> */}
							<li>ООО &quot;Технические системы&quot; г.Уфа, Республика Башкортостан</li>
							<li>© ООО &quot;Технические системы&quot;, 2022</li>
						</ul>
					</div>
				</footer>
			</div>
			<style jsx>{`
				
			`}</style>
		</>
	)
}