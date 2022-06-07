import Head from 'next/head'
import { useState, useEffect } from 'react';
import { checkToken } from '/middleware/axios.js';
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Card, Grid, Pagination, Space, Title, Group, Image, Text, Button, useMantineTheme, Badge } from '@mantine/core';

const axios = require('axios').default;
const imageToBase64 = require('image-to-base64');

export const getServerSideProps = async (context) => {
	const res = await axios.get('http://localhost:3001/newsquery', {
		headers: {
			'Accept': 'application/json'
		}
	})
	let news = res.data.news
	news.unshift(res.data.newsHot)
	let i;
	for (i=0;i<news.length;++i) {

		news[i]['image'] = await imageToBase64(news[i].photopath)
	}
	return {
		props: {
			news: news
		},
	}
}

const handleDelete = async(e) => {
	console.log(e.target.id)
	await axios.post('http://localhost:3001/newsdelete', {id:e.target.id})
}

const handlePin = async(e) => {
	await axios.post('http://localhost:3001/newspin', {id:e.target.id})
}

const NewsEdit = ({ news }) => {
	const router = useRouter();
	const [userStatus, setUserStatus] = useState('')
	const [user, setUser] = useState('')

	const changeUserStatus = () => {
		setUserStatus(checkToken(router.pathname))
		if (checkToken(router.pathname) === true) {
			axios.get('http://localhost:3001/getUserId', {params:{token: localStorage.getItem("token")}})
			.then(function(response) {
				let userId = response.data.user_id.user_id;
				axios.get('http://localhost:3001/getUser', {params:{id: userId}})
				.then(function(response) {
					setUser(response.data.user)
				})
				.catch(function (error) {
						console.log(error);
					})
			})
			.catch(function (error) {
					console.log(error);
				})
		}
	}

	useEffect(() => {
		changeUserStatus()

	}, [])

	const theme = useMantineTheme();
	news = news.map(el => {
		if (!el.date) {
			let date = new Date();
			el.date = date;
		} else {
			let date = new Date(el.date);
			el.date = date;
		}
		return el;
	})
	const [otherNews, setOtherNews] = useState([])
	const showNews = news.map(el => {
		return (<Grid.Col span={12} key={'0' + el.id}>
			<Card p="sm" shadow="xl" style={{ marginBottom: '10px', minHeight: '75px' }}>
				<Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
					<Title order={3} weight={500}>{el.title}</Title>
				</Group>
				<Grid justify={"center"}>
					<Grid.Col span={4}>
						<Image src={'data:image/'+el.photopath.substr(el.photopath.length-3)+';base64,'+ el.image} height={100} alt="Norway" layout="fill" />
					</Grid.Col>
					<Grid.Col span={8}>
						<Text lineClamp={4} size="sm" style={{ color: '#868e96', lineHeight: 1.5 }}>
							{el.desc}
						</Text>
						{(el.pinned === 1) && <><Badge color="pink" variant="light">
							Горячая новость
						</Badge></>}
					</Grid.Col>
				</Grid>
				<Grid>
				    <Grid.Col span={2} justify={'center'} align={'right'}>
						<Text style={{ marginTop: '20px' }} color="gray" size="sm">{
							(el.date.getDate().toString().length === 1 ? '0' + el.date.getDate().toString() : el.date.getDate().toString()) + '.' +
							((el.date.getMonth() + 1).toString().length === 1 ? '0' + (el.date.getMonth() + 1).toString() : (el.date.getMonth() + 1).toString()) + '.' +
							el.date.getFullYear() +' ' + el.time.slice(0, 5)
						}
						</Text>

					</Grid.Col>
					<Grid.Col span={2} justify={'center'} align={'center'}>
						<Text style={{ marginTop: '20px' }} color="gray" size="sm">0 комментариев</Text>
					</Grid.Col>
					<Grid.Col span={3} justify={'center'} align={'center'}>
					    <Link href={"/news/edit/" + el.id} passHref>
							<Button variant="subtle" style={{ marginTop: 14 }}>
								Редактировать
							</Button>
						</Link>
					</Grid.Col>
					<Grid.Col span={2} justify={'center'} align={'center'}>
						<form id={el.id} key={'0'+el.id} onSubmit={handleDelete}>
						<Button id={el.id} type="submit" variant="subtle" style={{ marginTop: 14 }}>
							Удалить
						</Button>
						</form>
					</Grid.Col>
					<Grid.Col span={3} justify={'center'} align={'center'}>
						<form id={el.id} key={'0'+el.id} onSubmit={handlePin}>
						<Button id={el.id} type="submit" variant="subtle" style={{ marginTop: 14 }}>
							Закрепить
						</Button>
						</form>
					</Grid.Col>
				</Grid>
			</Card>
		</Grid.Col>);
	})

	return (
		<>
			<Head>
				<title>Новости - MetalMarket.pro</title>
				<meta name="keywords" content="next, javascript" />
				<meta name="description" content="this is" />
			</Head>

			{(userStatus === false) && <><h1 className="errorHeader">401 Unauthorized</h1><p className="errorText">Пожалуйста, авторизуйтесь</p></>}

			{(userStatus === true) && (user.role !== 'admin') && <><h1 className="errorHeader">403 Forbidden</h1><p className="errorText">Недостаточно прав доступа</p></>}

			{(userStatus === true) && (user.role === 'admin') && <><Link href='/news/add'>
			<div style={{display: "flex", justifyContent: "center", width: "100%", marginBottom: "2%"}}>
				<Button>Добавить новость</Button>
			</div>
			</Link>
			<Card p="sm" key={news.id}>
				<Grid>
					{showNews}
				</Grid>
			</Card>
			<Space h="md" />
			<div style={{display:"flex", justifyContent:"center"}}>	
				<Pagination total={10} color="orange" withEdges />
			</div></>}
		</>
	)
}

export default NewsEdit;
