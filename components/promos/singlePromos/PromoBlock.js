import { SimpleGrid, MediaQuery, Table, Group, Avatar, Text, Modal, Button } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import React, { useState } from 'react';
import styles from './PromoBlock.module.scss'
import { Comments } from '../../comments/CommentsBlock';
const axios = require('axios').default;
import { PhoneCall, At } from 'tabler-icons-react';



export const PromoBlock = () => {
	const { height, width } = useViewportSize();
	
	const [opened, setOpened] = useState(false);

	const elements = [
		{name: 'Труба водогазопроводная', price: 12.011, currency: 'RUB'},
		{name: 'Труба', price: 14.007, currency: 'EUR'},
		{name: 'Арматура', price: 88.906, currency: 'USD'},
		{name: 'Труба', price: 137.33, currency: 'RUB'},
		{name: 'Арматура', price: 140.12, currency: 'RUB'},
	]

	const item_rows = elements.map((element) => (
		<tr key={element.name}>
			<td className={styles.itemtd}>{element.name}</td>
			<td className={styles.itemtd}>{element.price} {element.currency}</td>
		</tr>
	));

	const user = {
		'name': 'Иван Иванов',
		'job': 'ООО ЯндексСбербанкОзон, менеджер',
		'email': 'test1@gmail.com',
		'phone': '88005553535'
	}

	const user_rows = (
		<Group noWrap>
			{/* <Avatar size={94} radius="md" /> */}
			<div>
				{/* <Text size="xs" sx={{ textTransform: 'uppercase' }} weight={700} color="dimmed"> */}
					{/* {title} */}
				{/* </Text> */}

				<Text size="lg" weight={500}>
					{user.name}
				</Text>

				<Text fontSize={16} weight={500}>
					{user.job}
				</Text>

				<Group noWrap spacing={10} mt={3}>
					<At size={16} />
					<Text style={{fontSize: 16}}>
					{user.email}
					</Text>
				</Group>

				<Group noWrap spacing={10} mt={5}>
					<PhoneCall size={16} />
					<Text style={{fontSize: 16}}>
					{user.phone}
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
					Продам трубу оптом недорого арбузы в подарок 
				</div>

				<div className={styles.promodate}>
					21-05-2022 03:13
				</div>
				
				<p className={styles.promodescription}>
				Олово, Оловосодержащий лом, Припои (ПОС-90, ПОС-60, ПОС-40, ПОС-30, Пос-18, ПОСсу и др.), баббит Б-83, баббит Б-16, браки баббитов,
				Быстрорез р6м5, р18, р6м5к5, р9, р9к5, р9м4к8, р12, р12к5, р3м3, <br></br>
				Вольфрам, вольфрамосодержащие сплавы, ВК ТК, ВН, ВНЖ, ВНД, ВНК, 49КФ, 29НК.
				Вольфрамосодержащие порошки ВК.<br></br>
				Никель Катод, Анод, Никельсодержащий лом,  Б-26, Б-28, Б-55, Б-19, ЭИ943, ЭИ 904, нихром Х20, Х15. Монель 65, Монель 63, Монель 28.
				Титан, Титан ВТ 1-0, Стружка титана,<br></br>
				Сурьма, Цинк Ц0, Ниобий, ванадий, Цирконий, кобальт, Кобальтсодержащие сплавы,
				Ферросплавы ферромолибден 60, феррониобий, ферромарганец,<br></br>
				Молибден,
				СВИНЕЦ КАБЕЛЬНЫЙ, типографский шрифт
				89279705195<br></br>
				RusMet2016@yandex.ru
				</p>
			
				<Table className={styles.itemtable} striped>
				<thead>
					<tr>
					<th>Наименование товара</th>
					<th>Цена</th>
					{/* <th>Валюта</th> */}
					</tr>
				</thead>
				<tbody>{item_rows}</tbody>
				</Table>	

				<SimpleGrid cols={width > 1200 ? 2 : 1}>
					<div style={{marginLeft: 5, position: 'left'}}>
						{user_rows}
					</div>
					<div>
						<Modal
							opened={opened}
							onClose={() => setOpened(false)}
							title="Introduce yourself!"
						>
						</Modal>

						<Group position='right' style={{marginTop: width > 1200 ? 35 : 15}}>
							<Button onClick={() => setOpened(true)}>Ответить на объявление</Button>
						</Group>
					</div>
				</SimpleGrid>
				
				<div>
					{}
				</div>

				<div>
					<Comments />
				</div>
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
	
