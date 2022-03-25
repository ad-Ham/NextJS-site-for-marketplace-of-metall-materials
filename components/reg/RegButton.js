import Link from 'next/link'

export function RegButton() {
	return(<>
		<div className="maindiv">
			<Link href="/"><a>Регистрация</a></Link>
		</div>
		<style jsx>{`
			.maindiv {
				width: 157px;
				height: 39px;
				background: #C4C4C4;
				border-radius: 5px;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-top: 12px;
			}

			a {
				font-weight: 500;
				font-size: 18px;
				line-height: 99.69%;
				color: #000;
			}
		`}</style>
	</>)
}