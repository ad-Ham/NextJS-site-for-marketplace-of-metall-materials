import { useSetState } from '@mantine/hooks';
import Router from 'next/router'
import { axios, checkToken } from '../../middleware/axios';
import styles from './CommentsBlock.module.scss'
import { TextInput, ActionIcon, createStyles, Text, Avatar, Group, SimpleGrid, UnstyledButton } from '@mantine/core';
import { Send } from 'tabler-icons-react'


const addComment = async (user, comment) => {     
    comment.user_id = user.id
    comment.sender_id = user.id

    const response = await axios.post("http://api.metalmarket.pro/addcomment", comment)

    Router.reload(window.location.pathname, { scroll: false })
}

const deleteComment = async (user, comment) => {     
    comment.user_id = user.id
    comment.deleter_id = user.id

    const response = await axios.post("http://api.metalmarket.pro/deletecomment", comment)

    Router.reload(window.location.pathname, { scroll: false })
}


const mainStyles = createStyles((theme) => ({
    body: {
        paddingLeft: 54,
        paddingTop: 10,
    },
}));


function commentInput(user, userComment) {
    const [comment, setComment] = useSetState({
        id: userComment.id,
        entity: userComment.entity,
        entity_id: userComment.entity_id,
        data: '',
        reply_id: userComment.id,
        parent_id: (userComment.parent_id !== null) ? userComment.parent_id : userComment.id
    })

    return (<>
        <div className={styles.commentsInput}>
            <TextInput
                placeholder="Введите комментарий" 
                // placeholder={comment.reply_id}
                rightSection={
                    <ActionIcon style={{ paddingRight: 10 }} onClick={() => addComment(user, comment)}>
                        <Send size={16}/>
                    </ActionIcon>}
                onChange={event => setComment({data: event.target.value})}
            />
        </div>
    </>)
}


function commentSimple(comment, user) {
    // const { hovered, ref } = useHover();
    // user.role = 'admin'
    const { classes } = mainStyles()
    const [replied, setReplied] = useSetState({reply: false})
    // const [postedAt, body, name, reply] = user

    const answerMessage = commentInput(user, comment)

    const classMessage = (comment.reply_id === null) ? styles.mainMessage : styles.replyMessage 

    return (<>
        <div className={classMessage}>
            <Group>
            {/* <Avatar src={author.image} alt={author.name} radius="xl" /> */}
            <Avatar alt={comment.id} radius="xl" />
                <div>
                    <Group position="left">
                        <Text size="sm">{`${user.firstName} ${user.surName}`}</Text>
                        <UnstyledButton onClick={() => setReplied({ reply: true })}>
                            <Text size="sm" color="blue">Ответить</Text>
                        </UnstyledButton>
                        {((user.id === comment.user_id) || (user.role === 'admin')) &&
                            <UnstyledButton onClick={() => deleteComment(user, comment)}>
                                <Text size="sm" color="blue">Удалить</Text>
                            </UnstyledButton>
                        }
                    </Group>
                    <Text size="xs" style={{marginTop: 1}}>{`${user.post}, ${user.orgName}` }</Text>
                    <Text size="xs" color="dimmed" style={{marginTop: 3}}>
                    {`${comment.date.slice(8, 10)}.${comment.date.slice(5, 7)}.${comment.date.slice(0, 4)} ${comment.time.slice(0, 5)}`}
                    </Text>
                </div>
            </Group>
            <SimpleGrid cols={1} className={classes.body}>
                <Text size="sm">
                {comment.reply_id !== null && 
                    <Text size="xs" color="dimmed">
                        В ответ на комментарий {comment.reply_id}
                    </Text>
                }
                {comment.data}
                </Text>
                {replied.reply && answerMessage}
            </SimpleGrid>
        </div>
    </>);
}


export const CommentsBlock = ({entity, entity_id, comments, user}) => {
    return (<>
        <div style={{marginTop: 10, marginLeft: 20, marginRight: 20}}>
            {commentInput(user, {id: null, entity: entity, entity_id: entity_id, parent_id: -1})}
        </div>

        <div className={styles.comments}>
            {comments.map(comment => commentSimple(comment, user))}
        </div>
    </>)
}