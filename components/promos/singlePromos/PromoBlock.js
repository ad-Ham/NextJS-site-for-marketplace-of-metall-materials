import { SimpleGrid, MediaQuery, Table, Group, Avatar, Text, Modal, Button } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import React, { useState } from 'react';
import styles from './PromoBlock.module.scss'
import { CommentsBlock } from '../../comments/CommentsBlock';
const axios = require('axios').default;
import { PhoneCall, At } from 'tabler-icons-react';


export const PromoBlock = ({promoData = null, previewState = false}) => {
	const [opened, setOpened] = useState(false);

	if (promoData === null) return (<>
		<Comments />
	</>)

	// const elements = [
	// 	{name: 'Труба водогазопроводная', price: 12.011, currency: 'RUB'},
	// 	{name: 'Труба', price: 14.007, currency: 'EUR'},
	// 	{name: 'Арматура', price: 88.906, currency: 'USD'},
	// 	{name: 'Труба', price: 137.33, currency: 'RUB'},
	// 	{name: 'Арматура', price: 140.12, currency: 'RUB'},
	// ]

	/*const item_rows = promoData.items.map((item) => (
		<tr key={item.name}>
			<td>{item.category}</td>
			<td>{item.metal}</td>
			<td>{item.stamp}</td>
			<td>{item.item}</td>
			<td>{item.size}</td>
			<td>{item.price}</td>
			<td>{item.currency}</td>
		</tr>
	))*/


	const user = {
		'name': 'Иван Иванов',
		'job': 'ООО ЯндексСбербанкОзон, менеджер',
		'email': 'test1@gmail.com',
		'phone': '88005553535'
	}

	const user_rows = (
		<Group noWrap>
			<div>

				<Text size="lg" weight={500}>
					{user.name}
				</Text>

				<Text fontSize={16} weight={500}>
					{user.job}
				</Text>

				<Group noWrap spacing={10} mt={3}>
					<At size={16} />
					<Text style={{fontSize: 16}}>
						<a href={`mailto:${user.email}`}>{user.email}</a>
					</Text>
				</Group>

				<Group noWrap spacing={10} mt={5}>
					<PhoneCall size={16} />
					<Text style={{fontSize: 16}}>
					<a href={`tel:${user.phone}`}>{user.phone}</a>
					
					</Text>
				</Group>
			</div>
		</Group>
	);
	// const { classes } = useStyles()
	
	// const [news, setNews] = useState([])

	// useEffect(() => {
	// 	axios.get('https://api.metalmarket.pro/newsquery', {
	// 		headers: {
	// 			'Accept': 'application/json'
	// 		}
	// 	})
	// 		.then(response => response.json())
	// 		.then(result => {
	// 			console.log(result);
	// 			setNews(result.data.news)
	// 		})
	// 		.catch(err => {
	// 			if (err) {
	// 				console.log(err);
	// 			}
	// 		})
	// }, [])

	return (<>
		<div className={styles.maindiv}>
			<SimpleGrid cols={1}>
				<div className={styles.promotitle}>
					Заголовок
				</div>

				<div className={styles.promodate}>
					21-05-2022 03:13
				</div>
				
				<p className={styles.promodescription}>
					Описание
				</p>
			
				<Table className={styles.itemtable} striped>
				<thead>
					<tr>
                        <th>Категория</th>
                        <th>Металл</th>
                        <th>Марка</th>
                        <th>Товар</th>
                        <th>Размеры</th>
                        <th>Цена</th>
                        <th>Валюта</th>
					</tr>
				</thead>
				<tbody>
					item_rows
				</tbody>
				</Table>	

				<SimpleGrid 
					breakpoints = {[
						{ maxWidth: 600, cols: 1 },
						{ minWidth: 1200, cols: 2 },
				  	]}
				>
					<div style={{marginLeft: 5, position: 'left'}}>
						{user_rows}
					</div>
					<div>
						<Modal
							opened={opened}
							onClose={() => setOpened(false)}
							title="Ответить на объявление"
						>
						</Modal>

						{(!previewState) && (
							<Group position='right' style={{marginTop: 35}}>
								<Button onClick={() => setOpened(true)}>Ответить на объявление</Button>
							</Group>
						)}
					</div>
				</SimpleGrid>
				
				{/* <div> */}
					{/* {} */}
				{/* </div> */}
				
				{(!previewState) && (
				<div>
					<Comments />
				</div>
				)}
			</SimpleGrid>
		</div>
	</>)
}
// 	return (<>
// 		<div className={styles.maindiv}>
// 			<h2 className={styles.newsheader}>
// 				Название
// 			</h2>

// 			<div className={styles.photo}></div>

// 			<p className={styles.newstext}>
// 				Описание
// 			</p>

// 			<p className={styles.newstags}>
// 				Теги
// 			</p>

// 			<div className={styles.commentsInput}>
// 				{<NewsCommentsInput />}
// 			</div>

// 			<div className={styles.comments}>
// 				{<GetUsersComments />}
// 			</div>
// 		</div>
// 		{/* <RepostLayout /> */}
// 		<style jsx>{`
			
// 		`}</style>
// 	</>)
// }
	
