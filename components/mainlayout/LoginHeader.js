import { LoginHeaderInput } from '../mainlayout/LoginHeaderInput.js'
import { LoginHeaderPassword } from '../mainlayout/LoginHeaderPassword.js'
import { LoginHeaderButton } from '../mainLayout/LoginHeaderButton.js'

export function LoginHeader() {
	return (
		<>
			<form className="maindiv">
				<LoginHeaderInput />
				<LoginHeaderPassword />
				<LoginHeaderButton />
			</form>
			<style jsx>{`
				.maindiv {
					display: flex;
				}
			`}</style>
		</>
	)
}