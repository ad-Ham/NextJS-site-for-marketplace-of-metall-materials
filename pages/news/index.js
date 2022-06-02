import Head from 'next/head'
import { useState, useEffect } from 'react';
import Link from 'next/link'
import { checkToken } from '/middleware/axios.js';
import { useRouter } from 'next/router'
import { Card, Grid, Pagination, Space, Title, Group, Image, Text, Button, useMantineTheme, Badge } from '@mantine/core';

const axios = require('axios').default;
//const imageToBase64 = require('image-to-base64');

export const getServerSideProps = async (context) => {
	const res = await axios.get('https://api.metalmarket.pro/newsquery', {
		headers: {
			'Accept': 'application/json'
		}
	})
	//const images = new Map();
	let news = res.data.news
	
	let newsHot = res.data.newsHot
	//newsHot['image'] = await imageToBase64(newsHot.photopath)
	let i;
	for (i=0;i<news.length;++i) {
		//images.set(news.data.news[i].id, await imageToBase64(news.data.news[i].photopath))
		//news[i]['image'] = await imageToBase64(news[i].photopath)
	}
	return {
		props: {
			news: news,
			newsHot: newsHot
			//images: images
		},
	}
}

const handleDelete = async(e) => {
	console.log(e.target.id)
	await axios.post('https://api.metalmarket.pro/newsdelete', {id:e.target.id})
}

const handlePin = async(e) => {
	await axios.post('https://api.metalmarket.pro/newspin', {id:e.target.id})
}

const News = ({ news, newsHot }) => {
	const router = useRouter();
	const [userStatus, setUserStatus] = useState('')
	const [user, setUser] = useState('')

	const changeUserStatus = () => {
		setUserStatus(checkToken(router.pathname))
		if (checkToken(router.pathname) === true) {
			axios.get('https://api.metalmarket.pro/getUserId', {params:{token: localStorage.getItem("token")}})
			.then(function(response) {
				let userId = response.data.user_id.user_id;
				axios.get('https://api.metalmarket.pro/getUser', {params:{id: userId}})
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
		return (<Card span={10} key={'0' + el.id} p="sm" shadow="md" style={{ marginBottom: '10px', minHeight: '75px'}} >
			
			{/* <Card p="sm" shadow="md" style={{ marginBottom: '10px', minHeight: '75px', width: 935}}> */}
				<Group position="apart" style={{ marginBottom: 5, marginTop: 0 }}>
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
				    <Grid.Col span={4} justify={'end'} align={'left'}>
						<Text style={{ marginTop: '20px', fontSize: '15px'}} color="gray" size="sm">{
							(el.date.getDate().toString().length === 1 ? '0' + el.date.getDate().toString() : el.date.getDate().toString()) + '.' +
							((el.date.getMonth() + 1).toString().length === 1 ? '0' + (el.date.getMonth() + 1).toString() : (el.date.getMonth() + 1).toString()) + '.' +
							el.date.getFullYear() +' ' + el.time.slice(0, 5)
						}
						</Text>

					</Grid.Col>
					<Grid.Col span={4} justify={'center'} align={'center'}>
						<Text style={{ marginTop: '20px' }} color="gray" size="sm">0 комментариев</Text>
					</Grid.Col>
					<Grid.Col span={4} justify={'center'} align={'right'}>
					    <Link href={"/news/" + el.id} passHref>
							<Button variant="subtle"  style={{ marginTop: 14}}>
								Подробнее
							</Button>
						</Link>
					</Grid.Col>
				</Grid>
				
				{(user.role === 'admin') && <><Grid><Grid.Col span={4} justify={'center'} align={'left'}>
					    <Link href={"/news/edit/" + el.id} passHref>
							<Button variant="subtle" style={{ marginTop: 14 }}>
								Редактировать
							</Button>
						</Link>
					</Grid.Col>
					<Grid.Col span={4} justify={'center'} align={'center'}>
						<form id={el.id} key={'0'+el.id} onSubmit={handleDelete}>
						<Button id={el.id} type="submit" variant="subtle" style={{ marginTop: 14 }}>
							Удалить
						</Button>
						</form>
					</Grid.Col>
					<Grid.Col span={4} justify={'center'} align={'right'}>
						<form id={el.id} key={'0'+el.id} onSubmit={handlePin}>
						<Button id={el.id} type="submit" variant="subtle" style={{ marginTop: 14 }}>
							Закрепить
						</Button>
						</form>
					</Grid.Col></Grid></>}
				
			{/* </Card> */}
		</Card>);
	})

	const date = new Date(newsHot.date)

	return (
		<>
			<Head>
				<title>Новости - MetalMarket.pro</title>
				<meta name="keywords" content="next, javascript" />
				<meta name="description" content="this is" />
			</Head>
			<Card p="sm" key={news.id}>
				<Grid>
					<Card span={10} key={'0' + newsHot.id} p="sm" shadow="md" style={{ marginBottom: '10px', minHeight: '75px'}} >
			
					<Group position="apart" style={{ marginBottom: 5, marginTop: 0 }}>
						<Title order={3} weight={500}>{newsHot.title}</Title>
					</Group>
					<Grid justify={"center"}>
						<Grid.Col span={4}>
							<Image src={'data:image/'+newsHot.photopath.substr(newsHot.photopath.length-3)+';base64,'+ newsHot.image} height={100} alt="Norway" layout="fill" />
						</Grid.Col>
						<Grid.Col span={8}>
							<Text lineClamp={4} size="sm" style={{ color: '#868e96', lineHeight: 1.5 }}>
								{newsHot.desc}
							</Text>
							{(newsHot.pinned === 1) && <><Badge color="pink" variant="light">
								Горячая новость
							</Badge></>}
						</Grid.Col>
					</Grid>
					<Grid>
					    <Grid.Col span={4} justify={'end'} align={'left'}>
							<Text style={{ marginTop: '20px', fontSize: '15px'}} color="gray" size="sm">{
								(date.getDate().toString().length === 1 ? '0' + date.getDate().toString() : date.getDate().toString()) + '.' +
								((date.getMonth() + 1).toString().length === 1 ? '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString()) + '.' +
								date.getFullYear() +' ' + newsHot.time.slice(0, 5)
							}
							</Text>

						</Grid.Col>
						<Grid.Col span={4} justify={'center'} align={'center'}>
							<Text style={{ marginTop: '20px' }} color="gray" size="sm">0 комментариев</Text>
						</Grid.Col>
						<Grid.Col span={4} justify={'center'} align={'right'}>
						    <Link href={"/news/" + newsHot.id} passHref>
								<Button variant="subtle"  style={{ marginTop: 14}}>
									Подробнее
								</Button>
							</Link>
						</Grid.Col>
					</Grid>
					{(user.role === 'admin') && <><Grid><Grid.Col span={4} justify={'center'} align={'left'}>
					    <Link href={"/news/edit/" + newsHot.id} passHref>
							<Button variant="subtle" style={{ marginTop: 14 }}>
								Редактировать
							</Button>
						</Link>
					</Grid.Col>
					<Grid.Col span={4} justify={'center'} align={'center'}>
						<form id={newsHot.id} key={'0'+newsHot.id} onSubmit={handleDelete}>
						<Button id={newsHot.id} type="submit" variant="subtle" style={{ marginTop: 14 }}>
							Удалить
						</Button>
						</form>
					</Grid.Col>
					<Grid.Col span={4} justify={'center'} align={'right'}>
						<form id={newsHot.id} key={'0'+newsHot.id} onSubmit={handlePin}>
						<Button id={newsHot.id} type="submit" variant="subtle" style={{ marginTop: 14 }}>
							Закрепить
						</Button>
						</form>
					</Grid.Col></Grid></>}
				{/* </Card> */}
			</Card>
					{showNews}
				</Grid>
			</Card>
			<Space h="xs" />
			<Pagination total={10} color="orange" withEdges style={{display:'flex', marginLeft: 250}}/>
		</>
	)
}

export default News;