import styles from "./MainPageHelp.module.scss"
import { TextInput, Button, Text, Card,Grid, Textarea} from '@mantine/core';


export const MainPageHelp = () =>  {
     return (
    <>
        <Card >
            <Text align="center" size="xl" color="blue" style={{marginBottom: 20}}>Здесь вы можете задать любой вопрос <strong>о нашем сайте</strong>!</Text>
                <Grid>
                    <Grid.Col align="center">
                        <TextInput style={{width: 800, marginBottom: 15}} placeholder="Введите e-mail для обратной связи" />
                        <TextInput style={{width: 800, marginBottom: 15}} placeholder="Опишите вашу проблему или вопрос в двух словах" />
                        <Textarea  minRows={5} style={{width: 800, marginBottom: 20}} placeholder="Расскажите о проблеме немного подробнее" />
                    </Grid.Col>
                    <Grid.Col align="center">
                        <Button style={{marginBottom: 15}} variant="outline">Отправить</Button>
                    </Grid.Col>
            </Grid>
        </Card>
</>)
 }
// export const MainPageHelp = () =>  {
//     return (<>
//         <div className={styles.maindiv}>
//             <Text color="blue" className={styles.helpheader}>Здесь вы можете задать любой вопрос <strong>о нашем сайте</strong>!</Text>
//             <TextInput className={styles.emailinput}  radius="lg" size="lg" type="text" placeholder="Введите e-mail для обратной связи" />
//             <TextInput className={styles.probleminput}  radius="lg" size="lg" type="text" placeholder="Опишите вашу проблему или вопрос в двух словах" />
//             <TextInput className={styles.problemdesrciptioninput}  radius="lg" size="xl" type="text" placeholder="Расскажите о проблеме немного подробнее" />
//             <Button className={styles.sendbutton} radius="lg">Отправить</Button>
//         </div>
//         <style jsx>{`
//         `}</style>
//     </>)
// }