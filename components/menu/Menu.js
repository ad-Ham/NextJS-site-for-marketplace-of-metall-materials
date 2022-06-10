import { useDisclosure } from '@mantine/hooks';
import { Menu, Divider, Button} from '@mantine/core';
import Link from 'next/link'
import { User, Logout, FileText, MessageCircle, UserCircle} from 'tabler-icons-react';
import { UserButton } from '../mainlayout/UserButton'
import { useRouter } from 'next/router'

export function MenuUser ({ user }) {
  	const router = useRouter();
  	const [opened, handlers] = useDisclosure(false);

  	const deleteLocalStorage = () => {
    	localStorage.removeItem('token')
		localStorage.removeItem('user_id')
    	router.reload(window.location.pathname)
  	}

	return (
	<>
		<Menu opened={opened} onOpen={handlers.open} onClose={handlers.close} control={<div><UserButton user={user}/></div>}>
			<Link href="/profile" passHref><Menu.Item  icon={<User size={14} />}>Личный кабинет</Menu.Item></Link>
			<Link href="/chats" passHref><Menu.Item  icon={<MessageCircle size={14} />}>Мои сообщения</Menu.Item></Link>
			<Link href="/myPromos" passHref><Menu.Item  icon={<FileText size={14} />}>Мои объявления</Menu.Item></Link>
			<Divider />
			<Link href="#" passHref><Menu.Item color="red" icon={<Logout size={14} />} onClick={deleteLocalStorage}>Выйти из аккаунта</Menu.Item></Link>
		</Menu>
	</>  
	);
}