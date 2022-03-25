export function PersonalData() {
	return(<>
		<div className="maindiv">
			<h2>Личные данные</h2>
			<div className="secondblock">
				<input type="text" placeholder="Фамилия*" className="inputpassword"/>
				<input type="text" placeholder="Имя*" className="inputpassword"/>
				<input type="text" placeholder="Отчество"/>
			</div>
			<div className="firstblock"><input type="text" placeholder="Телефон*"/></div>
		</div>
		<style jsx>{`
			.inputpassword {
				margin-bottom: 10px;
			}

			.secondblock {
				display: flex;
				flex-direction: column;
			}

			.firstblock {
				margin-top: 30px;
			}

			.maindiv {
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				padding-bottom: 20px;
				border-bottom: 1px solid #B6B6B6;
			}

			h2 {
				margin-top: 11px;
				font-weight: 600;
				font-size: 24px;
				line-height: 99.69%;
				letter-spacing: 0.045em;
				margin-bottom: 30px;
			}

			input {
				width: 327px;
				height: 40px;
				background: #E0E0E0;
				border: 1px solid #000000;
				box-sizing: border-box;
				border-radius: 4px;
				padding-left: 11px;
				font-weight: 400;
				font-size: 15px;
				line-height: 99.69%;
				letter-spacing: 0.045em;
				color: #989898;
			}
		`}</style>
	</>)
}