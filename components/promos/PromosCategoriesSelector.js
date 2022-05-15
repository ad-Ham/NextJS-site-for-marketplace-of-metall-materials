import styles from './PromosCategoriesSelector.module.scss'

export const PromosCategoriesSelector = () => {
    return (<>
        <div className={styles.maindiv}>
            <div className={styles.categoriesselector}>
                <h2 className={styles.categories}>Категории</h2>
                <select className={styles.firstcategoryselector}>
                    <option value="1">Черные металлы</option>
                    <option value="2">Черные металлы</option>
                </select>
                <select className={styles.secondcategoryselector}>
                    <option value="1">Цветные металлы</option>
                    <option value="2">Цветные металлы</option>
                </select>
                <select className={styles.thirdcategoryselector}>
                    <option value="1">Сырье</option>
                    <option value="2">Сырье</option>
                </select>
                <select className={styles.fourthcategoryselector}>
                    <option value="1">Прочее</option>
                    <option value="2">Прочее</option>
                </select>
                <select className={styles.fifthcategoryselector}>
                    <option value="1">Услуги</option>
                    <option value="2">Услуги</option>
                </select>
            </div>
        </div>
        <style jsx>{`
            
		`}</style>
    </>)
}