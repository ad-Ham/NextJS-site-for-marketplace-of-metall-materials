import Head from 'next/head'
import { useState } from 'react'
import Link from 'next/link'
import { Card, Grid, Pagination, Space, Title, Group, Image, Text, Button, useMantineTheme, MediaQuery } from '@mantine/core'
import { MessageCircle2 } from 'tabler-icons-react'


export const MoreNewsCard = ({news}) => {
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
		return (<>
			<MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
				<Card p="sm" shadow="md" span={10} key={'0' + newsObj.id}>
				<Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
					<Title order={3} weight={500}>{newsObj.title}</Title>
				</Group>
				<Grid justify={"space-between"} columns={24}>
					<Grid.Col span={4}>
						<Image src={'data:image/'+newsObj.photopath.substr(newsObj.photopath.length-3)+';base64,'+ newsObj.image} widht={"80%"} alt="Norway" layout="fill" />
					</Grid.Col>
					<Grid.Col span={20}>
						<Text lineClamp={4} size="sm" style={{ color: '#868e96', lineHeight: 1.5 }}>
							{newsObj.desc}
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
					<Grid.Col span={4} justify={'end'} align={'center'}>
						<Text style={{ marginTop: '20px' }} color="gray" size="sm">{`${newsObj.comments_count} комментариев`}</Text>
					</Grid.Col>
					<Grid.Col span={4} justify={'end'} align={'right'}>
					    <Link href={"/news/" + newsObj.id} passHref>
							<Button variant="subtle" style={{ marginTop: 14 }}>
								Подробнее
							</Button>
						</Link>
					</Grid.Col>
				</Grid>
			</Card>
			</MediaQuery>
			<MediaQuery largerThan="sm" styles={{ display: 'none' }} >
				<Card pm="sm" p="lg" shadow="md" span={10} style={{ marginBottom: '10px', minHeight: '75px'}} key={'0' + newsObj.id}>
				<Group style={{marginTop:-10}}>					
							<Text style={{ marginTop: '10px', marginLeft: 5  }} color="gray" size="xs">{
								`${newsObj.news_date.slice(8, 10)}.${newsObj.news_date.slice(5, 7)}.${newsObj.news_date.slice(0, 4)}
								${newsObj.news_date.slice(11)}`}
							</Text>					
					<Text style={{ marginTop: '9px' }}>|</Text>
					<Group spacing={5} style={{ marginTop: '10px' }}>
							<MessageCircle2
								size={14}
								strokeWidth={1}
								color={'gray'}
								/>
							<Text color="gray" size="xs">{newsObj.comments_count}</Text>		
					</Group>
				</Group>
				<Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
				<Link href={"/news/" + newsObj.id} passHref><Title order={3} weight={300} style={{fontSize:15}}>{newsObj.title}</Title></Link>
				</Group>							
			</Card>
			</MediaQuery>
			</>);
	})
	return (<>
		<Card p="sm" key={news.id}>			
			<Grid>
				{showNews}
			</Grid>
		</Card>
	</>)
}