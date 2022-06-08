import React, { useState } from 'react'
import { useViewportSize } from '@mantine/hooks'
import styles from './chats.module.scss'
import { Navbar, SegmentedControl, Text, createStyles, Group, Avatar, Textarea, Grid, ScrollArea, Card, SimpleGrid } from '@mantine/core'

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
		},

		messageBody: {
			paddingLeft: 74,
			paddingRight: 50,
			paddingTop: 5
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


export function UserChats({ userDialogs, user, userStatus }) {
	const { height, width } = useViewportSize()
	const { classes, cx } = useStyles()
	const [section, setSection] = useState('account')
	const [active, setActive] = useState(null)
	const [dialog, setDialog] = useState()

	const messages = [
		{
			id: 1,
			user_firstName: 'Тимур',
			user_surName: 'Тимур',
			message_date: '2022-07-07 08:40',
			user_post: 'Тимур',
			user_orgName: 'Тимур',
			data: 'Хочу спать'
		},
		{
			id: 2,
			user_firstName: 'Иван',
			user_surName: 'Иванов',
			message_date: '2022-07-07 09:40',
			user_post: 'Иван',
			user_orgName: 'Иван',
			data: 'Привет'
		},
		{
			id: 2,
			user_firstName: 'Иван',
			user_surName: 'Иванов',
			message_date: '2022-07-07 09:40',
			user_post: 'Иван',
			user_orgName: 'Иван',
			data: 'Ну давай тогда'
		},
		{
			id: 2,
			user_firstName: 'Иван',
			user_surName: 'Иванов',
			message_date: '2022-07-07 09:40',
			user_post: 'Иван',
			user_orgName: 'Иван',
			data: 'Привет'
		},
		{
			id: 2,
			user_firstName: 'Иван',
			user_surName: 'Иванов',
			message_date: '2022-07-07 09:40',
			user_post: 'Иван',
			user_orgName: 'Иван',
			data: 'Привет'
		},
		{
			id: 2,
			user_firstName: 'Иван',
			user_surName: 'Иванов',
			message_date: '2022-07-07 09:40',
			user_post: 'Иван',
			user_orgName: 'Иван',
			data: 'Привет'
		},
		{
			id: 2,
			user_firstName: 'Иван',
			user_surName: 'Иванов',
			message_date: '2022-07-07 09:40',
			user_post: 'Иван',
			user_orgName: 'Иван',
			data: 'Привет'
		}	
	]

	const activeDialog = messages.map(message => (
		<>
			<div key={message.id} className={styles.mainMessage}>
				<Group>
				{/* <Avatar src={author.image} alt={author.name} radius="xl" /> */}
				<Avatar radius="xl" size='lg' />
				{/* src={'data:image/' + ';base64,' + message.user_image} */}
					<div>
						<Group position="left">
							<Text size="sm">{`${message.user_firstName} ${message.user_surName}`}</Text>
							<Text size="xs" color="dimmed">
							{`${message.message_date.slice(8, 10)}.${message.message_date.slice(5, 7)}.${message.message_date.slice(0, 4)}
							${message.message_date.slice(11)}`}
							</Text>
						</Group>
						<Text size="xs" style={{marginTop: 3}}>{`${message.user_post}, ${message.user_orgName}`}</Text>
					</div>
				</Group>
				<Text className={classes.messageBody} size="sm">
					{message.data}
				</Text>
			</div>
		</>
	))

	const links = tabs[section].map((item) => (<>
		{user && <>
			<Group 
			position="apart"
			className={cx(classes.link, { [classes.linkActive]: item.label === active })}
			href={item.link}
			key={item.label}
			onClick={(event) => {
				if (active && item.label === active) setActive(null)
				else {
					event.preventDefault()
					setActive(item.label)
				}
			}}>
				<Group style={{ cursor : 'pointer' }}>
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
			<Grid.Col span={8} style={{ marginTop: 10 }}>
			{active && <>
				<ScrollArea>
					<SimpleGrid height={height - 100} cols={1} style={{ paddingBottom: 30 }}>	
						{activeDialog}
					</SimpleGrid>
				</ScrollArea>
				<Textarea
					autosize
					minRows={2}
					maxRows={4}
				/>
			</>
			}
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