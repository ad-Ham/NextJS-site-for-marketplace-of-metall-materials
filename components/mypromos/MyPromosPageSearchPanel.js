export function MyPromosPageSearchPanel() {
	return (<>
		<div className="maindiv">
			<div className='searchbar'>
				<input type="text" placeholder="Введите ваш запрос..." className="promossearch" />
				<button className="searchbutton">Поиск</button>
			</div>
		</div>
		<style jsx>{`
			.maindiv {
				width: 850px;
			}
			.promossearch {
				margin-top: 25px;
				width: 750px;
				height: 35px;
				left: 528px;
				top: 261px;
				padding: 1px 7px;
				background: #FFF7F7;
				border: 1px solid #000000;
				box-sizing: border-box;
				border-radius: 4px 0px 0px 4px;
			}

			.searchbutton {
				display: inline;
				width: 90px;
				height: 35px;
				left: 1275.1px;
				top: 261px;
				background: #EBEBEB;
				border: 1px solid #000000;
				box-sizing: border-box;
				border-radius: 0px 4px 4px 0px;
				text-transform: uppercase;
				font-weight: 600;
			}

		`}</style>
	</>)
}