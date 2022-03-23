import {LoginHeaderInput} from '../mainlayout/LoginHeaderInput'
import {LoginHeaderPassword} from '../mainlayout/LoginHeaderPassword'
import {LoginHeaderButton} from '../mainLayout/LoginHeaderButton'

export function LoginHeader() {
	return (
		<>	
			<div>
				<LoginHeaderInput/>
				<LoginHeaderPassword/>
				<LoginHeaderButton/>
			</div>
			<style jsx>{`
				div {
					display: flex;
				}
			`}</style>
		</>
	)
}