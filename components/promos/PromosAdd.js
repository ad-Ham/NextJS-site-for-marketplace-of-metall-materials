import { useState, useRef } from 'react';
import { TextInput, Input, Table, Select, Button, SimpleGrid, Grid, Image, Card, InputWrapper, Textarea } from '@mantine/core';
import { Plus } from 'tabler-icons-react';
import { categories, darkMet, colorMet, steelItems, stainlessSteelItems, stainlessSteelStamps, aluminumItems, copperItems, brassItems, bronzeItems, titanItems, steelStamps} from '../items/itemList'
import styles from './PromosAdd.module.scss'
import { armature, circle, profilePipe, ribbon, roundPipe, sheet, square } from '../items/ItemsConstructor'


export function PromosAdd() {
    const [addPromo, setAddPromo] = useState(false)

    const [metalData, setMetalData] = useState([])
    const [itemsData, setItemsData] = useState([])

    const [category, setCategory] = useState('')
    const [metal, setMetal] = useState('')
    const [item, setItem] = useState('')
    const [size, setSize] = useState('')
    const [price, setPrice] = useState('')
    const [value, setValue] = useState('');
    const [result, setResult] = useState([])
    const [stamps, setStamps] = useState([])
    const [stampName, setStampName] = useState([])
    
    const [itemFields, setItemFields] = useState('')
    const [itemImage, setItemImage] = useState('')

    function handleClick() {
        setResult(prev => [...prev, {item, price, value}])
    }

    function setItemFullData(items, metalName, stamps, stampName) {
        setItemsData(items)
        setMetal(metalName)
        setStamps(stamps)
        setStampName(stampName)
    }

    const updateValueMetals = e => {
        if ((!e)) return

        if (e.indexOf('Черные металлы') !== -1) {
            if (category !== '') setCategory('')

            setMetalData(darkMet)
            setCategory('Черные металлы')
        }
        if (e.indexOf('Цветные металлы') !== -1) {
            if (category !== '') setCategory('')

            setMetalData(colorMet)
            setCategory('Цветные металлы')
        }
    }
    
    const updateMetalItems = e => {
        if ((!e)) return

        if (category === 'Черные металлы') {
            if ((e.indexOf('Сталь') !== -1)) {
                if (metal !== '') setMetal('')

                setItemFullData(steelItems, 'Сталь', steelStamps, 'стали')
            }

            if ((e.indexOf('Нержавейка') !== -1)) {
                if (metal !== '') setMetal('')

                setItemFullData(
                    stainlessSteelItems, 
                    'Нержавейка', 
                    stainlessSteelStamps, 
                    'нержавейки'
                )
            } 
        }

        if (category === 'Цветные металлы') {
            if ((e.indexOf('Алюминий') !== -1)) {
                if (metal !== '') setMetal('')
                
                setItemFullData(
                    aluminumItems, 
                    'Алюминий', 
                    stainlessSteelStamps, 
                    'алюминия'
                )
            }

            if ((e.indexOf('Медь') !== -1)) {
                if (metal !== '') setMetal('')
                
                setItemFullData(
                    copperItems, 
                    'Медь', 
                    stainlessSteelStamps, 
                    'меди'
                )
            } 

            if ((e.indexOf('Латунь') !== -1)) {
                if (metal !== '') setMetal('')
                
                setItemFullData(
                    brassItems, 
                    'Латунь', 
                    stainlessSteelStamps, 
                    'латуни'
                )
            } 

            if ((e.indexOf('Бронза') !== -1)) {
                if (metal !== '') setMetal('')
                
                setItemFullData(
                    bronzeItems, 
                    'Бронза', 
                    stainlessSteelStamps, 
                    'бронзы'
                )
            } 

            if ((e.indexOf('Титан') !== -1)) {
                if (metal !== '') setMetal('')
                
                setItemFullData(
                    titanItems, 
                    'Титан', 
                    stainlessSteelStamps, 
                    'титана'
                )
            } 
        }

        //  if ((e.indexOf('Черные металлы') !== -1) && (category === '')) {
        //      setData(darkMet)
        //      setCategory('Черные металлы')
        //  }
        //  else if ((e.indexOf('Цветные металлы') !== -1) && (category === '')) {
        //      setData(colorMet)
        //      setCategory('Цветные металлы')
        //  }
        //  else if ((e.indexOf('Цветные металлы') === -1) && (category !== '')) {
        //      setData(data.filter(n => colorMet.find(met => met.value === n.value) === undefined))
        //      setCategory('')
        //  }
        //  else if ((e.indexOf('Черные металлы') === -1) && (category !== '')) {
        //      setData(data.filter(n => darkMet.find(met => met.value === n.value) === undefined))
        //      setCategory('')
        //  }
    }

    const updateItemItems = e => {
        if ((!e)) return

        // if (category === 'Черные металлы') {
            // if (metal === 'Сталь') {
                console.log(e)

                if (e.indexOf('Арматура') !== -1) {
                    if (item !== '') deleteItem()

                    // setItemsData(steelItems)
                    setItem('Арматура')
                    setItemTrue(armature)
                }

                if ((e.indexOf('Квадрат') !== -1)) {
                    // setItemsData(steelItems)
                    if (item !== '') deleteItem()

                    setItem('Квадрат')
                    setItemTrue(square)
                }

                if ((e.indexOf('Квадрат') !== -1)) {
                    // setItemsData(steelItems)
                    if (item !== '') deleteItem()

                    setItem('Квадрат')
                    setItemTrue(square)
                }

                if (e.indexOf('Круг/Пруток') !== -1) {
                    if (item !== '') deleteItem()

                    // setItemsData(steelItems)
                    setItem('Круг/Пруток')
                    setItemTrue(circle)
                }

                if (e.indexOf('Лента') !== -1) {
                    if (item !== '') deleteItem()

                    // setItemsData(steelItems)
                    setItem('Лента')
                    setItemTrue(ribbon)
                }

                if (e.indexOf('Лист/Плита') !== -1) {
                    if (item !== '') deleteItem()

                    // setItemsData(steelItems)
                    setItem('Лист/Плита')
                    setItemTrue(sheet)
                }

                if (e.indexOf('Труба круглая') !== -1) {
                    if (item !== '') deleteItem()

                    // setItemsData(steelItems)
                    setItem('Труба круглая')
                    setItemTrue(roundPipe)
                }

                if (e.indexOf('Труба профильная') !== -1) {
                    if (item !== '') deleteItem()

                    // setItemsData(steelItems)
                    setItem('Труба профильная')
                    setItemTrue(profilePipe)
                }
            // }
        // }
    }

    const setItemTrue = (func) => {
        const [fields, image] = func(stamps, stampName)

        setItemFields(fields)
        setItemImage(image)
    }

    const deleteItem = () => {
        setItemFields('')
        setItemImage('')
    }

    const setFalse = e => {
        setAddPromo(false)
    }

    return (
    <>
    <h2>Размещение объявления</h2>
    <SimpleGrid cols={1}>
        <Grid justify="space-between" columns={4} style={{marginTop: 15}}>
            <Grid.Col span={3}>
                <TextInput style={{}}
                placeholder="Введите название товара"
                label="Название объявления"
                radius="sm"
                size="sm"
                required
                />
            </Grid.Col>
            <Grid.Col span={1}>
                <div>
                    <Select
                    label='Выберите тип объявления'
                    placeholder="Куплю/Продам"
                    data={[
                        { value: 'Куплю', label: 'Куплю' },
                        { value: 'Продам', label: 'Продам' },
                    ]}
                    radius="sm"
                    size="sm"
                    required
                    />
                </div>
            </Grid.Col>
        </Grid>
            
        <Grid justify="space-between" columns={6} style={{marginTop: 15}}>
            <Grid.Col span={5}>
                <div>
                    <h2>Добавление товаров</h2>
                </div>
            </Grid.Col>
            <Grid.Col span={1}>
                <Button 
                leftIcon={<Plus size={18}/>} 
                variant='outline' 
                align="center"
                size='sm' 
                disabled={addPromo}
                onClick={setAddPromo}>
                    Добавить товар
                </Button>
            </Grid.Col>
        </Grid>

        {/* <SimpleGrid cols={2} style={{marginTop: 15}}>
            <div>
                <h3>Добавление товаров: </h3>
            </div>
            <div>
                <Button leftIcon={<Plus size={18}/>} variant='outline' size='sm' style={{maxWidth: '40%'}}>
                    Добавить товар
                </Button>
            </div>
        </SimpleGrid> */}

        <Grid columns={7} justify="center" align="center">
            {(addPromo) && <>
                <Grid.Col span={5}>
                    <SimpleGrid cols={3} spacing='10px' style={{marginTop: 20}}>
                        <Select
                        label='Выберите категорию товара'
                        data={categories}
                        nothingFound="Ничего не найдено"
                        clearButtonLabel="Clear selection"
                        onChange={updateValueMetals}>
                        </Select>
                        {(category !== '') && <>
                            <Select
                            label='Выберите металл'
                            data={metalData}
                            nothingFound="Ничего не найдено"
                            clearButtonLabel="Clear selection"
                            onChange={updateMetalItems}>
                            </Select>
                        </>}
                        {((category !== '') && (metal !== ''))  && <>
                            <Select
                            label='Выберите наименование товара'
                            data={itemsData}
                            nothingFound="Ничего не найдено"
                            clearButtonLabel="Clear selection"
                            onChange={updateItemItems}>
                            </Select>
                        </>}
                    </SimpleGrid>
                    {((category !== '') && (metal !== '') && (item != '')) && <>
                        <div style={{marginTop: 15}}>
                            {itemFields}
                        </div>
                        <SimpleGrid cols={2} justify="center" align="center" style={{marginTop: 15}}>
                            {/* <InputWrapper
                                required
                                label="Введите диаметр"
                            >
                            <Input
                                placeholder="Введите диаметр" 
                                value={price} 
                                style={{width: '75%'}}
                                onChange={event => setPrice(event.target.value)} 
                                />
                            </InputWrapper>
                            <InputWrapper
                                required
                                label="Введите длину"
                            >
                            <Input
                                placeholder="Введите длину" 
                                value={price} 
                                style={{width: '75%'}}
                                onChange={event => setPrice(event.target.value)} 
                                />
                            </InputWrapper> */}
                            <InputWrapper
                                required
                                label="Введите цену товара"
                            >
                            <Input
                                label="Введите цену товара"
                                placeholder="Введите цену товара" 
                                value={price}
                                style={{width: '75%'}}
                                onChange={value => setPrice(event.target.value)}
                            />
                            </InputWrapper>
                            <InputWrapper
                                required
                                label="Выберите валюту"
                            >
                            <Select
                                placeholder="Выберите валюту" 
                                value={value} 
                                justify='center'
                                style={{width: '75%'}}  
                                onChange={value => setValue(value)} 
                                data={[
                                    { value: 'RUB', label: 'RUB' },
                                    { value: 'USD', label: 'USD' },
                            ]}/>
                            </InputWrapper>
                        </SimpleGrid>
                    </>}
                </Grid.Col>
            {((category !== '') && (metal !== '') && (item != '')) && <>
                <Grid.Col span={2} justify="center" align="center" style={{marginTop: 45}}>
                {/* <Image
                    width='33%'
                    // justify='center'
                    src='/Armature.png'
                /> */}
                {itemImage}
                <Button style={{marginTop: 20}}
                    onClick={setFalse}
                    // disabled={result.length == 0}
                    >
                    Добавить товар в объявление
                </Button>
                </Grid.Col>
            </>}
        </>}
        </Grid>    
        <Table style={{marginTop: 30}}>
            <thead>
            {/* {`${name} ${price} ${value}`}</tr>)} */}
                <tr>
                    <th>Категория</th>
                    <th>Металл</th>
                    <th>Марка</th>
                    <th>Товар</th>
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
        <div style={{marginTop: 20}}>
            <Textarea id="description"
                label='Описание товара или услуги'
                placeholder="Опишите товар"
                required
                cols="100"
                minRows={5}
                onChange={e => setDescription(e.target.value)} />
        </div>
        <Grid justify="center" align="center" style={{marginTop: 20}}>
            <Grid.Col span={2}>
                <Button type="submit">Разместить объявление</Button>
            </Grid.Col>
            <Grid.Col span={2} style={{paddingLeft: '5%'}}> 
                <Button type="submit">Предпросмотр</Button>
            </Grid.Col>
        </Grid>
    </SimpleGrid>
    </>
  )
}