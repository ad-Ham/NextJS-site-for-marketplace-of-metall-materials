import React from 'react';
import {
  UnstyledButton,
  UnstyledButtonProps,
  Group,
  Avatar,
  Text,
  createStyles,
} from '@mantine/core';
import { ChevronRight } from 'tabler-icons-react';
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import { axios, checkToken } from '/middleware/axios.js';

const useStyles = createStyles((theme) => ({
  user: {
    display: 'block',
    width: '100%',
    padding: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    },
  },
}));

export function UserButton({ user }) {
  	const { classes } = useStyles();

// const router = useRouter();
// const [userStatus, setUserStatus] = useState('')
	// const [user, setUser] = useState('')
// const [users, setUsers] = useState([])
  	const [format, setFormat] = useState('')

// const changeUserStatus = () => {
//     setUserStatus(checkToken(router.pathname))
//     if (checkToken(router.pathname) === true) {
//         axios.get('https://api.metalmarket.pro/getUserId', {params:{token: localStorage.getItem("token")}})
//         .then(function(response) {
//             let userId = response.data.user_id.user_id;
//             axios.get('https://api.metalmarket.pro/getUser', {params:{id: userId}})
//             .then(function(response) {
//                 setUser(response.data.user)
//                 setFormat(response.data.user.photopath.substr(user.photopath.length-3))
                
//             })
//             .catch(function (error) {
//                     console.log(error);
//                 })
//         })
//         .catch(function (error) {
//                 console.log(error);
//             })
//     }
// }

// useEffect(() => {
//     changeUserStatus()

// }, [])

  return (<>
	{user ? <>
    <UnstyledButton className={classes.user}>
      <Group>
        <Avatar src={'data:image/'+ format+';base64,' + user.image} radius="xl" />

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
  </> : <>Hi!</>}
  </>)
}