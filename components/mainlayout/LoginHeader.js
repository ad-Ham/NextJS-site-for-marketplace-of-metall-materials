import { LoginHeaderInput } from '../mainlayout/LoginHeaderInput.js'
import { LoginHeaderPassword } from '../mainlayout/LoginHeaderPassword.js'
import { LoginHeaderButton } from '../mainLayout/LoginHeaderButton.js'

export function LoginHeader() {
	return (
		<>
			<div className="maindiv">
				<LoginHeaderInput />
				<LoginHeaderPassword />
				<LoginHeaderButton />
			</div>
			<style jsx>{`
				.maindiv {
					display: flex;
				}
			`}</style>
		</>
	)
}