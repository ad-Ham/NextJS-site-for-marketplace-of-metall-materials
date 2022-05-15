import styles from './MyPromosPageList.module.scss'
import Link from 'next/link'

export const MyPromosPageList = () => {
    return (<>
        <div className={styles.maindiv}>
            <Link href="/promopage" passHref>
                <div className={styles.promosrow}>
                    <div className={styles.listdate}>
                        <p>
                            28.02.22
                        </p>
                    </div>
                    <div className={styles.listcategory}>
                        <p>
                            П.
                        </p>
                    </div>
                    <div className={styles.listpromoheader}>
                        <p>
                            Железная деталь для трактора
                        </p>
                    </div>
                    <div className={styles.listorganization}>
                        <p>
                            ООО Тракторист
                        </p>
                    </div>
                    <div className={styles.listregion}>
                        <p>
                            Ленингр...
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    </>)
}