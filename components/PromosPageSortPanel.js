import SearchPromos from '../public/searchPromos.svg'

export function PromosPageSortPanel() {
	return (<>
		<div className="maindiv">
			<div className="searchbar">
				<input type="text" placeholder="Поиск по объявлениям" className="promossearch" />
				<SearchPromos />
			</div>
			<div className="selectsortbar">
				<p className="selectsortbarheader">Сортировка по цене</p>
				<select name="" id="" className="selectsortbartext">
					<option value="">По убыванию цены</option>
					<option value="">По возрастанию цены</option>
				</select>
			</div>
			<div className="selectsortbar">
				<p className="selectsortbarheader">Сортировка по категории</p>
				<select name="" id="" className="selectsortbartext">
					<option value="">Покупка</option>
					<option value="">Продажа</option>
				</select>
			</div>
			<div className="selectsortbar">
				<p className="selectsortbarheader">Выберите дату</p>
				<input type="date" className="sortbarcalendar" />
			</div>
		</div>
		<style jsx>{`
			.sortbarcalendar {
				width: 198px;
				height: 22px;
				background: #FFF7F7;
				border: 1px solid #000000;
				box-sizing: border-box;
				border-radius: 3px;
				padding: 7px;
				box-sizing: border-box;
				border-radius: 3px;
				font-weight: 400;
				font-size: 12px;
				line-height: 99.69%;
				color: #000;
			}

			.selectsortbar {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: 
			}

			.selectsortbarheader{
				font-weight: 300;
				font-size: 10px;
				line-height: 99.69%;
				margin-bottom: 2px;
			}

			.selectsortbartext{
				width: 145px;
				height: 22px;
				background: #FFF7F7;
				border: 1px solid #000000;
				box-sizing: border-box;
				border-radius: 3px;
				font-weight: 400;
				font-size: 12px;
				line-height: 99.69%;
				color: #000;
				padding-left: 7px;
			}

			.searchbar {
				display: flex;
				flex-direction: row;
				
			}

			.promossearch {
				width: 184px;
				height: 22px;
				background: #FFF7F7;
				border: 2px solid #000000;
				border-right: 0;
				box-sizing: border-box;
				border-radius: 3px 0px 0px 3px;
				font-weight: 400;
				font-size: 12px;
				line-height: 99.69%;
				color: #9B9B9B;
				padding-left: 7px;
			}

			.maindiv{
				width: 839px;
				height: 71px;
				background: #FFFFFF;
				box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
				border-radius: 4px;
				margin-left: 25px;
				margin-bottom: 41px;
				padding: 0 10px 25px 10px;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: flex-end;
			}
		`}</style>
	</>)
}