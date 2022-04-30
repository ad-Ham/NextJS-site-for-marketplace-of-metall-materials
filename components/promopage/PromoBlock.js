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
				{promos.map(title => <h1>{title}</h1>)}
				<h1 className={styles.promoheader}>Металлические ограждения</h1>
				<div className={styles.photo}></div>
			</div>
			<div className={styles.desc}>
				<div className={styles.descrow}>
					<p className={styles.descheader}>Страна:</p>
					{promos.map(country => <p>{country}</p>)}
					<p className={styles.desctext}>Россия</p>
				</div>
				<div className={styles.descrow}>
					<p className={styles.descheader}>Регион:</p>
					{promos.map(region => <p>{region}</p>)}
					<p className={styles.desctext}>Владимир и Владимирская область</p>
				</div>
				<div className={styles.descrow}>
					<p className={styles.descheader}>E-mail:</p>
					{promos.map(email => <p>{email}</p>)}
					<p className={styles.desctext}>example@mail.ru</p>
				</div>
				<div className={styles.descrow}>
					<p className={styles.descheader}>Телефон:</p>
					{promos.map(phoneNumber => <p>{phoneNumber}</p>)}
					<p className={styles.desctext}>8-800-555-35-35</p>
				</div>
				<div className={styles.descrow}>
					<p className={styles.descheader}>Организация:</p>
					{promos.map(organizationName => <p>{organizationName}</p>)}
					<p className={styles.desctext}>ООО Рога и копыта</p>
				</div>
				<div className={styles.descrow}>
					<p className={styles.descheader}>Категория:</p>
					<p className={styles.desctext}>Продажа (предложение)</p>
				</div>
				<div className={styles.descrow}>
					<p className={styles.descheader}>Описание:</p>
					{promos.map(desription => <p>{desription}</p>)}
					<p className={styles.desctext}>Металлические ограждения 3D.<br /><br />Для: автомобильных дорог, аэродромов, габионов, стадионов, промышленных объектов, гражданских объектов, коттеджей и дач.  </p>
				</div>
			</div>
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}