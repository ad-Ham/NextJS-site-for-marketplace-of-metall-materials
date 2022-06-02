// import React, { useEffect } from 'react';
// import { TextInput, ActionIcon, Group } from '@mantine/core';
// import { showNotification } from '@mantine/notifications';
// import { Send } from 'tabler-icons-react'
// import io from 'socket.io-client'
// const socket = io.connect('http://localhost:3002')


// function UserChat({}) {
// 	const sendMessage = () => {
// 		socket.emit('send_message', 
// 			{user_id: 1}
// 		)
// 	}

// 	return (<>
// 		<div className={styles.chat}>
// 			<Group>
// 				<TextInput
// 				/>
// 				<ActionIcon style={{ paddingRight: 10 }} onClick={sendMessage}>
// 					<Send size={16}/>
// 				</ActionIcon>
// 			</Group>
//         </div>
// 	</>)
// }


// export function UserChats({  }) {

// 	// const rows = data.map((item) => (
// 	// 	<tr key={item.name} style={{border: 5}}>
// 	// 		<td>
// 	// 		<Group spacing="sm">
// 	// 			<Avatar size={40} src={item.avatar} radius={40} />
// 	// 			<div>
// 	// 			<Text size="sm" weight={500}>
// 	// 				{item.name}
// 	// 			</Text>
// 	// 			<Text size="xs">
// 	// 				{item.job}
// 	// 			</Text>
// 	// 			</div>
// 	// 		</Group>
// 	// 		</td>
// 	// 		<td>
// 	// 		</td>
// 	// 		<td>Пожалуйста, переведите диалог в telegram</td>
// 	// 		<td>
// 	// 		<Group spacing={0} position="right">
// 	// 			<Menu transition="pop" withArrow placement="end">
// 	// 			<Menu.Item icon={<Trash size={16} />} color="red">
// 	// 				Удалить переписку
// 	// 			</Menu.Item>
// 	// 			</Menu>
// 	// 		</Group>
// 	// 		</td>
// 	// 	</tr>
// 	// ));

// 	// return (<>
// 	// 	<Text size='xl' weight={500} style={{marginBottom: 20}}> Мои сообщения</Text>
// 	// 	<ScrollArea>
// 	// 		<Table highlightOnHover verticalSpacing="md" horizontalSpacing='xs' >
// 	// 		<tbody>{rows}</tbody>
// 	// 		</Table>
// 	// 	</ScrollArea>
// 	// </>);

// 	useEffect(() => {
// 		socket.emit('user_connect', {user_id: 1})

// 		socket.on('receive_message', (data) => {
// 			showNotification({
// 				title: 'Новое сообщения',
// 	            message: `Новое сообщения от пользователя ${data.firstName} ${data.surName}`,
// 	            autoClose: true,

// 	            color: "green"
// 	        })
// 		})
// 	}, [socket])

// 	return (<>
// 	</>)
// }