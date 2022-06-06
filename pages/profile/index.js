import Head from 'next/head'
import { Mail, Phone, Lock, BuildingSkyscraper,Download,Trash, Home,Login, FileText,Pencil, FileDescription, User } from 'tabler-icons-react';
import Profilepicture from '/public/profilepicture.svg'
import Link from 'next/link'
import { Modal, Image, Avatar, Group, Title, Button, Badge, Input } from '@mantine/core';
// import styles from './PersonalData.module.scss'
import { Card , Grid, MediaQuery} from '@mantine/core';
import { YourData } from '../../components/editprofile/YourData';
import { JurData } from '../../components/editprofile/JurData';
import { useEffect, useState } from 'react';
const axios = require('axios').default;
import { checkToken } from '/middleware/axios.js';
import { useRouter } from 'next/router'
import { useModals } from '@mantine/modals';


const PersonalData = () => {
    const router = useRouter();
    const [userStatus, setUserStatus] = useState('')
    const [user, setUser] = useState('')
    const [users, setUsers] = useState([])
    const [format, setFormat] = useState('')

    const changeUserStatus = () => {
        setUserStatus(checkToken(router.pathname))
        if (checkToken(router.pathname) === true) {
            axios.get('https://api.metalmarket.pro/getUserId', {params:{token: localStorage.getItem("token")}})
            .then(function(response) {
                let userId = response.data.user_id.user_id;
                axios.get('https://api.metalmarket.pro/getUser', {params:{id: userId}})
                .then(function(response) {
                    setUser(response.data.user)
                    setFormat(response.data.user.photopath.substr(user.photopath.length-3))
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
    
    const modals = useModals();

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

    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
        const i = event.target.files[0];

        setImage(i);
        setCreateObjectURL(URL.createObjectURL(i));
        blah.src = URL.createObjectURL(i)
        }
    };

    const [image, setImage] = useState(null);
    const [createObjectURL, setCreateObjectURL] = useState(null);

    const uploadToServer = async (e) => {  
            e.preventDefault()
            const body = new FormData(document.getElementById("uploadForm"));
            body.append("id", user.id)
            body.append("photopath", user.photopath)
            fetch("https://api.metalmarket.pro/updateAvatar", {
            method: "POST",
            body
            }).then(function() {router.reload(window.location.pathname)})
            
    }

    const openAvatarModal = () =>
        modals.openModal({
        title: 'Загрузите фото для вашего профиля',
        closeOnConfirm: false,
        labels: { confirm: 'Загрузить' },
        children: (<>
                <form id="uploadForm" onSubmit={uploadToServer} style={{display: 'flex', alignItems:'center', flexDirection: 'column'}}>
                    <Input
                        required
                        id="file-chooser"
                        type="file"
                        name="sampleFile"
                        onChange={uploadToClient} 
                        style={{marginBottom: "2%"}}/>
                    <div style={{display: 'flex', alignItems:'center', marginBottom: "2%"}}>
                        <img className='photo'
                            id="blah"
                            src='#'
                            height='200px'
                            width='200px'
                            alt="Загрузите логотип"/>
                    </div>
                    <Button type="submit">Сохранить</Button>
                </form>
        </>)
        });

<<<<<<< HEAD
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
                    color={'#26194d'}
                    alt="Электронная почта"
                    title="Электронная почта"/>  {user.email}
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
                        src={'data:image/'+ format+';base64,' + user.image}
                        alt="Avatar"
                        />
                    <Button onClick={openAvatarModal} variant="outline"
                        style={{fontSize:14, marginTop: "10%"}}> <Download
                        size={18}
                        strokeWidth={2}
                        color={'#42aaff'} 
                        />  Загрузить</Button>
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
=======
return (<>
    <Head>
        <title>Next Title</title>
        <meta name="keywords" content="next, javascript" />
        <meta name="description" content="this is" />
        <meta charSet="utf-8" />
    </Head>
    {(userStatus === false) && <><h1 className="errorHeader">401 Unauthorized</h1><p className="errorText">Пожалуйста, авторизуйтесь</p></>}
    {(userStatus === true) && <>
    <Card> 
        <MediaQuery smallerThan={1400} styles={{ display: 'none' }}>
        <Grid grow gutter={3} justify="space-between" style={{marginLeft: 40,borderBottom: ' 2px solid #42aaff'}}>  
            <Grid.Col span={3} >               
                <p style={{fontSize:25, marginBottom: 30, marginTop: 30}}>{user.surName + ' ' + user.firstName+ ' ' + user.lastName}</p>
                <p style={{fontSize:18, marginBottom: 18}}>
                <Mail
                size={20}
                strokeWidth={2}
                color={'#26194d'}
                alt="Электронная почта"
                title="Электронная почта"/>  {user.email}
                </p>
                <p style={{fontSize:18, marginBottom: 15}}>
                <Phone 
                size={20}
                strokeWidth={2}
                color={'#26194d'}/>  {user.phoneNumber}</p>
                <p style={{fontSize:18, marginBottom: 15}}><Login 
                    size={20}
                    strokeWidth={2}
                    color={'#26194d'}/>  Логин:</p>
                <p style={{fontSize:18, marginBottom: 0}}><Lock 
                    size={20}
                    strokeWidth={2}
                    color={'#26194d'}/>  Пароль:</p>
            </Grid.Col>                 
            <Grid.Col span={1} offset={6} style={{marginTop: 35}}>                              
                <Avatar
                    radius={'50%'}
                    size={90}
                    src={'data:image/'+ format+';base64,' + user.image}
                    alt="Avatar"
                    />
                <Button onClick={openAvatarModal} variant="outline"
                    style={{fontSize:14, marginTop: "10%"}}> <Download
                    size={18}
                    strokeWidth={2}
                    color={'#42aaff'} 
                    />  Загрузить</Button>
            </Grid.Col>
        </Grid> 
        </MediaQuery> 
        <MediaQuery largerThan={1400} styles={{ display: 'none' }}>
        <Grid grow gutter={3} justify="space-between" style={{marginLeft: 40,borderBottom: ' 2px solid #42aaff'}}>  
            <Grid.Col offset={2} style={{marginTop: 10}}>                              
                <Avatar
                    radius={'50%'}
                    size={90}
                    src={'data:image/'+ format+';base64,' + user.image}
                    alt="Avatar"
                    />
                <Button onClick={openAvatarModal} variant="outline"
                    style={{fontSize:14, marginTop: "10%"}}> <Download
                    size={18}
                    strokeWidth={2}
                    color={'#42aaff'} 
                    />  Загрузить</Button>
            </Grid.Col>
            <Grid.Col >               
                <p style={{fontSize:25, marginBottom: 30, marginTop: 30}}>{user.surName + ' ' + user.firstName+ ' ' + user.lastName}</p>
                <p style={{fontSize:18, marginBottom: 18}}>
                <Mail
                size={20}
                strokeWidth={2}
                color={'#26194d'}
                alt="Электронная почта"
                title="Электронная почта"/>  {user.email}
                </p>
                <p style={{fontSize:18, marginBottom: 15}}>
                <Phone 
                size={20}
                strokeWidth={2}
                color={'#26194d'}/>  {user.phoneNumber}</p>
                <p style={{fontSize:18, marginBottom: 15}}><Login 
                    size={20}
                    strokeWidth={2}
                    color={'#26194d'}/>  Логин:</p>
                <p style={{fontSize:18, marginBottom: 0}}><Lock 
                    size={20}
                    strokeWidth={2}
                    color={'#26194d'}/>  Пароль:</p>
            </Grid.Col>       
        </Grid>    
        </MediaQuery>  
        <Grid grow gutter="xs" style={{marginLeft: 40}}>
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
                     color={'#26194d'}/> {'Организация: ' + user.orgName}</p>
                <p style={{fontSize:18, marginBottom: 20}}>
                    <Home 
                        size={20}
                        strokeWidth={2}
                        color={'#26194d'}/> {'Юридический адрес: ' + user.jurAdress}</p>
                <p style={{fontSize:18, marginBottom: 20}}>
                    <User 
                        size={20}
                        strokeWidth={2}
                        color={'#26194d'}/> {'Должность: ' + user.post}</p>
                <p style={{fontSize:18, marginBottom: 20}}>
                    <FileText
                        size={20}
                        strokeWidth={2}
                        color={'#26194d'}/> {'ИНН: ' + user.inn}</p>
                <p style={{fontSize:18}}>
                    <FileDescription 
                         size={20}
                         strokeWidth={2}
                         color={'#26194d'}/> {'ОГРН: ' + user.ogrn}</p>
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
    <style jsx>{`
        .email:hover:after {
            content: attr(data-name);
            position: absolute;
            left: 0;
            bottom: 0;
            background: rgba(5,13,156,.55);
            color: #fff;
            text-align: center;
            font-family: cursive;
            font-size: 14px;
            padding: 3px 0;
            width: 100%;
>>>>>>> d58a1290ee1f9cdec9f8558ceeb8d1b27ed6441c
        }
        <style jsx>{`
            .email:hover:after {
                content: attr(data-name);
                position: absolute;
                left: 0;
                bottom: 0;
                background: rgba(5,13,156,.55);
                color: #fff;
                text-align: center;
                font-family: cursive;
                font-size: 14px;
                padding: 3px 0;
                width: 100%;
            }
        `}</style>
            
        </>)
}

export default PersonalData;