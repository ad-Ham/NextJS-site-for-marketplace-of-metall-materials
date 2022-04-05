import Search from '/public/search.svg'

export function SearchHeader() {
	return (
		<>	
			<div className="maindiv">
				<input type="text" placeholder="Поиск" className="inputSearch"/>
				<button><Search/></button>
			</div>

			<style jsx>{`
				.inputSearch {
				 	width: 270px;
					height: 18px;
					background: #FFF7F7;
					border: 1px solid #000000;
					border-radius: 3px;
					padding: 1px 7px;
					margin: 0;
					margin-right: 15px;
				}
				button {
					height: 22px;
					margin: 0;
					padding: 0;
					border: 0;
				}
				.maindiv {
					display: flex;
					align-items: center;
					height: 22px;
				}

				@media (max-width: 980px) {
					.maindiv {
						display: none;
					}
				}
			`}
			</style>
		</>
	)
}
