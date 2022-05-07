import styles from './GostsList.module.scss'

export function GostsList() {
    return (<>
        <div className={styles.maindiv}>
            <ul className='gostslist'>
                <li className='listitem'>
                    <span>
                        Феррросплавы
                    </span>
                </li>
            </ul>
        </div>
    </>)
}