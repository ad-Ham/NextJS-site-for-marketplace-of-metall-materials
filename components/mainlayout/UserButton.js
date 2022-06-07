import React from 'react';
import {
	UnstyledButton,
	UnstyledButtonProps,
	Group,
	Avatar,
	Text,
	createStyles,
} from '@mantine/core';


const useStyles = createStyles((theme) => ({
  	user: {
    	display: 'block',
    	width: '100%',
    	padding: theme.spacing.md,
    	color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    	'&:hover': {
    		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    	}
  	}
}))

export function UserButton({ user }) {
  	const { classes } = useStyles()
    
  	return (<>
		{user && <>
			<UnstyledButton className={classes.user}>
			<Group>
				<Avatar src={'data:image/' + ';base64,' + user.image} radius="xl" />

				<div style={{ flex: 1 }}>
					<Text size="sm" weight={500}>
						{user.surName + ' ' + user.firstName+ ' ' + user.lastName}
					</Text>

					<Text color="dimmed" size="xs">
						{user.email}
					</Text>
				</div>

			</Group>
			</UnstyledButton>
  		</>}
  </>)
}