import Head from 'next/head'
import { useState } from 'react';
import { Card, Grid, Pagination, Space, Title, Group, Image, Text, Button, useMantineTheme } from '@mantine/core';
const axios = require('axios').default;

export const getServerSideProps = async (context) => {
	const news = await axios.get('https://api.metalmarket.pro/newsquery', {
		headers: {
			'Accept': 'application/json'
		}
	})
	return {
		props: {
			news: news.data.news,
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
		return (<Grid.Col span={6} key={'0' + el.id}>
			<Card p="sm" shadow="xl" style={{ marginBottom: '10px', minHeight: '275px' }}>
				<Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
					<Title order={3} weight={500}>{el.title}</Title>
				</Group>
				<Grid justify={"center"}>
					<Grid.Col span={4}>
						<Image src="/photopromo.svg" height={100} alt="Norway" layout="fill" />
					</Grid.Col>
					<Grid.Col span={8}>
						<Text lineClamp={4} size="sm" style={{ color: '#868e96', lineHeight: 1.5 }}>
							{el.text}
						</Text>
					</Grid.Col>
				</Grid>
				<Grid>
				    <Grid.Col span={4} justify={'end'} align={'center'}>
						<Text style={{ marginTop: '20px' }} color="gray" size="sm">{
							(el.date.getDate().toString().length === 1 ? '0' + el.date.getDate().toString() : el.date.getDate().toString()) + '.' +
							((el.date.getMonth() + 1).toString().length === 1 ? '0' + (el.date.getMonth() + 1).toString() : (el.date.getMonth() + 1).toString()) + '.' +
							el.date.getFullYear()
						}
						</Text>
					</Grid.Col>
					<Grid.Col span={4} justify={'center'} align={'center'}>
						<Text style={{ marginTop: '20px' }} color="gray" size="sm">0 комментариев</Text>
					</Grid.Col>
					<Grid.Col span={4} justify={'center'} align={'left'}>
						<Button variant="subtle" fullWidth style={{ marginTop: 14 }}>
							Подробнее
						</Button>
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