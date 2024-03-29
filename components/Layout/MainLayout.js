import { ModalsProvider } from '@mantine/modals'
import { useScrollLock } from '@mantine/hooks'
import Link from 'next/link'
import Image from 'next/image'
import styles from './MainLayout.module.scss'
import { useState, useEffect } from 'react'
import { axios, checkToken } from '/middleware/axios.js'
import { MenuUser } from '../menu/Menu'
import { LoginModal } from '../login/LoginModal'
import {
	AppShell,
	MantineProvider,
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
	Breadcrumbs, 
	Anchor,
	ThemeIcon,
	ScrollArea
} from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { 
	CaretUp, CaretDown, News, ChartInfographic, Box, 
	Calculator, FileText, Book, Train, ChartLine, 
	Users, Help, Certificate, AddressBook } from 'tabler-icons-react';
import { useRouter } from 'next/router'


export const MainLayout = ({ onlineUsers, children, user, userStatus }) => {
	const router = useRouter()
	
	const [chats, setChats] = useState(false)
	const [isMobile, setIsMobile] = useState(false)

	const [opened, setOpened] = useState(false)
	const [scrollLocked, setScrollLocked] = useScrollLock()
	const [openedMobile, setOpenedMobile] = useState(false)

	const theme = useMantineTheme()

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
	]

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
	// const items = ['main', ...router.pathname.split('/').filter(item => item !== '')].map((item, index) => (
	// 	<Anchor href={item === 'main' ? '/' : item} key={index}>
	// 		{dictionary[item]}
	// 	</Anchor>
	// ));

	useEffect(() => {
		if (router.pathname === '/chats') setChats(true)
		else setChats(false)

		if (document.body.clientWidth < 900) {
			setIsMobile(true)
		}
		else {
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
		}
	}, [router])

	return (
		<>
			<MantineProvider>
			<ModalsProvider>
			<NotificationsProvider>
				<AppShell
					styles={{
						main: {
							padding: 0,
							paddingBottom: 16,
							background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
							visibility: openedMobile ? 'hidden' : 'visible'
						}, position: "relative"
					}}
					navbarOffsetBreakpoint="sm"
					asideOffsetBreakpoint="sm"
					navbar={
						<Navbar p="md" hiddenBreakpoint="sm" hidden={!openedMobile} width={{ sm: 200, lg: 300 }} className='navbar'>
							<Navbar.Section style={{ marginBottom: 10 }}>
								<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
									<div style={{ marginBottom: 20}}>
										{(userStatus === true) ? <><MenuUser user={user} style={{ user }}/></> : <><LoginModal /></>}
									</div>	
								</MediaQuery>
							</Navbar.Section>
							<Navbar.Section grow component={ScrollArea} onClick={() => setOpenedMobile(false)}>
								<Stack spacing='md'>
									<Link href='/help' passHref style={{ cursor: 'pointer' }}>
										<Button className={styles.navbarSectionButton} variant="subtle" color="gray" size="md" leftIcon={<Help />} style={{ color: '#e84f22' }}>Техподдежка</Button>
									</Link>
									<Link href='/promos' passHref style={{ cursor: 'pointer' }}>
										<Button className={styles.navbarSectionButton} variant="subtle" color="gray" size="md" leftIcon={<Box />} style={{ color: '#e84f22' }}>Доска объявлений</Button>
									</Link>
									<Link href='/news' passHref style={{ cursor: 'pointer' }}>
										<Button className={styles.navbarSectionButton} variant="subtle" color="gray" size="md" leftIcon={<News />}>Новости</Button>
									</Link>
									<Link href='/news' passHref style={{ cursor: 'pointer' }}>
										<Button className={styles.navbarSectionButton} variant="subtle" color="gray" size="md" leftIcon={<Certificate />}>Тендеры</Button>
									</Link>
									<Link href="/underconstruction" passHref style={{ cursor: 'pointer' }}>
										<Button className={styles.navbarSectionButton} variant="subtle" color="gray" size="md" leftIcon={<Calculator />}>Калькулятор металлурга</Button>
									</Link>
									<Link href="/underconstruction" passHref style={{ cursor: 'pointer' }}>
										<Button className={styles.navbarSectionButton} variant="subtle" color="gray" size="md" leftIcon={<Train />}>Расчет логистики</Button>
									</Link>
									<Link href="/underconstruction" passHref style={{ cursor: 'pointer' }}>
										<Button className={styles.navbarSectionButton} variant="subtle" color="gray" size="md" leftIcon={<AddressBook />}>Каталог компаний</Button>
									</Link>
									<Link href="/underconstruction" passHref style={{ cursor: 'pointer' }}>
										<Button className={styles.navbarSectionButton} variant="subtle" color="gray" size="md" leftIcon={<ChartLine />}>Индекс цен и акций</Button>
									</Link>
									<Link href="/underconstruction" passHref style={{ cursor: 'pointer' }}>
										<Button className={styles.navbarSectionButton} variant="subtle" color="gray" size="md" leftIcon={<ChartInfographic />}>Аналитика</Button>
									</Link>
									<Link href="/gosts" passHref style={{ cursor: 'pointer' }}>
										<Button className={styles.navbarSectionButton} variant="subtle" color="gray" size="md" leftIcon={<FileText />}>ГОСТы</Button>
									</Link>
									<Link href="/underconstruction" passHref style={{ cursor: 'pointer' }}>
										<Button className={styles.navbarSectionButton} variant="subtle" color="gray" size="md" leftIcon={<Book />}>Справочник металлурга</Button>
									</Link>
									<Link href="/underconstruction" passHref style={{ cursor: 'pointer' }}>
										<Button className={styles.navbarSectionButton} variant="subtle" color="gray" size="md" leftIcon={<Users />}>Конференции</Button>
									</Link>	
									<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
										<Group spacing={10}>
											<ThemeIcon color="green" variant="subtle" size="md" style={{marginLeft:10}}><Users/></ThemeIcon>
											<Text>{`Онлайн: ${onlineUsers}`}</Text>
										</Group>
									</MediaQuery>							
									</Stack>
							</Navbar.Section>							
						</Navbar>
					}
					aside={<>
						{!chats && !isMobile && <>
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
											{metalls.map((metalls, index) => (
												<tr key={metalls.id}>
													<td style={{ fontWeight: 400 }}>{metallsIcon[index].image} {metalls.name}</td>
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
													<td style={{ fontWeight: 400 }}>{companyLogo[stock.id].image}   {stock.name}</td>
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
						</>
						}
					</>
					}
					footer={<>					
							<Footer height={80}>	
							<MediaQuery smallerThan="sm" styles={{ display: 'none' }}>					
								<Group position="apart" style={{marginRight: 20, marginLeft: 20	}}>
									<Group>
										<Link href="/" passHref>						
											<Image
												style={{ cursor: 'pointer' }}
												alt="metal-merket.pro"
												src="/logo.svg"
												width={300}
												height={75}
											/>								
										</Link>
									</Group>									
										<Group position="right">										
											<Text>© ООО &quot;Технические системы&quot;, 2022</Text>										
										</Group>									
								</Group>
							</MediaQuery>
							<MediaQuery largerThan={760} styles={{ display: 'none' }}>					
								<Group position="center">									
										<Link href="/" passHref>						
											<Image
												style={{ cursor: 'pointer'}}
												alt="metal-merket.pro"
												src="/logo.svg"
												width={250}
												height={65}
												onClick={() => setOpenedMobile(false)}
											/>								
										</Link>																													
									<Text style={{fontSize:12, marginTop: -30}}>© ООО &quot;Технические системы&quot;, 2022</Text>																													
								</Group>
							</MediaQuery>
							</Footer>
						</>
					}
					header={
						<Header height={70} p="md" style={{position:'relative'}}>
							<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%', paddingRight: '20px'}}>
								<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
									<Burger
										opened={opened}
										onClick={() => {
											setOpenedMobile((o) => !o)
											// setScrollLocked((c) => !c)
										}}
										size="sm"
										color={theme.colors.gray[6]}
										mr="xl"
									/>
								</MediaQuery>							
									<Group>
									<MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
										<Link href="/" passHref>
											<Image className={styles.logo}
											 	style={{ cursor: 'pointer' }}
												alt="metall-market.pro"
												src="/logo.svg"
												width={300}
												height={75}
												onClick={() => setOpenedMobile(false)}
											/>
										</Link>
									</MediaQuery>
									<MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
										<Group spacing={0}>
											<ThemeIcon color="green" variant="subtle" size={30}><Users/></ThemeIcon>
											<Text>{`Сейчас на сайте: ${onlineUsers}`}</Text>
										</Group>
									</MediaQuery>
									</Group>
									<MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
										<div >
											{(userStatus === true) ? <><MenuUser user={user} style={{ user }}/></> : <><LoginModal /></>}
										</div>
									</MediaQuery>
								{/* <div>{(userStatus === true) && <><MenuUser user={user} style={{ user }}/></>}</div>	
								
								{(userStatus === false) && <><LoginModal/></>} */}
								
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