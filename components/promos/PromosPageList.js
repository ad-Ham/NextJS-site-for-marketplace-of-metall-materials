import Link from 'next/link'
import styles from './PromosPageList.module.scss'

export const PromosPageList = ({ id, title, region, organizationName }) => {
    return (<>
        <div className={styles.maindiv}><Link href="/promopage" className={styles.a} passHref>
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
                <div key={id} className={styles.listpromoheader}>
                    <p >
                        {title}
                    </p>
                </div>
                <div key={id} className={styles.listorganization}>
                    <p >
                        {organizationName}
                    </p>
                </div>
                <div key={id} className={styles.listregion}>
                    <p >
                        {region}
                    </p>
                </div>
            </div>
        </Link>
        </div>
    </>)
}