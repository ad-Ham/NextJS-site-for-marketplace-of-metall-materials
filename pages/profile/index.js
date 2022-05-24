import Head from 'next/head'
import { Mail, Phone, Lock, BuildingSkyscraper, Home, FileText, FileDescription, User } from 'tabler-icons-react';
import Profilepicture from '/public/profilepicture.svg'
import Link from 'next/link'
import { Button } from '@mantine/core';
// import styles from './PersonalData.module.scss'
import { Group, Card , Grid} from '@mantine/core';

const PersonalData = () => {
	return (<>
          <Head>
                <title>Next Title</title>
                <meta name="keywords" content="next, javascript" />
                <meta name="description" content="this is" />
                <meta charSet="utf-8" />
            </Head>
    <Card>
	 <Group style={{borderBottom: ' 3px solid #42aaff'}}>
        <Grid >
            <Grid.Col style={{marginLeft:20}}>
                 <Profilepicture />
            </Grid.Col>
        </Grid>
        <Grid>
            <Grid.Col offset={1}>
                <p style={{fontSize:25, marginBottom: 30, marginTop: 30}}>Хоменков Алексей Дмитриевич</p>
                <p style={{fontSize:20, marginBottom: 20}}>
                    <Mail
                    size={20}
                    strokeWidth={2}
                    color={'#26194d'}/>  aleks.khomenkov.03@mail.ru
                </p>
                <p style={{fontSize:20, marginBottom: 20}}>
                    <Phone 
                    size={20}
                    strokeWidth={2}
                    color={'#26194d'}/>  88005553535</p>
            </Grid.Col>
        </Grid>
		<Grid>
            <Grid.Col  offset={7.5} style={{marginTop: 120}}>
                <Link href="/editprofile" >
                    <Button variant="subtle">Редактировать личные данные</Button>
                </Link>
            </Grid.Col>
        </Grid>		
	 </Group>
     <Group style={{borderBottom: ' 3px solid #42aaff'}}>
     <Grid style={{marginTop:10, fontSize:20, marginBottom:10}}>
            <Grid.Col offset={14}>
                <p><Lock 
                    size={20}
                    strokeWidth={2}
                    color={'#26194d'}/>  Пароль:</p>
            </Grid.Col>
        </Grid>
        <Grid>
            <Grid.Col  offset={48} style={{marginTop:7}}>
                <Link href="/editprofile" >
                    <Button variant="subtle">Сменить пароль</Button>
                </Link>
            </Grid.Col>
        </Grid>
     </Group>
     <Group style={{borderBottom: ' 3px solid #42aaff'}}>
     <Grid style={{marginTop:10}}>
            <Grid.Col offset={6.9}>
                <p style={{fontSize:20, marginBottom: 20}}><BuildingSkyscraper 
                    size={20}
                    strokeWidth={2}
                    color={'#26194d'}/>  Организация:</p>
                <p style={{fontSize:20, marginBottom: 20}}>
                    <Home 
                    size={20}
                    strokeWidth={2}
                    color={'#26194d'}/>  Юридический адрес:</p>
                <p style={{fontSize:20, marginBottom: 20}}>
                    <User 
                    size={20}
                    strokeWidth={2}
                    color={'#26194d'}/>  Должность:</p>
                 <p style={{fontSize:20, marginBottom: 20}}>
                    <FileText
                    size={20}
                    strokeWidth={2}
                    color={'#26194d'}/>  ИНН:</p>
                 <p style={{fontSize:20, marginBottom: 20}}>
                    <FileDescription 
                    size={20}
                    strokeWidth={2}
                    color={'#26194d'}/>  ОГРН:</p>
            </Grid.Col>
        </Grid>
        <Grid>
            <Grid.Col  offset={15.5} style={{marginTop:190}}>
                <Link href="/editprofile" >
                    <Button variant="subtle">Редактировать юридические
                    данные</Button>
                </Link>
            </Grid.Col>
        </Grid>
     </Group>
    </Card>
</>)
}

export default PersonalData;