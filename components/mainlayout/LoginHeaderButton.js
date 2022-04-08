import Link from 'next/link'
export function LoginHeaderButton() {
	return (
		<>
			<div>
				<Link href="/login"><a className="linklogin">Войти</a></Link>
				<Link href={'/reg'}><a>Регистрация</a></Link>
			</div>
			<style jsx>{`

				.linklogin {
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
					color: #000;
					display: flex;
					align-items: center;
					justify-content: center;
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