import SearchNews from '../public/searchNews.svg'

export function PromosPageSortPanel() {
	return (<>
		<div className="maindiv">
			<div className="selectsortbar">
				<span className="selectsortbarheader">Сортировать:</span>
				<span className="selectsortbardate">Дата</span>
				<span className="selectsortbarsell">Продажа</span>
				<span className="selectsortbarbuy">Покупка</span>
				<button className="postbutton">Подать объявление</button>
			</div>
		</div>
		<style jsx>{`

			.selectsortbar {
				display: inline-block;
				margin-top:25px;
				width: 790px;
				flex-direction: column;
				align-items: center;
				justify-content: 
			}

			.selectsortbarheader{
				display: inline-block;
				position: static;
				width: 111px;
				height: 16px;
				left: 0px;
				top: 0px;
				font-family: 'Roboto';
				font-style: normal;
				font-weight: 500;
				font-size: 14px;
				line-height: 99.69%;
			}

			.selectsortbardate {
				display: inline-block;
				position: static;
				width: 41px;
				height: 16px;
				left: 126px;
				top: 0px;
				font-family: 'Roboto';
				font-style: normal;
				font-weight: 400;
				font-size: 14px;
				line-height: 99.69%;
			}

			.selectsortbarsell {
				display: inline-block;
				position: static;
				width: 70px;
				height: 16px;
				left: 182px;
				top: 0px;
				font-family: 'Roboto';
				font-style: normal;
				font-weight: 400;
				font-size: 14px;
				line-height: 99.69%;
			}

			.selectsortbarbuy{
				display: inline-block;
				position: static;
				width: 65px;
				height: 16px;
				left: 267px;
				top: 0px;
				font-family: 'Roboto';
				font-style: normal;
				font-weight: 400;
				font-size: 14px;
				line-height: 99.69%;
			}

			.postbutton {
				margin-left: 333px;
				width: 170px;
				height: 45px;
				left: 1209px;
				top: 321px;
				background: #C4C4C4;
				border: none;
				border-radius: 4px;	
				font-family: 'Roboto';
				font-style: normal;
				font-weight: 600;
				font-size: 17px;
				line-height: 99.69%;
			}

		`}</style>
	</>)
}