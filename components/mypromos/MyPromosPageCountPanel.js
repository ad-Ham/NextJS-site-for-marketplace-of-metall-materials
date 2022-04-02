export function MyPromosPageCountPanel() {
	return (<>
		<div className="maindiv">
			<p className="counttext"> Количество объявлений: 123</p>
			<button className="postbutton">Подать объявление</button>
		</div>
		<style jsx>{`
			.counttext {
				display: inline-block;
				position: static;
				margin-right: 330px;
				width: 342px;
				height: 16px;
				left: 0px;
				top: 0px;
				font-family: 'Roboto';
				font-style: normal;
				font-weight: 500;
				font-size: 15px;
				line-height: 99.69%;
			}

			.postbutton {
				margin-top: 25px;
				width: 170px;
				height: 45px;
				left: 1215px;
				top: 317px;
				font-family: 'Roboto';
				font-style: normal;
				font-weight: 600;
				font-size: 17px;
				line-height: 99.69%;
				background: #C4C4C4;
				border-radius: 4px;
			}

		`}</style>
	</>)
}