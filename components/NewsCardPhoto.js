export function NewsCardPhoto() {
	return(<>
		<div className='maindiv'>
			<div className="photo"></div>
		</div>
		<style jsx>{`
			.maindiv {
				display: flex;
				flex-direction: row;
				border-bottom: 1px solid #C4C4C4;
				padding-bottom: 10px;
			}

			.photo {
				width: 150px;
				height: 100px;
				border-radius: 4px;
				background-image: url("/photopromo.svg");
				background-repeat: no-repeat;
				margin-bottom: 15px;
			}
		`}</style>
	</>)
}