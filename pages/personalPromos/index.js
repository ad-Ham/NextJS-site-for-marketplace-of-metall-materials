import { Table, Image,ActionIcon, Group , Card} from '@mantine/core';
import { Pencil, Trash } from 'tabler-icons-react';


  export default function PersonalPromos () {
    
    const rows =  (
    
      <tr key="name">
        <td><Image radius="sm" height={60}
        width={80}
        src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
        alt="Random unsplash image"/></td>
        <td>Алюминий</td>
        <td>5416</td>
        <td>RUB</td>
        <td>
        <Group spacing={0} >
          <ActionIcon>
            <Pencil size={16} />
          </ActionIcon>
          <ActionIcon color="red">
            <Trash size={16} />
          </ActionIcon>
        </Group>
      </td>
        
      </tr>
    
    );
    return (
    <Card>
        <p align="center" style={{marginBottom: 20, fontSize: 20}}>Мои объявления</p>
      <Table>
        <thead style={{align: 'center'}}>
          <tr>
            <th>Фото</th>
            <th>Наименование</th>
            <th>Цена</th>
            <th>Валюта</th>
            <th>Правка</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
 </Card> 
 );
  }