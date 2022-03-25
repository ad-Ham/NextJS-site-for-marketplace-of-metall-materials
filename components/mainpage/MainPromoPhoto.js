import  Link from 'next/link'

export function MainPromoPhoto() {
	return(<>
		<div className="mainpromophoto">
			<Link href="/promopage"><a><div className="photo"></div></a></Link>
			<Link href="/promopage"><a><h3 className="promophotoheader"><b className="promophotoheaderb">Продажа</b> Деталь ДС-21, сталь, железо, чугун, иные материалы</h3></a></Link>
			<p className="promophototext">Деталь ДС-21, сталь, чугун, железо, трубы балки провода, медная катушка, в хорошем состоянии, в плачевном состоянии, требуется ремонт, материалы</p>
			<div className="promophotobottomtext">
				<p>Раздел</p>
				<p>22.02.2022</p>
			</div>
		</div>
		<style>{`
			.mainpromophoto {
				width: 250px;
				padding: 0 15px 17px 15px;
				border-bottom: 1px solid #E0E0E0;
				margin: 7px 0 22px 0;
			}

			.photo {
				width: 100%;
				height: 160px;
				background-image: url("/photopromo.svg");
				background-repeat: no-repeat;
				margin-bottom: 15px;
			}

			.promophotoheader {
				width: 100%;
				font-weight: 400;
				font-size: 16px;
				line-height: 99.69%;
				color: #000;
				white-space: nowrap;
  				overflow: hidden;
  				text-overflow: ellipsis;
  				margin-bottom: 5px;
			}

			.promophotoheaderb {
				font-weight: 500;
			}

			.promophototext {
				font-weight: 400;
				font-size: 12px;
				line-height: 99.69%;
				margin-bottom: 20px;
			}

			.promophotobottomtext {
				display: flex;
				justify-content: space-between;
				font-weight: 400;
				font-size: 10px;
				line-height: 99.69%;
				color: #000;
			}
		`}</style>
	</>)
}