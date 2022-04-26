import Link from 'next/link'

export function RegButton() {
	return (<>
		<div className="maindiv">
			{/* <Link href="/"><button type="submit">Регистрация</button></Link> */}
			<button type="submit">Регистрация</button>
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
			}

			button {
				width: 100%;
    			height: 100%;
				font-weight: 500;
				font-size: 18px;
				line-height: 99.69%;
				color: #000;
			}
		`}</style>
	</>)
}