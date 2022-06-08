import Head from 'next/head'
import { useState } from 'react';
import Link from 'next/link'
import { Card, Grid, Pagination, Space, Title, Group, Image, Text, Button, useMantineTheme, Badge } from '@mantine/core';
import { Plus, Pencil } from 'tabler-icons-react';
const axios = require('axios').default;
const imageToBase64 = require('image-to-base64');

export const getServerSideProps = async (context) => {
	const res = await axios.get('https://api.metalmarket.pro/newsquery', {
		headers: {
			'Accept': 'application/json'
		}
	})
	// const images = new Map();
	let news = res.data.news
	
	let newsHot = res.data.newsHot
	newsHot['image'] = await imageToBase64(newsHot.photopath)
	let i;
	for (i=0;i<news.length;++i) {
		// images.set(news.data.news[i].id, await imageToBase64(news.data.news[i].photopath))
		news[i]['image'] = await imageToBase64(news[i].photopath)
	}
	return {
		props: {
			news: news,
			newsHot: newsHot
			// images: images
		},
	}
}

const News = ({ news, newsHot }) => {
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
		return (<Card span={10} key={'0' + newsObj.id} p="sm" shadow="md" style={{ marginBottom: '10px', minHeight: '75px'}} >
			
			{/* <Card p="sm" shadow="md" style={{ marginBottom: '10px', minHeight: '75px', width: 935}}> */}
				<Group position="apart" style={{ marginBottom: 5, marginTop: 0 }}>
					<Title order={3} weight={500}>{newsObj.title}</Title>
				</Group>
				<Grid justify={"center"}>
					<Grid.Col span={4}>
						<Image src={'data:image/'+newsObj.photopath.substr(newsObj.photopath.length-3)+';base64,' + newsObj.image} height={100} alt="Norway" layout="fill" />
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
				    <Grid.Col span={4} justify={'end'} align={'left'}>
						<Text style={{ marginTop: '20px', fontSize: '15px'}} color="gray" size="sm">{
							`${newsObj.news_date.slice(8, 10)}.${newsObj.news_date.slice(5, 7)}.${newsObj.news_date.slice(0, 4)}
							${newsObj.news_date.slice(11)}`}
						</Text>

					</Grid.Col>
					<Grid.Col span={4} justify={'center'} align={'center'}>
						<Text style={{ marginTop: '20px' }} color="gray" size="sm">0 комментариев</Text>
					</Grid.Col>
					<Grid.Col span={4} justify={'center'} align={'right'}>
					    <Link href={"/news/" + newsObj.id} passHref>
							<Button variant="subtle"  style={{ marginTop: 14}}>
								Подробнее
							</Button>
						</Link>
					</Grid.Col>
				</Grid>
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
			<Grid justify={'right'}>
				<Grid.Col  align={"right"}>
					 <>
					<Link href={'/news/add'} passHref>
						<Button variant="subtle">
							Добавить новость
						</Button>
						{/* <Plus
							size={35}
							strokeWidth={1}
							color={'blue'}
						/> */}
					</Link>
					<Link href={'/news/edit'} passHref>
						<Button variant="subtle" >
							Редактировать новости
						</Button>
						{/* <Pencil		
							size={34}
							strokeWidth={1}
							color={'blue'}
						/> */}
					</Link></>
				</Grid.Col>
			</Grid>
					<Card span={10} key={'0' + newsHot.id} p="sm" shadow="md" style={{ marginBottom: '10px', minHeight: '75px'}} >
			
				{/* <Card p="sm" shadow="md" style={{ marginBottom: '10px', minHeight: '75px', width: 935}}> */}
					<Group position="apart" style={{ marginBottom: 5, marginTop: 0 }}>
						<Title order={3} weight={500}>{newsHot.title}</Title>
					</Group>
					<Grid justify={"center"}>
						<Grid.Col span={4}>
							<Image src={'data:image/'+newsHot.photopath.substr(newsHot.photopath.length-3)+';base64,'+ newsHot.image} height={100} alt="Norway" layout="fill" />
						</Grid.Col>
						<Grid.Col span={8}>
						{(newsHot.pinned === 1) && <><Badge color="pink" variant="light">
								Горячая новость
							</Badge></>}
							<Space h="xs"/>
							<Text lineClamp={4} size="sm" style={{ color: '#868e96', lineHeight: 1.5 }}>
								{newsHot.desc}
							</Text>
						</Grid.Col>
					</Grid>
					<Grid>
					    <Grid.Col span={4} justify={'end'} align={'left'}>
							<Text style={{ marginTop: '20px', fontSize: '15px'}} color="gray" size="sm">{
							`${newsObj.news_date.slice(8, 10)}.${newsObj.news_date.slice(5, 7)}.${newsObj.news_date.slice(0, 4)}
							${newsObj.news_date.slice(11)}`}
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
				{/* </Card> */}
			</Card>
					{showNews}
				
			</Card>
			<Space h="xs" />
			<Pagination total={10} color="orange" withEdges style={{display:'flex', marginLeft: '32%'}}/>
		</>
	)
}

export default News;