import { useState } from 'react';
import { TextInput, Input, Table, Select, Button } from '@mantine/core';
export function PromosAdd() {
    
        const [name, setName] = useState('');
        const [price, setPrice] = useState('');
        const [value, setValue] = useState('');
        const [result, setResult] = useState([]);
        
        
        function handleClick() {
            setResult(prev => [...prev, {name, price, value}])
            setName('')
            setPrice('')
            setValue('')
        }

  return (
      <>
        
        <TextInput styles={{margin:50}} placeholder="выберите товар" value={name} onChange={event => setName(event.target.value)} />
		<Input placeholder="введите цену товара" value={price} onChange={event => setPrice(event.target.value)} />
        <Select 
        placeholder="выберите валюту" 
        value={value} 
        onChange={value => setValue(value)} 
        data={[
            { value: '₽', label: '₽' },
            { value: '$', label: '$' },
          ]}/>
        <Button onClick={handleClick} disabled={result.length >= 10} >Добавить</Button>
         <Table>
            <thead>
            {/* {`${name} ${price} ${value}`}</tr>)} */}
                <tr>
                    <th>Наименование</th>
                    <th>Цена</th>
                    <th>Валюта</th>
                </tr>
            </thead>
            <tbody>{result.map(item => 
            <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.value}</td>
            </tr>)}</tbody>
        </Table>
       
      </>
  )
}