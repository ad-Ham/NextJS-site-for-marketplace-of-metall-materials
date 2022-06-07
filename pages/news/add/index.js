import { Input, Group, Button } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import  RichTextEditor  from '../../../components/RichText.tsx';
import { useState, useEffect } from 'react';
const axios = require('axios').default;
import Link from 'next/link'
import { checkToken } from '/middleware/axios.js';
import { useRouter } from 'next/router'
const initialValue =
  		'<p>Оформите вашу новость здесь</p> <p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p>';

const AddNews = ({ user, userStatus }) => {
	
	const router = useRouter();

	const [newsStatus, setNewsStatus] = useState('');
	const [value, onChange] = useState(initialValue);
	const [desc, setDesc] = useState('');
	const [title, setTitle] = useState('');
	const [tags, setTags] = useState('');

	const handleSubmit = e => {
		e.preventDefault()
		console.log(value)
		setText(value)
	};

	  const [image, setImage] = useState(null);
	  const [createObjectURL, setCreateObjectURL] = useState(null);

	  const uploadToClient = (event) => {
	    if (event.target.files && event.target.files[0]) {
	      const i = event.target.files[0];

	      setImage(i);
	      setCreateObjectURL(URL.createObjectURL(i));
	      blah.src = URL.createObjectURL(i)
	    }
	  };

	const uploadToServer = async (e) => {  
  	    e.preventDefault()
	    const body = new FormData(document.getElementById("uploadForm"));
	    console.log(body)
	    // console.log("file", image)
	    body.append("html", value);    
	    const response = await fetch("https://api.metalmarket.pro/uploadNews", {
	      method: "POST",
	      body,
	    });
	    onChange('')
	    showNotification({ 
		      autoClose: false,
		      message: 'Новость добавлена',
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
					name="title"
					placeholder="Введите заголовок"
					required
					maxLength="150"
					className="input"
					length="100%"
					onChange={e => setTitle(e.target.value)} />

				<Input id="desc"
					name="desc"
					placeholder="Введите краткое описание статьи"
					required
					className="input"
					length="100%"
					onChange={e => setDesc(e.target.value)} />

				<Input
					id="file-chooser"
					type="file"
					name="sampleFile"
					onChange={uploadToClient} />
				<RichTextEditor name="rte" value={value} onChange={onChange}  required controls={[['bold', 'strike', 'italic', 'underline'], ['clean'], ['h1', 'h2', 'h3', 'h4'], ['link', 'blockquote', 'sub', 'sup'], ['unorderedList', 'orderedList'], ['alignCenter', 'alignLeft', 'alignRight'], ['code', 'codeBlock']]}/>
				<Input id="tags"
					name="tags"
					placeholder="&quot;Тег1, Тег2, Тег3, ...&quot;"
					required
					maxLength="150"
					className="input"
					length="100%"
					onChange={e => setTags(e.target.value)} />


				<Button type="submit">Добавить новость</Button>
				<Input type="reset" value="Сбросить"/>
				<div>
				<img className='photo'
					id="blah"
					src='#'
					alt="Здесь будет картинка"
				/>
				<div dangerouslySetInnerHTML={{__html: value}}></div>
				</div>
			</Group>
			<Link href='/news/edit'>
				<Button>Редактировать новости</Button>
			</Link>
		</form></>}
		<style jsx>{`
			.errorText {
				text-align: center;
				font-size: 24px;
			}

			.errorHeader {
				text-align: center;
				font-size: 50px;
				margin-bottom: 15px;
			}

			.photo {
				width: 30%; 
				height: auto;
				float: left;
				padding-right: 20px;
				padding-bottom: 20px;
			}

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

export default AddNews;