import Profilepicture from '/public/profilepicture.svg'
import Link from 'next/link'
import styles from './PersonalData.module.scss'

export function PersonalData() {
	return(<>
		<div className={styles.maindiv}>
			<div className={styles.row}>
				<div className={styles.picture}><Profilepicture/></div>
				<div className={styles.data}>
					<p className={styles.username}>Хоменков Алексей Дмитриевич</p>
					<p className={styles.userdata}>aleks.khomenkov.03@mail.ru</p>
					<p className={styles.userdata}>88005553535</p>
				</div>
			</div>
			<div className={styles.button}>
				<Link href="/editprofile"><a className={styles.a}>Редактировать профиль</a></Link>
			</div>
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}