import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { ModalsProvider, useModals } from '@mantine/modals';
import { axios, checkToken } from '/middleware/axios.js';
import { showNotification } from '@mantine/notifications';
import Link from 'next/link'

export const LoginForm = ({ id }) => {
	const modals = useModals();

	const form = useForm({
		initialValues: {
			email: '',
			password: ''
		},

		validate: {
			email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
		},
	});

	function handleSubmit(values) {
		console.log(values)
		axios.post('https://api.metalmarket.pro/login', {
			login: values.email,
			password: values.password
		})
			.then(function (response) {
				console.log(response.status)
				if (response.status === 200) {
					localStorage.setItem('token', response.data.token);
					showNotification({
						title: 'Отлично!',
			            message: 'Вы успешно вошли в аккаунт ' + values.email,
			            autoClose: 5000,
			            color: "green"
			        })					
			        form.reset()
					modals.closeAll()

				}
			})
			.catch(function (error) {
				console.log(error.status)
				if (error.status === 403) {
					showNotification({
						title: 'Ошибка!',
			            message: 'Неверный пароль',
			            autoClose: 5000,
			            color: "red"
			        })
				} else if (error.status === 404) {
					showNotification({
						title: 'Ошибка!',
			            message: 'Пользователь не найден',
			            autoClose: 5000,
			            color: "red"
			        })
				} else if (error.status	=== 400) {
					showNotification({
						title: 'Ошибка!',
			            message: 'Дождитесь подтверждения аккаунта',
			            autoClose: 5000,
			            color: "red"
			        })
				}
			});
	}

	return (
		<Box sx={{ maxWidth: 300 }} mx="auto">
			<form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
				<TextInput
					required
					label="Email"
					placeholder="your@email.com"
					{...form.getInputProps('email')}
				/>

				<TextInput type="password" label="Пароль" required {...form.getInputProps('password')} />

				<Group mt="md">
					<div className="loginButton"><Button fullWidth type="submit" color="green">Войти</Button></div>
				</Group>
			</form>
			<style jsx>{`
      	a {
      		color: unset;
      	}

      	.loginButton {
      		width: 30vw
      	}

      	.regButton {
      		width: 60vw
      	}
		`}</style>
		</Box>
	);
}