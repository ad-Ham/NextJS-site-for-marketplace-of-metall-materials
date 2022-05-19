import Link from 'next/link'
// import Image from 'next/image'
import styles from './MainPageNews.module.scss'
import { Button, Grid, Card, Title, Text, Badge, Image, Group, useMantineTheme } from '@mantine/core';

export const MainPageNews = ({ news, importantNews }) => {
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
					<Link href="/news" passHref>
						<Button variant="subtle" fullWidth style={{ marginTop: 14 }}>
						Подробнее
						</Button>
					</Link>
				</Grid.Col>
			</Grid>
		</Card>);
	});

	const bottomNews = news.slice(0, 2).map(el => {
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

	return (<>
		<Card style={{ marginTop: '20px' }}>
			<Grid justify={'right'}>
				<Grid.Col span={10}>
					<Title order={1}>Новости</Title>
				</Grid.Col>
				<Grid.Col span={2} align={"right"}>
					<Link href="/news" passHref>
						<Button variant="subtle">
							Все Новости
						</Button>
					</Link>
				</Grid.Col>
			</Grid>
			<Grid>
				<Grid.Col span={6}>
					<Card p="lg" style={{ height: '560px' }} shadow="md">
						<Card.Section>
							<Image src="/photopromo.svg" height={260} alt="Norway" layout="fill" />
						</Card.Section>
						<Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
							<Badge color="pink" variant="light">
								Горячая новость
							</Badge>
							<Title order={3} style={{ maxWidth: '100%' }} weight={500}>{news[0].title}</Title>
						</Group>
						<Text lineClamp={6} size="sm" style={{ color: '#868e96', lineHeight: 1.5 }}>
							{news[0].text}
						</Text>
						<Grid>
							<Grid.Col span={4} justify={'end'} align={'center'}>
								<Text style={{ marginTop: '20px' }} color="gray" size="sm">{
									(news[0].date.getDate().toString().length === 1 ? '0' + news[0].date.getDate().toString() : news[0].date.getDate().toString()) + '.' +
									((news[0].date.getMonth() + 1).toString().length === 1 ? '0' + (news[0].date.getMonth() + 1).toString() : (news[0].date.getMonth() + 1).toString()) + '.' +
									news[0].date.getFullYear()
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