export function PromosCardPhoto() {
	return (<>
		<div className='maindiv'>
			<div className="photo"></div>
			<div>
				<h3 className="promosheader">Заголовок объявления с фото!</h3>
				<p className="promostext">Продам очень много лома! Девать некуда, по любым вопросам 897777777777. Иван</p>
				<div className="promosbottom">
					<p className="promosdate">22.02.2022 18:00</p>
					<p className="promostag">Какой-то тег</p>
				</div>
			</div>
		</div>
		<style jsx>{`
			.promostag {
				font-style: italic;
				font-weight: 200;
				font-size: 12px;
				line-height: 99.69%;
				color: #000
			}

			.promosdate {
				font-weight: 700;
				font-size: 14px;
				line-height: 99.69%;
				color: #000;
			}

			.promosbottom {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
			}

			.promostext {
				font-weight: 300;
				font-size: 14px;
				line-height: 153.69%;
				color: #343434;
				margin-bottom: 18px;
			}

			.promosheader {
				font-weight: 700;
				font-size: 18px;
				line-height: 99.69%;
				color: #000;
				padding-top: 7px;
				margin-bottom: 13px;
			}

			.maindiv {
				width: 400px;
				display: flex;
				flex-direction: row;
				border-bottom: 1px solid #C4C4C4;
				padding-bottom: 10px;
				margin-left: 25px;
			}

			.photo {
				min-width: 150px;
				height: 100px;
				border-radius: 4px;
				background-image: url("/photopromo.svg");
				background-repeat: no-repeat;
				margin-bottom: 15px;
				margin-right: 16px;
			}
		`}</style>
	</>)
}