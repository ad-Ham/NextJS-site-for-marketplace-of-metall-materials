import Link from 'next/link'
import {SearchHeader} from './SearchHeader'
import {LoginHeader} from './LoginHeader'
import Logo from '../public/logo.svg'

export function MainLayout({ children }) {
	return (
		<>
			<div className="wrapper">
				<nav className="nav">
					<div className="container nav-container">
						<Link href="/"><Logo/></Link>
						<SearchHeader/>
						<Link href={'/buy'}><a className="buysell">Купить</a></Link>
						<Link href={'/sell'}><a className="buysell">Продать</a></Link>
						<LoginHeader/>
					</div>
				</nav>
				<main>
					{children}
				</main>
				<footer className="footer">
					<div className="container footer-container">
						<div className="footer-left">
							<Link href="/"><Logo/></Link>
							<Link href={'/help'}><a className="supportlink">Техподдержка</a></Link>
						</div>
						<ul className="footer-ul">
							<li>Телефон: <a href="tel:88005553535" className="footer-phone">8-800-555-35-35</a></li>
							<li>Уфа, улица Пушкина, дом Колотушкина</li>
							<li>© ООО "Рога и компыта", сайт сделан Алексеем, 2022</li>
						</ul>
					</div>
				</footer>
			</div>
			<style jsx>{`
				.nav {
					postion: fixed;
					height: 80px;
					background: #EFEFEF;
					right: 0;
					left: 0;
					top: 0;
				}

				.nav-container {
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 100%;
				}

				.buysell {
					color: #000000;
					text-decoration: none;
					font-weight: 400;
					font-size: 18px;
					line-height: 99.69%;
				}

				nav a:visited {
					color: #000000;
					text-decoration: none;
				}

				.inputSearch {
				 	width: 270px;
					height: 18px;
					background: #FFF7F7;
					border: 1px solid #000000;
					border-radius: 3px;
					padding: 1px 7px;
					margin: 0;
				}

				.searchbutton {
					padding: 0;
					border: 0;
					width: 22px;
					height: 22px;
				}

				.footer {
					height: 122px;
					background: #ADADAD;
					flex-shrink: 0;
					display: flex;
					flex-direction: row;
					margin-top: 24px;
				}

				.footer-container {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					height: 100%;
					width: 100%
				}

				.footer-left{
					display: flex;
					align-items: center;
				}

				.supportlink {
					text-decoration: none;
					font-weight: 500;
					font-size: 24px;
					line-height: 99.69%;
					text-align: center;
					color: #000000;
					margin-left: 49px;
				}

				.footer-ul {
					font-weight: 300;
					font-size: 14px;
					line-height: 99.69%;
					text-align: right;
					color: #000000;
				}

				.footer-ul > li + li {
					margin-top: 11px;
				}

				.footer-phone {
					color: #000000;
				}

				main {
					margin-top: 0;
				}
			`}</style>
		</>
	)
}