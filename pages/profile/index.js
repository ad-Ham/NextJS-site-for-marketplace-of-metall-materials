import Head from 'next/head'
import { Mail, Phone, Lock, BuildingSkyscraper,Download,Trash, Home,Login, FileText,Pencil, FileDescription, User, PictureInPicture } from 'tabler-icons-react';
import Profilepicture from '/public/profilepicture.svg'
import Link from 'next/link'
import { Modal, Image, Avatar, Group, Title, Button, Badge, Input ,Text,Card , Grid, MediaQuery,SimpleGrid,Container} from '@mantine/core';
// import styles from './PersonalData.module.scss'
import { YourData } from '../../components/editprofile/YourData';
import { JurData } from '../../components/editprofile/JurData';
import { useEffect, useState } from 'react';
const axios = require('axios').default;
import { checkToken } from '/middleware/axios.js';
import { useRouter } from 'next/router'
import { useModals } from '@mantine/modals';


export async function getServerSideProps(context) {
	const res = await axios.get('https://api.metalmarket.pro/getUnapprovedUsers', {
		headers: {
			'Accept': 'application/json'
		}
	})
	
	const unapprovedUsers = res.data.users

	return {
		props: {
			unapprovedUsers: unapprovedUsers
		}
	}
}


const PersonalData = ({ user, userStatus, unapprovedUsers=[] }) => {
    const router = useRouter();
    
    const modals = useModals();

    const [opened, setOpened] = useState(false);
    const [open, setOpen] = useState(false);

    const handleApprove = async(e) => {
        await axios.post('https://api.metalmarket.pro/approveUser', {email: e.target.id})
        .then(function() {router.reload(window.location.pathname)})
    }

    const handleDisapprove = async(e) => {
        await axios.post('https://api.metalmarket.pro/disapproveUser', {email: e.target.id})
        .then(function() {router.reload(window.location.pathname)})
    }

    const showUsers = unapprovedUsers.map(el => {
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
    {/* <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Group position="center">     
            <Avatar
                    radius={'50%'}
                    size={90}
                    src={'data:image/' + ';base64,' + user.image}
                    alt="Avatar"
                    />
                <Button onClick={openAvatarModal} variant="outline"
                    style={{fontSize:12, marginTop: "15%"}}> <Download
                    size={8}
                    strokeWidth={2}
                    color={'#42aaff'} 
                    />  Загрузить</Button>                                          
             </Group>  
             </MediaQuery> 
        <Group position="apart" >      
            <Group>                       
            <SimpleGrid cols={1}> 
                <MediaQuery smallerThan="sm" styles={{marginTop: 0, marginLeft:10}}><p style={{fontSize:25, marginBottom: 30, marginTop: 30}}>{user.surName + ' ' + user.firstName+ ' ' + user.lastName}</p></MediaQuery>
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
                    color={'#26194d'}/>  Пароль:</p></SimpleGrid>
            </Group>
            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Group>     
            <SimpleGrid cols={1} style={{marginBottom:50, marginRight:50}}><Avatar
                    radius={'50%'}
                    size={90}
                    src={'data:image/' + ';base64,' + user.image}
                    alt="Avatar"
                    />
                <Button onClick={openAvatarModal} variant="outline"
                    style={{fontSize:14, marginTop: "10%"}}> <Download
                    size={18}
                    strokeWidth={2}
                    color={'#42aaff'} 
                    />  Загрузить</Button>  
                    </SimpleGrid>                         
             </Group>  
             </MediaQuery>          
        </Group>

        <Group style={{marginTop:20}} position="right">
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
        </Group>
        <Group>
        <SimpleGrid cols={1}>
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
                </SimpleGrid>
        </Group>
        <Group position="right">
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
        </Group>      */}
       <Group>
       <PictureInPicture
         size={30}
         strokeWidth={1}/>
            <Text weight={400} size="lg">
                Мой профиль
            </Text>
        </Group>
         <Container my="md">
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'xs', cols: 1, minHeight: '75px'}]}>    
      <Card shadow="sm" p="lg">                
        <Group direction="column">   
        <Card.Section style={{marginLeft:"30%"}}>         
            <Avatar
                    radius={'50%'}
                    size={190}                   
                    src={'data:image/' + ';base64,' + user.image}
                    alt="Avatar"
                    />
                <Button onClick={openAvatarModal} variant="outline"
                    style={{fontSize:15, marginLeft:10, marginTop:10}}> <Download
                    size={20}
                    strokeWidth={2}
                    color={'#42aaff'} 
                    />  Загрузить</Button>                  
            </Card.Section>  
            <Text align="center" style={{fontSize:25}}>{user.surName + ' ' + user.firstName+ ' ' + user.lastName}</Text>             
        </Group>  
        <Group style={{}} position="right">
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
        </Group>        
        </Card>     
        <Card shadow="sm" p="lg">
            <Text weight={400} size="lg" align="center" style={{marginBottom:20, borderBottom: " 1px solid #DCDCDC"}}>
                Ваши личные и юридические данные
            </Text>                   
        <Group direction="column">
        <Group>
                    <Mail               
                        size={20}
                        strokeWidth={1}
                        color={'#FF4F00'}
                        alt="Электронная почта"
                        title="Электронная почта"/>
                    <p style={{fontSize:17}}>
                    {user.email}
                    </p>
                </Group>
                <Group>
                    <Phone 
                    size={20}
                    strokeWidth={1}
                    color={'#FF4F00'}/>
                    <p style={{fontSize:17}}>
                    {user.phoneNumber}</p>
                </Group>                            
            <Group>
            <BuildingSkyscraper 
                    size={20}
                    strokeWidth={1}
                     color={'#FF4F00'}/>
            <p style={{fontSize:18}}>
                 {'Организация: ' + user.orgName}</p>
            </Group>
                <Group>
                <Home 
                        size={20}
                        strokeWidth={1}
                        color={'#FF4F00'}/>
                <p style={{fontSize:17}}>
                     {'Юридический адрес: ' + user.jurAdress}</p>
                </Group>
                <Group>
                <User 
                        size={20}
                        strokeWidth={1}
                        color={'#FF4F00'}/>
                <p style={{fontSize:17}}>
                    {'Должность: ' + user.post}</p>
                </Group>
                <Group>
                <FileText
                        size={20}
                        strokeWidth={1}
                        color={'#FF4F00'}/>
                <p style={{fontSize:17}}>
                    {'ИНН: ' + user.inn}</p>
                </Group>
                <Group>
                <FileDescription 
                         size={20}
                         strokeWidth={1}
                         color={'#FF4F00'}/>
                <p style={{fontSize:17}}>
                     {'ОГРН: ' + user.ogrn}</p> 
                </Group>  
            </Group>
            <Group position="right">
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
        </Group>                 
            </Card>  
      </SimpleGrid>
    </Container>
    </Card>
    </>}
    {(userStatus === true) && (user.role === 'admin') && 
    <>
        <MediaQuery smallerThan="sm" styles={{ fontSize: 20, marginLeft: 10}}><Text style={{margin: "2% 0"}} size="lg">Заявки на регистрацию</Text></MediaQuery>
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
        `
        }
        </style>            
    </>)
}

export default PersonalData;