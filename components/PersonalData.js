import Profilepicture from '../public/profilepicture.svg'
import Link from 'next/link'

export function PersonalData() {
	return(<>
		<div className="maindiv">
			<div className="row">
				<div className="picture"><Profilepicture/></div>
				<div className="data">
					<p className="username">Хоменков Алексей Дмитриевич</p>
					<p className="userdata">aleks.khomenkov.03@mail.ru</p>
					<p className="userdata">88005553535</p>
				</div>
			</div>
			<div className="button">
				<Link href="/editprofile"><a>Редактировать профиль</a></Link>
			</div>
		</div>
		<style jsx>{`
			.button {
				display: flex;
				align-items: center;
				justify-content: center;
				margin-top: auto;
			}

			a {
				width: 190px;
				height: 30px;
				background: #C4C4C4;
				border-radius: 4px;
				display: flex;
				align-items: center;
				justify-content: center;
				font-weight: 600;
				font-size: 14px;
				line-height: 99.69%;
				color: #000000;
			}

			.picture {
				display: flex;
				min-width: 69px;
			}

			.data {
				display: flex;
				flex-direction: column;
				margin-left: 14px;
			}

			.userdata {
				font-weight: 400;
				font-size: 13px;
				line-height: 99.69%;
				color: #000;
			}

			.username {
				font-weight: 400;
				font-size: 18px;
				line-height: 99.69%;
				color: #000;
			}

			.row {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
			}

			.maindiv {
				display: flex;
				flex-direction: column;
				padding: 29px 14px 26px 14px;
				width: 300px;
				height: 166px;
				background: #FFFFFF;
				box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
				border-radius: 4px;
				margin-top: 24px;
			}
		`}</style>
	</>)
}