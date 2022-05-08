import Link from 'next/link'
import { MainPromoPhoto } from '../mainpage/MainPromoPhoto'
import { PromoNoPhoto } from '../mainpage/PromoNoPhoto'
import { Button } from '@mantine/core';
import styles from './MainPromos.module.scss'

export function MainPromos({ promos }) {
	console.log(promos);
	return (<>
		<div className={styles.promosMainBox}>
			<h2 className={styles.promosHeader}>Объявления</h2>
			<div className={styles.menucards}>
				{promos.map(promos => (
					<MainPromoPhoto key={promos} id={promos[0].id} title={promos[0].title} text={promos[0].description} />
				))}
				{promos.map(promos => (
					<MainPromoPhoto key={promos} id={promos[1].id} title={promos[1].title} text={promos[1].description} />
				))}
				<div className={styles.promos}>
					{promos.map(promos => (
						<PromoNoPhoto key={promos} id={promos[2].id} title={promos[2].title} text={promos[2].description} />
					))}
					{promos.map(promos => (
						<PromoNoPhoto key={promos} id={promos[2].id} title={promos[2].title} text={promos[2].description} />
					))}
					{promos.map(promos => (
						<PromoNoPhoto key={promos} id={promos[2].id} title={promos[2].title} text={promos[2].description} />
					))}
					{promos.map(promos => (
						<PromoNoPhoto key={promos} id={promos[2].id} title={promos[2].title} text={promos[2].description} />
					))}
					{promos.map(promos => (
						<PromoNoPhoto key={promos} id={promos[2].id} title={promos[2].title} text={promos[2].description} />
					))}
					{promos.map(promos => (
						<PromoNoPhoto key={promos} id={promos[2].id} title={promos[2].title} text={promos[2].description} />
					))}
					{promos.map(promos => (
						<PromoNoPhoto key={promos} id={promos[2].id} title={promos[2].title} text={promos[2].description} />
					))}
				</div>
			</div>
			<div className={styles.buttons}>
				<Button color="indigo">
					Подать объявление
				</Button>
				<Button color="indigo">
					<Link href="/promos"><a className={styles.promosButton2}>Все объявления</a></Link>
				</Button>
			</div>
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}