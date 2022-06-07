import React, { useEffect, useState } from 'react'
import { MainLayout } from '../components/Layout/MainLayout'
import { showNotification } from '@mantine/notifications'
import '/styles/_app.scss'
import io from 'socket.io-client'
import { axios, checkToken } from '../middleware/axios'
import { useRouter } from 'next/router'

// const users_socket = io.connect('http://localhost:3001/users')
// const messages_socket = io.connect('http://localhost:3001/messages', { autoConnect: false })
const users_socket = io.connect('http://localhost:3001/users')
const messages_socket = io.connect('http://localhost:3001/messages', { autoConnect: false })


const MyApp = ({ Component, pageProps }) => {
	const router = useRouter()
	const [chats, setChats] = useState(undefined)
	const [userStatus, setUserStatus] = useState('')
	const [user, setUser] = useState({
		image: '',
		surName: '',
		firstName: '',
		lastName: '',
		email: ''
	})
	const [currOnlineUsers, setCurrOnlineUsers] = useState(0)

	const changeUserStatus = () => {
		setUserStatus(checkToken(router.pathname))
		if (checkToken(router.pathname) === true) {
			axios.get('http://localhost:3001/getUserId', {params: {token: localStorage.getItem("token")}})
			.then(function(response) {
				console.log(123)
				let userId = response.data.user_id.user_id;
				axios.get('http://localhost:3001/getUser', {params: {id: userId}})
				.then(function(response) {
					setUser(response.data.user)
					users_socket.emit('user_connect', {user_id: response.data.user.id})
				})
				.catch(function (error) {
						console.log(error);
					})
			})
			.catch(function (error) {
					console.log('error', error);
				})
		}
		else {
			users_socket.emit('user_connect', {user_id: null})
		}
	}

	useEffect(() => {
	// 	if (router.pathname === '/chats') setChats(true)

		changeUserStatus()
		
	// 	users_socket.on('update_online_users', (data) => {
	// 		setCurrOnlineUsers(data.users)
	// 	})

	// 	messages_socket.on('receive_message', (data) => {
	// 		showNotification({
	// 			title: 'Новое сообщения',
	// 			message: `Новое сообщения от пользователя`,
	// 			// ${data.firstName} ${data.surName}
	// 			autoClose: true,
	
	// 			color: "green"
	// 		})
	// 	})
	}, [users_socket, messages_socket, user])	

	return (
		<>
			<MainLayout onlineUsers={currOnlineUsers} user={user} userStatus={userStatus} chats={chats}>
				<Component {...pageProps} user={user} />
			</MainLayout>
		</>
	)
}

export default MyApp;