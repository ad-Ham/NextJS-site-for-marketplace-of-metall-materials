import Link from 'next/link'
import { SearchHeader } from '../mainlayout/SearchHeader'
import { LoginHeader } from '../mainlayout/LoginHeader'
import { BurgerMenu } from '../BurgerMenu'
import Image from 'next/image'
// import smallLogo from '../../public/metal_small_logo'
// import profilePic from '../../public\metal_small_logo.png'
// import Logo from '/public/logo.svg'
import styles from './MainLayout.module.scss'
import { LoginHeaderButton } from '../mainLayout/LoginHeaderButton.js'
import { useState, useEffect } from 'react';
import { axios, checkToken } from '/middleware/axios.js';
import { Button } from '@mantine/core';

import { useRouter } from 'next/router';

export function MainLayout({ children }) {
	const router = useRouter();
	useEffect(() => {
		const userStatus = checkToken(router.pathname)
		console.log(userStatus)
	}, [])
	
	const removeWindow = e => {
		elem.classList.remove("modWindowWrapper");
	}

	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		axios.post('http://localhost:3001/login', {
		    login: login,
		    password: password
		  })
		  .then(function (response) {
		  	if (response.status===200) {
		  		localStorage.setItem('token', response.data.token);
	    		alert('Вы успешно вошли!')
	    		elem.classList.remove("modWindowWrapper")
		  	} else if (response.status===404) {
		  		alert('Пользователь не найден')
		  	} else if (response.status===403) {
		  		alert('Неверный пароль')
		  	}
		    
		    e.target.reset();
		  })
		  .catch(function (error) {
		  	alert('Не верный email или пароль!')
		    console.log(error);
		  });
	}



	return (
		<>
			<div id='elem' className="modWindowDisable">
				<button type="button" onClick={removeWindow} className="cross"></button>
				<div className="modWindow">
					<form className="maindiv" onSubmit={handleSubmit}>
						<div className="loginDiv">
							<input type="text" 
								   placeholder="e-mail" 
								   required
								   onChange={e => setLogin(e.target.value)}/>
							<input type="password" 
								   placeholder="Пароль" 
								   required
								   onChange={e => setPassword(e.target.value)}
								   className="passwordInput"/>
					    </div>
						<div className="loginButton"><Button type="submit" variant="gradient" gradient={{ from: 'teal', to: 'lime' }}>
							Войти
						</Button>
						<Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
							<Link href={'/reg'}><a className="linkreg">Регистрация</a></Link>
						</Button>
						</div>
					</form>
				</div>
			</div>
			<div className={styles.wrapper}>
				<nav className={styles.nav}>
					<div className={styles.container, styles.navcontainer}>
						<BurgerMenu />
						<Link href="/">
							<Image
								src="/logo.svg"
								width={45}
								height={45}
							/>
						</Link>
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
									src="/logo.svg"
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
				.linkreg {
					text-decoration: none;					
					color: white;
				}
				
				.loginButton {
					max-width: 5vw;
					margin-top: 20px;
				}

				.passwordInput {
					margin-top: 10px;
				}

				.loginDiv {
					display: flex;
					flex-direction: column;
				}

				.maindiv {
					height: 100%;
					width: 100%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}

				.cross {
					width: 2vw;
					height: 2vw;
					background-color: unset;
					background-image: url("/cross.svg");
					background-size: contain;
    				opacity: 0.5;
				}

				.modWindowDisable {
					display: none;
				}

				.modWindowWrapper {
					display: flex;
					position: fixed;
					background: rgb(0,0,0,0.7);
					width: 100vw;
					height: 100vh;
					top: 0;
					left: 0;
					margin: 0;
					z-index: 99;
				}

				.modWindow {
					z-index: 100;
					height: 20vh;
					width: 20vw;
					background: white;
					margin: auto;
					padding: 15px;
					border-radius: 4px;
					display: flex;
					align-items: center;
				}
			`}</style>
		</>
	)
}