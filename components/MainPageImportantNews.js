export function MainPageImportantNews() {
	return(<>
		<div className="importantnews">
			<div className="photo"></div>
			<div className="rightside">
				<h3 className="importantheader">Супер важная новость</h3>
				<p className="importanttext">Не может быть не верю как такое возможно обалдеть просто кто бы мог подумать как же так не верю своим глазам такое бывает только в сказке</p>
				<div className="importantnewsbottom">
					<p className="importantnewsbottomtext">16.22.22</p>
					<p className="importantnewsbottomtext">Какой-то тег</p>
				</div>
			</div>
		</div>
		<style jsx>{`
			.photo {
				width: 299.52px;
				height: 124px;
				border-radius: 4px;
				background-image: url("/photopromo.svg");
				margin-right: 39px;
				margin-bottom: 0;
			}

			.importantnews {
				display: flex;
				flex-direction: row;
				border-bottom: 1px solid #ACACAC;
				padding-bottom: 13px;
			}

			.rightside {
				width: 450px;
				height: 124px;
				display: flex;
				flex-direction: column;
			}

			.importantheader {
				font-weight: 700;
				font-size: 24px;
				line-height: 99.69%;
				margin-bottom: 4px;
			}

			.importanttext {
				font-weight: 400;
				font-size: 13px;
				line-height: 99.69%;
				color: color: #4B4B4B;
			}

			.importantnewsbottom {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				margin-top: auto;
			}

			.importantnewsbottomtext {
				font-weight: 400;
				font-size: 11px;
				line-height: 99.69%;
				color: #6C6C6C;
			}
		`}</style>
	</>)
}