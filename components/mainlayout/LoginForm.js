import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { ModalsProvider, useModals } from '@mantine/modals';
import { axios, checkToken } from '/middleware/axios.js';
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
				if (response.status === 200) {
					localStorage.setItem('token', response.data.token);
					alert('Вы успешно вошли!')
					form.reset()
					modals.closeModal(id)

				} else if (response.status === 404) {
					alert('Пользователь не найден')
				} else if (response.status === 403) {
					alert('Неверный пароль')
				}
			})
			.catch(function (error) {
				console.log(error);
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
					<div className="regButton">
						<Link href="/reg" passHref>
							<Button fullWidth type="button">Регистрация</Button>
						</Link>
					</div>
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