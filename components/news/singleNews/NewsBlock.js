import { RepostLayout } from './RepostLayout'
import { useState, useEffect } from 'react';
import { SimpleGrid, Image, Badge } from '@mantine/core';
import { Comments } from '../../comments/CommentsBlock';
import styles from './NewsBlock.module.scss'
const axios = require('axios').default;

export const NewsBlock = () => {


	const [news, setNews] = useState([])

	// const { classes } = useStyles()
	
	// const [news, setNews] = useState([])


	useEffect(() => {
		axios.get('https://api.metalmarket.pro/newsquery', {
			headers: {
				'Accept': 'application/json'
			}
		})
			.then(response => response.json())
			.then(result => {
				console.log(result);
				setNews(result.data.news)
			})
			.catch(err => {
				if (err) {
					console.log(err);
				}
			})
	}, [])

	return (<>
		<div className={styles.maindiv}>
			<SimpleGrid cols={1}>
				<p className={styles.newstitle}>
					Курс доллара 62 рубля, куда ниже 
				</p>

				<p className={styles.newsdate}>
					21-05-2022 03:00
				</p>

				<div>
				{/* <div className={styles.photo}></div> */}
				<Image className={styles.photo}
					radius="xs"
					src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
					alt="Random unsplash image"
				/>
				<p className={styles.newstext}>
					Надежды Кремля на помощь Китая в преодолении изоляции от западной финансовой системы, похоже, могут разбиться в прах.
Два крупнейших госбанка Китая прекратили обслуживание сделок по покупке в РФ сырьевых товаров, сообщает Bloomberg со ссылкой на источники, знакомые с ситуацией.
Офшорные подразделения Industrial & Commercial Bank of China (ICBC) вслед за западными банками перестали выдавать аккредитивы для покрытия сделок с российскими сырьевыми экспортерами. Банк полностью прекратил обслуживание поставок в долларах, но в некоторых случаях выдает аккредитивы на сделки в юанях. Для каждого такого решения требуется одобрение вышестоящего руководства.
Bank of China также ограничил финансирование покупок российского сырья по решению собственного риск-менеджмента. Как сообщили источники Bloomberg, банк ожидает развернутых рекомендаций национального регулятора.

По их словам, в прошлом крупнейшие китайские банки соблюдали санкции против Ирана, КНДР и даже гонконгских чининовников, опасаясь попасть под вторичные меры американского Минфина.
«Китайские финансовые институты серьезно относятся к комплаенсу по санкциям», - говорит Бен Костерзева, консультант Hogan Lovells в Гонконге. - Они не хотят сами попасть под санкции и потерять доступ к долларовым транзакциям».
В четверг стало известно, что западные банки начали отказывать в выдаче аккредитивов под поставки российской нефти. По меньшей мере трое из крупнейших энергокомпаний Европы не смогли провести сделки.
В результате цена российского сорта Urals рухнула относительно других марок: каждый баррель стоит на 11,25 доллара дешевле Brent, и это рекордная скидка за всю историю.
Спрос на спотовые партии Urals упал до нуля, рсообщили Argus источники на рынке. По их словам, судовладельцы также неохотно отправляют танкеры в балтийские порты России из-за потенциальных санкционных рисков. Так, стоимость морской перевозки партий Urals по 100 тысяч тонн из Приморска на северо-запад Европы в четверг выросла сразу на 200 пунктов международной фрахтовой шкалы Worldscale (WS), до WS300 - максимального уровня с 27 декабря 2006 года.
				</p>
				</div>

				<div className={styles.newstags}>
					<Badge>Доллар</Badge>
					<Badge>Евро</Badge>
					<Badge>Доллар</Badge>
					<Badge>Евро</Badge>
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