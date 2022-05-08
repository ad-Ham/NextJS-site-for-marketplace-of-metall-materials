import styles from './PromoBlock.module.scss'
import { useState, useEffect } from 'react';
const axios = require('axios').default;

export function PromoBlock() {

	const [promos, setPromos] = useState([])

	useEffect(() => {
		axios.get('http://localhost:3001/promosquery', {
			headers: {
				'Accept': 'application/json'
			}
		})
			.then(response => response.json())
			.then(result => {
				console.log(result);
				setPromos(result.data.promos)
			})
			.catch(err => {
				if (err) {
					console.log(err);
				}
			})
	}, [])

	return (<>

		{promos.map(promos => <div className={styles.maindiv} key={promos.id}>

			<div className={styles.headerblock}>
				<h1 className={styles.promoheader}>{promos.title}</h1>
				<div className={styles.photo}></div>
			</div>

			<div className={styles.desc}>

				<div className={styles.descrow}>
					<p className={styles.descheader}>Страна:</p>
					<p className={styles.desctext}>{promos.country}</p>
				</div>

				<div className={styles.descrow}>
					<p className={styles.descheader}>Регион:</p>
					<p className={styles.desctext}>{promos.region}</p>
				</div>

				<div className={styles.descrow}>
					<p className={styles.descheader}>E-mail:</p>
					<p className={styles.desctext}>{promos.email}</p>
				</div>

				<div className={styles.descrow}>
					<p className={styles.descheader}>Телефон:</p>
					<p className={styles.desctext}>{promos.phoneNumber}</p>
				</div>

				<div className={styles.descrow}>
					<p className={styles.descheader}>Организация:</p>
					<p className={styles.desctext}>{promos.organizationName}</p>
				</div>

				<div className={styles.descrow}>
					<p className={styles.descheader}>Категория:</p>
					<p className={styles.desctext}>Продажа (предложение)</p>
				</div>

				<div className={styles.descrow}>
					<p className={styles.descheader}>Описание:</p>
					<p className={styles.desctext}>{promos.description} </p>
				</div>
			</div>

		</div>
		)}
		<style jsx>{`
			
		`}</style>
	</>)
}