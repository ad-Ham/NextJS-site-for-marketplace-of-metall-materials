import Head from 'next/head'
import { Mail, Phone, Lock, BuildingSkyscraper, Home,Login, FileText,Pencil, FileDescription, User } from 'tabler-icons-react';
import Profilepicture from '/public/profilepicture.svg'
import Link from 'next/link'
import { Modal } from '@mantine/core';
// import styles from './PersonalData.module.scss'
import { Card , Grid} from '@mantine/core';
import { YourData } from '../../components/editprofile/YourData';
import { JurData } from '../../components/editprofile/JurData';
import { useState } from 'react';


const PersonalData = () => {
    const [opened, setOpened] = useState(false);
    const [open, setOpen] = useState(false);

	return (<>
          <Head>
                <title>Next Title</title>
                <meta name="keywords" content="next, javascript" />
                <meta name="description" content="this is" />
                <meta charSet="utf-8" />
            </Head>
            <Card> 
                    <Grid grow gutter="xs" style={{marginLeft: 40}}>
                        <Grid.Col span={2} >
                            <p style={{fontSize:25, marginBottom: 30, marginTop: 30}}>Хоменков Алексей Дмитриевич</p>
                            <p style={{fontSize:18, marginBottom: 18}}>
                                <Mail
                                size={20}
                                strokeWidth={2}
                                color={'#26194d'}/>  aleks.khomenkov.03@mail.ru
                            </p>
                            <p style={{fontSize:18, marginBottom: 10}}>
                                <Phone 
                                size={20}
                                strokeWidth={2}
                                color={'#26194d'}/>  88005553535</p>

                        </Grid.Col>
                        <Grid.Col span={2} offset={4} style={{marginTop: 40}}>
                            <Profilepicture />
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
                        <Grid.Col  span={2} offset={11.3} style={{marginTop: -40}}>
                                <Modal 
                                size="xl"
                                opened={opened}
                                onClose={() => setOpened(false)}>
                                <YourData/>
                                </Modal>
                                <Pencil
                                    onClick={() => setOpened(true)}
                                    size={25}
                                    strokeWidth={2}
                                    color={'#42aaff'}
                                />
                            
                        </Grid.Col>
                    </Grid>
                    <Grid grow gutter="xs" style={{marginLeft: 40, borderBottom: ' 2px solid #42aaff'}}>
                        <Grid.Col span={2}>
                            <p style={{fontSize:18, marginBottom: 20, marginTop: 10}}><BuildingSkyscraper 
                                size={20}
                                strokeWidth={2}
                                color={'#26194d'}/>  Организация:</p>
                            <p style={{fontSize:18, marginBottom: 20}}>
                                <Home 
                                size={20}
                                strokeWidth={2}
                                color={'#26194d'}/>  Юридический адрес:</p>
                            <p style={{fontSize:18, marginBottom: 20}}>
                                <User 
                                size={20}
                                strokeWidth={2}
                                color={'#26194d'}/>  Должность:</p>
                            <p style={{fontSize:18, marginBottom: 20}}>
                                <FileText
                                size={20}
                                strokeWidth={2}
                                color={'#26194d'}/>  ИНН:</p>
                            <p style={{fontSize:18}}>
                                <FileDescription 
                                size={20}
                                strokeWidth={2}
                                color={'#26194d'}/>  ОГРН:</p>
                        </Grid.Col>
                        <Grid.Col  span={2} offset={11.3} style={{marginTop: -40}}>
                            <Modal 
                                size="xl"
                                opened={open}
                                onClose={() => setOpen(false)}>
                                <JurData/>
                                </Modal>
                                <Pencil
                                    onClick={() => setOpen(true)}
                                    size={25}
                                    strokeWidth={2}
                                    color={'#42aaff'}
                                />
                            
                        </Grid.Col>
        </Grid>
            </Card>   
    {/* <Card>
	 <Group>
        <Grid >
            <Grid.Col style={{marginLeft:20}}>
                 <Profilepicture />
            </Grid.Col>
        </Grid>
        <Grid>
            <Grid.Col offset={1}>
                <p style={{fontSize:25, marginBottom: 30, marginTop: 30}}>Хоменков Алексей Дмитриевич</p>
                <p style={{fontSize:18, marginBottom: 18}}>
                    <Mail
                    size={20}
                    strokeWidth={2}
                    color={'#26194d'}/>  aleks.khomenkov.03@mail.ru
                </p>
                <p style={{fontSize:18, marginBottom: 20}}>
                    <Phone 
                    size={20}
                    strokeWidth={2}
                    color={'#26194d'}/>  88005553535</p>
            </Grid.Col>
        </Grid>		
	 </Group>
     <Group style={{borderBottom: ' 2px solid #42aaff'}}>
     <Grid style={{fontSize:18, marginBottom:10}}>
            <Grid.Col offset={8.2}>
                <p><Login 
                    size={20}
                    strokeWidth={2}
                    color={'#26194d'}/>  Логин:</p>
            </Grid.Col>
            <Grid.Col offset={8.2}>
                <p><Lock 
                    size={20}
                    strokeWidth={2}
                    color={'#26194d'}/>  Пароль:</p>
            </Grid.Col>
        </Grid>
        <Grid>
            <Grid.Col  offset={200} style={{marginTop:30}}>
                <Link href="/editprofile" >
                    <Pencil
                        size={25}
                        strokeWidth={2}
                        color={'#42aaff'}
                    />
                </Link>
            </Grid.Col>
        </Grid>
     </Group>
     <Group style={{borderBottom: ' 2px solid #42aaff'}}>
     <Grid style={{marginTop:10}}>
            <Grid.Col offset={7.8}>
                <p style={{fontSize:18, marginBottom: 20}}><BuildingSkyscraper 
                    size={20}
                    strokeWidth={2}
                    color={'#26194d'}/>  Организация:</p>
                <p style={{fontSize:18, marginBottom: 20}}>
                    <Home 
                    size={20}
                    strokeWidth={2}
                    color={'#26194d'}/>  Юридический адрес:</p>
                <p style={{fontSize:18, marginBottom: 20}}>
                    <User 
                    size={20}
                    strokeWidth={2}
                    color={'#26194d'}/>  Должность:</p>
                 <p style={{fontSize:18, marginBottom: 20}}>
                    <FileText
                    size={20}
                    strokeWidth={2}
                    color={'#26194d'}/>  ИНН:</p>
                 <p style={{fontSize:18, marginBottom: 20}}>
                    <FileDescription 
                    size={20}
                    strokeWidth={2}
                    color={'#26194d'}/>  ОГРН:</p>
            </Grid.Col>
        </Grid>
        <Grid>
            <Grid.Col  offset={198} style={{marginTop:190}}>
                <Link href="/editprofile" >
                    <Pencil
                        size={25}
                        strokeWidth={2}
                        color={'#42aaff'}
                    />
                </Link>
            </Grid.Col>
        </Grid>
     </Group>
    </Card> */}
</>)
}

export default PersonalData;