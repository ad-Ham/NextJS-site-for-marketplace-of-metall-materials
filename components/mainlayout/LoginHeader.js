import { LoginHeaderButton } from '../mainLayout/LoginHeaderButton.js'
import { useState } from 'react';
const axios = require('axios').default;

export function LoginHeader() {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		axios.post('http://localhost:3001/login', {
		    login: login,
		    password: password
		  })
		  .then(function (response) {
		    console.log(response.data.data.loginStatus);
		    let loginStatus = response.data.data.loginStatus;
		    if (loginStatus===true) {
		    	alert('Вы успешно вошли!')
		    }
		    else {
		    	alert('Не верный email или пароль!')
		    }
		    e.target.reset();
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}

	return (
		<>
			<form className="maindiv" onSubmit={handleSubmit}>
				<input type="text" 
					   placeholder="Логин" 
					   required
					   onChange={e => setLogin(e.target.value)}/>
				<input type="password" 
					   placeholder="Пароль" 
					   required
					   onChange={e => setPassword(e.target.value)}/>
				<LoginHeaderButton />
			</form>
			<style jsx>{`
				.maindiv {
					display: flex;
					/* margin-right: 150px; */
				}

				input {
					margin-top: 15px;
					width: 118.23px;
					height: 22px;
					background: #FFF7F7;
					border: 1px solid #000000;
					border-radius: 4px;
					margin: 0;
					margin-right: 11.7px;
					padding: 0;
					padding-left: 5px;
				}

				@media (max-width: 660px) {
					input {
						display: none;
					}
				}
			`}</style>
		</>
	)
}