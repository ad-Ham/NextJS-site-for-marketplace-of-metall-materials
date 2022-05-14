import { Modal } from '@mantine/core';

export const LoginModal = ({opened, setOpened, onLogin}) => {
	return (
		<Modal
			opened={opened}
			onClose={() => setOpened(false)}
			title="Introduce yourself!"
		>
			<div>123</div>
			<button onClick={() =>{onLogin(true)}}>ЗАЛОГИНИТСЯ</button>
		</Modal>
	)
};