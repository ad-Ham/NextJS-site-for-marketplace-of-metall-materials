import React, { useEffect, useState } from 'react'
import { MainLayout } from '../components/Layout/MainLayout'
import { showNotification } from '@mantine/notifications'
import '/styles/_app.scss'
import io from 'socket.io-client'
import { axios, checkToken } from '/middleware/axios.js'
import { useRouter } from 'next/router'

const users_socket = io.connect('https://api.metalmarket.pro/users')
const messages_socket = io.connect('https://api.metalmarket.pro/messages', { autoConnect: false })


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
			axios.get('https://api.metalmarket.pro/getUserId', {params:{token: localStorage.getItem("token")}})
			.then(function(response) {
				let userId = response.data.user_id.user_id;
				axios.get('https://api.metalmarket.pro/getUser', {params:{id: userId}})
				.then(function(response) {
					console.log(response.data.user)
					setUser(response.data.user)
					pageProps['user'] = response.data.user
					users_socket.emit('user_connect', {user_id: response.data.user.id})
				})
				.catch(function (error) {
						console.log(error);
					})
			})
			.catch(function (error) {
					console.log(error);
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
	}, [users_socket, messages_socket, user])	

	return (
		<>
			<MainLayout onlineUsers={currOnlineUsers} user={user} chats={chats}>
				<Component {...pageProps} />
			</MainLayout>
		</>
	)
}

export default MyApp;