import styles from './RepostLayout.module.scss'

export function RepostLayout() {
	return(<>
		<div className={styles.maindiv}>
			<div className={styles.iconrow}>
				<div className={styles.VK}></div>
				<div className={styles.telegram}></div>
				<div className={styles.twitter}></div>
				<div className={styles.facebook}></div>
				<div className={styles.OK}></div>
				<div className={styles.whatsapp}></div>
			</div>
			<p className={styles.p}>Поделись!</p>
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}