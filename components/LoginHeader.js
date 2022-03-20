import {LoginHeaderInput} from './LoginHeaderInput'
import {LoginHeaderPassword} from './LoginHeaderPassword'
import {LoginHeaderButton} from './LoginHeaderButton'

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