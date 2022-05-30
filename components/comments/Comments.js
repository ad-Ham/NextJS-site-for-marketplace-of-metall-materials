import React from 'react';
import Link from 'next/link'
import { createStyles, Text, Avatar, Group, Menu } from '@mantine/core';
import styles from './Comments.module.scss'
import { useDisclosure } from '@mantine/hooks';
import { User, MessageCircle2} from 'tabler-icons-react';

const mainStyles = createStyles((theme) => ({
    body: {
        paddingLeft: 54,
        paddingTop: theme.spacing.sm,
    },
}));


// function CommentSimple({ postedAt, body, author, reply}) {
function commentSimple(user) {
    const {classes} = mainStyles()
    const [postedAt, body, name, reply] = user
<<<<<<< HEAD
    const [opened, handlers] = useDisclosure(false);
    const classMessage = (reply) ? styles.replyMessage : styles.mainMessage
=======

    const classMessage = (reply) ?  styles.replyMessage : styles.mainMessage
>>>>>>> c2a7caad6e1478c7693eb3d9215bcbb7ef16a3fc
    
    return (<>
        <div className={classMessage}>
            <Group>
            {/* <Avatar src={author.image} alt={author.name} radius="xl" /> */}
            <Menu opened={opened} onOpen={handlers.open} onClose={handlers.close} control={<div><Avatar radius="xl" /></div>}>
                <Link href="#" passHref><Menu.Item  icon={<MessageCircle2 size={14} color={'#00bfff'}/>}>Написать сообщение</Menu.Item></Link>
                <Link href="#" passHref><Menu.Item  icon={<User size={14} color={'#00bfff'}/>}>Посмотреть профиль</Menu.Item></Link>
            </Menu>
            {/* <Avatar alt={name} radius="xl" opened={opened} onOpen={handlers.open} onClose={handlers.close} /> */}
                <div>
                    <Text size="sm">{name}</Text>
                    <Text size="xs" color="dimmed">
                    {postedAt}
                    </Text>
                </div>
            </Group>
            <Text className={classes.body} size="sm">
            {body}
            </Text>
        </div>
    </>);
}

export function GetComments () {
    
    const users = {
        'user1': ['10 минут назад', 'Тест', 'Noname1', false],
        'user2': ['5 минут назад', 'Тест2', 'Noname2', false],
        'user3': ['2 минуты назад', 'Тест3', 'Noname3', true],
        'user4': ['2 минуты назад', 'Тест3', 'Noname3', true]
    }

    var htmls = []

    for (const [user, user_info] of Object.entries(users)) {
        htmls.push(commentSimple(user_info))
    }

    return (<>
        <div>
            {htmls}
        </div>
    </>)
    // var kek = ''

    // for (const [user, user_info] of Object.entries(users)) {
    //     kek += commentSimple(user_info)
    // }

    // return (<>
    //     {kek}
    // </>)
}