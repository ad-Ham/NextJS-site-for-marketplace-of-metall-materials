import { RepostLayout } from './RepostLayout'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { SimpleGrid, Image, Badge,MediaQuery} from '@mantine/core';
import styles from './NewsBlock.module.scss'
const axios = require('axios').default;


export const NewsBlock = ({news, tags}) => {	
	return (<>
		<div className={styles.maindiv}>
			<SimpleGrid cols={1}>
				<MediaQuery smallerThan="sm" styles={{ display: 'none' }}><p className={styles.newstitle}>
					{news.title}
				</p></MediaQuery>
				<MediaQuery largerThan="sm" styles={{ display: 'none' }}><p style={{fontSize:20, fontWeight:700, align:"center"}}>
					{news.title}
				</p></MediaQuery>

				<p className={styles.newsdate}>
					{`${news.news_date.slice(8, 10)}.${news.news_date.slice(5, 7)}.${news.news_date.slice(0, 4)}
                    ${news.news_date.slice(11)}`}
				</p>

				<div>
				{/* <div className={styles.photo}></div> */}
					<Image className={styles.photo}
						radius="xs"
						src={'data:image/'+news.photopath.substr(news.photopath.length-3)+';base64,'+ news.image}
						alt="Random unsplash image"
					/>
					<div dangerouslySetInnerHTML={{__html: news.html}}></div>
				</div>

				<div className={styles.newstags}>
					{tags.map(tag => {
						return (<Badge key={tag.id}>{tag.value}</Badge>)
					})}
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