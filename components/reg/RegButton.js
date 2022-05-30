import Link from 'next/link'
import { Button } from '@mantine/core';
import { useRouter } from 'next/router'

export const RegButton = () => {
	const router = useRouter()
	return (<>
		<div className="maindiv">
			<Button type="submit" color="blue">
				Зарегистрироваться
			</Button>
		</div>
		<style jsx>{`
			.maindiv {
				margin-top: 15px;
				margin-left: 120px;
			}

		`}</style>
	</>)
}