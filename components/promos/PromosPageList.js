import Link from 'next/link'
import styles from './PromosPageList.module.scss'

export function PromosPageList({ promos }) {
    console.log(promos)
    return (<>
        <div className={styles.maindiv}><Link href="/promopage">
            <a className={styles.a}>
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
                    {promos.map(promos => (
                        <div key={title} className={styles.listpromoheader}>
                            <p >
                                {promos.title}
                            </p>
                        </div>
                    ))}
                    {promos.map(promos => (
                        <div key={organizationName} className={styles.listorganization}>
                            <p >
                                {promos.organizationName}
                            </p>
                        </div>
                    ))}
                    {promos.map(promos => (
                        <div key={region} className={styles.listregion}>
                            <p >
                                {promos.region}
                            </p>
                        </div>
                    ))}
                </div>
            </a>
        </Link>
        </div>
        <style jsx>{`
            
		`}</style>
    </>)
}