export function MainPageNews() {
	return(<>
		<div className="mainpagenews">
			<div className="newsmainheader">
				<h2 className="newsmainheadertext">Новости</h2>
			</div>
		</div>
		<style jsx>{`

			.mainpagenews {
				margin-top: 11px;
			}

			.newsmainheader {
				display: flex;
				flex-direction: row;
				justify-content: center;
				position: relative;
				margin-left: 31px;
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