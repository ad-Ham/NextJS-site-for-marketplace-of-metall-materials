import Link from 'next/link'
import { Button, Grid, Card, Title, Table, Space, MediaQuery, Group, ScrollArea} from '@mantine/core';
import styles from './MainPromos.module.scss'

export const MainPromos = ({ promos, user }) => {

	const rows = [...promos].filter(el => el.id).map((element) => {
		let date = new Date(element.date);
		let link = '/promos/' + element.id
		return (<Link href={link} passHref key={element.id}>
			<tr key={element.id}>
			<td>
				{
					(date.getDate().toString().length === 1 ? '0' + date.getDate().toString() : date.getDate().toString()) + '.' +
					((date.getMonth() + 1).toString().length === 1 ? '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString()) + '.' +
					date.getFullYear()
				}
			</td>
			<td>{element.category}</td>
			<td>{element.title}</td>
			<td>{element.user.orgName}</td>
		</tr></Link>)
	});

	return (<>
		<Card>
		<Grid>
				<Grid.Col span={8}>
				<MediaQuery smallerThan="sm" styles={{fontSize:25}}><Title order={1}>Объявления</Title></MediaQuery>
				</Grid.Col>
				<MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
					<Grid.Col span={2} align={"right"}>
					<Link href="/promos/add" passHref>
						<Button variant="subtle">
							Разместить объявление
						</Button>
					</Link>
					</Grid.Col>
				</MediaQuery>
				<MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
					<Grid.Col span={2} align={"right"}>
						<Link href="/promos" passHref>
							<Button variant="subtle">
								Все объявления
							</Button>
						</Link>
					</Grid.Col>
				</MediaQuery>
				<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
						<Group position="right" spacing="xs">
							<Link href="/promos/add" passHref>
								<Button variant="subtle">
									Разместить объявление
								</Button>
							</Link>						
							<Link href="/promos" passHref>
								<Button variant="subtle">
									Все объявления
								</Button>
							</Link>
					</Group>
				</MediaQuery>
			</Grid>
			<Space h="md" />
			<ScrollArea>
				<Table striped highlightOnHover sx={{ minWidth: 800 }} verticalSpacing="sm">
					<thead>
						<tr>
							<th>Дата</th>
							<th>Категория</th>
							<th>Название объявления</th>
							<th>Организация</th>
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</Table>
			</ScrollArea>
		</Card>
	</>)
}