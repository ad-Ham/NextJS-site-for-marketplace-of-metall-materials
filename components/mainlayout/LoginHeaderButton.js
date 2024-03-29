import Link from 'next/link'
import { Button } from '@mantine/core';
import { UserCircle } from 'tabler-icons-react';

export const LoginHeaderButton = () => {
	const showPreview = e => {
		elem.classList.add("modWindowWrapper");
	}

	return (
		<>
			<div className='maindiv'>
				{/* <<<<<<< HEAD */}
				{/* <Button type="button" onClick={showPreview} variant="gradient" gradient={{ from: 'teal', to: 'lime' }}>
					Войти
				</Button> */}
				{/* <Link href="/login"><a className="linklogin">Войти</a></Link>
				<div className='reg'>/</div> */}
				{/* <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
					<Link href={'/reg'}><a className="linkreg">Регистрация</a></Link>
				</Button> */}
				{/* <Link href={'/reg'}><a className="linkreg">Регистрация</a></Link> */}
				{/* ======= */}
				<UserCircle
					size={32}
					strokeWidth={1}
					color={'#191d4d'}
				/>;
				<Button onClick={showPreview} variant="light" color="gray" size="xs" uppercase>
					Войти/Регистрация
				</Button>
			</div >
			<style jsx>{`
				
				a {
					color: white;
				}
				
				 .linklogin {
					text-decoration: none; 				
					color: black;
				 }

				 .reg {
					 margin-left: 15px;
					 margin-right: 5px;
				 }

				.linkreg {
					text-decoration: none;					
					color: black;
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