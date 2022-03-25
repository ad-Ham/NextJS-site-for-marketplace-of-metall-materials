export function PromosPageListHeader() {
	return (<>
		<div className='maindiv'>
			<div className='listheaderbar'>
				<div className="date">
					<p>Дата</p>
				</div>
				<div className="category">
					<p>Кат.</p>
				</div>
				<div className="promoheader">
					<p>Заголовок объявления</p>
				</div>
				<div className="organization">
					<p>Организация</p>
				</div>
				<div className="region">
					<p>Регион</p>
				</div>
			</div>
		</div>
		<style jsx>{`
			.listheaderbar {
				margin-top: 31px;
			}

			.date {
				display: inline-block;
				margin-right: 14px;	
				padding-top: 5px;
				width: 139px;
				height: 30px;
				left: 0px;
				top: 0px;
				background: #C4C4C4;
				border-radius: 4px;
				align-items: center;
				text-align: center;	
				font-family: 'Roboto';
				font-style: normal;
				font-weight: 500;
				font-size: 18px;
				line-height: 99.69%;
			}

			.category {
				display: inline-block;
				margin-right: 14px;
				padding-top: 5px;
				width: 50px;
				height: 30px;
				left: 153px;
				top: 0px;
				background: #C4C4C4;
				text-align: center;	
				border-radius: 4px;
				font-family: 'Roboto';
				font-style: normal;
				font-weight: 500;
				font-size: 18px;
				line-height: 99.69%;
			}

			.promoheader {
				display: inline-block;
				margin-right: 14px;
				padding-top: 5px;
				width: 300px;
				height: 30px;
				left: 217px;
				top: 0px;
				background: #C4C4C4;
				text-align: center;	
				border-radius: 4px;
				font-family: 'Roboto';
				font-style: normal;
				font-weight: 500;
				font-size: 18px;
				line-height: 99.69%;
			}

			.organization {
				display: inline-block;
				margin-right: 14px;
				padding-top: 5px;
				width: 200px;
				height: 30px;
				left: 531px;
				top: 0px;
				background: #C4C4C4;
				text-align: center;	
				border-radius: 4px;
				font-family: 'Roboto';
				font-style: normal;
				font-weight: 500;
				font-size: 18px;
				line-height: 99.69%;
			}

			.region {
				display: inline-block;
				padding-top: 5px;
				width: 100px;
				height: 30px;
				left: 745px;
				top: 0px;
				background: #C4C4C4;
				text-align: center;	
				border-radius: 4px;
				font-family: 'Roboto';
				font-style: normal;
				font-weight: 500;
				font-size: 18px;
				line-height: 99.69%;
			}
		`}</style>
	</>)
}