import styles from './PromoBlock.module.scss'
import { useState, useEffect } from 'react';

export function PromoBlock() {

	const [promos, setPromos] = useState([])

	useEffect(() => {
		fetch('http://localhost:3000/promosquery', {
			method: 'GET',
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
		<div className={styles.maindiv}>
			<div className={styles.headerblock}>
				{promos.map(title => <h1>{promos[0].title}</h1>)}
				<h1 className={styles.promoheader}></h1>
				<div className={styles.photo}></div>
			</div>
			<div className={styles.desc}>
				<div className={styles.descrow}>
					<p className={styles.descheader}>Страна:</p>
					{promos.map(country => <p>{promos[0].country}</p>)}
					<p className={styles.desctext}></p>
				</div>
				<div className={styles.descrow}>
					<p className={styles.descheader}>Регион:</p>
					{promos.map(region => <p>{promos[0].region}</p>)}
					<p className={styles.desctext}></p>
				</div>
				<div className={styles.descrow}>
					<p className={styles.descheader}>E-mail:</p>
					{promos.map(email => <p>{promos[0].email}</p>)}
					<p className={styles.desctext}></p>
				</div>
				<div className={styles.descrow}>
					<p className={styles.descheader}>Телефон:</p>
					{promos.map(phoneNumber => <p>{promos[0].phoneNumber}</p>)}
					<p className={styles.desctext}></p>
				</div>
				<div className={styles.descrow}>
					<p className={styles.descheader}>Организация:</p>
					{promos.map(organizationName => <p>{promos[0].organizationName}</p>)}
					<p className={styles.desctext}></p>
				</div>
				<div className={styles.descrow}>
					<p className={styles.descheader}>Категория:</p>
					<p className={styles.desctext}>Продажа (предложение)</p>
				</div>
				<div className={styles.descrow}>
					<p className={styles.descheader}>Описание:</p>
					{promos.map(description => <p>{promos[0].description}</p>)}
					<p className={styles.desctext}></p>
				</div>
			</div>
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}