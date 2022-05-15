import styles from "./JurData.module.scss"

export const JurData = () => {
    return (<>
        <div className={styles.maindiv}>
            <h3 className={styles.editprofileheader}>Юридические данные</h3>
            <div className={styles.inputs}>
                <div className={styles.firstrow}>
                    <label className={styles.firmname}>Название фирмы:<input className={styles.firmnameinput} type="text" placeholder="Введите название вашей фирмы" /></label>
                    <label className={styles.adress}>Юридический адрес:<input className={styles.adressinput} type="text" placeholder="Введите юридический адрес фирмы" /></label>
                </div>
                <div className={styles.secondrow}>
                    <label className={styles.inn}>ИНН:<input className={styles.inninput} type="text" placeholder="Введите ИНН" /></label>
                    <label className={styles.ogrn}>ОГРН:<input className={styles.ogrninput} type="text" placeholder="Введите ОГРН" /></label>
                </div>
            </div>
            <button className={styles.savebutton} type="button">Сохранить изменения</button>
        </div>
        <style jsx>{`

        `}</style>
    </>)
}