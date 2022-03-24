import Link from 'next/link'

export function MoreNewsCard(){
	return(<>
		<div className="maindiv">
			<Link href="/newspage"><a><div className="photo"></div></a></Link>
			<Link href="/newspage"><a><h3 className="newsheader">Спрос на сталь в Китае будет стабильным</h3></a></Link>
			<p className="newstext">Согласно данным SteelOrbis, в 2022 году спрос на сталь в Китае будет удерживаться на уровне предыдущего года.</p>
			<p className="newsbottom">22.02.2022 18:00</p>
		</div>
		<style jsx>{`
			a {
				color: #000;
			}
			
			.newsbottom {
				font-weight: 600;
				font-size: 16px;
				line-height: 99.69%;
				letter-spacing: 0.085em;
				color: #000000;
			}

			.photo {
				max-width: 260px;
				height: 180px;
				border-radius: 4px;
				background-image: url("/photopromo.svg");
				background-repeat: no-repeat;
				margin-bottom: 10px;
			}

			.maindiv {
				max-width: 260px;
				padding-bottom: 11px;
				border-bottom: 1px solid #989898;
			}

			.newsheader {
				font-weight: 700;
				font-size: 18px;
				line-height: 99.69%;
				letter-spacing: 0.085em;
				color: #000000;
				margin-bottom: 8px;
			}

			.newstext {
				font-weight: 300;
				font-size: 16px;
				line-height: 99.69%;
				letter-spacing: 0.085em;
				color: #000000;
				margin-bottom: 5px;
			}


		`}</style>
	</>)
}