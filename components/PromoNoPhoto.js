export function PromoNoPhoto() {
	return(<>
		<div className="sides">
			<div className="leftside">
				<p className="buysell">Покупка</p>
				<p className="date">22.02 12:00</p>
			</div>
			<p className="promonophototext">Деталь ДС-21, сталь, железо, чугун, иные материалы</p>
		</div>
		<style jsx>{`
			.buysell {
				font-weight: 500;
				font-size: 12px;
				line-height: 99.69%;
				color: #000;
			}

			.date {
				font-weight: 500;
				font-size: 9px;
				line-height: 123.19%;
				color: #000;
				margin-top: 4px;
				min-width: max-content;
			}

			.promonophototext {
				font-weight: 400;
				font-size: 12px;
				line-height: 123.19%;
				color: #000;
  				overflow: hidden;
  				text-overflow: ellipsis;
			}

			.leftside {
				display: flex;
				flex-direction: column;
				padding-right: 12px;
			}

			.sides {
				max-width: 250px;
				display: flex;
				flex-direction: row;
				align-items: center;
				height: 100%;
				border-bottom: 1px solid #E0E0E0;
			}
		`}</style>
	</>)
}