export function RepostLayout() {
	return(<>
		<div className="maindiv">
			<div className="iconrow">
				<div className="VK"></div>
				<div className="telegram"></div>
				<div className="twitter"></div>
				<div className="facebook"></div>
				<div className="OK"></div>
				<div className="whatsapp"></div>
			</div>
			<p>Поделись!</p>
		</div>
		<style jsx>{`
			p {
				font-weight: 500;
				font-size: 20px;
				line-height: 99.69%;
				letter-spacing: 0.125em;
				color: #000000;
			}

			.maindiv {
				margin-top: 20px;
				display: flex;
				flex-direction: column;
				align-items: center;
			}

			.iconrow {
				width: 350px;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				margin-bottom: 7px;
			}

			.VK {
				background-image: url("/VK.svg");
				height: 50px;
				width: 50px;
			}

			.telegram {
				background-image: url("/Telegram.svg");
				width: 50px;
				height: 50px;
			}

			.twitter {
				background-image: url("/Twitter.svg");
				width: 50px;
				height: 50px;
			}

			.facebook {
				background-image: url("/Facebook.svg");
				width: 50px;
				height: 50px;
			}

			.OK {
				background-image: url("/Ok.svg");
				width: 50px;
				height: 50px;
			}

			.whatsapp {
				background-image: url("/WhatsApp.svg");
				width: 50px;
				height: 50px;
			}
		`}</style>
	</>)
}