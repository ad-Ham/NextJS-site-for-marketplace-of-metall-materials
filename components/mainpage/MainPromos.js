import Link from 'next/link'
import { Button, Grid, Card, Title, Table, Space } from '@mantine/core';
import styles from './MainPromos.module.scss'

export const MainPromos = ({ promos }) => {

	const rows = [...promos, ...promos].filter(el => el.id).map((element) => {
		let date = new Date(element.date);
		return (<tr key={element.id}>
			<td>
				{
					(date.getDate().toString().length === 1 ? '0' + date.getDate().toString() : date.getDate().toString()) + '.' +
					((date.getMonth() + 1).toString().length === 1 ? '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString()) + '.' +
					date.getFullYear()
				}
			</td>
			<td>{element.category}</td>
			<td>{element.title}</td>
			<td>ООО Рога и копыта</td>
			<td>Россия, Урал</td>
		</tr>)
	});

	return (<>
		<Card className={styles.promosMainBox}>
		<Grid className={styles.promosMainButton} justify={'right'}>
				<Grid.Col span={8}>
					<Title className={styles.promosMainTitle} order={1}>Объявления</Title>
				</Grid.Col>
				<Grid.Col span={2} align={"right"}>
					<Button variant="subtle">
						Разместить объявление
					</Button>
				</Grid.Col>
				<Grid.Col span={2} align={"right"}>
					<Link href="/promos" passHref>
						<Button variant="subtle">
							Все объявления
						</Button>
					</Link>
				</Grid.Col>
			</Grid>
			<Space h="md" />
			<Table className={styles.promosMainTable} striped highlightOnHover>
				<thead>
					<tr>
						<th>Дата</th>
						<th>Категория</th>
						<th>Название объявления</th>
						<th>Организация</th>
						<th>Регион</th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</Table>
		</Card>
	</>)
}