import {LoginHeaderInput} from '../mainlayout/LoginHeaderInput'
import {LoginHeaderPassword} from '../mainlayout/LoginHeaderPassword'
import {LoginHeaderButton} from '../mainLayout/LoginHeaderButton'

export function LoginHeader() {
	return (
		<>	
			<div className="maindiv">
				<LoginHeaderInput/>
				<LoginHeaderPassword/>
				<LoginHeaderButton/>
			</div>
			<style jsx>{`
				.maindiv {
					display: flex;
				}
			`}</style>
		</>
	)
}