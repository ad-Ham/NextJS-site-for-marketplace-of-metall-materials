import { useState, useRef, useEffect } from 'react'
import { NewsBlock } from '../../components/news/singleNews/NewsBlock'
import { MoreNewsCard } from '../../components/news/singleNews/MoreNewsCard'
import { CommentsBlock } from '../../components/comments/CommentsBlock'
import Link from 'next/link'
import styles from '../../styles/news/newspage.module.scss'
import { axios, checkToken } from '/middleware/axios.js'
import { Pencil,Trash, Pin, PinnedOff } from 'tabler-icons-react'
import { Card, Grid, Pagination, Space, Title, Group, Image, Text, Button, useMantineTheme, Badge } from '@mantine/core'
// const axios = require('axios').default
const imageToBase64 = require('image-to-base64')
	
const handleDelete = async(e) => {
	await axios.post('https://api.metalmarket.pro/newsdelete', {id: e.target.id})
}

const handlePin = async(e) => {
	await axios.post('https://api.metalmarket.pro/newspin', {id: e.target.id})
}

export async function getServerSideProps(context) {
	const id = context.params.pid

	let res = await axios.get('https://api.metalmarket.pro/singlenews', 
		{
			params: {id: id}, 
			headers: {'Accept': 'application/json'}
		}
	)
	
	let tagsMas = res.data.news.tags.split(', ')
	let tags = []	
	let i;
	
	for (i=0; i<tagsMas.length; ++i) {
		tags.push({id: i, value: tagsMas[i]})
	
	}
	
	let news = res.data.news
	
	news['image'] = await imageToBase64(news.photopath)

	res = await axios.get('https://api.metalmarket.pro/newsquery', {
		headers: {
			'Accept': 'application/json'
		}
	})

	const newsList = res.data.news
		
	for (i = 0; i < newsList.length; ++i) {
		newsList[i]['image'] = await imageToBase64(newsList[i].photopath)
	}

	if (newsList.indexOf(news) !== -1) {
		newsList.splice(newsList.indexOf(news))
	}
	
	const response = await axios.get("https://api.metalmarket.pro/getcomments",
		{ params : { entity: 'news', entity_id: id, headers: { 'Accept': 'application/json' }} }
	)


	const comments = response.data.comments

	for (i = 0; i < comments.length; i++) {
		comments[i]['user_image'] = await imageToBase64(comments[i].photopath)
	}

	return {
		props: {news: news, tags: tags, newsList: newsList, comments: comments}
	}
}

const NewsPage = ({news, tags, newsList, comments, user, userStatus}) => {
	const [singleNew, setSingleNew] = useState([])

	return (
		<><Card>
			<div className={styles.content}>
				<div className={styles.leftside}>
					{/* <div className={styles.adbannerside}><Link href="https://www.example.com"><Adbannerside /></Link></div> */}
				</div>
				<div className={styles.rightside}>
					{user && <>
						{(user.role === 'admin') && <>
							<Group position="apart">	
								<Group style={{marginLeft:20}}>						
										<form id={news.id} key={'0'+news.id} onSubmit={handlePin}>
										<Pin
												id={news.id}
												cursor={"pointer"}	
												size={18}
												strokeWidth={1}
												color={'blue'}
											/>
										</form>
										<PinnedOff
												id={news.id}
												cursor={"pointer"}	
												size={18}
												strokeWidth={1}
												color={'blue'}
											/>
									</Group>				
									<Group style={{marginRight:20}}>
										<Link href={"/news/edit/" + news.id} passHref>
										<Pencil	
											cursor={"pointer"}	
											size={18}
											strokeWidth={1}
											color={'blue'}
										/>
									</Link>								
									<form id={news.id} key={'0'+news.id} onSubmit={handleDelete}>									
									<Trash
											id={news.id}
											cursor={"pointer"}	
											size={18}
											strokeWidth={1}
											color={'red'}
										/>
									</form>	
									</Group>									
							</Group>
						</>}
					</>}
					<NewsBlock news={news} tags={tags} comments={comments} user={user}/>
					<CommentsBlock entity={'news'} entity_id={news.id} comments={comments} user={user} userStatus={userStatus}/>
					<div className={styles.moreniewsdiv}>
						<p className={styles.morenews}>Ещё новости:</p>
						<div className={styles.morenewsrow}>
							<MoreNewsCard news={newsList.slice(0,3)}/>
						</div>
					</div>
				</div>
			</div>
			</Card>
		</>
	)
}

export default NewsPage;