import {RepostLayout} from '../newspage/RepostLayout'
import styles from './NewsBlock.module.scss'

export function NewsBlock() {
	return(<>
		<div className={styles.maindiv}>
			<h2 className={styles.newsheader}>Спрос на сталь в Китае будет стабильным</h2>
			<div className={styles.photo}></div>
			<p className={styles.newstext}>Согласно данным SteelOrbis, в 2022 году спрос на сталь в Китае будет удерживаться на уровне предыдущего года. Такая тенденция отражает усилия правительства Китая по стабилизации экономики после пандемии COVID-19.<br/><br/>Стоит отметить, что в нынешнем году CISA сосредоточит свои усилия на балансе спроса и предложения в металлургии, на развитии технологий стального производства, политике координации и сотрудничества с потребляющими сталь отраслями.</p>
			<p className={styles.newstags}>Теги: импорт, лом, отходы, металлургия, цена, увеличилась</p>
			<RepostLayout/>
		</div>
		<style jsx>{`
			
		`}</style>
	</>)
}