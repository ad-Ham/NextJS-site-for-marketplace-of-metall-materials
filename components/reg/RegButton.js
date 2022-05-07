import Link from 'next/link'
import { Button } from '@mantine/core';
import { useRouter } from 'next/router'

export function RegButton() {
	const router = useRouter()
	return (<>
		<div className="maindiv">
			<Button color="indigo">
				{/* <button type="submit" onClick={() => router.push('/thankyou')}>Регистрация</button> */}
				<button type="submit">Регистрация</button>
			</Button>
		</div>
		<style jsx>{`
			.maindiv {
				margin-top: 40px;
				margin-left: 75px;
				width: 145px;
				height: 36px;
				background: #C4C4C4;
				border-radius: 5px;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			button {
				width: 100%;
    			height: 100%;
				font-weight: 500;
				font-size: 18px;
				line-height: 99.69%;
				background-color: #4c6ef5;
				color: white;
				border: none;
			}
		`}</style>
	</>)
}