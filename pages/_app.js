import React, { useEffect, useState } from 'react'
import { MainLayout } from '../components/Layout/MainLayout'
import { showNotification } from '@mantine/notifications'
import { Group, Image } from '@mantine/core'
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
	const [chats, setChats] = useState(undefined)
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
		if (router.pathname === '/chats') {
			setChats(true)
			messages_socket.connect()
		}
		else {
			if (messages_socket.connected) {
				messages_socket.disconnect()
			}
			setChats(false)
		}

		if (loadingUser) changeUserStatus()
		
		users_socket.on('update_online_users', (data) => {
			setCurrOnlineUsers(data.users)
		})

		messages_socket.on('receive_message', (data) => {
			showNotification({
				title: 'Новое сообщения',
				message: `Новое сообщения от пользователя`,
				// ${data.firstName} ${data.surName}
				autoClose: true,
	
				color: "green"
			})
		})
	}, [users_socket, messages_socket])	

	return (
		<>
		{loadingUser ?
			<div 
			style = {{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
			}}>
				<Group spacing='xl' position="center">
					<ClockLoader
						color='#F5A623'
						size={ (width + height) / 45 }
					/>
					<Image
						alt="metal-merket.pro"
						src="/logo.svg"
						style={{
							display: 'block',
							width: '50%'
						}}
					/>
				</Group>							
			</div>
			:
			<MainLayout onlineUsers={currOnlineUsers} user={user} userStatus={userStatus} chats={chats}>
				<Component {...pageProps} user={user} userStatus={userStatus}/>
			</MainLayout>	
		}
	</>
	)
}

export default MyApp