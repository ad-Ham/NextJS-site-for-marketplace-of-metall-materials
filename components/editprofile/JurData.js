import { Grid, Input, Button} from "@mantine/core"


export const JurData = () => {
    return (<>
    <h3 style={{fontSize: 20, marginBottom:30}} align="center">Ваши юридические данные</h3>
        <Grid justify="center">
            <Grid.Col span={5}>
                    <label style={{fontSize: 15}}>Организация:<Input style={{marginBottom:10}} placeholder="Введите вашу организацию"/></label>
                    <label style={{fontSize: 15}}>Юридический адрес:<Input style={{marginBottom:10}} placeholder="Введите ваш юридический адрес" /></label>
                    <label style={{fontSize: 15}}>Должность:<Input style={{marginBottom:10}} placeholder="Введите вашу должность" /></label>
                   
            </Grid.Col>
            <Grid.Col span={5}>     
                    <label style={{fontSize: 15}}>ИНН:<Input style={{marginBottom:10}} placeholder="Введите ваш ИНН" /></label>
                    <label style={{fontSize: 15}}>ОГРН:<Input style={{marginBottom:10}} placeholder="Введите ваш ОГРН" /></label>
            </Grid.Col>
            <Button variant="outline" style={{marginTop:20, marginBottom: 10}} align="center">Сохранить изменения</Button>
        </Grid>
       
    </>)
}





// import styles from "./JurData.module.scss"

// export const JurData = () => {
//     return (<>
//         <div className={styles.maindiv}>
//             <h3 className={styles.editprofileheader}>Юридические данные</h3>
//             <div className={styles.inputs}>
//                 <div className={styles.firstrow}>
//                     <label className={styles.firmname}>Название фирмы:<input className={styles.firmnameinput} type="text" placeholder="Введите название вашей фирмы" /></label>
//                     <label className={styles.adress}>Юридический адрес:<input className={styles.adressinput} type="text" placeholder="Введите юридический адрес фирмы" /></label>
//                 </div>
//                 <div className={styles.secondrow}>
//                     <label className={styles.inn}>ИНН:<input className={styles.inninput} type="text" placeholder="Введите ИНН" /></label>
//                     <label className={styles.ogrn}>ОГРН:<input className={styles.ogrninput} type="text" placeholder="Введите ОГРН" /></label>
//                 </div>
//             </div>
//             <button className={styles.savebutton} type="button">Сохранить изменения</button>
//         </div>
//         <style jsx>{`

//         `}</style>
//     </>)
// }