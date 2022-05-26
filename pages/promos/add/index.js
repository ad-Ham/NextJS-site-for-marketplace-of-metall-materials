import { MainLayout } from '../../../components/Layout/MainLayout'
import { Adbannertop } from '../../../components/Adbannertop'
import { useState } from 'react';
const axios = require('axios').default;
import styles from '../../../components/promopage/PromoBlock.module.scss'
import { Card, Input,Grid, Select,  Image, Text, Badge, Button, Group, useMantineTheme, Textarea } from '@mantine/core';
import { PromosMultiSelect } from '../../../components/promos/PromosMultiSelect'
import { PromosAdd } from '../../../components/promos/PromosAdd'


const AddPromo = () => {
	const [newsStatus, setNewsStatus] = useState('');

	const [title, setTitle] = useState('');
	const [name, setName] = useState('');
	const [category, setCategory] = useState('');
	const [description, setDescription] = useState('');
	const [country, setCountry] = useState('');
	const [regionsList, setRegionsList] = useState('');
	const [region, setRegion] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [organizationName, setOrganizationName] = useState('');
	const [price, setPrice] = useState('');

	const changeCountry = e => {
		e.preventDefault();
		setCountry(e.target.value)
		if (e.target.value === "Россия") {
			//setRegionsList([{id: 1, value: 'Алтайский край'}, 'Амурская область', 'Архангельская область', 'Астраханская область', 'Белгородская область', 'Брянская область', 'Владимирская область', 'Волгоградская область', 'Вологодская область', 'Воронежская область', 'г. Москва', 'Еврейская автономная область', 'Забайкальский край', 'Ивановская область', 'Иркутская область', 'Кабардино-Балкарская Республика', 'Калининградская область', 'Калужская область', 'Камчатский край', 'Карачаево-Черкесская Республика', 'Кемеровская область — Кузбасс', 'Кировская область', 'Костромская область', 'Краснодарский край', 'Красноярский край', 'Курганская область', 'Курская область', 'Ленинградская область', 'Липецкая область', 'Магаданская область', 'Московская область', 'Мурманская область', 'Ненецкий автономный округ', 'Нижегородская область', 'Новгородская область', 'Новосибирская область', 'Омская область', 'Оренбургская область', 'Орловская область', 'Пензенская область', 'Пермский край', 'Приморский край', 'Псковская область', 'Республика Адыгея (Адыгея)', 'Республика Алтай', 'Республика Башкортостан', 'Республика Бурятия', 'Республика Дагестан', 'Республика Ингушетия', 'Республика Калмыкия', 'Республика Карелия', 'Республика Коми', 'Республика Крым', 'Республика Марий Эл', 'Республика Мордовия', 'Республика Саха (Якутия)', 'Республика Северная Осетия — Алания', 'Республика Татарстан (Татарстан)', 'Республика Тыва', 'Республика Хакасия', 'Ростовская область', 'Рязанская область', 'Самарская область', 'г. Санкт-Петербург', 'Саратовская область', 'Сахалинская область', 'Свердловская область', 'г. Севастополь', 'Смоленская область', 'Ставропольский край', 'Тамбовская область', 'Тверская область', 'Томская область', 'Тульская область', 'Тюменская область', 'Удмуртская Республика', 'Ульяновская область', 'Хабаровский край', 'Ханты-Мансийский автономный округ — Югра', 'Челябинская область', 'Чеченская Республика', 'Чувашская Республика — Чувашия', 'Чукотский автономный округ', 'Ямало-Ненецкий автономный округ', 'Ярославская область'])
			setRegionsList([{ id: 11, value: 'г. Москва' }, { id: 64, value: 'г. Санкт-Петербург' }, { id: 68, value: 'г. Севастополь' }, { id: 1, value: 'Алтайский край' }, { id: 2, value: 'Амурская область' }, { id: 3, value: 'Архангельская область' }, { id: 4, value: 'Астраханская область' }, { id: 5, value: 'Белгородская область' }, { id: 6, value: 'Брянская область' }, { id: 7, value: 'Владимирская область' }, { id: 8, value: 'Волгоградская область' }, { id: 9, value: 'Вологодская область' }, { id: 10, value: 'Воронежская область' }, { id: 12, value: 'Еврейская автономная область' }, { id: 13, value: 'Забайкальский край' }, { id: 14, value: 'Ивановская область' }, { id: 15, value: 'Иркутская область' }, { id: 16, value: 'Кабардино-Балкарская Республика' }, { id: 17, value: 'Калининградская область' }, { id: 18, value: 'Калужская область' }, { id: 19, value: 'Камчатский край' }, { id: 20, value: 'Карачаево-Черкесская Республика' }, { id: 21, value: 'Кемеровская область — Кузбасс' }, { id: 22, value: 'Кировская область' }, { id: 23, value: 'Костромская область' }, { id: 24, value: 'Краснодарский край' }, { id: 25, value: 'Красноярский край' }, { id: 26, value: 'Курганская область' }, { id: 27, value: 'Курская область' }, { id: 28, value: 'Ленинградская область' }, { id: 29, value: 'Липецкая область' }, { id: 30, value: 'Магаданская область' }, { id: 31, value: 'Московская область' }, { id: 32, value: 'Мурманская область' }, { id: 33, value: 'Ненецкий автономный округ' }, { id: 34, value: 'Нижегородская область' }, { id: 35, value: 'Новгородская область' }, { id: 36, value: 'Новосибирская область' }, { id: 37, value: 'Омская область' }, { id: 38, value: 'Оренбургская область' }, { id: 39, value: 'Орловская область' }, { id: 40, value: 'Пензенская область' }, { id: 41, value: 'Пермский край' }, { id: 42, value: 'Приморский край' }, { id: 43, value: 'Псковская область' }, { id: 44, value: 'Республика Адыгея (Адыгея)' }, { id: 45, value: 'Республика Алтай' }, { id: 46, value: 'Республика Башкортостан' }, { id: 47, value: 'Республика Бурятия' }, { id: 48, value: 'Республика Дагестан' }, { id: 49, value: 'Республика Ингушетия' }, { id: 50, value: 'Республика Калмыкия' }, { id: 51, value: 'Республика Карелия' }, { id: 52, value: 'Республика Коми' }, { id: 53, value: 'Республика Крым' }, { id: 54, value: 'Республика Марий Эл' }, { id: 55, value: 'Республика Мордовия' }, { id: 56, value: 'Республика Саха (Якутия)' }, { id: 57, value: 'Республика Северная Осетия — Алания' }, { id: 58, value: 'Республика Татарстан (Татарстан)' }, { id: 59, value: 'Республика Тыва' }, { id: 60, value: 'Республика Хакасия' }, { id: 61, value: 'Ростовская область' }, { id: 62, value: 'Рязанская область' }, { id: 63, value: 'Самарская область' }, { id: 65, value: 'Саратовская область' }, { id: 66, value: 'Сахалинская область' }, { id: 67, value: 'Свердловская область' }, { id: 69, value: 'Смоленская область' }, { id: 70, value: 'Ставропольский край' }, { id: 71, value: 'Тамбовская область' }, { id: 72, value: 'Тверская область' }, { id: 73, value: 'Томская область' }, { id: 74, value: 'Тульская область' }, { id: 75, value: 'Тюменская область' }, { id: 76, value: 'Удмуртская Республика' }, { id: 77, value: 'Ульяновская область' }, { id: 78, value: 'Хабаровский край' }, { id: 79, value: 'Ханты-Мансийский автономный округ — Югра' }, { id: 80, value: 'Челябинская область' }, { id: 81, value: 'Чеченская Республика' }, { id: 82, value: 'Чувашская Республика — Чувашия' }, { id: 83, value: 'Чукотский автономный округ' }, { id: 84, value: 'Ямало-Ненецкий автономный округ' }, { id: 85, value: 'Ярославская область' }]);
			setRegion('Алтайский край');
		}
		else if (e.target.value === "Казахстан") {
			setRegionsList([{ id: 1, value: "г. Нур-Султан" }, { id: 2, value: "г. Алматы" }, { id: 3, value: "г. Шымкент" }, { id: 4, value: "Акмолинская область" }, { id: 5, value: "Актюбинская область" }, { id: 6, value: "Алматинская область" }, { id: 7, value: "Атырауская область" }, { id: 8, value: "Восточно-Казахстанская область" }, { id: 9, value: "Жамбылская область" }, { id: 10, value: "Западно-Казахстанская область" }, { id: 11, value: "Карагандинская область" }, { id: 12, value: "Костанайская область" }, { id: 13, value: "Кызылординская область" }, { id: 14, value: "Мангистауская область" }, { id: 15, value: "Павлодарская область" }, { id: 16, value: "Северо-Казахстанская область" }, { id: 17, value: "Туркестанская область" }])
			setRegion('г. Нур-Султан');
		}
		else if (e.target.value === "Кыргызстан") {
			setRegionsList([{ id: 1, value: "г. Бишкек" }, { id: 2, value: "г. Ош" }, { id: 3, value: "Баткенская область" }, { id: 4, value: "Джалал-Абадская область" }, { id: 5, value: "Иссык-Кульская область" }, { id: 6, value: "Нарынская область" }, { id: 7, value: "Ошская область" }, { id: 8, value: "Таласская область" }, { id: 9, value: "Чуйская область" }])
			setRegion('г. Бишкек');
		}
		else if (e.target.value === "Узбекистан") {
			setRegionsList([{ id: 1, value: "г. Ташкент" }, { id: 2, value: "Республика Каракалпакстан" }, { id: 3, value: "Андижанская область" }, { id: 4, value: "Бухарская область" }, { id: 5, value: "Джизакская область" }, { id: 6, value: "Кашкадарьинская область" }, { id: 7, value: "Навоийская область" }, { id: 8, value: "Наманганская область" }, { id: 9, value: "Самаркандская область" }, { id: 10, value: "Сурхандарьинская область" }, { id: 11, value: "Сырдарьинская область" }, { id: 12, value: "	Ташкентская область" }, { id: 13, value: "Ферганская область" }, { id: 14, value: "Хорезмская область" }])
			setRegion('г. Ташкент');
		}
		else if (e.target.value === '') {
			setRegion('');
		}
	}

	const changeRegion = e => {
		e.preventDefault();
		setCountry(e.target.value)
	}

	const showPreview = e => {
		elem.classList.add("modWindowWrapper");
	}

	const removePreview = e => {
		elem.classList.remove("modWindowWrapper");
	}

	const handleSubmit = e => {
		e.preventDefault();
		if (country === '' || region === '') {
			alert('Вы не выбрали страну')
			return
		}
		console.log(JSON.stringify({
			title,
			name,
			email,
			phoneNumber,
			country,
			region,
			category,
			price,
			description
		}))

		axios.post('https://api.metalmarket.pro/promosquery', {
			title,
			name,
			email,
			phoneNumber,
			country,
			region,
			category,
			price,
			description
		})
			.then(response => response.json())
			.then(result => {
				console.log(result);
			})
			.catch(err => {
				if (err) {
					console.log(err);
				}
			})
	}

	return (

		// <>
		// <Card>
		// 	<h1 style={{marginBottom: 30}}>Размещение объявления</h1>
		// 	<form onSubmit={handleSubmit}>
		// 	<Grid  style={{marginBottom: -40}}>
		// 		<Grid.Col span={9}>
		// 			<p>Название объявления</p>
		// 			<Input 
		// 			id="title"
		// 			placeholder="Введите название объявления"
		// 			required
		// 			onChange={e => setTitle(e.target.value)}
		// 			/>
		// 		</Grid.Col>
		// 		<Grid.Col span={3}>
		// 			<p>Тип объявления</p>
		// 			<Select
		// 			placeholder="Куплю/Продам"
		// 			data={[
		// 				{ value: 'продам', label: 'Продам' },
		// 				{ value: 'куплю', label: 'Куплю' },
		// 				]}
   		// 			/>
		// 		</Grid.Col>
		// 	</Grid>
				
		// 				{/* <div>
		// 					<p>Ваша страна</p>
		// 					<select name="country" id="country" onChange={e => changeCountry(e)}>
		// 						<option selected="selected" value="">Выберите страну</option>
		// 						<option value="Россия">Россия</option>
		// 						<option value="Казахстан">Казахстан</option>
		// 						<option value="Кыргызстан">Кыргызстан</option>
		// 						<option value="Узбекистан">Узбекистан</option>
		// 					</select>
		// 				</div> */}
		// 				{/* <div>
		// 					<p>Тип объявления</p>
		// 					<Select
		// 					placeholder="Куплю/Продам"
		// 					data={[
		// 						{ value: 'продам', label: 'Продам' },
		// 						{ value: 'куплю', label: 'Куплю' },
		// 					]}
   		// 			 		/>
		// 				</div> */}
		// 				{/* <div>
		// 					<p>Введите номер телефона</p>
		// 					<input id="email"
		// 						type="tel"
		// 						placeholder="999-999-999"
		// 						required
		// 						maxLength="150"
		// 						onChange={e => setPhoneNumber(e.target.value)}
		// 						className="inputText" />
		// 				</div> */}
		// 				{/* <div>
		// 					{(country !== '') && <><p>Ваш регион</p>
		// 						<select name="region" id="region" onChange={e => changeRegion(e)}>
		// 							{regionsList.map(el => <option key={el.id} value={el.value}>{el.value}</option>)}
		// 						</select></>}
		// 				</div> */}					
				
		// 		{/* <Card>
		// 			<Grid>
		// 				<Grid.Col span={3} style={{ minHeight: 80 }}>
		// 				<Image
		// 					width={260}
		// 					height={160}
		// 					src="https://s4.aconvert.com/convert/p3r68-cdx67/ahwg4-isf5x.svg"
		// 				/>
		// 				</Grid.Col>
		// 			</Grid>
		// 		</Card> */}
		// 		{/* <div styles={{width: '50px'}}>
		// 					<p>Наименование товара</p>
		// 					<div>
		// 					<Input id="title"
		// 						placeholder="Введите название объявления"
		// 						required
		// 						maxLength="150"
		// 						onChange={e => setTitle(e.target.value)}
		// 						className="inputText"
		// 						width="50px"/>
		// 					</div>
		// 			</div>
		// 		<div>
		// 			<p>Введите цену(₽)</p>
		// 			<div>
		// 			<Input id="price"
		// 				type="number"
		// 				placeholder=""
		// 				required
		// 				maxLength="150"
		// 				onChange={e => setPrice(e.target.value)}
		// 				className="inputText" />
		// 			</div>
		// 		</div> */}


		// 		<div>
		// 			<p>Описание товара или услуги</p>
		// 			<Textarea id="description"
		// 				placeholder="Опишите товар"
		// 				required
		// 				cols="100"
		// 				minRows={5}
		// 				onChange={e => setDescription(e.target.value)} />
		// 		</div>
		// 		<div className="buttonDiv">
		// 			<Button type="submit">Разместить объявление</Button>
		// 		</div>
		// 		<div className="buttonDiv">
		// 			<Button type="submit" onClick={showPreview}>Предпросмотр</Button>
		// 		</div>
		// 	</form>
		// 	<style jsx>{`
		// 		.cross {
		// 			width: 2vw;
		// 			height: 2vw;
		// 			background-color: unset;
		// 			background-image: url("/cross.svg");
		// 			background-size: contain;
    	// 			opacity: 0.5;
		// 		}

		// 		.modWindowDisable {
		// 			display: none;
		// 		}

		// 		.modWindowWrapper {
		// 			display: flex;
		// 			position: fixed;
		// 			background: rgb(0,0,0,0.7);
		// 			width: 100vw;
		// 			height: 100vh;
		// 			top: 0;
		// 			left: 0;
		// 			margin: 0;
		// 		}

		// 		.modWindow {
		// 			z-index: 100;
		// 			height: 80vh;
		// 			width: 80vw;
		// 			overflow-y: scroll;
		// 			background: white;
		// 			margin: auto;
		// 			padding: 15px;
		// 			border-radius: 4px;
		// 		}

		// 		button {
		// 			display: flex;
		// 			align-items: center;
		// 			justify-content: center;
		// 			background: #C4C4C4;
		// 			border-radius: 4px;
		// 			border: 0;
		// 			font-weight: 700;
		// 			font-size: 18px;
		// 			line-height: 99.69%;
		// 			padding: 8px 25px 7px 25px;
		// 			margin-top: 25px;
		// 			width: 15vw;
		// 		}

		// 		h1 {
		// 			text-align: center;
		// 			font-size: 36px;
		// 		}

		// 		form {
		// 			display: flex;
		// 			flex-direction: column;
		// 			flex-wrap: wrap;
		// 			padding-left: 5vw;
		// 			padding-right: 5vw;
		// 		}

		// 		p {
		// 			font-size: 20px;
		// 			margin-bottom: 5px;
		// 		}

		// 		.radioTeaxt {
		// 			margin: 0;
		// 			font-size: 16px;
		// 			margin-left: 5px;
		// 		}

		// 		div {
		// 			margin-top: 25px;
		// 			display: flex;
		// 			flex-direction: column;
		// 		}

		// 		.radioDiv {
		// 			margin: 0;
		// 			display: flex;
		// 			flex-direction: row;
		// 			width: 15vw;
		// 			justify-content: left;
		// 			align-items: center;
		// 		}

		// 		.columnDiv {
		// 			flex-direction: row;
		// 			justify-content: space-between;
		// 		}

		// 		.buttonDiv {
		// 			display: flex;
		// 			align-items: center;
		// 		}

		// 		.inputText {
		// 			font-size: 16px;
		// 			padding: 4px;
		// 			width: 30vw;
		// 			background: #E0E0E0;
		// 			border: 1px solid #000000;
		// 			box-sizing: border-box;
		// 			border-radius: 4px;
		// 		}

		// 		textarea {
		// 			font-size: 18px;
		// 			padding: 7px;
		// 			width: 100%;
		// 			background: #E0E0E0;
		// 			border: 1px solid #000000;
		// 			box-sizing: border-box;
		// 			border-radius: 4px;
		// 		}

		// 		select {
		// 			font-size: 18px;
		// 			padding: 7px;
		// 			width: 30vw;
		// 			background: #E0E0E0;
		// 			border: 1px solid #000000;
		// 			box-sizing: border-box;
		// 			border-radius: 4px;
		// 		}
		// 	`}</style>
		// </Card>
		// </>
		<PromosAdd />
	)
}

export default AddPromo;