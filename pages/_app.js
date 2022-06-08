import React, { useEffect, useState } from 'react'
import { MainLayout } from '../components/Layout/MainLayout'
import { showNotification } from '@mantine/notifications'
import { Center, Group, Image } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks';
import '/styles/_app.scss'
import io from 'socket.io-client'
import { axios, checkToken } from '../middleware/axios'
import { useRouter } from 'next/router'
import { ClockLoader } from 'react-spinners'

// const users_socket = io.connect('https://api.metalmarket.pro/users')
// const messages_socket = io.connect('https://api.metalmarket.pro/messages', { autoConnect: false })
const users_socket = io.connect('https://api.metalmarket.pro/users')
const messages_socket = io.connect('https://api.metalmarket.pro/messages', { autoConnect: false })


const MyApp = ({ Component, pageProps }) => {
	const router = useRouter()

	const { height, width } = useViewportSize();

	const [loading, setLoading] = useState(true)
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
				setLoading(false)
			})
			.catch(function (error) {
				console.log(error);
				setLoading(false)
			})
		}
		else {
			users_socket.emit('user_connect', {user_id: null})
		}
	}

	useEffect(() => {
		if (router.pathname === '/chats') setChats(true)

		changeUserStatus()
		
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
		{loading ? 
			<>
				<div 
				style = {{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					height: '100vh',
				}}>
					<Group spacing="xl" position="center">
						<ClockLoader
							color='#F5A623'
							size={ 60 }
						/>
						<Image
							alt="metal-merket.pro"
							src="/logo.svg"
							width='60%'
						/>
					</Group>
				</div>
			</> 	
		:
		<MainLayout onlineUsers={currOnlineUsers} user={user} userStatus={userStatus} chats={chats}>
			<Component {...pageProps} user={user} userStatus={userStatus}/>
		</MainLayout>	
	}
	</>
	)
}

export default MyApp;