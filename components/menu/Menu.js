import { useDisclosure } from '@mantine/hooks';
import { Menu, Divider, Button} from '@mantine/core';
import Link from 'next/link'
import { User, Logout, FileText, MessageCircle, UserCircle} from 'tabler-icons-react';

export function MenuUser () {
  const [opened, handlers] = useDisclosure(false);

  return (
    <>
    <Menu opened={opened} onOpen={handlers.open} onClose={handlers.close} control={<div><UserCircle size={35} strokeWidth={1} color={'#002137'} /></div>}>
        <Link href="/profile" passHref><Menu.Item  icon={<User size={14} />}>Личный кабинет</Menu.Item></Link>
        <Link href="#" passHref><Menu.Item  icon={<MessageCircle size={14} />}>Мои сообщения</Menu.Item></Link>
        <Link href="/personalPromos" passHref><Menu.Item  icon={<FileText size={14} />}>Мои объявления</Menu.Item></Link>
        <Divider />
        <Link href="#" passHref><Menu.Item color="red" icon={<Logout size={14} />}>Выйти из аккаунта</Menu.Item></Link>
    </Menu>
</>  
  );
}