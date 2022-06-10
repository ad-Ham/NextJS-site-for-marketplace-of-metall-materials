// import { UserChats } from "../../components/chats/chats"
import axios from "axios";
import React, { useState, useEffect } from 'react'
import { useViewportSize } from '@mantine/hooks'
import { messages_socket } from '../../middleware/sockets'
import { useStyles } from '../../components/chats/chatsStyles'
import { Text, Group, Avatar, Textarea, Grid, ScrollArea, Card, SimpleGrid, ActionIcon } from '@mantine/core'
import { Send } from 'tabler-icons-react'
import { useForm, formList} from "@mantine/form"
import { showNotification } from '@mantine/notifications'
// const imageToBase64 = require('image-to-base64')

export async function getServerSideProps(context) {
	// const user_id = localStorage.getItem('user_id')
	const user_id = 84

	const res = await axios.get('https://api.metalmarket.pro/getuserdialogs', {
		params: {
			user_id: user_id
		},
		headers: {
			'Accept': 'application/json'
		}
	})
	
	const userDialogs = res.data.userDialogs

	for (let i = 0; i < userDialogs.length; i++) {
		// userDialogs[i].dialog_user.user_image = await imageToBase64(userDialogs[i].dialog_user.photopath)
	}	

	return {
		props: {
			userDialogs: userDialogs
		}
	}
}


export function ChatsPage({ userDialogs, user, userStatus }) {
	const userDialogsMessages = useForm({
		initialValues: {
			dialogs: formList(userDialogs),
			activeDialogMessages: formList([])
		}
	})

	const { height, width } = useViewportSize()
	const { classes, cx } = useStyles()
	const [activeDialogIndex, setActiveDialogIndex] = useState(0)
	const [activeDialogId, setActiveDialogId] = useState(null)
	const [dialogUserImage, setDialogUserImage] = useState('')
	const [messageText, setMessageText] = useState('')
		
	useEffect(() => {
		// if (!messages_socket.connected) messages_socket.connect()

		messages_socket.on('receive_message', (data) => {
			const dialogIndex = userDialogs.findIndex(dialog => dialog.dialog_user_id === data.dialog_user_id)

			setMessages(data.message)
		})

		messages_socket.on('new_message', (data) => {
			// console.log('success')
			// if (router.pathname !== '/chats') {
				showNotification({
					title: 'Новое сообщение',
					message: 'Новое сообщение',
					// message: `Новое сообщение от пользователя ${data.message.sender_firsName} ${data.message.sender_surName}`,
					autoClose: true,
		
					color: "green"
				})
			// }
		})
		// messages_socket.on('delete_messsage', (data) => {

		// })

	}, [messages_socket])

	function changeDialogs(message, callback) {
		userDialogsMessages.values.dialogs[activeDialogIndex].messages.push(message)
		userDialogsMessages.reorderListItem('dialogs', { from: activeDialogIndex, to: 0})
	
		callback()
	}

	function setMessages(message) {
		changeDialogs(message, function() {
			setActiveDialogIndex(0)
		})
	}

	const sendMessage = () => {
		let today = new Date()

		let day = String(today.getDate()).padStart(2, '0')
		let month = String(today.getMonth() + 1).padStart(2, '0')
		let year = today.getFullYear()
		var time = today.getHours() + ":" + today.getMinutes()

		let message_time = `${year}-${month}-${day} ${time}`

		const buildedMessage = {
			id: null,
			sender_id: user.id,
			sender_post: user.post,
			sender_orgName: user.orgName,
			message_text: messageText,
			message_time: message_time,
			sender_firstName: user.firstName,
			sender_surName: user.surName,
			sender_photopath: user.image,
		}

		const dbMessage = {
			sender_id: user.id,
			receiver_id: activeDialogId,
			message_text: messageText
		}

		setMessages(buildedMessage)
		messages_socket.emit('send_message', { receiver_id: activeDialogId, dbMessage: dbMessage, buildedMessage: buildedMessage })
		// Внедрить очередь для оптимизации (не сейчас)
	}
	
	const activeDialog = userDialogsMessages.values.activeDialogMessages.map(message => (
		<>
			<div key={message.id} className={classes.mainMessage}>
				<Group>
				<Avatar 
					src={message.sender_id === user.id ? 'data:image/' + ';base64,' + user.image : 'data:image/' + ';base64,' + dialogUserImage} 
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

	const dialogs = userDialogsMessages.values.dialogs.map((dialog, index) => (<>
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
					userDialogsMessages.setFieldValue('activeDialogMessages', formList(userDialogs[index].messages))
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