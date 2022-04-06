import styles from "./YourData.module.scss"

export function YourData() {
    return (<>
        <div className={styles.maindiv}>
            <h3 className={styles.editprofileheader}>Ваши данные</h3>
            <div className={styles.inputs}>
                <div className={styles.firstrow}>
                    <label className={styles.surname}>Фамилия:<input className={styles.surnameinput} type="text" placeholder="Введите вашу фамилию" /></label>
                    <label className={styles.email}>Email:<input className={styles.emailinput} type="text" placeholder="Введите ваш Email" /></label>
                </div>
                <div className={styles.secondrow}>
                    <label className={styles.name}>Имя:<input className={styles.nameinput} type="text" placeholder="Введите ваше имя" /></label>
                    <label className={styles.tel}>Телефон:<input className={styles.telinput} type="text" placeholder="Введите ваш номер телефона" /></label>
                </div>
                <div className={styles.thirdrow}>
                    <label className={styles.fathername}>Отчество:<input className={styles.fathernameinput} type="text" placeholder="Введите ваше отчество" /></label>
                    <label className={styles.login}>Логин:<input className={styles.logininput} type="text" placeholder="Введите ваш логин" /></label>
                </div>
            </div>
            <button className={styles.savebutton} type="button">Сохранить изменения</button>
            <hr className={styles.hr}></hr>
        </div>
        <style jsx>{`

        `}</style>
    </>)
}