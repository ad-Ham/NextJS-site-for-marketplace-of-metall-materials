import { Grid, Input, Button,MediaQuery,SimpleGrid, Group} from "@mantine/core"


export const JurData = () => {
    return (<>
    <h3 style={{fontSize: 20, marginBottom:30}} align="center">Ваши юридические данные</h3>      
            <SimpleGrid cols={1}>
                    <label style={{fontSize: 15, marginBottom:-10}}>Организация:<Input placeholder="Введите вашу организацию"/></label>
                    <label style={{fontSize: 15, marginBottom:-10}}>Юридический адрес:<Input placeholder="Введите ваш юридический адрес" /></label>
                    <label style={{fontSize: 15, marginBottom:-10}}>Должность:<Input placeholder="Введите вашу должность" /></label>         
                    <label style={{fontSize: 15, marginBottom:-10}}>ИНН:<Input placeholder="Введите ваш ИНН" /></label>
                    <label style={{fontSize: 15}}>ОГРН:<Input placeholder="Введите ваш ОГРН" /></label>
            <Group position="center"><Button variant="outline" style={{marginTop:10}} align="center">Сохранить изменения</Button></Group>
        
        </SimpleGrid>
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