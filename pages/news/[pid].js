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



export async function getServerSideProps(context) {
	const id = context.params.pid
	const news = await axios.get('https://api.metalmarket.pro/singlenews', {params: {id:id}, headers: {'Accept': 'application/json'}})
	let tagsMas = news.data.news.tags.split(', ')
	let tags = []
	let i;
	for (i=0; i<tagsMas.length; ++i) {
		tags.push({id: i, value: tagsMas[i]})
	}
	return {
		props: {news: news.data.news, tags: tags}
	}
}

const NewsPage = ({news, tags}) => {
	const [singleNew, setSingleNew] = useState([])

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
			<div className={styles.content}>

				<div className={styles.leftside}>
					{/* <div className={styles.adbannerside}><Link href="https://www.example.com"><Adbannerside /></Link></div> */}
				</div>
				<div className={styles.rightside}>
					<NewsBlock news={news} tags={tags}/>
					<div className={styles.moreniewsdiv}>
						<p className={styles.morenews}>Еще новости:</p>
						<div className={styles.morenewsrow}>
							<MoreNewsCard />
							<MoreNewsCard />
							<MoreNewsCard />
						</div>
					</div>
				</div>

			</div>
		</>
	)
}

export default NewsPage;