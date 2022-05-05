import Link from 'next/link'
import styles from '../styles/Block404.module.scss'

export function PageUnderConstruction() {
	return (<>
		<div className={styles.maindiv}>
			<h2 className={styles.header404}>Страница находится в разработке!</h2>
			<p className={styles.text404}>Приносим свои извенения за предоставленные неудобства!<br /><br />По любым вопросам, Вы можете связаться с технической поддержкой </p>
			<Link href="/"><a className={styles.button404}>На главную</a></Link>
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}