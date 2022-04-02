import styles from './MyPromosPages.module.scss'

export function MyPromosPages() {
	return (<>
		<div className={styles.maindiv}>
			<button type="button" className={styles.buttonArrow}></button>
			<button type="button" className={styles.buttonNumber}>1</button>
			<button type="button" className={styles.buttonNumber}>2</button>
			<button type="button" className={styles.buttonNumber}>3</button>
			<p className={styles.buttonNumber}>...</p>
			<button type="button" className={styles.buttonNumber}>86</button>
			<button type="button" className={styles.buttonArrow, styles.buttonArrowRight}></button>
		</div>
		<style jsx>{`
		`}</style>
	</>)
}