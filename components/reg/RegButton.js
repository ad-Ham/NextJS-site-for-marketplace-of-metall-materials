import Link from 'next/link'
import { Button,Group  } from '@mantine/core';
import { useRouter } from 'next/router'

export const RegButton = () => {
	const router = useRouter()
	return (<>
	<Group mt="md" position="center">	
				<Button type="submit" color="blue">
					Зарегистрироваться
				</Button>
	</Group>
		<style jsx>{`
			.maindiv {
				margin-top: 15px;
				margin-left: 120px;
			}

		`}</style>
	</>)
}