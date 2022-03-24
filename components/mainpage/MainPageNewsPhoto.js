import Link from 'next/link'

export function MainPageNewsPhoto() {
	return(
		<>
			<div className="newsphotocard">
				<Link href="/newspage"><a><div className="firstrow">
					<div className="photo"></div>
					<h3 className="newsphotoheader">Чуть менее важная новость</h3>
				</div></a></Link>
				<p>Не может быть не верю как такое возможно обалдеть просто кто бы мог подумать как же так не верю своим глазам такое бывает только в сказке</p>
				<div className="importantnewsbottom">
					<p className="importantnewsbottomtext">16.22.22</p>
					<p className="importantnewsbottomtext">Какой-то тег</p>
				</div>
			</div>	
			<style jsx>{`
				a {
					color: #000;
				}
				
				.photo {
					width: 102px;
					height: 70px;
					border-radius: 4px;
					background-image: url("/photopromo.svg");
					background-repeat: no-repeat;
					margin-right: 12px;
				}

				.newsphotocard {
					width: 407px;
					border-bottom: 1px solid #ACACAC;
				}

				.newsphotoheader {
					font-weight: 700;
					font-size: 24px;
					line-height: 99.69%;
					color: #000;
				}

				.firstrow {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
				}

				p {
					font-weight: 400;
					font-size: 13px;
					line-height: 99.69%;
					color: #4B4B4B;
					margin-bottom: 16.5px;
				}

				.importantnewsbottom {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					margin-top: auto;
					padding: 0;
				}

				.importantnewsbottomtext {
					font-weight: 400;
					font-size: 11px;
					line-height: 99.69%;
					color: #6C6C6C;
				}
			`}</style>	
		</>
	)
}