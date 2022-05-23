import { useState } from 'react';
import { TextInput, Input, Table, Select, Button, Grid, Image, Card } from '@mantine/core';
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
      <Card>
    <Grid style={{marginBottom: 10, marginTop: -30}}>
        <Grid.Col span={12} >
            <PromosSelect 
            value={name}
            />
        </Grid.Col>
    </Grid>
    <Grid style={{marginRight: 40,marginTop: 20, float:'left', display:'block', flexDirection: 'row'}}>
            <Grid.Col justify={"center"}>
                <Image
                    width={260}
                    height={160}
                    src="https://s4.aconvert.com/convert/p3r68-cdx67/ahwg4-isf5x.svg"
                />
            </Grid.Col>
    </Grid>
    <Grid>
            <Grid.Col >
                <Input
                    placeholder="введите диаметр" 
                    value={price} onChange={event => setPrice(event.target.value)} 
                    />
            </Grid.Col  >
            <Grid.Col >
                <Input
                    placeholder="введите длину" 
                    value={price} onChange={event => setPrice(event.target.value)} 
                    />
            </Grid.Col  >
            <Grid.Col>
                <Input
                    placeholder="введите цену товара" 
                    value={price} onChange={event => setPrice(event.target.value)} 
                    />
            </Grid.Col  >
            <Grid.Col >
            <Select 
                placeholder="выберите валюту" 
                value={value} 
                onChange={value => setValue(value)} 
                data={[
                    { value: 'RUB', label: 'RUB' },
                    { value: 'USD', label: 'USD' },
                ]}/>
            </Grid.Col>
            <Grid.Col align={'right'}>
                <Button style={{ width: 150 }}
                        onClick={handleClick} 
                        disabled={result.length >= 10} >
                        Добавить
                </Button>
            </Grid.Col>
    </Grid>
    </Card>
         <Table>
            <thead>
            {/* {`${name} ${price} ${value}`}</tr>)} */}
                <tr>
                    <th>Категория</th>
                    <th>Товар</th>
                    <th>Марка</th>
                    <th>Размеры</th>
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