import { ModalsProvider } from '@mantine/modals';
import { MantineProvider } from '@mantine/core';
import { UserCircle } from 'tabler-icons-react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './MainLayout.module.scss'
import { useState, useEffect } from 'react';
import { axios, checkToken } from '/middleware/axios.js';
import { PersonalData } from '../profile/PersonalData';
import {
	AppShell,
	Button,
	Navbar,
	Header,
	Footer,
	Aside,
	Text,
	MediaQuery,
	Burger,
	useMantineTheme,
	Table,
	Badge,
	Stack,
	Divider,
	Title,
	Grid,
	Group,
	TextInput,
	Breadcrumbs, Anchor
} from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { CaretUp, CaretDown, News, ChartInfographic, Box, Calculator, FileText, Book, Train, ChartLine, Users, Help } from 'tabler-icons-react';
import { useRouter } from 'next/router'

import { LoginModal } from '../login/LoginModal';

export const MainLayout = ({ children }) => {
	const router = useRouter();
	const [userStatus, setUserStatus] = useState('')

	const changeUserStatus = () => {
		setUserStatus(checkToken(router.pathname))
	}

	useEffect(() => {
		changeUserStatus()
	}, [])

	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [isMobile, setIsMobile] = useState(false)


	const handleSubmit = e => {
		e.preventDefault();
		axios.post('https://api.metalmarket.pro/login', {
			login: login,
			password: password
		})
			.then(function (response) {
				if (response.status === 200) {
					localStorage.setItem('token', response.data.token);
					alert('Вы успешно вошли!')
					elem.classList.remove("modWindowWrapper")
				} else if (response.status === 404) {
					alert('Пользователь не найден')
				} else if (response.status === 403) {
					alert('Неверный пароль')
				}

				e.target.reset();
			})
			.catch(function (error) {
				alert('Не верный email или пароль!')
				console.log(error);
			});
	}

	const [opened, setOpened] = useState(false);
	const [openedMobile, setOpenedMobile] = useState(false);
	const onLogin = (state) => {
		setUserStatus(state)
	}

	const theme = useMantineTheme();

	const [stock, setStock] = useState([])
	const [metalls, setMetalls] = useState([])
	const [dollarPrice, setDollarPrice] = useState('')
	const [euroPrice, setEuroPrice] = useState('')

	const metallsIcon = [{
		image: <img src="/Al.svg" height="20px" width="20px"/>
	},
	{
		image: <img src="/Pb.svg" height="20px" width="20px"/>

	},
	{
		image: <img src="/Fe.svg" height="20px" width="20px"/>

	},
	{
		image: <img src="/Cu.svg" height="20px" width="20px"/>

	},
	{
		image: <img src="/Ni.svg" height="20px" width="20px"/>

	},
	{
		image: <img src="/Zn.svg" height="20px" width="20px"/>

	},
	{
		image: <img src="/Sn.svg" height="20px" width="20px"/>

	}
];

	const companyLogo = [{
		image: <img src="/nornickel.svg" height="20px" width="20px"/>
	},
	{
		image: <img src="/polyuss.svg" height="20px" width="20px"/>

	},
	{
		image: <img src="/nlmk.svg" height="20px" width="20px"/>

	},
	{
		image: <img src="/severstal.svg" height="20px" width="20px"/>

	},
	{
		image: <img src="/alrosa.svg" height="20px" width="20px"/>

	},
	{
		image: <img src="/mmk.svg" height="20px" width="20px"/>

	},
	{
		image: <img src="/raspadskaya.svg" height="20px" width="20px"/>

	},
	{
		image: <img src="/tmk.svg" height="20px" width="20px"/>

	}
];

	const dictionary = {
		'news': 'Новости',
		'promos': 'Объявления',
		'main': 'Главная',
		'account': 'Аккаунт',
		'edit': 'Изменить'
	}
	console.log(router.pathname.split('/'))
	const items = ['main', ...router.pathname.split('/').filter(item => item !== '')].map((item, index) => (
		<Anchor href={item === 'main' ? '/' : item} key={index}>
			{dictionary[item]}
		</Anchor>
	));

	useEffect(() => {
		if (document.body.clientWidth < 900) {
			setIsMobile(true)
		}

		axios.get('https://api.metalmarket.pro/getExchangeRates')
			.then(function (response) {
				const dollarPrice = response.data.dollar_price
				const euroPrice = response.data.euro_price
				setDollarPrice(dollarPrice)
				setEuroPrice(euroPrice)
			})
			.catch(function (error) {
				console.log(error);
			})

		axios.get('https://api.metalmarket.pro/getMetalsPrice')
			.then(function (response) {
				setMetalls(response.data.metals)
			})
			.catch(function (error) {
				console.log(error);
			})

		axios.get('https://api.metalmarket.pro/getStockRates')
			.then(function (response) {
				setStock(response.data.stock)
			})
			.catch(function (error) {
				console.log(error);
			})
	}, [])

	return (
		<>
			<MantineProvider>
			 <ModalsProvider>
			 <NotificationsProvider>
				<AppShell
					styles={{
						main: {
							background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
						},
					}}
					navbarOffsetBreakpoint="sm"
					asideOffsetBreakpoint="sm"
					navbar={
						<Navbar p="md" hiddenBreakpoint="sm" hidden={!openedMobile} width={{ sm: 200, lg: 300 }} className='navbar'>
							<Navbar.Section>
								<Text className={styles.navbarSectionText} size="xl" weight={600}>Разделы</Text>
							</Navbar.Section>
							<Divider my="md" />
							<Navbar.Section>
								<Stack spacing="xs">
									<Link href='/help' passHref>
										<Button className={styles.navbarSectionButton} variant="subtle" color="gray" size="md" leftIcon={<Help />} style={{ color: '#e84f22' }}>Техподдежка</Button>
									</Link>
									<Link href='/promos' passHref>
										<Button className={styles.navbarSectionButton} variant="subtle" color="gray" size="md" leftIcon={<Box />} style={{ color: '#e84f22' }}>Доска объявлений</Button>
									</Link>
									<Link href='/news' passHref>
										<Button className={styles.navbarSectionButton} variant="subtle" color="gray" size="md" leftIcon={<News />}>Новости</Button>
									</Link>
								</Stack>
							</Navbar.Section>
							<Navbar.Section>
								<Divider my="md" />
								<Text className={styles.navbarSectionText} size="lg" weight={500}>Инструменты металлурга</Text>
								<Divider my="md" />
							</Navbar.Section>
							<Navbar.Section>
								<Stack spacing="xs">
									<Link href="/underconstruction" passHref>
										<Button className={styles.navbarSectionButton} variant="subtle" color="gray" size="md" leftIcon={<Calculator />}>Калькулятор металлурга</Button>
									</Link>
									<Link href="/underconstruction" passHref>
										<Button className={styles.navbarSectionButton} variant="subtle" color="gray" size="md" leftIcon={<Train />}>Расчет логистики</Button>
									</Link>
								</Stack>
							</Navbar.Section>
							<Navbar.Section>
								<Divider my="md" />
								<Text className={styles.navbarSectionText} size="lg" weight={500}>Информация</Text>
								<Divider my="md" />
							</Navbar.Section>
							<Navbar.Section>
								<Stack spacing="xs">
									<Link href="/underconstruction" passHref>
										<Button className={styles.navbarSectionButton} variant="subtle" color="gray" size="md" leftIcon={<ChartLine />}>Индекс цен и акций</Button>
									</Link>
									<Link href="/underconstruction" passHref>
										<Button className={styles.navbarSectionButton} variant="subtle" color="gray" size="md" leftIcon={<ChartInfographic />}>Аналитика</Button>
									</Link>
									<Link href="/gosts" passHref>
										<Button className={styles.navbarSectionButton} variant="subtle" color="gray" size="md" leftIcon={<FileText />}>ГОСТы</Button>
									</Link>
									<Link href="/underconstruction" passHref>
										<Button className={styles.navbarSectionButton} variant="subtle" color="gray" size="md" leftIcon={<Book />}>Справочник металлурга</Button>
									</Link>
									<Link href="/underconstruction" passHref>
										<Button className={styles.navbarSectionButton} variant="subtle" color="gray" size="md" leftIcon={<Users />}>Конференции</Button>
									</Link>
								</Stack>
							</Navbar.Section>
						</Navbar>
					}
					aside={
						<MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
							<Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 350 }} className={styles.aside}>
								<div style={{ borderRadius: '5px', border: '1px #8d98a3 solid', padding: '10px' }}>
									<Title className={styles.priceTitle} order={2} style={{ marginTop: '10px', marginBottom: '10px', fontWeight: '400' }}>Курс ЦБ</Title>
									<Grid className={styles.priceButtonContainer}>
										<Grid.Col span={6} align={"left"}>
											<Badge className={styles.priceBadge} color="orange" size="xl" radius="md" variant="outline">1$ = {dollarPrice}</Badge>
										</Grid.Col>
										<Grid.Col span={6} align={"right"}>
											<Badge className={styles.priceBadge} color="orange" size="xl" radius="md" variant="outline">1€ = {euroPrice}</Badge>
										</Grid.Col>
									</Grid>
								</div>
	
								<Title className={styles.priceTitle} order={2} style={{ marginTop: '10px', marginBottom: '10px', fontWeight: '400' }}>Индекс цен на металлы</Title>
								<Table className={styles.metallsTable} fontSize="15px">
									<thead>
										<tr>
											<th style={{ fontWeight: 400, borderTop: ' 2px solid grey', borderBottom: ' 2px solid grey' }}>Металлы</th>
											<th style={{ fontWeight: 400, borderTop: ' 2px solid grey', borderBottom: ' 2px solid grey' }}>Цена</th>
											<th style={{ fontWeight: 400, borderTop: ' 2px solid grey', borderBottom: ' 2px solid grey' }}>Изм</th>
										</tr>
									</thead>
									<tbody>
										{metalls.map(metalls => (
											<tr key={metalls.id}>
												<td style={{ fontWeight: 400 }}>{metallsIcon[0].image}   {metalls.name}</td>
												<td >{metalls.price}</td>
												<td style={{
													color: (parseFloat(metalls.price_change) < 0 ? '#ff0000' : '#008000'),
													display: 'flex',
													alignItems: 'center'
												}}>
													{metalls.price_change.toString().replace('-', '')}
													{
														parseFloat(metalls.price_change) < 0 ?
															<CaretDown
																size={18}
																strokeWidth={1}
																color={'#ff0000'}
															/> :
															<CaretUp
																size={18}
																strokeWidth={1}
																color={'#008000'}
															/>
													}
												</td>
											</tr>
										))}
									</tbody>
								</Table>

								<Title className={styles.priceTitle} order={2} style={{ marginTop: '10px', marginBottom: '10px', fontWeight: '400' }}>Индекс цен на акции</Title>
								<Table className={styles.metallsTable} fontSize="15px">
									<thead>
										<tr>
											<th style={{ fontWeight: 400, borderTop: ' 2px solid grey', borderBottom: ' 2px solid grey' }}>Акции</th>
											<th style={{ fontWeight: 400, borderTop: ' 2px solid grey', borderBottom: ' 2px solid grey' }}>Цена</th>
											<th style={{ fontWeight: 400, borderTop: ' 2px solid grey', borderBottom: ' 2px solid grey' }}>Изм</th>
										</tr>
									</thead>
									<tbody>
										{stock.map(stock => (
											<tr key={stock.id}>
												<td style={{ fontWeight: 400 }}>{companyLogo[stock.id-0].image}   {stock.name}</td>
												<td >{stock.price}</td>
												<td style={{
													color: (parseFloat(stock.price_change) < 0 ? '#ff0000' : '#008000'),
													display: 'flex',
													alignItems: 'center'
												}}>
													{stock.price_change.toString().replace('-', '')}
													{
														parseFloat(stock.price_change) < 0 ?
															<CaretDown
																size={18}
																strokeWidth={1}
																color={'#ff0000'}
															/> :
															<CaretUp
																size={18}
																strokeWidth={1}
																color={'#008000'}
															/>
													}
												</td>
											</tr>
										))}
									</tbody>
								</Table>
							</Aside>
						</MediaQuery>
					}
					footer={
						<Footer height={60} p="md" className={styles.footercontainer}>
							<div className={styles.footerleft}>
								<Link href="/" passHref>
									<Image
										alt="metal-merket.pro"
										src="/logo.svg"
										width={300}
										height={75}
									/>
								</Link>
							</div>
							<ul className={styles.footerul}>
								<li>г.Уфа, Республика Башкортостан</li>
								<li>© ООО &quot;Технические системы&quot;, 2022</li>
							</ul>
						</Footer>
					}
					header={
						<Header height={70} p="md">
							<div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
								<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
									<Burger
										opened={opened}
										onClick={() => setOpenedMobile((o) => !o)}
										size="sm"
										color={theme.colors.gray[6]}
										mr="xl"
									/>
								</MediaQuery>
								<MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
									<Link href="/" passHref>
										<Image className={styles.logo}
											alt="metall-market.pro"
											src="/logo.svg"
											width={300}
											height={75}
										/>
									</Link>
								</MediaQuery>
								<Link href="/profile" passHref>
									<UserCircle
										size={32}
										strokeWidth={1}
										color={'#191d4d'}
									/>	
								</Link>
								{!userStatus && <LoginModal />}	
							</div>
						</Header>
					}
				>
					{/*<Breadcrumbs style={{ marginBottom: '10px' }}>{items}</Breadcrumbs>*/}
					{children}
				</AppShell>
			 </NotificationsProvider>
			 </ModalsProvider>
			</MantineProvider>
		</>
		)
	}