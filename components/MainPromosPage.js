export function MainPromosPages() {
	return (<>
		<div className="maindiv">
			<div className="promosmainheader">
				<h1 className="promosmainheadertext">Все объявления</h1>
			</div>
			<div className="photo"></div>
			<div className="importantpromosheader">
				<h2 className="importantpromosheadertext">Горячее предложение!</h2>
				<p className="importantpromosheaderdate">22.02 18:00</p>
			</div>
			<p className="importantpromostext">Медь, 50 тонн, 35 000 000р.</p>
			<p className="importantpromosbottomtext">Теги: медь, лом, отходы, металлургия, цена, уменьшилась</p>
		</div>
		<style jsx>{`
			.importantpromosbottomtext {
				font-weight: 200;
				font-style: italic;
				font-size: 14px;
				line-height: 99.69%;
				color: #454545;
			}

			.importantpromostext {
				font-weight: 300;
				font-size: 18px;
				line-height: 99.69%;
				color: #343434;
				margin-top: 16px;
				margin-bottom: 6px;
			}

			.importantpromosheaderdate {
				font-weight: 600;
				font-size: 18px;
				line-height: 99.69%;
				color: #000;
			}

			.importantpromosheadertext {
				font-weight: 600;
				font-size: 36px;
				line-height: 99.69%;
				color: #000;
			}

			.importantpromosheader {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
			}

			.photo {
				width: 839px;
				height: 339px;
				border-radius: 4px;
				background-image: url("/photopromo.svg");
				background-repeat: no-repeat;
				margin-bottom: 15px;
			}

			.maindiv {
				margin-top: 26px;
				margin-left: 25px;
				display: flex;
				flex-direction: column;
				padding-bottom: 12px;
				border-bottom: 1px solid #C4C4C4;
				margin-bottom: 15px;
			}

			.promosmainheader {
				display: flex;
				flex-direction: row;
				justify-content: center;
				position: relative;
				margin-bottom: 11px;
			}

			.promosmainheadertext {
				font-weight: 700;
				font-size: 48px;
				line-height: 99.69%;
				color: #000;
			}

			.promosmainheadertext::before {
				left: 0;
			    content: " ";
			    top: 25px;
			    position: absolute;
			    width: calc(50% - 114.7px);
			    border-top: 2px solid #000;
			}

			.promosmainheadertext::after {
				right: 0;
			    content: " ";
			    top: 25px;
			    position: absolute;
			    width: calc(50% - 114.7px);
			    border-top: 2px solid #000;
			}
		`}</style>
	</>)
}