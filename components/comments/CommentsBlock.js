import { NewsCommentsInput } from './CommentsInput';
import { GetComments } from './Comments';
import styles from './CommentsBlock.module.scss'

export const Comments = ({entity, entity_id}) => {
    return (<>
        <div className={styles.commentsInput}>
        {<NewsCommentsInput />}
        </div>

        <div className={styles.comments}>
        {<GetComments entity={entity} entity_id={entity_id}/>}
        </div>
    </>)
}