import Link from 'next/link'
import { Button } from '@mantine/core';

export function LoginHeaderButton() {
	return (
		<>
			<div className='maindiv'>
				<Button variant="gradient" gradient={{ from: 'teal', to: 'lime' }}>
					<Link href="/login" className='linklogin'><a >Войти</a></Link>
				</Button>
				{/* <Link href="/login"><a className="linklogin">Войти</a></Link> */}
				<div className='reg'></div>
				<Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
					<Link href={'/reg'}><a className="linkreg">Регистрация</a></Link>
				</Button>
				{/* <Link href={'/reg'}><a className="linkreg">Регистрация</a></Link> */}
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