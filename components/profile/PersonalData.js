// import { Menu, Divider, UnstyledButton } from '@mantine/core';
// import { Settings, Search, Photo, MessageCircle, Trash, User, Link } from 'tabler-icons-react';
// import { useDisclosure } from '@mantine/hooks'


// export function PersonalData ()  {
//   const [opened, handlers] = useDisclosure(false);

//   return (
// 	<>
// 	<UnstyledButton>
// 		<Menu control={<div><User size={38} strokeWidth={1} color={'black'} /></div>} opened={opened} onOpen={handlers.open} onClose={handlers.close}  size="xl" shadow="xl">
// 			<Menu.Label onClick={() => setOpened(true)}>Application</Menu.Label>
// 			<Menu.Item icon={<Settings size={14}/>}>Настройки</Menu.Item>
// 			<Menu.Item icon={<MessageCircle size={14} />}>Мои сообщения</Menu.Item>
// 			<Menu.Item icon={< Photo size={14} />}>Мои объявления</Menu.Item>
// 			<Menu.Item icon={<Search size={14} />}>Поиск</Menu.Item>
// 			<Divider />
// 			{/* <Menu.Label>Danger zone</Menu.Label> */}
// 			{/* <Menu.Item icon={<ArrowsLeftRight size={14} />}>Transfer my data</Menu.Item> */}
// 			<Menu.Item color="red" icon={<Trash size={14} />}>Удалить аккаунт</Menu.Item>
// 		</Menu>
// 	</UnstyledButton>
// 	</>

//   );
// }

import Profilepicture from '/public/profilepicture.svg'
import Link from 'next/link'
import styles from './PersonalData.module.scss'
import { Group } from '@mantine/core';

export const PersonalData = () => {
	return (<>
	
	<Group >
		<div className={styles.maindiv}>
			<div className={styles.row}>
				<div className={styles.picture}><Profilepicture /></div>
				<div className={styles.data}>
					<p className={styles.username}>Хоменков Алексей Дмитриевич</p>
					<p className={styles.userdata}>aleks.khomenkov.03@mail.ru</p>
					<p className={styles.userdata}>88005553535</p>
				</div>
			</div>
			<div className={styles.button}>
				<Link href="/editprofile" className={styles.a}>Редактировать профиль</Link>
			</div>
		</div>
	</Group>
</>)
}