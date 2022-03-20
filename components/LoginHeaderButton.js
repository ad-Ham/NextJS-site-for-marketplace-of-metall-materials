import Link from 'next/link'
export function LoginHeaderButton() {
	return (
		<>
			<div>
				<button>Войти</button>
				<Link href={'/registration'}><a>Регистрация</a></Link>
			</div>
			<style jsx>{`

				button {
					width: 79.38px;
					height: 21.46px;
					background: #C4C4C4;
					border-radius: 4px;
					font-weight: 700;
					font-size: 14px;
					line-height: 99.69%;
					margin: 0;
					padding: 0;
					border: 0;
					margin-bottom: 4.54px;
				}

				a {
					text-decoration: none;
					font-weight: 400;
					font-size: 10px;
					line-height: 99.69%;
					letter-spacing: 0.1em;
					color: #828282;
				}

				div {
					display: flex;
					align-items: center;
					flex-direction: column;
				}
			`}</style>
		</>
	)
}