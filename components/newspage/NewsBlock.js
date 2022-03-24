import {RepostLayout} from '../newspage/RepostLayout'

export function NewsBlock() {
	return(<>
		<div className="maindiv">
			<h2 className="newsheader">Спрос на сталь в Китае будет стабильным</h2>
			<div className="photo"></div>
			<p className="newstext">Согласно данным SteelOrbis, в 2022 году спрос на сталь в Китае будет удерживаться на уровне предыдущего года. Такая тенденция отражает усилия правительства Китая по стабилизации экономики после пандемии COVID-19.<br/><br/>Стоит отметить, что в нынешнем году CISA сосредоточит свои усилия на балансе спроса и предложения в металлургии, на развитии технологий стального производства, политике координации и сотрудничества с потребляющими сталь отраслями.</p>
			<p className="newstags">Теги: импорт, лом, отходы, металлургия, цена, увеличилась</p>
			<RepostLayout/>
		</div>
		<style jsx>{`
			.newstags {
				padding-left: 25px;
				padding-right: 25px;
				font-style: italic;
				font-weight: 200;
				font-size: 14px;
				line-height: 99.69%;
				letter-spacing: 0.125em;
				color: #454545;
				margin-top: 18px;	
			}

			.newstext {
				font-size: 18px;
				line-height: 113.19%;
				letter-spacing: 0.085em;
				color: #000000;
				padding-left: 25px;
				padding-right: 25px;
				border-top: 1px solid #C4C4C4;
				padding-top: 20px;
			}

			.maindiv {
				margin-top: 24px;
				margin-left: 30px;
				padding-bottom: 11px;
				border-bottom: 1px solid #848484;
			}

			.newsheader {
				font-weight: 700;
				font-size: 48px;
				line-height: 99.69%;
				letter-spacing: 0.085em;
				color: #000000;
				margin-bottom: 23px;
			}

			.photo {
				min-width: 834px;
				height: 450px;
				border-radius: 4px;
				background-image: url("/photopromo.svg");
				background-repeat: no-repeat;
				margin-bottom: 10px;
			}
		`}</style>
	</>)
}