import Head from 'next/head'
import { Mail, Phone, Lock, BuildingSkyscraper,Download,Trash, Home,Login, FileText,Pencil, FileDescription, User } from 'tabler-icons-react';
import Profilepicture from '/public/profilepicture.svg'
import Link from 'next/link'
import { Modal, Image, Avatar, Group, Title, Button, Badge } from '@mantine/core';
// import styles from './PersonalData.module.scss'
import { Card , Grid} from '@mantine/core';
import { YourData } from '../../components/editprofile/YourData';
import { JurData } from '../../components/editprofile/JurData';
import { useEffect, useState } from 'react';
const axios = require('axios').default;
import { checkToken } from '/middleware/axios.js';
import { useRouter } from 'next/router'


const PersonalData = () => {
const router = useRouter();
const [userStatus, setUserStatus] = useState('')
const [user, setUser] = useState('')
const [users, setUsers] = useState([])

const changeUserStatus = () => {
    setUserStatus(checkToken(router.pathname))
    if (checkToken(router.pathname) === true) {
        axios.get('https://api.metalmarket.pro/getUserId', {params:{token: localStorage.getItem("token")}})
        .then(function(response) {
            let userId = response.data.user_id.user_id;
            axios.get('https://api.metalmarket.pro/getUser', {params:{id: userId}})
            .then(function(response) {
                setUser(response.data.user)
                if (response.data.user.role === 'admin') {
                    axios.get('https://api.metalmarket.pro/getUnapprovedUsers')
                    .then(function(response) {
                        setUsers(response.data.users)
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                }
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

const [opened, setOpened] = useState(false);
const [open, setOpen] = useState(false);

const handleApprove = async(e) => {
    await axios.post('https://api.metalmarket.pro/approveUser', {email:e.target.id})
}

const handleDisapprove = async(e) => {
    await axios.post('https://api.metalmarket.pro/disapproveUser', {email:e.target.id})
}

const showUsers = users.map(el => {
        return (<Grid.Col span={12} key={'0' + el.id}>
            <Card p="sm" shadow="xl" style={{ marginBottom: '10px', minHeight: '75px' }}>
                <Group position="apart" style={{ marginBottom: 5 }}>
                    <Title order={3} weight={500}>{el.surName + ' ' + el.firstName + ' ' + el.lastName}</Title>
                </Group>
                <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between"}}>   
                    <div style={{minWidth: "40%"}}>   
                        <p style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}><Badge>E-mail</Badge>{el.email}</p>
                        <p style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}><Badge>Телефон</Badge> {el.phoneNumber}</p>
                        <p style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}><Badge>Организация</Badge> {el.orgName}</p>
                    </div>
                    <div style={{minWidth: "40%"}}>   
                        <p style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}><Badge>Юридический адрес</Badge> {el.jurAdress}</p>
                        <p style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}><Badge>Должность</Badge>{el.post}</p>
                        <p style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}><Badge>ИНН</Badge>{el.inn}</p>
                        <p style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}><Badge>ОГРН</Badge>{el.ogrn}</p>
                    </div>
                </div>
                <Grid>
                    <Grid.Col span={6} justify={'center'} align={'right'}>
                        <form id={el.email} key={'0'+el.id} onSubmit={handleApprove}>
                        <Button id={el.email} type="submit" color="green" variant="subtle" style={{ marginTop: 14 }}>
                            Одобрить
                        </Button>
                        </form>
                    </Grid.Col>
                    <Grid.Col span={6} justify={'center'} align={'left'}>
                        <form id={el.email} key={'0'+el.id} onSubmit={handleDisapprove}>
                        <Button id={el.id} type="submit" color="red" variant="subtle" style={{ marginTop: 14 }}>
                            Отклонить
                        </Button>
                        </form>
                    </Grid.Col>
                </Grid>
            </Card>
        </Grid.Col>);
    })

return (<>
    <Head>
        <title>Next Title</title>
        <meta name="keywords" content="next, javascript" />
        <meta name="description" content="this is" />
        <meta charSet="utf-8" />
    </Head>
    {(userStatus === false) && <><h1 className="errorHeader">401 Unauthorized</h1><p className="errorText">Пожалуйста, авторизуйтесь</p></>}
    {(userStatus === true) && <><Card> 
        <Grid grow gutter={3} justify="space-between" style={{marginLeft: 40}}>
            <Grid.Col span={3} >
                <p style={{fontSize:25, marginBottom: 30, marginTop: 30}}>{user.surName + ' ' + user.firstName+ ' ' + user.lastName}</p>
                <p style={{fontSize:18, marginBottom: 18}}>
                <Mail
                size={20}
                strokeWidth={2}
                color={'#26194d'}/>  {user.email}
                </p>
                <p style={{fontSize:18, marginBottom: 10}}>
                <Phone 
                size={20}
                strokeWidth={2}
                color={'#26194d'}/>  {user.phoneNumber}</p>
            </Grid.Col >      
            <Grid.Col span={1} offset={6} style={{marginTop: 35}}>
                <Avatar
                    radius={'50%'}
                    size={100}
                    src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                    alt="Random unsplash image"
                    />
                <p style={{fontSize:14}}> <Download
                    size={18}
                    strokeWidth={2}
                    color={'#42aaff'} />  Загрузить</p>
                <p style={{fontSize:14, marginTop: 5}}> <Trash
                    size={18}
                    strokeWidth={2}
                    color={'#42aaff'} />  Удалить</p>
            </Grid.Col>
        </Grid>
        <Grid grow gutter="xs" style={{marginLeft: 40, borderBottom: ' 2px solid #42aaff'}}>
            <Grid.Col span={2}>
                <p style={{fontSize:18, marginBottom: 15}}><Lock 
                    size={20}
                    strokeWidth={2}
                    color={'#26194d'}/>  Пароль:</p>
                <p style={{fontSize:18, marginBottom: 0}}><Login 
                    size={20}
                    strokeWidth={2}
                    color={'#26194d'}/>  Логин:</p>
            </Grid.Col>
             <Grid.Col  span={2} offset={11.3} style={{marginTop: -30}}>
                <Modal 
                    size="xl"
                    opened={opened}
                    onClose={() => setOpened(false)}>
                    <YourData/>
                </Modal>
                <Pencil
                    onClick={() => setOpened(true)}
                    size={20}
                    strokeWidth={2}
                    color={'#42aaff'}
                />
                                
            </Grid.Col>
        </Grid>
        <Grid grow gutter="xs" style={{marginLeft: 40, borderBottom: ' 2px solid #42aaff'}}>
             <Grid.Col span={4}>
                <p style={{fontSize:18, marginBottom: 20, marginTop: 10}}><BuildingSkyscraper 
                    size={20}
                    strokeWidth={2}
                     color={'#26194d'}/>{'Организация: ' + user.orgName}</p>
                <p style={{fontSize:18, marginBottom: 20}}>
                    <Home 
                        size={20}
                        strokeWidth={2}
                        color={'#26194d'}/>{'Юридический адрес: ' + user.jurAdress}</p>
                <p style={{fontSize:18, marginBottom: 20}}>
                    <User 
                        size={20}
                        strokeWidth={2}
                        color={'#26194d'}/>{'Должность: ' + user.post}</p>
                <p style={{fontSize:18, marginBottom: 20}}>
                    <FileText
                        size={20}
                        strokeWidth={2}
                        color={'#26194d'}/>{'ИНН: ' + user.inn}</p>
                <p style={{fontSize:18}}>
                    <FileDescription 
                         size={20}
                         strokeWidth={2}
                         color={'#26194d'}/>{'ОГРН: ' + user.ogrn}</p>
            </Grid.Col>
            <Grid.Col  span={4} offset={11.3} style={{marginTop: -30}}>
                 <Modal 
                    size="xl"
                    opened={open}
                    onClose={() => setOpen(false)}>
                    <JurData/>
                </Modal>
                <Pencil
                    onClick={() => setOpen(true)}
                    size={20}
                    strokeWidth={2}
                    color={'#42aaff'}
                 />
                                
            </Grid.Col>
        </Grid>
    </Card></>}
    {(userStatus === true) && (user.role === 'admin') && 
    <>
        <h1 style={{margin: "2% 0"}}>Заявки на регистрацию</h1>
        <Grid>
            {showUsers}
        </Grid>
    </>
    }

        
    </>)
}

export default PersonalData;