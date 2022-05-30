import Head from 'next/head'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { MainPromos } from '../../components/mainpage/MainPromos'
import { MainPageNews } from '../../components/mainpage/MainPageNews'
import { NewsBlock } from '../../components/news/singleNews/NewsBlock'
import { MoreNewsCard } from '../../components/news/singleNews/MoreNewsCard'
import { Adbannertop } from '../../components/Adbannertop'
import { CommentsBlock } from '../../components/comments/CommentsBlock';
import Link from 'next/link'
import styles from '../../styles/news/newspage.module.scss'
const axios = require('axios').default;
// const imageToBase64 = require('image-to-base64');


export async function getServerSideProps(context) {
	const id = context.params.pid
	let res = await axios.get('https://api.metalmarket.pro/singlenews', {params: {id:id}, headers: {'Accept': 'application/json'}})
	let tagsMas = res.data.news.tags.split(', ')
	let tags = []
	let i;
	for (i=0; i<tagsMas.length; ++i) {
		tags.push({id: i, value: tagsMas[i]})
	}
	let news = res.data.news
	// news['image'] = await imageToBase64(news.photopath)


	res = await axios.get('https://api.metalmarket.pro/newsquery', {
		headers: {
			'Accept': 'application/json'
		}
	})
	//const images = new Map();
	let newsList = res.data.news
	
	for (i=0;i<newsList.length;++i) {
		// //images.set(news.data.news[i].id, await imageToBase64(news.data.news[i].photopath))
		newsList[i]['image'] = await imageToBase64(newsList[i].photopath)
	}

	if (newsList.indexOf(news) !== -1) {
		newsList.splice(newsList.indexOf(news))
	}

	res = await axios.get('http://localhost:3001/comments', {
		params : { entity: 'news', entity_id: id },
		headers : {
			'Accept': 'application/json'
		}
	}) 

	let comments = res.data.comments

	return {
		props: {news: news, tags: tags, newsList: newsList, comments: comments}
	}
}

const NewsPage = ({news, tags, newsList, comments}) => {
	const [singleNew, setSingleNew] = useState([])
	console.log('!!!!!!!!!!!!!!')
	console.log(comments)
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
					<NewsBlock news={news} tags={tags} comments={comments}/>
					<CommentsBlock entity={'news'} entity_id={news.id} comments={comments}/>
					<div className={styles.moreniewsdiv}>
						<p className={styles.morenews}>Еще новости:</p>
						<div className={styles.morenewsrow}>
							<MoreNewsCard news={newsList.slice(0,3)}/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default NewsPage;