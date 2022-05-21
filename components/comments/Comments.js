import React from 'react';
import { createStyles, Text, Avatar, Group } from '@mantine/core';
import styles from './Comments.module.scss'

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

    const classMessage = (reply) ? styles.replyMessage : styles.mainMessage
    
    return (<>
        <div className={classMessage}>
            <Group>
            {/* <Avatar src={author.image} alt={author.name} radius="xl" /> */}
            <Avatar alt={name} radius="xl" />
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

export function GetUsersComments () {
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