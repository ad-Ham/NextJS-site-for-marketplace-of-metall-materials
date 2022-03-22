import Link from 'next/link'

export function Portions(){
	return (<>
		<div className='portionsMain'>
			<p className="portionsHeader">Разделы</p>
			<ul>
				<li className="portionsList"><Link href="/news"><a className="portiona">Новости</a></Link></li>
				<li className="portionsList"><Link href="/news"><a className="portiona">Аналитика</a></Link></li>
				<li className="portionsList"><Link href="/news"><a className="portiona">Публикации</a></Link></li>
				<li className="portionsList"><Link href="/news"><a className="portiona">ГОСТы</a></Link></li>
				<li className="portionsList"><Link href="/news"><a className="portiona">Калькулятор металлурга</a></Link></li>
				<li className="portionsList"><Link href="/news"><a className="portiona">Справочник металлурга</a></Link></li>
				<li className="portionsList"><Link href="/news"><a className="portiona">Расчет ж/д тарифов</a></Link></li>
				<li className="portionsList"><Link href="/news"><a className="portiona">Полезные материалы</a></Link></li>
				<li className="portionsList"><Link href="/news"><a className="portiona">Прогнозы</a></Link></li>
				<li className="portionsList"><Link href="/news"><a className="portiona">Индекс цен</a></Link></li>
				<li className="portionsList"><Link href="/news"><a className="portiona">Индекс цен LME</a></Link></li>
				<li className="portionsList"><Link href="/news"><a className="portiona">Конференции</a></Link></li>
				
			</ul>
		</div>
		<style jsx>{`
			.portionsMain {
				background: #FFFFFF;
				box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
				border-radius: 4px;
				width: 300px;
				margin-top: 24px;
				margin-bottom: 16px;
				display: flex;
				flex-direction: column;
				padding: 17px 25px 30px 25px;
			}

			.portionsHeader {
				margin-bottom: 23px;
				font-weight: 700;
				font-size: 18px;
				line-height: 99.69%;
				color: #000000;
				display: flex;
			}

			.portionsLine {
				width: 250px;
				display: flex;
				margin-left: 25px;
			}

			.portionsList {
				font-weight: 400;
				font-size: 14px;
				line-height: 99.69%;
				color: #000000;
				padding-bottom: 16px;
				border-top: 1px solid #000000;
				padding-top: 10px;
				padding-left: 14px;
			}

			.portiona {
				color: #000000;
			}
		`}</style>
	</>)
}