import Link from 'next/link'
import { Button, Grid, Card, Title, Table, Space, MediaQuery, Group, ScrollArea} from '@mantine/core';
import styles from './MainPromos.module.scss'

export const MainPromos = ({ promos, user }) => {
	const rows = [...promos].filter(el => el.id).map((promo) => {
		let date = new Date(promo.date);
		let link = '/promos/' + promo.id
		return (<Link href={link} passHref key={promo.id}>
			<tr key={promo.id}>
			<td>
				{
					(date.getDate().toString().length === 1 ? '0' + date.getDate().toString() : date.getDate().toString()) + '.' +
					((date.getMonth() + 1).toString().length === 1 ? '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString()) + '.' +
					date.getFullYear()
				}
			</td>
			<td>{promo.category}</td>
			<td>{promo.title}</td>			
		</tr></Link>)
	});

	return (<>
		<Card>		
			<Group position="apart">
				<Group><MediaQuery smallerThan="sm" styles={{fontSize:25}}><Title order={1}>Объявления</Title></MediaQuery></Group>
				<MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
					<Group>
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
				<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
						<Group position="right" spacing={0}>
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
			</Group>
			<Space h="md" />
				<Table>
					<thead>
						<tr>
							<th>Дата</th>
							<th>Категория</th>
							<th>Название объявления</th>							
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</Table>
		</Card>
	</>)
}