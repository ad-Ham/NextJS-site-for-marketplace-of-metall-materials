import styles from "./MainPageHelp.module.scss"

export const MainPageHelp = () =>  {
    return (<>
        <div className={styles.maindiv}>
            <h3 className={styles.helpheader}>Здесь вы можете задать любой вопрос <strong>о нашем сайте</strong>!</h3>
            <input className={styles.emailinput} type="text" placeholder="Введите e-mail для обратной связи" />
            <input className={styles.probleminput} type="text" placeholder="Опишите вашу проблему или вопрос в двух словах" />
            <input className={styles.problemdesrciptioninput} type="text" placeholder="Расскажите о проблеме немного подробнее" />
            <button className={styles.sendbutton} type="button">Отправить</button>
        </div>
        <style jsx>{`
        `}</style>
    </>)
}