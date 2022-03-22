import {MainPromoPhoto} from '../components/MainPromoPhoto'
import {PromoNoPhoto} from '../components/PromoNoPhoto'

export function MainPromos(){
	return(<>
		<div className="promosMainBox">
			<h2 className="promosHeader">Объявления</h2>
			<div className="menucards">
				<MainPromoPhoto/>
				<MainPromoPhoto/>
				<div className="promos">
					<PromoNoPhoto/>
					<PromoNoPhoto/>
					<PromoNoPhoto/>
					<PromoNoPhoto/>
					<PromoNoPhoto/>
					<PromoNoPhoto/>
					<PromoNoPhoto/>
				</div>
			</div>
			<div className="buttons">
				<button className="promosButton1">Подать объявление</button>
				<button className="promosButton2">Все объявления</button>
			</div>
		</div>
		<style jsx>{`
			.promosMainBox {
				background: #FFFFFF;
				box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
				padding: 10px 6px 21px 5px;
				margin-left: 31px;
				margin-top: 24px;
				width: calc(100% - 31px);
			}

			.promosHeader{
				font-weight: 700;
				font-size: 36px;
				line-height: 99.69%;
				color: #000000;
				border-bottom: 1px solid #E0E0E0;
				text-align: center;
				padding-bottom: 13px;
			}

			.promosButton1 {
				background: #C4C4C4;
				border-radius: 4px;
				border: 0;
				font-weight: 700;
				font-size: 12px;
				line-height: 99.69%;
				padding: 8px 25px 7px 25px;
			}

			.promosButton2 {
				background: #C4C4C4;
				border-radius: 4px;
				border: 0;
				font-weight: 700;
				font-size: 12px;
				line-height: 99.69%;
				padding: 8px 35px 7px 35px;

			}




			

			.buttons {
				display: flex;
				justify-content: space-between;
				margin: 0px 20px 0px 20px;
			}

			.menucards {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
			}

			.promos {
				height: 303.11px;
				display: flex;
				flex-direction: column;
				align-items: stretch;
			}

			.promos .sides:last-child {
				padding-bottom: 13px;
			}
		`}</style>
	</>)
}