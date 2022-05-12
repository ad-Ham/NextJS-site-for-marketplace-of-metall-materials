import Link from 'next/link'
import { SearchHeader } from '../mainlayout/SearchHeader'
import { LoginButton } from '../mainlayout/LoginButton'
import { BurgerMenu } from '../BurgerMenu'
import Image from 'next/image'
// import smallLogo from '../../public/metal_small_logo'
// import profilePic from '../../public\metal_small_logo.png'
// import Logo from '/public/logo.svg'
import styles from './MainLayout.module.scss'
import { LoginHeaderButton } from '../mainLayout/LoginHeaderButton.js'
import { useState, useEffect } from 'react';
import { axios, checkToken } from '/middleware/axios.js';
import { Button, TextInput, MantineProvider } from '@mantine/core';
import { useModals, ModalsProvider  } from '@mantine/modals';

import { useRouter } from 'next/router';

export function MainLayout({ children }) {
	const router = useRouter();
	const [userStatus, setUserStatus] = useState('')
	useEffect(() => {
		changeUserStatus()
	}, [])

	function changeUserStatus() {
		setUserStatus(checkToken(router.pathname))
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
		<MantineProvider>
      	<ModalsProvider>
			<div className={styles.wrapper}>
				<nav className={styles.nav}>
					<div className={styles.container, styles.navcontainer}>
						<BurgerMenu />
						<Link href="/">
							<Image
								src="/logo.svg"
								width={225}
								height={60}
							/>
						</Link>
						{!userStatus && <LoginButton/>}
						{userStatus && <Link href='/profile'><a><Button variant="light" color="gray" size="xs" uppercase>
											Личный кабинет
									   </Button></a></Link>}
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
									width={225}
									height={60}
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

				a {
					color: unset
				}
			`}</style>
		</ModalsProvider>
    </MantineProvider>
	)
}