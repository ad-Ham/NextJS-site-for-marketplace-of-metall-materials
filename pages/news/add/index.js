import Head from 'next/head'
import { useState } from 'react';
const axios = require('axios').default;

const AddNews = () => {
	const [newsStatus, setNewsStatus] = useState('');

	const [text, setText] = useState('');
	const [title, setTitle] = useState('');
	const [tags, setTags] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		const data = {
			title,
			text,
			tags
		};
		let date = new Date().toJSON().split("T")[0];

		console.log(JSON.stringify({
			title,
			text,
			tags,
			date
		}));
		axios.post('http://localhost:3001/newsquery', {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'User-Agent': '*'
			},
			body: JSON.stringify({
				title,
				text,
				tags,
				date
			})
		})
			.then(response => response.json())
			.then(result => {
				console.log(result);
			})
			.catch(err => {
				if (err) {
					console.log(err);
				}
			})
	};

	return (<>

		<h1>Форма добавления новостей</h1>
		<form onSubmit={handleSubmit}>
			<input id="title"
				type="text"
				placeholder="Заголовок новости"
				required
				maxLength="150"
				onChange={e => setTitle(e.target.value)} />

			<textarea id="text"
				placeholder="Текст новости"
				required
				cols="100"
				rows="100"
				onChange={e => setText(e.target.value)} />

			<input id="tags"
				placeholder="Теги новости"
				required
				maxLength="150"
				onChange={e => setTags(e.target.value)} />

			<button className='btn' type="submit">Добавить новость</button>
		</form>
		<style jsx>{`
			h1 {
				text-align: center;
			}

			input {
				margin-top: 15px;
				width: 85vw;
				padding: 5px;
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