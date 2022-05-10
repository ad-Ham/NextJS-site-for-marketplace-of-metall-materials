import Link from 'next/link'
import { MainPromoPhoto } from '../mainpage/MainPromoPhoto'
import { PromoNoPhoto } from '../mainpage/PromoNoPhoto'
import { Button } from '@mantine/core';
import styles from './MainPromos.module.scss'

export function MainPromos({ promos, firstImportantPromos, secondImportantPromos }) {
	// console.log(firstImportantPromos);
	// console.log(secondImportantPromos);
	// console.log(promos);

	return (<>
		<div className={styles.promosMainBox}>
			<h2 className={styles.promosHeader}>Объявления</h2>
			<div className={styles.menucards}>
				{firstImportantPromos.map(firstImportantPromos => (
					<MainPromoPhoto key={firstImportantPromos} id={firstImportantPromos.id} title={firstImportantPromos.title} text={firstImportantPromos.description} date={firstImportantPromos.date} category={firstImportantPromos.category} />
				))}
				{secondImportantPromos.map(secondImportantPromos => (
					<MainPromoPhoto key={secondImportantPromos} id={secondImportantPromos.id} title={secondImportantPromos.title} text={secondImportantPromos.description} date={secondImportantPromos.date} category={secondImportantPromos.category} />
				))}
				<div className={styles.promos}>
					{promos.map(promos => (
						<PromoNoPhoto key={promos} id={promos.id} title={promos.title} date={promos.date} category={promos.category} />
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