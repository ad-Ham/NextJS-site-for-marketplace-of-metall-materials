import { useState } from 'react';
import { TextInput, Input, Table, Select, Button } from '@mantine/core';
import { PromosSelect } from './PromosSelect';

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
        <PromosSelect 
        value={name}
        />
		<Input 
        placeholder="введите цену товара" 
        value={price} onChange={event => setPrice(event.target.value)} 
        />
        <Select 
        placeholder="выберите валюту" 
        value={value} 
        onChange={value => setValue(value)} 
        data={[
            { value: 'RUB', label: 'RUB' },
            { value: 'USD', label: 'USD' },
          ]}/>
        <Button style={{ width: 150 }}
        onClick={handleClick} 
        disabled={result.length >= 10} >
            Добавить
        </Button>
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