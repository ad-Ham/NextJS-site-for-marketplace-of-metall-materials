import Head from 'next/head'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { MainPromos } from '../../components/mainpage/MainPromos'
import { MainPageNews } from '../../components/mainpage/MainPageNews'
import { NewsBlock } from '../../components/news/singleNews/NewsBlock'
import { MoreNewsCard } from '../../components/news/singleNews/MoreNewsCard'
import { Adbannertop } from '../../components/Adbannertop'
import Link from 'next/link'
import styles from '../../styles/news/newspage.module.scss'
const axios = require('axios').default;

const NewsPage = () => {
	const router = useRouter()
	const { pid } = router.query
	console.log(pid)

	// const [singleNew, setSingleNew] = useState([])

	// useEffect(() => {
	// 	axios.get('https://api.metalmarket.pro/singlenews', {
	// 		id: id
	// 	})
	// 		.then(function (response) {
	// 			console.log(response);
	// 			const singleNew = response;
	// 			setSingleNew(singleNew)
	// 		})
	// 		.catch(function (error) {
	// 			console.log(error);
	// 		})
	// }, [])



	return (
		<>
			<Head>
				<title>Новость</title>
				<meta name="keywords" content="next, javascript" />
				<meta name="description" content="this is" />
				<meta charSet="utf-8" />
			</Head>
			{/* <Adbannertop/> */}
			<div className={styles.content, styles.bothsides}>

				<div className={styles.leftside}>
					{/* <div className={styles.adbannerside}><Link href="https://www.example.com"><Adbannerside /></Link></div> */}
				</div>
				<div className={styles.rightside}>
					<NewsBlock />
					{/* <div className={styles.moreniewsdiv}>
						<p className={styles.morenews}>Еще новости: {id}</p>
						<div className={styles.morenewsrow}>
							<MoreNewsCard />
							<MoreNewsCard />
							<MoreNewsCard />
						</div>
					</div> */}
				</div>

			</div>
		</>
	)
}

export default NewsPage;