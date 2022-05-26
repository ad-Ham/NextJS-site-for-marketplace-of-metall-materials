import { Input, Group, Button } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import  RichTextEditor  from '../../../components/RichText.tsx';
import { useState } from 'react';
const axios = require('axios').default;
const initialValue =
  		'<p>Оформите вашу новость здесь</p> <p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p>';
const AddNews = () => {
	

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


		{/*<form  
	      id='uploadForm' 
	      onSubmit={uploadToServer} 
	      encType="multipart/form-data">
	        <input type="file" name="sampleFile" onChange={uploadToClient}/>
	        <input type='submit' value='Upload!' />
	    </form>*/} 
		
		<form onSubmit={uploadToServer} id="uploadForm">
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
					maxLength="150"
					className="input"
					length="100%"
					onChange={e => setDesc(e.target.value)} />

				<Input
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
				<div dangerouslySetInnerHTML={{__html: value}}></div>
			</Group>
		</form>
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

export default AddNews;