import Link from 'next/link'

export function MorePromosCard(){
	return(<>
		<div className="maindiv">
			<Link href="/promopage"><a><div className="photo"></div></a></Link>
			<Link href="/promopage"><a><h3 className="promoheader"><b>Продажа</b> Деталь ДС-21, ст...</h3></a></Link>
			<p className="promotext">Деталь ДС-21, сталь, чугун, железо, трубы балки провода, медная катушка, в хорошем состоянии, в плачевном состоянии, требуется ремонт, материалы.</p>
			<div className="promobottom">
				<p className="promobottomtext">22.02.2022</p>
				<p className="promobottomtext">18:00</p>
			</div>
		</div>
		<style jsx>{`
			.promobottom {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-top: 15px;
			}

			a {
				color: #000;
			}
			
			.promobottomtext {
				font-weight: 600;
				font-size: 14px;
				line-height: 99.69%;
				color: #000000;
			}

			.photo {
				max-width: 220px;
				height: 160px;
				border-radius: 4px;
				background-image: url("/photopromo.svg");
				background-repeat: no-repeat;
				margin-bottom: 10px;
			}

			.maindiv {
				max-width: 220px;
				padding-bottom: 11px;
				border-bottom: 1px solid #989898;
			}

			.promoheader {
				font-weight: 400;
				font-size: 16px;
				line-height: 99.69%;
				color: #000000;
				margin-bottom: 8px;
			}

			.promotext {
				font-weight: 400;
				font-size: 12px;
				line-height: 99.69%;
				color: #717171;
				margin-bottom: 5px;
			}


		`}</style>
	</>)
}