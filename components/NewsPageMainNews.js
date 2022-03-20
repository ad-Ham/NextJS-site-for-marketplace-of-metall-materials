export function NewsPageMainNews() {
	return(<>
		<div className="maindiv">
			<div className="newsmainheader">
				<h1 className="newsmainheadertext">Новости</h1>
			</div>
			<div className="photo"></div>
			<div className="importantnewsheader">
				<h2 className="importantnewsheadertext">Новость дня!</h2>
				<p className="importantnewsheaderdate">22.02 18:00</p>
			</div>
			<p className="importantnewstext">В декабре 2021 года Россия импортировала 4 тыс. тонн медного лома и отходов, что на 22% больше, чем месяцем ранее, но на 38% меньше по сравнению с декабрем 2020 года. Средняя импортная цена за декабрь увеличилась на 1 $/т до 8,6 $/кг.</p>
			<p className="importantnewsbottomtext">Теги: импорт, лом, отходы, металлургия, цена, увеличилась</p>
		</div>
		<style jsx>{`
			.importantnewsbottomtext {
				font-weight: 200;
				font-style: italic;
				font-size: 14px;
				line-height: 99.69%;
				color: #454545;
			}

			.importantnewstext {
				font-weight: 300;
				font-size: 18px;
				line-height: 99.69%;
				color: #343434;
				margin-top: 16px;
				margin-bottom: 6px;
			}

			.importantnewsheaderdate {
				font-weight: 600;
				font-size: 18px;
				line-height: 99.69%;
				color: #000;
			}

			.importantnewsheadertext {
				font-weight: 600;
				font-size: 36px;
				line-height: 99.69%;
				color: #000;
			}

			.importantnewsheader {
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
				margin-bottom: 15px;
			}

			.maindiv {
				margin-top: 26px;
				margin-left: 25px;
				display: flex;
				flex-direction: column;
				padding-bottom: 12px;
				border-bottom: 1px solid #C4C4C4;
			}

			.newsmainheader {
				display: flex;
				flex-direction: row;
				justify-content: center;
				position: relative;
				margin-bottom: 11px;
			}

			.newsmainheadertext {
				font-weight: 700;
				font-size: 48px;
				line-height: 99.69%;
				color: #000;
			}

			.newsmainheadertext::before {
				left: 0;
			    content: " ";
			    top: 25px;
			    position: absolute;
			    width: calc(50% - 114.7px);
			    border-top: 2px solid #000;
			}

			.newsmainheadertext::after {
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