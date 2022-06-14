import { Grid, Input, Button, PasswordInput,SimpleGrid,Group,MediaQuery} from "@mantine/core"
import React from 'react'
import { User } from "tabler-icons-react"
import { useForm } from '@mantine/form';


export const YourData = ({ user }) => {
    const userChange = useForm({
        initialValues: {    
            surName: user.surName,  
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber,
            email: user.email,
            termsOfService: false
        }
    })
    console.log(userChange.values)

    return (<>
    <h3 style={{fontSize: 20, marginBottom:5}} align="center">Ваши данные</h3>              
        <SimpleGrid cols={1} >
        <form onSubmit={userChange.onSubmit((values) => handleSubmit(values))}>
            <label style={{fontSize: 15, marginBottom:-10}}>Фамилия:<Input placeholder="Введите вашу фамилию" {...userChange.getInputProps('surName')}/></label>
            <label style={{fontSize: 15, marginBottom:-10}}>Имя:<Input placeholder="Введите ваше имя" {...userChange.getInputProps('firstName')}/></label>
            <label style={{fontSize: 15}}>Отчество:<Input  placeholder="Введите ваше отчество" {...userChange.getInputProps('lastName')} /></label>
            <label style={{fontSize: 15, marginBottom:-10}}>Телефон:<Input placeholder="Введите ваш номер телефона"{...userChange.getInputProps('phoneNumber')} /></label>
            <label style={{fontSize: 15}}>Email:<Input placeholder="Введите ваш Email" {...userChange.getInputProps('email')}/></label>
            {/* <label style={{fontSize: 15}}>Логин:<Input placeholder="Введите ваш логин" /></label>
            <label style={{fontSize: 15}}>Старый пароль:<PasswordInput placeholder="Введите старый пароль" /></label>
            <label style={{fontSize: 15}}>Новый пароль:<PasswordInput placeholder="Введите новый пароль" /></label>      */}
        </form>
        </SimpleGrid>
        <Group position="center"style={{marginTop:10}}>
             <Button variant="outline">Сохранить изменения</Button>
        </Group>      
    </>)
}