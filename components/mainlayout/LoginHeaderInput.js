export function LoginHeaderInput() {
	return (
		<>
			<input type="text" placeholder="Логин" required/>
			<style jsx>{`
				input {
					margin-top: 15px;
					width: 118.23px;
					height: 22px;
					background: #FFF7F7;
					border: 1px solid #000000;
					border-radius: 4px;
					margin: 0;
					margin-right: 11.7px;
					padding: 0;
					padding-left: 5px;
				}

				@media (max-width: 660px) {
					input {
						display: none;
					}
				}
			`}</style>
		</>
	)
}