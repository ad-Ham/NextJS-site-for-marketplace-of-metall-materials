// import React, { useEffect } from 'react'
// import { TextInput, ActionIcon, Group } from '@mantine/core'
// import { showNotification } from '@mantine/notifications'
// import { Send } from 'tabler-icons-react'



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
// 	// ))

import React, { useState } from 'react'
import { useViewportSize } from '@mantine/hooks'
import { Navbar, SegmentedControl, Text, createStyles, Group, Avatar, Textarea, Grid, ScrollArea, Card } from '@mantine/core'

const useStyles = createStyles((theme, _params, getRef) => {
	const icon = getRef('icon')

	return {
		navbar: {
			// borderRadius: theme.radius.sm,
			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
		},

		title: {
			textTransform: 'uppercase',
			letterSpacing: -0.25,
		},

		link: {
			...theme.fn.focusStyles(),
			display: 'flex',
			alignItems: 'center',
			textDecoration: 'none',
			fontSize: theme.fontSizes.sm,
			color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
			padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
			borderRadius: theme.radius.sm,
			fontWeight: 500,

			'&:hover': {
				backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
				color: theme.colorScheme === 'dark' ? theme.white : theme.black,

				[`& .${icon}`]: {
					color: theme.colorScheme === 'dark' ? theme.white : theme.black,
				},
			},
		},

		linkIcon: {
			ref: icon,
			color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
			marginRight: theme.spacing.sm,
		},

		linkActive: {
			'&, &:hover': {
				backgroundColor:
					theme.colorScheme === 'dark'
					? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
					: theme.colors[theme.primaryColor][0],
				color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 7],
				[`& .${icon}`]: {
					color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 7],
				},
			},
		},

		footer: {
			borderTop: `1px solid ${
				theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
			}`,
			paddingTop: theme.spacing.md,
		}
	}
})

const tabs = {
	account: [
		{ link: '', label: 'Notifications'},
		{ link: '', label: 'Billing'},
		{ link: '', label: 'Security'},
		{ link: '', label: 'SSH Keys'},
		{ link: '', label: 'Databases'},
		{ link: '', label: 'Authentication'},
		{ link: '', label: 'Other Settings'},
		{ link: '', label: 'Notifications'},
		{ link: '', label: 'Billing'},
		{ link: '', label: 'Security'},
		{ link: '', label: 'SSH Keys'},
		{ link: '', label: 'Databases'},
		{ link: '', label: 'Authentication'},
		{ link: '', label: 'Other Settings'},
	]
}

export function UserChats({ userDialogs, user }) {
	const { height, width } = useViewportSize()
	const { classes, cx } = useStyles()
	const [section, setSection] = useState('account')
	const [active, setActive] = useState('')

	const links = tabs[section].map((item) => (
	<>
		{user && <>
			<Group 
			position="apart"
			className={cx(classes.link, { [classes.linkActive]: item.label === active })}
			href={item.link}
			key={item.label}
			onClick={(event) => {
				event.preventDefault()
				setActive(item.label)
			}}>
				<Group>
					<Avatar src={'data:image/' + 'base64,' + user.image} size='lg' radius="xl" />

					<Grid align='center'>
						<Grid.Col>
							<Text size="sm" weight={500}>
								{user.surName + ' ' + user.firstName}
							</Text>
							<Text size="sm" weight={400} style={{ paddingTop: 5 }}>
								Сообщение
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
		<Grid.Col span={8}>
			<Textarea
				autosize
				minRows={2}
				maxRows={4}
			/>
		</Grid.Col>
		<Grid.Col span={4}>
			<ScrollArea style={{height: 750}}>
				<Card.Section height={height - 100} width={{ sm: 400 }}>
					{links}	
				</Card.Section>
			</ScrollArea>
		</Grid.Col>
	</Grid>
</Card>
	</>)
}