import { useSetState } from '@mantine/hooks';
import Router from 'next/router'
import { axios, checkToken } from '../../middleware/axios';
import styles from './CommentsBlock.module.scss'
import { TextInput, ActionIcon, createStyles, Text, Avatar, Group, SimpleGrid, UnstyledButton } from '@mantine/core';
import { Send } from 'tabler-icons-react'


const uploadToServer = async (comment) => {     
    const response = await axios.post("http://localhost:3001/addcomment", comment)

    Router.reload(window.location.pathname, { scroll: false })
}


const mainStyles = createStyles((theme) => ({
    body: {
        paddingLeft: 54,
        paddingTop: theme.spacing.sm,
    },
}));


function commentInput(entity, entity_id, reply_id) {
    const [comment, setComment] = useSetState({
        user_id: 78,
        entity: entity,
        entity_id: entity_id,
        data: '',
        reply_id: reply_id
    })

    return (<>
        <div className={styles.commentsInput}>
            <TextInput
                placeholder="Введите комментарий" 
                // placeholder={comment.reply_id}
                rightSection={
                    <ActionIcon style={{ paddingRight: 10 }} onClick={() => uploadToServer(comment)}>
                        <Send size={16}/>
                    </ActionIcon>}
                onChange={event => setComment({data: event.target.value})}
            />
        </div>
    </>)
}


function commentSimple(comment) {
    // const { hovered, ref } = useHover();
    const { classes } = mainStyles()
    const [replied, setReplied] = useSetState({reply: false})
    // const [postedAt, body, name, reply] = user

    const answerMessage = commentInput(comment.entity, comment.entity_id, comment.id)

    const classMessage = (comment.reply_id === null) ? styles.mainMessage : styles.replyMessage 

    return (<>
        <div className={classMessage}>
            <Group>
            {/* <Avatar src={author.image} alt={author.name} radius="xl" /> */}
            <Avatar alt={comment.id} radius="xl" />
                <div>
                    <Group position="left">
                        <Text size="sm">{comment.user_id}</Text>
                        <UnstyledButton onClick={() => setReplied({ reply: true })}>
                            <Text size="sm" color="blue">Ответить</Text>
                        </UnstyledButton>
                    </Group>
                    <Text size="xs" color="dimmed">
                    {comment.entity_id}
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


export const CommentsBlock = ({entity, entity_id, comments}) => {
    return (<>
        <div style={{marginTop: 10, marginLeft: 20, marginRight: 20}}>
            {commentInput(entity, entity_id, null)}
        </div>

        <div className={styles.comments}>
            {comments.map(comment => commentSimple(comment))}
        </div>
    </>)
}