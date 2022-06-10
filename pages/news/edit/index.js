import Head from 'next/head'
import { useState, useEffect } from 'react';
import { checkToken } from '/middleware/axios.js';
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Card, Grid, Pagination, Space, Title, Group, Image, Text, Button, useMantineTheme, Badge } from '@mantine/core';

const axios = require('axios').default;
const imageToBase64 = require('image-to-base64');

export const getServerSideProps = async (context) => {
	const res = await axios.get('https://api.metalmarket.pro/newsquery', {
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
	await axios.post('https://api.metalmarket.pro/newsdelete', {id:e.target.id})
}

const handlePin = async(e) => {
	await axios.post('https://api.metalmarket.pro/newspin', {id:e.target.id})
}

const NewsEdit = ({ news, user, userStatus }) => {
	const router = useRouter();

	const theme = useMantineTheme();
	news = news.map(newsObj => {
		if (!newsObj.date) {
			let date = new Date();
			newsObj.date = date;
		} else {
			let date = new Date(newsObj.date);
			newsObj.date = date;
		}
		return newsObj;
	})
	const [otherNews, setOtherNews] = useState([])
	const showNews = news.map(newsObj => {
		return (<Grid.Col span={12} key={'0' + newsObj.id}>
			<Card p="sm" shadow="xl" style={{ marginBottom: '10px', minHeight: '75px' }}>
				<Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
					<Title order={3} weight={500}>{newsObj.title}</Title>
				</Group>
				<Grid justify={"center"}>
					<Grid.Col span={4}>
						<Image src={'data:image/'+newsObj.photopath.substr(newsObj.photopath.length-3)+';base64,'+ newsObj.image} height={100} alt="Norway" layout="fill" />
					</Grid.Col>
					<Grid.Col span={8}>
						<Text lineClamp={4} size="sm" style={{ color: '#868e96', lineHeight: 1.5 }}>
							{newsObj.desc}
						</Text>
						{(newsObj.pinned === 1) && <><Badge color="pink" variant="light">
							Горячая новость
						</Badge></>}
					</Grid.Col>
				</Grid>
				<Grid>
				    <Grid.Col span={2} justify={'center'} align={'right'}>
						<Text style={{ marginTop: '20px' }} color="gray" size="sm">{
						`${newsObj.news_date.slice(8, 10)}.${newsObj.news_date.slice(5, 7)}.${newsObj.news_date.slice(0, 4)}
						${newsObj.news_date.slice(11)}`}
						</Text>

					</Grid.Col>
					<Grid.Col span={2} justify={'center'} align={'center'}>
						<Text style={{ marginTop: '20px' }} color="gray" size="sm">{`${newsObj.comments_count} комментариев`}</Text>
					</Grid.Col>
					<Grid.Col span={3} justify={'center'} align={'center'}>
					    <Link href={"/news/edit/" + newsObj.id} passHref>
							<Button variant="subtle" style={{ marginTop: 14 }}>
								Редактировать
							</Button>
						</Link>
					</Grid.Col>
					<Grid.Col span={2} justify={'center'} align={'center'}>
						<form id={newsObj.id} key={'0'+newsObj.id} onSubmit={handleDelete}>
						<Button id={newsObj.id} type="submit" variant="subtle" style={{ marginTop: 14 }}>
							Удалить
						</Button>
						</form>
					</Grid.Col>
					<Grid.Col span={3} justify={'center'} align={'center'}>
						<form id={newsObj.id} key={'0'+newsObj.id} onSubmit={handlePin}>
						<Button id={newsObj.id} type="submit" variant="subtle" style={{ marginTop: 14 }}>
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
