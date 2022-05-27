import { Grid, Input, Button, PasswordInput} from "@mantine/core"


export const YourData = () => {
    return (<>
    <h3 style={{fontSize: 20, marginBottom:30}} align="center">Ваши данные</h3>
        <Grid justify="center">
            <Grid.Col span={5}>
                    <label style={{fontSize: 15}}>Фамилия:<Input style={{marginBottom:10}} placeholder="Введите вашу фамилию"/></label>
                    <label style={{fontSize: 15}}>Имя:<Input style={{marginBottom:10}} placeholder="Введите ваше имя" /></label>
                    <label style={{fontSize: 15}}>Отчество:<Input style={{marginBottom:10}} placeholder="Введите ваше отчество" /></label>
                    <label style={{fontSize: 15}}>Телефон:<Input style={{marginBottom:10}} placeholder="Введите ваш номер телефона" /></label>
            </Grid.Col>
            <Grid.Col span={5}>     
                    <label style={{fontSize: 15}}>Email:<Input style={{marginBottom:10}} placeholder="Введите ваш Email" /></label>
                    <label style={{fontSize: 15}}>Логин:<Input style={{marginBottom:10}} placeholder="Введите ваш логин" /></label>
                    <label style={{fontSize: 15}}>Старый пароль:<PasswordInput style={{marginBottom:10}} placeholder="Введите старый пароль" /></label>
                    <label style={{fontSize: 15}}>Новый пароль:<PasswordInput style={{marginBottom:10}} placeholder="Введите новый пароль" /></label>
            </Grid.Col>
            <Button variant="outline" style={{marginTop:20, marginBottom: 10}} align="center">Сохранить изменения</Button>
        </Grid>
       
    </>)
}