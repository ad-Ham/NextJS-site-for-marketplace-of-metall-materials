import Head from 'next/head'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { MainLayout } from '../../components/Layout/MainLayout'
import { MainPromos } from '../../components/mainpage/MainPromos'
import { MainPageNews } from '../../components/mainpage/MainPageNews'
import { PromoBlock } from '../../components/promos/singlePromos/PromoBlock'
import { MorePromosCard } from '../../components/promopage/MorePromosCard'
import { Adbannertop } from '../../components/Adbannertop'
import Adbannerside from '../../public/adbannerside.svg'
import { CommentsBlock } from '../../components/comments/CommentsBlock';
import Link from 'next/link'
import styles from '../../styles/promopage.module.scss'


export async function getServerSideProps(context) {
	const id = context.params.pid
	// let res = await axios.get('https://api.metalmarket.pro/singlenews', {params: {id:id}, headers: {'Accept': 'application/json'}})
	// let tagsMas = res.data.news.tags.split(', ')
	// let tags = []
	// let i;
	// for (i=0; i<tagsMas.length; ++i) {
	// 	tags.push({id: i, value: tagsMas[i]})
	// }
	// let news = res.data.news
	// // news['image'] = await imageToBase64(news.photopath)


	// res = await axios.get('https://api.metalmarket.pro/newsquery', {
	// 	headers: {
	// 		'Accept': 'application/json'
	// 	}
	// })
	// //const images = new Map();
	// let newsList = res.data.news
	
	// // for (i=0;i<newsList.length;++i) {
	// 	// //images.set(news.data.news[i].id, await imageToBase64(news.data.news[i].photopath))
	// 	// newsList[i]['image'] = await imageToBase64(newsList[i].photopath)
	// // }

	// if (newsList.indexOf(news) !== -1) {
	// 	newsList.splice(newsList.indexOf(news))
	// }

	res = await axios.get('https://api.metalmarket.pro/comments', {
		params : { entity: 'promo', entity_id: id },
		headers : {
			'Accept': 'application/json'
		}
	}) 

	let comments = res.data.comments

	return {
		// props: {news: news, tags: tags, newsList: newsList, comments: comments}
		props: {comments: comments}
	}
}

const Index = ({ comments }) => {
	const router = useRouter();
    const [userStatus, setUserStatus] = useState('')
    const [user, setUser] = useState('')

    const changeUserStatus = () => {
        setUserStatus(checkToken(router.pathname))
        if (checkToken(router.pathname) === true) {
            axios.get('https://api.metalmarket.pro/getUserId', {params:{token: localStorage.getItem("token")}})
            .then(function(response) {
                let userId = response.data.user_id.user_id;
                axios.get('https://api.metalmarket.pro/getUser', {params:{id: userId}})
                .then(function(response) {
                    setUser(response.data.user)
                })
                .catch(function (error) {
                        console.log(error);
                    })
            })
            .catch(function (error) {
                    console.log(error);
                })
        }
    }

	useEffect(() => {
        changeUserStatus()

    }, [])

	return (<>
		<div>
			<PromoBlock />
		</div>
		<div>
			<CommentsBlock entity={'promo'} entity_id={1} comments={comments} user={user}/>
		</div>
	</>)
}

export default Index
