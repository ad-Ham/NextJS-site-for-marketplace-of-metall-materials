import { NewsCommentsInput } from './CommentsInput';
import { GetUsersComments } from './Comments';
import styles from './CommentsBlock.module.scss'

export const Comments = () => {
    return (<>
        <div className={styles.commentsInput}>
        {<NewsCommentsInput />}
        </div>

        <div className={styles.comments}>
        {<GetUsersComments />}
        </div>
    </>)
}