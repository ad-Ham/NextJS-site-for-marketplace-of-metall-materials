import { RepostLayout } from './RepostLayout'
import { useState, useEffect } from 'react';
import { SimpleGrid, Image, Badge } from '@mantine/core';
import { Comments } from '../../comments/CommentsBlock';
import styles from './NewsBlock.module.scss'
const axios = require('axios').default;

export const NewsBlock = ({news, tags}) => {
	let date = new Date(news.date);
	console.log(tags)
	
	

	return (<>
		<div className={styles.maindiv}>
			<SimpleGrid cols={1}>
				<p className={styles.newstitle}>
					{news.title}
				</p>

				<p className={styles.newsdate}>
					{(date.getDate().toString().length === 1 ? '0' + date.getDate().toString() : date.getDate().toString()) + '.' +
                    ((date.getMonth() + 1).toString().length === 1 ? '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString()) + '.' +
                    date.getFullYear()}
				</p>

				<div>
				{/* <div className={styles.photo}></div> */}
				<Image className={styles.photo}
					radius="xs"
					src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
					alt="Random unsplash image"
				/>
				<p className={styles.newstext}>
					{news.text}
				</p>
				</div>

				<div  className={styles.newstags}>
					{tags.map(tag => {
						
							return (<Badge key={tag.id}>{tag.value}</Badge>)
						
					})}
				</div>

				<div>
					<Comments />
				</div>
			</SimpleGrid>
		</div>
	</>)
}
// 	return (<>
// 		<div className={styles.maindiv}>
// 			<h2 className={styles.newsheader}>
// 				Название
// 			</h2>

// 			<div className={styles.photo}></div>

// 			<p className={styles.newstext}>
// 				Описание
// 			</p>

// 			<p className={styles.newstags}>
// 				Теги
// 			</p>

// 			<div className={styles.commentsInput}>
// 				{<NewsCommentsInput />}
// 			</div>

// 			<div className={styles.comments}>
// 				{<GetUsersComments />}
// 			</div>
// 		</div>
// 		{/* <RepostLayout /> */}
// 		<style jsx>{`
			
// 		`}</style>
// 	</>)
// }