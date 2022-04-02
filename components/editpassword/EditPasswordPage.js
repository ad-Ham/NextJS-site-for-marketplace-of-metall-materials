import styles from "./EditPasswordPage.module.scss"

export function EditPasswordPage() {
    return (<>
        <div className={styles.maindiv}>
            <h3 className={styles.editpasswordheader}>Смена пароля:</h3>
            <div className={styles.inputs}>
                <input className={styles.currentpasswordinput} type="text" placeholder="Введите текущий пароль" />
                <input className={styles.newpasswordinput} type="text" placeholder="Введите новый пароль" />
                <input className={styles.verifypasswordinput} type="text" placeholder="Подтвердите новый пароль" />
            </div>
            <button className={styles.savebutton} type="button">Сменить пароль</button>
        </div>
        <style jsx>{`
        `}</style>
    </>)
}