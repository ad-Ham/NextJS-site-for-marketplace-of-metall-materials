export function MyPromosPages() {
	return (<>
		<div className="maindiv">
			<button type="button" className="buttonArrow"></button>
			<button type="button" className="buttonNumber">1</button>
			<button type="button" className="buttonNumber">2</button>
			<button type="button" className="buttonNumber">3</button>
			<p className="buttonNumber">...</p>
			<button type="button" className="buttonNumber">86</button>
			<button type="button" className="buttonArrow buttonArrowRight"></button>
		</div>
		<style jsx>{`
			.buttonNumber {
				background-color: unset;
				border: 0;
				font-weight: 500;
				font-size: 24px;
				line-height: 99.69%;
				color: #000;
			}

			.buttonArrow {
				min-width: 18px;
				min-height: 21px;
				background-image: url("/pagesbutton.svg");
				border: 0;
				background-repeat: no-repeat;
				background-size: 100%;
				background-color: unset;
			}

			.buttonArrowRight {
				transform: rotate(180deg);
			}

			.maindiv{
				width: 448px;
				height: 50px;
				background: #FFFFFF;
				box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
				border-radius: 4px;
				padding: 13px 21px 13px 21px;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				margin-top: 21px;
			}
		`}</style>
	</>)
}