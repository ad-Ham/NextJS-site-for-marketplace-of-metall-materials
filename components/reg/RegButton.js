import Link from 'next/link'

export function RegButton() {

	return (<>
		<div className="maindiv">
			{/* <Link href="/thankyou"><button type="submit" >Регистрация</button></Link> */}
			<button type="submit">Регистрация</button>
			{/* <a href='/thankyou'><button type="submit">Регистрация</button></a> */}
		</div>
		<style jsx>{`
			.maindiv {
				margin-top: 40px;
				margin-left: 75px;
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