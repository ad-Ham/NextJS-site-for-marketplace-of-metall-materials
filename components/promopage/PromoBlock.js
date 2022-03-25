export function PromoBlock() {
	return(<>
		<div className="maindiv">
			<div className="headerblock">
				<h1 className="promoheader">Металлические ограждения</h1>
				<div className="photo"></div>
			</div>
			<div className="desc">
				<div className="descrow">
					<p className="descheader">Регион:</p>
					<p className="desctext">Владимир и Владимирская область</p>
				</div>
				<div className="descrow">
					<p className="descheader">E-mail:</p>
					<p className="desctext">example@mail.ru</p>
				</div>
				<div className="descrow">
					<p className="descheader">Телефон:</p>
					<p className="desctext">8-800-555-35-35</p>
				</div>
				<div className="descrow">
					<p className="descheader">Организация:</p>
					<p className="desctext">ООО "Рога и копыта"</p>
				</div>
				<div className="descrow">
					<p className="descheader">Категория:</p>
					<p className="desctext">Продажа (предложение)</p>
				</div>
				<div className="descrow">
					<p className="descheader">Описание:</p>
					<p className="desctext">Металлические ограждения 3D.<br/><br/>Для: автомобильных дорог, аэродромов, габионов, стадионов, промышленных объектов, гражданских объектов, коттеджей и дач.  </p>
				</div>
			</div>
		</div>
		<style jsx>{`
			.desc {
				padding-bottom: 25px;
				border-bottom: 1px solid #959595;
			}

			.descrow {
				margin-top: 16px;
			}

			.desctext {
				font-weight: 400;
				font-size: 20px;
				line-height: 99.69%;
				color: #000;
				margin-top: 2px;
			}

			.maindiv {
				margin-top: 24px;
				margin-left: 30px;
			}

			.photo {
				min-width: 834px;
				height: 375px;
				border-radius: 4px;
				background-image: url("/photopromo.svg");
				background-repeat: no-repeat;
			}

			.promoheader {
				font-weight: 600;
				font-size: 48px;
				line-height: 99.69%;
				color: #000000;
				margin-bottom: 20px;
			}

			.headerblock {
				padding-bottom: 16px;
				border-bottom: 1px solid #959595;
			}

			.descheader {
				font-weight: 500;
				font-size: 20px;
				line-height: 99.69%;
				color: #000;
			}
		`}</style>
	</>)
}