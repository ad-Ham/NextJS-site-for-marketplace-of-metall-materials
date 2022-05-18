import styles from "./MainPageHelp.module.scss"
import { TextInput, Button, Text} from '@mantine/core';

export const MainPageHelp = () =>  {
    return (<>
        <div className={styles.maindiv}>
            <Text color="blue" className={styles.helpheader}>Здесь вы можете задать любой вопрос <strong>о нашем сайте</strong>!</Text>
            <TextInput className={styles.emailinput}  radius="lg" size="lg" type="text" placeholder="Введите e-mail для обратной связи" />
            <TextInput className={styles.probleminput}  radius="lg" size="lg" type="text" placeholder="Опишите вашу проблему или вопрос в двух словах" />
            <TextInput className={styles.problemdesrciptioninput}  radius="lg" size="xl" type="text" placeholder="Расскажите о проблеме немного подробнее" />
            <Button className={styles.sendbutton} radius="lg">Отправить</Button>
        </div>
        <style jsx>{`
        `}</style>
    </>)
}