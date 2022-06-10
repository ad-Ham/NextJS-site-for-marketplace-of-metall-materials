import React, { useState } from 'react'
import { useViewportSize } from '@mantine/hooks'
import message_socket from '../../pages/_app'
import { useStyles } from './chatsStyles'
import { Text, Group, Avatar, Textarea, Grid, ScrollArea, Card, SimpleGrid, ActionIcon } from '@mantine/core'
import { Send } from 'tabler-icons-react'


export function UserChats({ userDialogs, user, userStatus }) {
	const { height, width } = useViewportSize()
	const { classes, cx } = useStyles()
	const [activeDialogMessages, setActiveDialogMessages] = useState([])
	const [activeDialogIndex, setActiveDialogIndex] = useState(0)
	const [activeDialogId, setActiveDialogId] = useState(null)
	const [dialogUserImage, setDialogUserImage] = useState('')
	const [messageText, setMessageText] = useState('')
	
	const activeDialog = activeDialogMessages.map(message => (
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

	const dialogs = userDialogs.map((dialog, index) => (<>
		{userStatus && <>
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
					setActiveDialogMessages(userDialogs[index].messages)
					setDialogUserImage(dialog.dialog_user.image)
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
		</>}
	</>)
)

return (<>
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
							if (messageText.length > 0) setActiveDialogMessages(activeDialogMessages.concat([{
								id : 15,
								message_text : messageText,
								message_time : '2022-06-10T16:26:33.721548',
								sender_id : user.id,
								sender_firstName : user.firstName,
								sender_surName : user.firstName,
								sender_post: user.post,
								sender_orgName: user.orgName,
								sender_photopath : ''
							}]))

							userDialogs[activeDialogIndex].messages.push({
								id : 15,
								message_text : messageText,
								message_time : '2022-06-10T16:26:33.721548',
								sender_id : user.id,
								sender_firstName : user.firstName,
								sender_surName : user.firstName,
								sender_image : ''
							})
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
	</>)
}