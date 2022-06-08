import { MainLayout } from '../../../components/Layout/MainLayout'
import { Adbannertop } from '../../../components/Adbannertop'
import { useState } from 'react';
const axios = require('axios').default;
import styles from '../../../components/promopage/PromoBlock.module.scss'
import { Card, Input,Grid, Select,  Image, Text, Badge, Button, Group, useMantineTheme, Textarea } from '@mantine/core';
import { PromosMultiSelect } from '../../../components/promos/PromosMultiSelect'
import { PromosAdd } from '../../../components/promos/PromosAdd'


const AddPromo = ({ user }) => {
	// const [newsStatus, setNewsStatus] = useState('');

	// const [title, setTitle] = useState('');
	// const [name, setName] = useState('');
	// const [category, setCategory] = useState('');
	// const [description, setDescription] = useState('');
	// const [country, setCountry] = useState('');
	// const [regionsList, setRegionsList] = useState('');
	// const [region, setRegion] = useState('');
	// const [email, setEmail] = useState('');
	// const [phoneNumber, setPhoneNumber] = useState('');
	// const [organizationName, setOrganizationName] = useState('');
	// const [price, setPrice] = useState('');

	// const showPreview = e => {
	// 	elem.classList.add("modWindowWrapper");
	// }

	// const removePreview = e => {
	// 	elem.classList.remove("modWindowWrapper");
	// }

	// const handleSubmit = e => {
	// 	e.preventDefault();
	// 	if (country === '' || region === '') {
	// 		alert('Вы не выбрали страну')
	// 		return
	// 	}
	// 	console.log(JSON.stringify({
	// 		title,
	// 		name,
	// 		email,
	// 		phoneNumber,
	// 		country,
	// 		region,
	// 		category,
	// 		price,
	// 		description
	// 	}))

	// 	axios.post('http://localhost:3001/promosquery', {
	// 		title,
	// 		name,
	// 		email,
	// 		phoneNumber,
	// 		country,
	// 		region,
	// 		category,
	// 		price,
	// 		description
	// 	})
	// 		.then(response => response.json())
	// 		.then(result => {
	// 			console.log(result);
	// 		})
	// 		.catch(err => {
	// 			if (err) {
	// 				console.log(err);
	// 			}
	// 		})
	// }

	return (<>
		<PromosAdd user={user}/>
	</>)
}

export default AddPromo;