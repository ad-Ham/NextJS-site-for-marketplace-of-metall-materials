import Search from '../public/search.svg'

export function NewsPageSortPanel() {
	return(<>
		<div className="maindiv">
			<div>
				<input type="text" placeholder="Поиск по новостям" className="newssearch"/>
				<div ><Search className="search"/></div>
			</div>
		</div>
		<style jsx>{`
			.search {
				border: 1px solid #000000;
				box-sizing: border-box;
				border-radius: 0px 4px 4px 0px;
			}

			.newssearch {
				width: 184px;
				height: 22px;
				background: #FFF7F7;
				border: 1px solid #000000;
				box-sizing: border-box;
				border-radius: 3px 0px 0px 3px;
				font-weight: 400;
				font-size: 12px;
				line-height: 99.69%;
				color: #9B9B9B;
			}

			.maindiv{
				width: 839px;
				height: 71px;
				background: #FFFFFF;
				box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
				border-radius: 4px;
				margin-left: 25px;
				margin-bottom: 41px;
				padding: 0 10px 0 10px;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
			}
		`}</style>
	</>)
}