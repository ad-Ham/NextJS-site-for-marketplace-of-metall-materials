import Head from 'next/head'
import { useState } from 'react';
import Link from 'next/link'
import { Card, Grid, Pagination, Space, Title, Group, Image, Text, Button, useMantineTheme, Badge, MediaQuery,SimpleGrid } from '@mantine/core';
import { Plus, Pencil, X } from 'tabler-icons-react';
const axios = require('axios').default;
import { MessageCircle2 } from 'tabler-icons-react';
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
	const showNews = news.map(el => {
		return (
	  
		<Card span={10} key={'0' + el.id} p="sm" shadow="md" style={{ marginBottom: '10px', minHeight: '75px'}} >
			
			{/* <Card p="sm" shadow="md" style={{ marginBottom: '10px', minHeight: '75px', width: 935}}> */}
				<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
				<Group position="apart">
					<Group style={{marginBottom: 10}}>
						<Text style={{ marginTop: '10px', marginLeft: 5  }}  color="gray" size="xs">
							{
							(el.date.getDate().toString().length === 1 ? '0' + el.date.getDate().toString() : el.date.getDate().toString()) + '.' +
							((el.date.getMonth() + 1).toString().length === 1 ? '0' + (el.date.getMonth() + 1).toString() : (el.date.getMonth() + 1).toString()) + '.' +
							el.date.getFullYear() +' ' + el.time.slice(0, 5)
							}
						</Text>						
						<Text style={{ marginTop: '9px' }}>|</Text>
						<Group spacing={5} style={{ marginTop: '10px' }}>
							<MessageCircle2
								size={14}
								strokeWidth={1}
								color={'gray'}
								/>
							<Text color="gray" size="xs">100</Text>		
						</Group>
					</Group>
					<Group >
							<Link href={'/news/edit'} passHref>
								<Pencil	
									cursor={"pointer"}	
									size={15}
									strokeWidth={1}
									color={'blue'}
								/>
							</Link>
							<Link href="#" passHref>
								<X	
									cursor={"pointer"}	
									size={15}
									strokeWidth={1}
									color={'blue'}											
								/>
									</Link>
							</Group>
				 </Group>
				</MediaQuery>
				<MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
					<Group position="apart">
					<Group position="apart" style={{ marginBottom: 5, marginTop: 0 }}>
						<Link href={"/news/" + el.id} passHref><Title order={3} weight={500}>{el.title}</Title></Link>
					</Group>
					<Group >
						<Link href={'/news/edit'} passHref>
							<Pencil	
							cursor={"pointer"}	
							size={20}
							strokeWidth={1}
							color={'blue'}
							/>
						</Link>
						<Link href="#" passHref>
							<X		
							cursor={"pointer"}
							size={20}
							strokeWidth={1}
							color={'blue'}
							/>
						</Link>
							</Group>
							</Group>
				</MediaQuery>
				<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
					<Group position="apart" style={{ marginBottom: 5, marginTop: 0 }}>
						<Link href={"/news/" + el.id} passHref><Title order={3} weight={300} style={{fontSize:15}}>{el.title}</Title></Link>
					</Group>
				</MediaQuery>
				{(el.pinned === 1) &&<><Badge color="pink" variant="light">
							Горячая новость
						</Badge></>}
				<MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
				<Grid justify={"center"}>
					<Grid.Col span={4}>
						<Image src={'data:image/'+el.photopath.substr(el.photopath.length-3)+';base64,' + el.image}  widht={"50%"} alt="Norway" layout="fill" />
					</Grid.Col>
					<Grid.Col span={8}>
						<Text lineClamp={4} size="sm" style={{ color: '#868e96', lineHeight: 1.5 }}>
							{el.desc}
						</Text>						
						{(el.pinned === 1) &&<><Badge color="pink" variant="light">
							Горячая новость
						</Badge></>}
					</Grid.Col>
				</Grid>
				</MediaQuery>
				<MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
				<Grid>
				    <Grid.Col span={4} justify={'end'} align={'left'}>
						<Text style={{ marginTop: '20px', fontSize: '15px'}} color="gray" size="sm">
							{
							`${newsObj.news_date.slice(8, 10)}.${newsObj.news_date.slice(5, 7)}.${newsObj.news_date.slice(0, 4)}
							${newsObj.news_date.slice(11)}`
							}
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
				</MediaQuery>
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
			<Group position="right" style={{marginBottom:10}}>
					<>
					<Link href={'/news/add'} passHref>
						<Plus
							cursor={"pointer"}
							size={20}
							strokeWidth={1}
							color={'blue'}
						/>
					</Link>
					</>
			</Group>
					<Card span={10} key={'0' + newsHot.id} p="sm" shadow="md" style={{ marginBottom: '10px', minHeight: '75px'}} >
					<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
						<Group>
						{(newsHot.pinned === 1) && <Badge color="pink" variant="light">
								Горячая новость
								</Badge>}
						</Group>
						</MediaQuery>
						<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
						<Group position="apart">
							<Group style={{marginBottom: 10}}>
								<Text style={{ marginTop: '10px', marginLeft: 5  }}  color="gray" size="xs">{
									`${newsHot.news_date.slice(8, 10)}.${newsHot.news_date.slice(5, 7)}.${newsHot.news_date.slice(0, 4)}
									${newsHot.news_date.slice(11)}`}
								</Text>						
								<Text style={{ marginTop: '9px' }}>|</Text>
								<Group spacing={5} style={{ marginTop: '10px' }}>
									<MessageCircle2
										size={14}
										strokeWidth={1}
										color={'gray'}
										/>
									<Text color="gray" size="xs">100</Text>		
								</Group>
							</Group>
							<Group >
									<Link href={'/news/edit'} passHref>
										<Pencil	
											cursor={"pointer"}	
											size={15}
											strokeWidth={1}
											color={'blue'}
										/>
									</Link>
									<Link href="#" passHref>
										<X	
											cursor={"pointer"}	
											size={15}
											strokeWidth={1}
											color={'blue'}
										/>
									</Link>
							</Group>
						</Group>
					</MediaQuery>
				{/* <Card p="sm" shadow="md" style={{ marginBottom: '10px', minHeight: '75px', width: 935}}> */}
					<MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
						<Group position="apart">
							<Group position="apart" style={{ marginBottom: 5, marginTop: 0 }}>
								<Link href={"/news/" + newsHot.id} passHref><Title order={3} weight={500}>{newsHot.title}</Title></Link>
							</Group>							
							<Group >
								<Link href={'/news/edit'} passHref>
									<Pencil	
										cursor={"pointer"}	
										size={20}
										strokeWidth={1}
										color={'blue'}
									/>
								</Link>
								<Link href="#" passHref>
									<X	
										cursor={"pointer"}	
										size={20}
										strokeWidth={1}
										color={'blue'}
									/>
								</Link>
							</Group>
						</Group>
					</MediaQuery>
					<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
						<Group position="apart" style={{ marginBottom: 5, marginTop: 0 }}>
							<Link href={"/news/" + newsHot.id} passHref><Title order={3} weight={300} style={{fontSize: 15}}>{newsHot.title}</Title></Link>
						</Group>
					</MediaQuery>
					<MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
					{/* <Grid justify={"center"}>
						<Grid.Col span={4}>
							<Image src={'data:image/'+newsHot.photopath.substr(newsHot.photopath.length-3)+';base64,'+ newsHot.image} widht={"50%"} alt="Norway" layout="fill" />
						</Grid.Col>
						<Grid.Col span={8}>
							{(newsHot.pinned === 1) && <><Badge color="pink" variant="light">
								Горячая новость
							</Badge></>}
							<Space h="xs"/>
							<Text lineClamp={4} size="md" style={{ color: '#868e96', lineHeight: 1.5 }}>
								{newsHot.desc}
							</Text>
						</Grid.Col>
					</Grid> */}
					<Grid justify={"space-between"} columns={24}>
						<Grid.Col span={4}>
							<Image src={'data:image/'+newsHot.photopath.substr(newsHot.photopath.length-3)+';base64,'+ newsHot.image} widht={"50%"} alt="Norway" layout="fill" />
						</Grid.Col>
						<Grid.Col span={20}>
							{(newsHot.pinned === 1) && <><Badge color="pink" variant="light">
								Горячая новость
							</Badge></>}
							<Space h="xs"/>
							<Text lineClamp={4} size="md" style={{ color: '#868e96', lineHeight: 1.5 }}>
								{newsHot.desc}
							</Text>
						</Grid.Col>
					</Grid>
					{/* <Group position="apart">
						<Group position="left">
						<Image src={'data:image/'+newsHot.photopath.substr(newsHot.photopath.length-3)+';base64,'+ newsHot.image} widht={"50%"} alt="Norway" layout="fill" />
						</Group>
						<Group>
							{(newsHot.pinned === 1) && <><Badge color="pink" variant="light">
									Горячая новость
								</Badge></>}
								<Space h="xs"/>
								<Text lineClamp={4} size="md" style={{ color: '#868e96', lineHeight: 1.5 }}>
									{newsHot.desc}
								</Text>
						</Group>
					</Group> */}
					</MediaQuery>
					<MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
						<Grid>
							<Grid.Col span={4} justify={'end'} align={'left'}>
							<Text style={{ marginTop: '20px', fontSize: '15px'}} color="gray" size="sm">{
								`${newsHot.news_date.slice(8, 10)}.${newsHot.news_date.slice(5, 7)}.${newsHot.news_date.slice(0, 4)}
								${newsHot.news_date.slice(11)}`}
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
					</MediaQuery>
					
				{/* </Card> */}
			</Card>
					{showNews}
				<Group position="center" >
						<Pagination total={10} color="orange" withEdges />
				</Group>
			</Card>
		</>
	)
}

export default News;