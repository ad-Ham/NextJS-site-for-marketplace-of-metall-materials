import Link from 'next/link'
import { Button } from '@mantine/core';

export function LoginHeaderButton() {
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
				<Button onClick={showPreview} variant="light" color="gray" size="xs" uppercase>
					Войти/Регстрация
				</Button>

				{/* >>>>>>> 63d29bb0dd60abbe5997735edc069494e0d6e6d5 */}
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