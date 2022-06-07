import Link from 'next/link'
// import Image from 'next/image'
import styles from './MainPageNews.module.scss'
import { Button, Grid, Card, Title, Text, Badge, Image, Group, useMantineTheme, Space, MediaQuery, SimpleGrid } from '@mantine/core';
import { useState, useEffect, React} from 'react';
import { axios, checkToken } from '/middleware/axios.js';
import { useRouter } from 'next/router'
import { MessageCircle2 } from 'tabler-icons-react';

export const MainPageNews = ({ news, newsHot }) => {
	const dateHot = new Date(newsHot.date)
	const theme = useMantineTheme();
	console.log(news)
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
	const newsCards = news.slice(0, 2).map(el => {
		return (<>	
	<MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
		<Card p="sm" key={news.id} shadow="xl" style={{ marginBottom: '10px', minHeight: '275px' }}>
			<Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
				<Title order={3} weight={500}>{el.title}</Title>
			</Group>
			<Grid justify={"center"}>
				<Grid.Col span={4}>
					<Image src={'data:image/'+el.photopath.substr(el.photopath.length-3)+';base64,'+ el.image} height={100} layout="fill" />
				</Grid.Col>
				<Grid.Col span={8}>
					<Text lineClamp={4} size="sm" style={{ color: '#868e96', lineHeight: 1.5 }}>
						{el.desc}
					</Text>
				</Grid.Col>
			</Grid>
			<Grid>
			    <Grid.Col span={4} justify={'end'} align={'left'}>
					<Text style={{ marginTop: '20px', marginLeft: 5 }} color="gray" size="sm">{
						(el.date.getDate().toString().length === 1 ? '0' + el.date.getDate().toString() : el.date.getDate().toString()) + '.' +
						((el.date.getMonth() + 1).toString().length === 1 ? '0' + (el.date.getMonth() + 1).toString() : (el.date.getMonth() + 1).toString()) + '.' +
						el.date.getFullYear() + ' ' + el.time.slice(0,5)
					}
					</Text>
				</Grid.Col>
				<Grid.Col span={4} justify={'end'} align={'center'}>
					<Text style={{ marginTop: '20px' }} color="gray" size="sm">0 комментариев</Text>
				</Grid.Col>
				<Grid.Col span={4} justify={'end'} align={'right'}>
					<Link href={'/news/'+el.id} passHref>
						<Button size="sm" variant="subtle" style={{ marginTop: 14}}>
						Подробнее
						</Button>
					</Link>
				</Grid.Col>
			</Grid>
		</Card>
		</MediaQuery>
		<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
		<Card p="sm" key={news.id} shadow="xl" style={{ marginBottom: '10px', minHeight: '185px' }}>
				<Group>
					<Text style={{ marginTop: '10px', marginLeft: 5  }} color="gray" size="xs">{
						(el.date.getDate().toString().length === 1 ? '0' + el.date.getDate().toString() : el.date.getDate().toString()) + '.' +
						((el.date.getMonth() + 1).toString().length === 1 ? '0' + (el.date.getMonth() + 1).toString() : (el.date.getMonth() + 1).toString()) + '.' +
						el.date.getFullYear() + ' ' + el.time.slice(0,5)
						}
						</Text>
						<Text style={{ marginTop: '9px' }}>|</Text>
						<Group spacing={5} style={{ marginTop: '10px' }}>
							<MessageCircle2
								size={16}
								strokeWidth={1}
								color={'gray'}
								/>
							<Text color="gray" size="xs">100</Text>		
						</Group>		
				</Group>
				<Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
					<Link href={'/news/'+el.id} passHref><Title order={3} weight={300} style={{fontSize:18}}>{el.title}</Title></Link>
				</Group>
		</Card>
		</MediaQuery>
		</>);
	});

	const bottomNews = news.slice(2,6).map(el => {
		return (<>
		<MediaQuery smallerThan="sm" styles={{ display: 'none' }} key={'0' + el.id}>
		<Grid.Col span={6} key={'0' + el.id}>
			<Card p="sm" shadow="xl" style={{ marginBottom: '10px', minHeight: '275px' }}>
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
					<Grid.Col span={4} justify={'space-between'} align={'left'}>
						<Text style={{ marginTop: '20px', marginLeft: 5  }} color="gray" size="sm">{
							(el.date.getDate().toString().length === 1 ? '0' + el.date.getDate().toString() : el.date.getDate().toString()) + '.' +
							((el.date.getMonth() + 1).toString().length === 1 ? '0' + (el.date.getMonth() + 1).toString() : (el.date.getMonth() + 1).toString()) + '.' +
							el.date.getFullYear() + ' ' + el.time.slice(0,5)
						}
						</Text>
					</Grid.Col>
					<Grid.Col span={4} justify={'space-between'} align={'center'}>
						<Text style={{ marginTop: '20px' }} color="gray" size="sm">0 комментариев</Text>
					</Grid.Col>
					<Grid.Col span={4} justify={'space-between'} align={'right'}>
					<Link href={'/news/'+el.id} passHref>
						<Button variant="subtle" style={{ marginTop: 14 }}>
						Подробнее
						</Button>
					</Link>
					</Grid.Col>
				</Grid>
			</Card>
		</Grid.Col>
		</MediaQuery>
		<MediaQuery largerThan="sm" styles={{ display: 'none' }} key={'0' + el.id}>
			<Card p="sm" shadow="xl" style={{ marginBottom: '10px', minHeight: '185px' }}>
				<Group>
						<Text style={{ marginTop: '10px', marginLeft: 5  }} color="gray" size="xs">{
							(el.date.getDate().toString().length === 1 ? '0' + el.date.getDate().toString() : el.date.getDate().toString()) + '.' +
							((el.date.getMonth() + 1).toString().length === 1 ? '0' + (el.date.getMonth() + 1).toString() : (el.date.getMonth() + 1).toString()) + '.' +
							el.date.getFullYear() + ' ' + el.time.slice(0,5)
						}
						</Text>
						<Text style={{ marginTop: '9px' }}>|</Text>
						<Group spacing={5} style={{ marginTop: '10px' }}>
							<MessageCircle2
								size={16}
								strokeWidth={1}
								color={'gray'}
								/>
							<Text color="gray" size="xs">100</Text>		
						</Group>				
				</Group>
				<Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm}}>
					<Link href={'/news/'+el.id} passHref><Title order={3} weight={300} style={{fontSize:18}}>{el.title}</Title></Link>
				</Group>
			</Card>

		</MediaQuery></>);
	})

	return (<>
		<Card style={{ marginTop: '20px' }}>
			<Grid justify={'right'}>
				<Grid.Col span={2} style={{marginTop: -10}}>
					<MediaQuery smallerThan="sm" styles={{fontSize: 25}}><Title order={1}>Новости</Title></MediaQuery>
				</Grid.Col>
				<Grid.Col span={10} align={"right"}>
					{(user.role === 'admin') && <><Link href={'/news/add'} passHref>
						<Button variant="subtle">
							Добавить новость
						</Button>
					</Link>
					<Link href={'/news/edit'} passHref>
						<Button variant="subtle" >
							Редактировать новости
						</Button>
					</Link></>}
					<Link href="/news" passHref>
						<Button variant="subtle">
							Все новости
						</Button>
					</Link>
				</Grid.Col>
			</Grid>						
			<Grid>	
				<MediaQuery smallerThan="sm" styles={{ display: 'none' }}>	
				<Grid.Col span={6}>
					<Card p="lg" style={{ height: '560px' }} shadow="md">
						<Card.Section>
							<Image src={'data:image/'+newsHot.photopath.substr(newsHot.photopath.length-3)+';base64,'+ newsHot.image} height={260} alt="Norway" layout="fill" />
						</Card.Section>
						<Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm, maxWidth: '100%' }}>
							<Badge color="pink" variant="light">
								Горячая новость
							</Badge>
							<Title order={3} style={{ maxWidth: '100%' }} weight={500}>{newsHot.title}</Title>
						</Group>
						<Text lineClamp={6} size="sm" style={{ color: '#868e96', lineHeight: 1.5 }}>
							{newsHot.desc}
						</Text>
						<Grid position="absolute">
							<Grid.Col span={4} justify={'end'} align={'left'} style={{marginBottom:-50}}>
								<Text style={{ marginTop: '20px', marginLeft: 0}} color="gray" size="sm">{
									(dateHot.getDate().toString().length === 1 ? '0' + dateHot.getDate().toString() : dateHot.getDate().toString()) + '.' +
									((dateHot.getMonth() + 1).toString().length === 1 ? '0' + (dateHot.getMonth() + 1).toString() : (dateHot.getMonth() + 1).toString()) + '.' +
									dateHot.getFullYear() + ' ' + newsHot.time.slice(0,5)

								}
								</Text>
							</Grid.Col>
							<Grid.Col span={4} justify={'end'} align={'center'}>
								<Text style={{ marginTop: '20px' }} color="gray" size="sm">0 комментариев</Text>
							</Grid.Col>
							<Grid.Col span={4} justify={'end'} align={'right'}>
							<Link href={'/news/'+newsHot.id} passHref>
								<Button size="sm" variant="subtle" style={{ marginTop: 14 }}>
									Подробнее
								</Button>
							</Link>
							</Grid.Col>
						</Grid>
					</Card>					
				</Grid.Col>	
				</MediaQuery>
				<MediaQuery largerThan="sm" styles={{ display: 'none' }}>					
					<Card  p="lg" pm="sm" style={{ minHeight: '185px', width: '100%', marginBottom: "20px", marginTop:"10px"}} shadow="xl">
						<Group>
							<Badge color="pink" variant="light">
								Горячая новость
							</Badge>
						</Group>
						<Group>
							<Text style={{ marginTop: '10px', marginLeft: 5  }} color="gray" size="xs">{
								(el.date.getDate().toString().length === 1 ? '0' + el.date.getDate().toString() : el.date.getDate().toString()) + '.' +
								((el.date.getMonth() + 1).toString().length === 1 ? '0' + (el.date.getMonth() + 1).toString() : (el.date.getMonth() + 1).toString()) + '.' +
								el.date.getFullYear() + ' ' + el.time.slice(0,5)
							}
							</Text>
							<Text style={{ marginTop: '9px' }}>|</Text>
							<Group spacing={5} style={{ marginTop: '10px' }}>
								<MessageCircle2
									size={16}
									strokeWidth={1}
									color={'gray'}
									/>
							<Text color="gray" size="xs">100</Text>		
						</Group>
						</Group>
						<Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm, maxWidth: '100%' }}>
							<Link href={'/news/'+newsHot.id} passHref>
							<Title order={3} style={{ maxWidth: '100%' }} weight={500}>{newsHot.title}</Title>
							</Link>
						</Group>
					</Card>									
				</MediaQuery>
				<MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
					<Grid.Col span={6}>
						{newsCards}
					</Grid.Col>	
				</MediaQuery>	
				<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
					<SimpleGrid cols={1}>
						{newsCards}
						{bottomNews}
					</SimpleGrid>	
				</MediaQuery>								
			</Grid>
			<MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
				<Grid>
					{bottomNews}
				</Grid>
			</MediaQuery>
		</Card>

	</>)
}

// {importantNews.map(importantNews => (
// 	<MainPageImportantNews key={importantNews} id={importantNews.id} title={importantNews.title} text={importantNews.text} date={importantNews.date} tags={importantNews.tags} />
// ))}
// <div className={styles.newsrow}>
// 	{news.map(news => (
// 		<MainPageNewsNoPhoto key={news} id={news.id} title={news.title} text={news.text} date={news.date} tags={news.tags} />
// 	))}
// </div>
// <div className={styles.newsrow}>
// </div>
// </div>