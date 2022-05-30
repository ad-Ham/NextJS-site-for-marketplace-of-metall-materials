import Head from 'next/head'
import { useState } from 'react';
import Link from 'next/link'
import { Card, Grid, Pagination, Space, Title, Group, Image, Text, Button, useMantineTheme } from '@mantine/core';

const axios = require('axios').default;
const imageToBase64 = require('image-to-base64');

export const getServerSideProps = async (context) => {
	const res = await axios.get('https://api.metalmarket.pro/newsquery', {
		headers: {
			'Accept': 'application/json'
		}
	})
	//const images = new Map();
	let news = res.data.news
	let i;
	for (i=0;i<news.length;++i) {
		//images.set(news.data.news[i].id, await imageToBase64(news.data.news[i].photopath))
		news[i]['image'] = await imageToBase64(news[i].photopath)
	}
	return {
		props: {
			news: news,
			//images: images
		},
	}
}

const News = ({ news }) => {
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
		return (<Grid.Col span={10} key={'0' + el.id}>
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
					</Grid.Col>
				</Grid>
				<Grid>
				    <Grid.Col span={4} justify={'end'} align={'center'}>
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
					<Grid.Col span={4} justify={'center'} align={'left'}>
					    <Link href={"/news/" + el.id} passHref>
							<Button variant="subtle" fullWidth style={{ marginTop: 14 }}>
								Подробнее
							</Button>
						</Link>
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
			<Card p="sm" key={news.id}>
				<Grid>
					{showNews}
				</Grid>
			</Card>
			<Space h="md" />
			<Pagination total={10} color="orange" withEdges />
		</>
	)
}

export default News;