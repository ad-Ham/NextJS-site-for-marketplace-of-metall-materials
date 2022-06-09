import Head from 'next/head'
import { useState } from 'react';
import Link from 'next/link'
import { Card, Grid, Pagination, Space, Title, Group, Image, Text, Button, useMantineTheme } from '@mantine/core';

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
		return (<Card  key={'0' + newsObj.id} p="sm" style={{ marginBottom: '5px', minHeight: '75px'}}>
			<Card p="sm" shadow="md" span={10}>
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
						<Text style={{ marginTop: '20px' }} color="gray" size="sm">0 комментариев</Text>
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
		</Card>);
	})
	return (<>
		<Card p="sm" key={news.id}>			
			<Grid>
				{showNews}
			</Grid>
		</Card>
	</>)
}