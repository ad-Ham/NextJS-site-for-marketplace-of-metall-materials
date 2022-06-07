import Head from 'next/head'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link'
const axios = require('axios').default;
import  RichTextEditor  from '../../../components/RichText.tsx';
import { showNotification } from '@mantine/notifications';
import { Input, Group, Button } from '@mantine/core';
import { checkToken } from '/middleware/axios.js';


export async function getServerSideProps(context) {
	const id = context.params.pid
	let res = await axios.get('https://api.metalmarket.pro/singlenews', {params: {id:id}, headers: {'Accept': 'application/json'}})
	let news = res.data.news
	news['image'] = await imageToBase64(news.photopath)

	return {
		props: {news: news, pid: id}
	}
}

const NewsPageEdit = ({ news, pid, user, userStatus }) => {
	const router = useRouter();
	const [user, setUser] = useState('')

	const [value, onChange] = useState(news.html);
	const [desc, setDesc] = useState(news.desc);
	const [title, setTitle] = useState(news.title);
	const [tags, setTags] = useState(news.tags);

	const uploadToServer = async (e) => {  
	   	e.preventDefault()
	    const body = new FormData(document.getElementById("uploadForm"));
	    console.log(body)
	    // console.log("file", image)
	    body.append("html", value); 
	    body.append("id", pid);    
	    const response = await fetch("https://api.metalmarket.pro/updateNews", {
	      method: "POST",
	      body,
	    });
	    onChange('')
	    showNotification({ 
		      autoClose: false,
		      message: 'Новость обновлена',
		      color: 'green'
	      })
	};

	return (<>
		{(userStatus === false) && <><h1 className="errorHeader">401 Unauthorized</h1><p className="errorText">Пожалуйста, авторизуйтесь</p></>}

		{(userStatus === true) && (user.role !== 'admin') && <><h1 className="errorHeader">403 Forbidden</h1><p className="errorText">Недостаточно прав доступа</p></>}


		{(userStatus === true) && (user.role === 'admin') && <><form onSubmit={uploadToServer} id="uploadForm">
			<Group direction="column" position="center" grow>
				<h1>Форма добавления новостей</h1>
				<Input id="title"
					value={title}
					name="title"
					placeholder="Введите заголовок"
					required
					maxLength="150"
					className="input"
					length="100%"
					onChange={e => setTitle(e.target.value)} />

				<Input id="desc"
					value={desc}
					name="desc"
					placeholder="Введите краткое описание статьи"
					required
					
					className="input"
					length="100%"
					onChange={e => setDesc(e.target.value)} />

				<RichTextEditor name="rte" value={value} onChange={onChange}  required controls={[['bold', 'strike', 'italic', 'underline'], ['clean'], ['h1', 'h2', 'h3', 'h4'], ['link', 'blockquote', 'sub', 'sup'], ['unorderedList', 'orderedList'], ['alignCenter', 'alignLeft', 'alignRight'], ['code', 'codeBlock']]}/>
				<Input id="tags"
					value={tags}
					name="tags"
					placeholder="&quot;Тег1, Тег2, Тег3, ...&quot;"
					required
					maxLength="150"
					className="input"
					length="100%"
					onChange={e => setTags(e.target.value)} />


				<Button type="submit">Сохранить изменения</Button>
				<Input type="reset" value="Сбросить"/>
				<div dangerouslySetInnerHTML={{__html: value}}></div>
			</Group>
			<Link href='/news/edit'>
				<Button>Редактировать новости</Button>
			</Link>
			<Link href='/news/add'>
				<Button>Добавить новости</Button>
			</Link>
		</form></>}
		<style jsx>{`
			h1 {
				text-align: center;
			}

			.input {
				margin-bottom: 15px;
				width: 80%;
			}

			textarea {
				margin-top: 15px;
				width: 85vw;
				height: 110px;
				padding: 5px;
			}

			button {
				margin-top: 15px;
				padding: 5px;
			}

			form {
				display: flex;
				flex-direction: column;
				align-items: center;
			}
		`}</style>
	</>)
}

export default NewsPageEdit;