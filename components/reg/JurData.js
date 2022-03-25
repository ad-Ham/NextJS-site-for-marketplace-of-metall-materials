export function JurData() {
	return(<>
		<div className="maindiv">
			<h2>Юридические данные</h2>
			<input type="text" placeholder="Название организации"/>
			<input type="text" placeholder="Юридический адрес"/>
			<input type="text" placeholder="ИНН"/>
			<input type="text" placeholder="ОГРН"/>
			<label className="btnpanel"><input type="radio" className="radiobtn"/><p>Я принимаю условия передачи информации*</p></label>
		</div>
		<style jsx>{`
			p {
				font-style: normal;
				font-weight: 300;
				font-size: 14px;
				line-height: 99.69%;
			}

			.btnpanel {
				width: 320px;
				height: 15px;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				margin-top: 25px;
			}

			.radiobtn {
				width: 15px;
				height: 15px;
				margin: 0;
			}

			.maindiv {
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
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
				margin-bottom: 10px;
			}
		`}</style>
	</>)
}