import { LoginHeaderButton } from '../mainLayout/LoginHeaderButton.js'
import { useState } from 'react';
const axios = require('axios').default;

export const LoginHeader = () => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		axios.post('https://api.metalmarket.pro/login', {
		    login: login,
		    password: password
		  })
		  .then(function (response) {
		    console.log(response.data.loginStatus);
		    console.log(response)
		    console.log(response.data)
		    let token = response.data.token;
		    localStorage.setItem('token', token);
	    	alert('Вы успешно вошли!')
		    e.target.reset();
		  })
		  .catch(function (error) {
		    console.log(error)
		  });
	}

	return (
		<>
				<LoginHeaderButton />
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