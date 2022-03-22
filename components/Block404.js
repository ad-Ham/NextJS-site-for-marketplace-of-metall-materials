import Link from 'next/link'

export function Block404() {
	return(<>
		<div className="maindiv">
			<h2 className="header404">404<br/>Страница не найдена</h2>
			<p className="text404">Упс! Что-то пошло не так... Пожалуйста, свяжитесь с технической поддержкой</p>
			<Link href="/"><a className="button404">На главную</a></Link>
		</div>
		<style jsx>{`
			.button404 {
				width: 203px;
				height: 44px;
				background: #C4C4C4;
				border-radius: 4px;
				display: flex;
				align-items: center;
				justify-content: center;
				font-weight: 500;
				font-size: 18px;
				line-height: 99.69%;
				color: #000;
				margin-top: 24px;
			}

			.text404 {
				font-weight: 400;
				font-size: 14px;
				line-height: 99.69%;
				color: #000;
				margin-top: 15px;
			}

			.header404 {
				font-weight: 500;
				font-size: 24px;
				line-height: 32px;
				color: #000;
			}

			.maindiv {
				width: 685px;
				background: #FFFFFF;
				box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
				border-radius: 4px;
				padding: 24px;

			}
		`}</style>
	</>)
}