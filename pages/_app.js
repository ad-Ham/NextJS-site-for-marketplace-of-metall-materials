import React, { useEffect, useState } from 'react'
import { MainLayout } from '../components/Layout/MainLayout'
import { showNotification } from '@mantine/notifications'
import '/styles/_app.scss'
import io from 'socket.io-client'
import { axios, checkToken } from '/middleware/axios.js'
import { useRouter } from 'next/router'

const socket = io.connect('http://localhost:3002')


const MyApp = ({ Component, pageProps }) => {
	const router = useRouter()
	const [userStatus, setUserStatus] = useState('')
	const [user, setUser] = useState('')
	const [currOnlineUsers, setCurrOnlineUsers] = useState(0)

	const changeUserStatus = () => {
		setUserStatus(checkToken(router.pathname))
		if (checkToken(router.pathname) === true) {
			axios.get('https://api.metalmarket.pro/getUserId', {params:{token: localStorage.getItem("token")}})
			.then(function(response) {
				let userId = response.data.user_id.user_id;
				axios.get('https://api.metalmarket.pro/getUser', {params:{id: userId}})
				.then(function(response) {
					setUser(response.data.user)
					socket.emit('user_connect', {user_id: 1})
				})
				.catch(function (error) {
						console.log(error);
					})
			})
			.catch(function (error) {
					console.log(error);
				})
		}
	}

	useEffect(() => {
		changeUserStatus()
		
		socket.on('update_online_users', (data) => {
			setCurrOnlineUsers(data.users)

			showNotification({
				title: 'Количество пользователей на сайте',
				message: `${data.users}`,
				// ${data.firstName} ${data.surName}
				autoClose: true,
	
				color: "green"
			})
		})

		socket.on('receive_message', (data) => {
			showNotification({
				title: 'Новое сообщения',
				message: `Новое сообщения от пользователя`,
				// ${data.firstName} ${data.surName}
				autoClose: true,
	
				color: "green"
			})
		})
	}, [socket])	

	pageProps.user = user 

	return (
		<>
			<MainLayout onlineUsers={currOnlineUsers}>
				<Component {...pageProps} />
			</MainLayout>
		</>
	)
}

export default MyApp;