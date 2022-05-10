import Link from 'next/link'
import { Button } from '@mantine/core';

export function LoginHeaderButton() {
	const showPreview = e => {
		elem.classList.add("modWindowWrapper");
	}
	
	return (
		<>
			<div className='maindiv'>
				<Button onClick={showPreview} variant="light" color="gray" size="xs" uppercase>
					Войти/Регстрация
				</Button>
				
			</div>
			<style jsx>{`
				
				a {
					color: white;
				}
				
				 .linklogin {
					text-decoration: none; 				
					color: white;
				 }

				 .reg {
					 margin-left: 15px;
				 }

				.linkreg {
					text-decoration: none;					
					color: white;
				}

				

				div {
					display: flex;
					align-items: center;
					flex-direction: row;
				}
			`}</style>
		</>
	)
}