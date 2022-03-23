export function NewsCardPhoto() {
	return(<>
		<div className='maindiv'>
			<div className="photo"></div>
			<div>
				<h3 className="newsheader">Заголовок новости с фото!</h3>
				<p className="newstext">В декабре 2021 года Россия импортировала 4 тыс. тонн медного лома и отходов, что....</p>
				<div className="newsbottom">
					<p className="newsdate">22.02.2022 18:00</p>
					<p className="newstag">Какой-то тег</p>
				</div>
			</div>
		</div>
		<style jsx>{`
			.newstag {
				font-style: italic;
				font-weight: 200;
				font-size: 12px;
				line-height: 99.69%;
				color: #000
			}

			.newsdate {
				font-weight: 700;
				font-size: 14px;
				line-height: 99.69%;
				color: #000;
			}

			.newsbottom {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
			}

			.newstext {
				font-weight: 300;
				font-size: 14px;
				line-height: 153.69%;
				color: #343434;
				margin-bottom: 18px;
			}

			.newsheader {
				font-weight: 700;
				font-size: 18px;
				line-height: 99.69%;
				color: #000;
				padding-top: 7px;
				margin-bottom: 13px;
			}

			.maindiv {
				width: 400px;
				display: flex;
				flex-direction: row;
				border-bottom: 1px solid #C4C4C4;
				padding-bottom: 10px;
				margin-left: 25px;
			}

			.photo {
				min-width: 150px;
				height: 100px;
				border-radius: 4px;
				background-image: url("/photopromo.svg");
				background-repeat: no-repeat;
				margin-bottom: 15px;
				margin-right: 16px;
			}
		`}</style>
	</>)
}