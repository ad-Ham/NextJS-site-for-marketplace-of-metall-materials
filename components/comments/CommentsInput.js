import { Textarea, Avatar, ActionIcon } from '@mantine/core';
import { Send } from 'tabler-icons-react';

import styles from './CommentsInput.module.scss'


export function NewsCommentsInput(username) {
    return (<>
        <div className={styles.commentInput}>
            <Textarea 
                placeholder="Введите комментарий" 
                rightSection={
                    <ActionIcon style={{ paddingRight: 10}} onClick={() => {console.log('onClick')}}>
                        <Send size={16}/>
                    </ActionIcon>}
            />
        </div>
    </>)
}