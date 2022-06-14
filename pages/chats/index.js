// import { UserChats } from "../../components/chats/chats"
import axios from "axios"
import React, { useState, useEffect } from 'react'
import { useViewportSize } from '@mantine/hooks'
import { messages_socket } from '../../middleware/sockets'
import { useStyles } from '../../components/chats/chatsStyles'
import { Text, Group, Avatar, Textarea, Grid, ScrollArea, Card, SimpleGrid, ActionIcon } from '@mantine/core'
import { Send } from 'tabler-icons-react'
import { useForm, formList} from "@mantine/form"
import { showNotification } from '@mantine/notifications'
// const imageToBase64 = require('image-to-base64')


const support_id = 88


// export async function getServerSideProps(context) {
// 	const res = await axios.get('https://api.metalmarket.pro/getuserdialogs', {
// 		params: {
// 			user_id: user_id
// 		},
// 		headers: {
// 			'Accept': 'application/json'
// 		}
// 	})
	
// 	const userDialogs = res.data.userDialogs

// 	for (let i = 0; i < userDialogs.length; i++) {
// 		userDialogs[i].dialog_user[0].image = await imageToBase64(userDialogs[i].dialog_user[0].photopath)
// 	}	

// 	return {
// 		props: {
// 			userDialogs: userDialogs
// 		}
// 	}
// }


export function ChatsPage({ user, userStatus }) {
	const userDialogsMessages = useForm({
		initialValues: {
			dialogs: formList([])
		}
	})

	const { height, width } = useViewportSize()
	const { classes, cx } = useStyles()
	const [supportMode, setSupportMode] = useState(false)
	const [connected, setConnected] = useState(false)
	const [activeDialogIndex, setActiveDialogIndex] = useState(0)
	const [activeDialogId, setActiveDialogId] = useState(null)
	const [dialogUserImage, setDialogUserImage] = useState('')
	const [messageText, setMessageText] = useState('')
		
	useEffect(() => {
		if (!connected) {
			setConnected(true)

			axios.get('https://api.metalmarket.pro/getuserdialogs', {
				params: {
					user_id: user.id
				},
				headers: {
					'Accept': 'application/json'
				}
			})
			.then(res => {
				userDialogsMessages.setFieldValue('dialogs', res.data.userDialogs)

				// for (let i = 0; i < userDialogs.length; i++) {
				// 	imageToBase64(userDialogs[i].dialog_user[0].photopath)
				// 	.then(image => userDialogs[i].dialog_user[0].image = image)
				// }
			})

			messages_socket.emit('register_user', { user_id: user.id })
		}

		messages_socket.on('receive_message', (data) => {
			const dialogIndex = userDialogsMessages.values.dialogs.findIndex(dialog => dialog.dialog_user_id === parseInt(data.dialog_id))

			if (dialogIndex === -1) {
				axios.get('https://api.metalmarket.pro/getDialogUser', {params: {user_id: id}})
				.then(

				) 
				.catch()
			}
			else {
				setMessages(data.message, dialogIndex)
			}
		})

		
		// messages_socket.on('delete_messsage', (data) => {

		// })

	}, [messages_socket])

	function changeDialogs(message, index, callback) {
		if (index === undefined) {
			userDialogsMessages.values.dialogs[activeDialogIndex].messages.push(message)
			var curr_dialog = userDialogsMessages.values.dialogs.splice(activeDialogIndex, 1)
		}
		else {
			userDialogsMessages.values.dialogs[index].messages.push(message)
			var curr_dialog = userDialogsMessages.values.dialogs.splice(index, 1)
		}
		
		callback(curr_dialog)
	}

	function setMessages(message, index=undefined) {
		changeDialogs(message, index, function(curr_dialog) {
			userDialogsMessages.values.dialogs.unshift(curr_dialog[0])
			setActiveDialogIndex(0)
			setMessageText('')
		})
	}

	const sendMessage = () => {
		let today = new Date()

		let day = String(today.getDate()).padStart(2, '0')
		let month = String(today.getMonth() + 1).padStart(2, '0')
		let year = today.getFullYear()
		var time = today.getHours() + ":" + today.getMinutes()

		let message_time = `${year}-${month}-${day} ${time}`

		if (!supportMode) {
			var buildedMessage = {
				id: null,
				sender_id: user.id,
				sender_post: user.post,
				sender_orgName: user.orgName,
				message_text: messageText,
				message_time: message_time,
				sender_firstName: user.firstName,
				sender_surName: user.surName
			}
		}
		else {
			var buildedMessage = {
				id: null,
				sender_id: support_id,
				sender_post: null,
				sender_orgName: null,
				message_text: messageText,
				message_time: message_time,
				sender_firstName: 'Поддержка сайта metalmarket.pro',
				sender_surName: null
			}
		}

		const dbMessage = {
			sender_id: supportMode ? support_id : user.id,
			receiver_id: activeDialogId,
			message_text: messageText
		}

		setMessages(buildedMessage)
		messages_socket.emit('send_message', { receiver_id: supportMode ? support_id : activeDialogId, dbMessage: dbMessage, buildedMessage: buildedMessage })
	}
	
	if (userDialogsMessages.values.dialogs.length != 0) {
		var activeDialog = userDialogsMessages.values.dialogs[activeDialogIndex].messages.map(message => (
			<>
				<div key={message.id} className={classes.mainMessage}>
					<Group>
					<Avatar 
						src={message.sender_id === user.id ? ('data:image/' + ';base64,' + user.image) : ('data:image/' + ';base64,' + dialogUserImage)} 
						radius="xl"
						size={(dialogUserImage) ? "md" : "lg"}
					/>
						<div>
							<Group position="left">
								<Text size="sm">{`${message.sender_firstName} ${message.sender_surName}`}</Text>
								<Text size="xs" color="dimmed">
								{`${message.message_time.slice(8, 10)}.${message.message_time.slice(5, 7)}.${message.message_time.slice(0, 4)}
								${message.message_time.slice(11, 16)}`}
								</Text>
							</Group>
							<Text size="xs" style={{marginTop: 3}}>{`${message.sender_post}, ${message.sender_orgName}`}</Text>
						</div>
					</Group>
					<Text className={classes.messageBody} size="sm">
						{message.message_text}
					</Text>
				</div>
			</>
		))

		var dialogs = userDialogsMessages.values.dialogs.map((dialog, index) => (<>
				<Group 
				position="apart"
				className={cx(classes.link, { [classes.linkActive]: dialog.dialog_user_id === activeDialogId })}
				href={dialog.dialog_user_id}
				key={dialog.dialog_user_id}
				onClick={(event) => {
					if (activeDialogId && dialog.dialog_user_id === activeDialogId) setActiveDialogId(null)
					else {
						event.preventDefault()
						setActiveDialogId(dialog.dialog_user_id)
						setActiveDialogIndex(index)
						setDialogUserImage(dialog.dialog_user.image)
						setMessageText('')
					}
				}}>
					<Group style={{ cursor : 'pointer' }}>
						<Avatar src={'data:image/' + 'base64,' + dialog.dialog_user.image} size='lg' radius="xl" />

						<Grid align='center'>
							<Grid.Col>
								<Text size="sm" weight={500}>
									{`${dialog.dialog_user[0].firstName} ${dialog.dialog_user[0].surName}`}
								</Text>
								<Text size="sm" weight={400} style={{ paddingTop: 5 }}>
									{/* {user.id === dialog.messages[dialog.messages.length - 1].sender_id ? 
									('data:image/' + 'base64,' + user.image) : ('data:image/' + 'base64,' + dialog.dialog_user.image)} */}
									{dialog.messages[dialog.messages.length - 1].message_text}
								</Text>
							</Grid.Col>
						</Grid>
					</Group>

					<Text size="sm" weight={500} position='right' style={{ paddingRight: 5 }}>123</Text>
				</Group>
		</>)
		)
	}

	return (<>
		{(userStatus === false) && <><h1 className="errorHeader"></h1><p className="errorText">Пожалуйста, авторизуйтесь</p></>}

		{(userStatus === true) && <>
			<Card>
				<Grid justify='space-between' align='flex-end'>
					<Grid.Col span={8} style={{ marginTop: 10 }}>
					{activeDialogId && <>
						<ScrollArea style={{ height: height - 200 }}>
							<SimpleGrid height={height - 160} cols={1}>	
								{activeDialog}
							</SimpleGrid>
						</ScrollArea>
						<Textarea
							value={messageText}
							autosize
							minRows={2}
							maxRows={4}
							rightSection={
								<ActionIcon style={{ paddingRight: 10 }} onClick={() => {
									if (messageText.length > 0) sendMessage()
								}}>
									<Send size={16}/>
								</ActionIcon>}
							onChange={event => setMessageText(event.target.value)}
						/>
					</>
					}
					</Grid.Col>
					<Grid.Col span={4}>
						<ScrollArea style={{ height: height - 200 }}>
							<Card.Section height={height - 160} width={{ sm: 400 }}>
								{dialogs}	
							</Card.Section>
						</ScrollArea>
					</Grid.Col>
				</Grid>
			</Card>
		</>}
		</>)
		
}

export default ChatsPage;