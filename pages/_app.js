import React, { useEffect, useState } from 'react'
import { MainLayout } from '../components/Layout/MainLayout'
import { showNotification } from '@mantine/notifications'
import { Group, Image,MediaQuery } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks';
import '/styles/_app.scss'
import { axios, checkToken } from '../middleware/axios'
import { useRouter } from 'next/router'
import { ClockLoader } from 'react-spinners'
import { messages_socket, users_socket } from '../middleware/sockets'


const MyApp = ({ Component, pageProps }) => {
	const router = useRouter()

	const { height, width } = useViewportSize()

	const [loadingUser, setLoadingUser] = useState(true)
	const [userStatus, setUserStatus] = useState(null)
	const [user, setUser] = useState({
		id : null,
		image : '',
		surName : '',
		firstName : '',
		lastName : '',
		email : ''
	})
	const [currOnlineUsers, setCurrOnlineUsers] = useState(0)

	const changeUserStatus = () => {
		const checkStatus = checkToken(router.pathname)

		setUserStatus(checkStatus)

		if (checkStatus === true) {
			axios.get('https://api.metalmarket.pro/getUser', {params: {token: localStorage.getItem("token")}})
			.then(function(response) {
				setUser(response.data.user)
				users_socket.emit('user_connect', {user_id: response.data.user.id})
				setLoadingUser(false)
			})
			.catch(function (error) {
				console.log(error)
				setLoadingUser(false)
			})
		}
		else {
			users_socket.emit('user_connect', {user_id: null})
			setLoadingUser(false)
		}
	}

	useEffect(() => {
		if (loadingUser) changeUserStatus()
		
		users_socket.on('update_online_users', (data) => {
			setCurrOnlineUsers(data.users)
		})

		users_socket.on('new_message', (data) => {
			if (router.pathname !== '/chats') {
				showNotification({
					title: 'Новое сообщение',
					message: 'Новое сообщение',
					// message: `Новое сообщение от пользователя ${data.message.sender_firsName} ${data.message.sender_surName}`,
					autoClose: true,
		
					color: "green"
				})
			}
		})
	}, [users_socket, messages_socket])	

	return (
		<>
		{loadingUser ?
			// <div style = {{
			// 	display: 'flex',
			// 	alignItems: 'center',
			// 	justifyContent: 'center',
			// 	height: '100vh',
			// }}>
			// 	<div spacing='xl' position="center">
			// 		<div className="loader">
			// 			<div className="inner one"></div>
			// 			<div className="inner two"></div>
			// 			<div className="inner three"></div>
			// 		</div>
				
			// 		<Image
			// 			alt="metal-merket.pro"
			// 			src="/logo.svg"
			// 			style={{
			// 			display: 'block',
			// 			width: '50%'
			// 			}}
			// 		/>
			// 	</div>
			// </div>
		
			<div style={{
				position: 'relative',
				alignItems: 'center',
				display: 'inline-flex',
				justifyContent: 'center',
				width: '100%',
				marginLeft: '10%',
				height: '100vh'
			}}>							
					<div className="loader">
			 			<div className="inner one"></div>
		 				<div className="inner two"></div>
						<div className="inner three"></div>			 			
					</div>					
					<div>							
					<Image
			 			alt="metal-merket.pro"
			 			src="/logo.svg"
			 			style={{
						marginLeft:10,
			 			display: 'block',
			 			width: '50%'
			 			}}
			 		/>
					</div>												
			</div>
		
			:
			<MainLayout onlineUsers={currOnlineUsers} user={user} userStatus={userStatus}>
				<Component {...pageProps} user={user} userStatus={userStatus}/>
			</MainLayout>	
		}
	
	<style jsx>{`
		.loader {
			position: absolute right;
			top: calc(50% - 32px);
			left: calc(50% - 32px);
			width: ${(width + height) / 45}px;
			height: ${(width + height) / 45}px;
			border-radius: 50%;
			perspective: 800px;
		  }
		  
		  .inner {
			position: absolute;
			box-sizing: border-box;
			width: 100%;
			height: 100%;
			border-radius: 50%;  
		  }
		  
		  .inner.one {
			left: 0%;
			top: 0%;
			animation: rotate-one 1s linear infinite;
			border-bottom: 3px solid #FF4F00;
		  }
		  
		  .inner.two {
			right: 0%;
			top: 0%;
			animation: rotate-two 1s linear infinite;
			border-right: 3px solid #FF4F00;
		  }
		  
		  .inner.three {
			right: 0%;
			bottom: 0%;
			animation: rotate-three 1s linear infinite;
			border-top: 3px solid #FF4F00;
		  }
		  
		  @keyframes rotate-one {
			0% {
			  transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
			}
			100% {
			  transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
			}
		  }
		  
		  @keyframes rotate-two {
			0% {
			  transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
			}
			100% {
			  transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
			}
		  }
		  
		  @keyframes rotate-three {
			0% {
			  transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
			}
			100% {
			  transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
			}
		  }
	`}
	</style> 
	</>
	)
}

export default MyApp