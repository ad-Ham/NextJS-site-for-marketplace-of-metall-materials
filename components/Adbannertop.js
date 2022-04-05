import Link from 'next/link'

export function Adbannertop() {
	return(<>
		<div className="maindiv">
			<Link href="https://www.example.com"><img src="/adbannertop.svg" alt=""/></Link>
		</div>
		<style jsx>{`
			.maindiv {
				margin-top: 13px;
			}

			img {
				width: 100%;
			}
		`}</style>
	</>)
}