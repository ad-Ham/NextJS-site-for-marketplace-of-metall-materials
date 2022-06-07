import Link from 'next/link'
// import Image from 'next/image'
import styles from './MainPageNews.module.scss'
import { Button, Grid, Card, Title, Text, Badge, Image, Group, useMantineTheme, Space } from '@mantine/core';
import { useState, useEffect } from 'react';
import { axios, checkToken } from '/middleware/axios.js';
import { useRouter } from 'next/router'

export const MainPageNews = ({ news, newsHot }) => {
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
		return (<Card p="sm" key={news.id} shadow="xl" style={{ marginBottom: '10px', minHeight: '275px' }}>
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
		</Card>);
	});

	const bottomNews = news.slice(2,6).map(el => {
		return (<Grid.Col span={6} key={'0' + el.id}>
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
		</Grid.Col>);
	})

	return (<>
		<Card style={{ marginTop: '20px' }}>
			<Grid justify={'right'}>
				<Grid.Col span={2} style={{marginTop: -10}}>
					<Title order={1}>Новости</Title>
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
				<Grid.Col span={6}>
					{newsCards}
				</Grid.Col>
			</Grid>
			<Grid>
				{bottomNews}
			</Grid>
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