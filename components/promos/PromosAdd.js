import { useState, useRef } from 'react';
import { TextInput, Input, Table, Select, Button, SimpleGrid, Grid, Image, Card, InputWrapper, Textarea } from '@mantine/core';
import { Plus } from 'tabler-icons-react';
import { categories, darkMet, colorMet, steelItems, stainlessSteelItems, 
    stainlessSteelStamps, aluminumItems, copperItems, brassItems, bronzeItems, 
    titanItems, steelStamps, copperStamps, brassStamps, bronzeStamps, titanStamps} from '../items/itemList'
// import styles from './PromosAdd.module.scss'
import { armature, circle, profilePipe, ribbon, roundPipe, sheet, square } from '../items/ItemsConstructor'


export function PromosAdd() {
    const [addPromo, setAddPromo] = useState(false)
    const [description, setDescription] = useState('')

    const [metalData, setMetalData] = useState([])
    const [itemsData, setItemsData] = useState([])

    const [category, setCategory] = useState('')
    const [metal, setMetal] = useState('')
    const [size, setSize] = useState({})
    const [sizeValues, setSizeValues] = useState([])
    const [price, setPrice] = useState('')
    const [currency, setCurrency] = useState('');
    // const [result, setResult] = useState([])

    const [item, setItem] = useState('')
    const [stamps, setStamps] = useState([])
    const [stampName, setStampName] = useState('')

    const [itemFields, setItemFields] = useState('')
    const [itemImage, setItemImage] = useState('')

    const [data, setData] = useState([])
    // function handleClick() {
    //     setResult(prev => [...prev, {item, price, value}])
    // }

    function setItemFullData(items, metalName, stamps, stampName) {
        setItemsData(items)
        setMetal(metalName)
        setStamps(stamps)
        setStampName(stampName)
    }

    const checkCategory = () => {
        if (category !== '') {
            setCategory('')
            setMetalData([])
            checkMetal()
        }
    }

    const checkMetal = () => {
        if (metal !== '') {
            setMetal('')
            setItemsData([])

            checkItem()
        }
    }

    const checkItem = () => {
        if (item !== '') {
            setItem('')
            setStamps([])
            setStampName('')
            setCallbackFunc(null)

            setSize('')
            setSizeValues([])
            setPrice('')
            setCurrency('')
        }
    }

    const updateValueMetals = (value) => {
        if ((!value)) return

        checkCategory()

        if (value === 'Черные металлы') {
            setMetalData(darkMet)
            setCategory('Черные металлы')
        }
        if (value === 'Цветные металлы') {
            if (category !== '') setCategory('')

            setMetalData(colorMet)
            setCategory('Цветные металлы')
        }
    }
    
    const updateMetalItems = (value) => {
        if ((!value)) return

        checkMetal()

        if (category === 'Черные металлы') {
            if ((value === 'Сталь')) {
                setItemFullData(
                    steelItems, 
                    'Сталь', 
                    steelStamps, 
                    'стали'
                )
            }

            if ((value === 'Нержавейка')) {
                setItemFullData(
                    stainlessSteelItems, 
                    'Нержавейка', 
                    stainlessSteelStamps, 
                    'нержавейки'
                )
            } 
        }

        if (category === 'Цветные металлы') {
            if ((value === 'Алюминий')) {                
                setItemFullData(
                    aluminumItems, 
                    'Алюминий', 
                    stainlessSteelStamps, 
                    'алюминия'
                )
            }

            if ((value === 'Медь')) {
                setItemFullData(
                    copperItems, 
                    'Медь', 
                    copperStamps, 
                    'меди'
                )
            } 

            if ((value === 'Латунь')) {
                setItemFullData(
                    brassItems, 
                    'Латунь', 
                    brassStamps, 
                    'латуни'
                )
            } 

            if ((value === 'Бронза')) {
                setItemFullData(
                    bronzeItems, 
                    'Бронза', 
                    bronzeStamps, 
                    'бронзы'
                )
            } 

            if ((value === 'Титан')) {
                setItemFullData(
                    titanItems, 
                    'Титан', 
                    titanStamps, 
                    'титана'
                )
            } 
        }

        //  if ((value === 'Черные металлы') && (category === '')) {
        //      setData(darkMet)
        //      setCategory('Черные металлы')
        //  }
        //  else if ((value === 'Цветные металлы') && (category === '')) {
        //      setData(colorMet)
        //      setCategory('Цветные металлы')
        //  }
        //  else if ((value === 'Цветные металлы') === -1) && (category !== '')) {
        //      setData(data.filter(n => colorMet.find(met => met.value === n.value) === undefined))
        //      setCategory('')
        //  }
        //  else if ((value === 'Черные металлы') === -1) && (category !== '')) {
        //      setData(data.filter(n => darkMet.find(met => met.value === n.value) === undefined))
        //      setCategory('')
        //  }
    }

    const updateItemItems = (value) => {
        if ((!value)) return

        checkItem()

        if (value === 'Арматура') {
            setItem('Арматура')
            setItemTrue(armature)
        }

        if ((value === 'Квадрат')) {
            setItem('Квадрат')
            setItemTrue(square)
        }

        if ((value === 'Квадрат')) {
            setItem('Квадрат')
            setItemTrue(square)
        }

        if (value === 'Круг/Пруток') {
            setItem('Круг/Пруток')
            setItemTrue(circle)
        }

        if (value === 'Лента') {
            setItem('Лента')
            setItemTrue(ribbon)
        }

        if (value === 'Лист/Плита') {
            setItem('Лист/Плита')
            setItemTrue(sheet)
        }

        if (value === 'Труба круглая') {
            setItem('Труба круглая')
            setItemTrue(roundPipe)
        }

        if (value === 'Труба профильная') {
            setItem('Труба профильная')
            setItemTrue(profilePipe)
        }
    }

    const callbackInput = (key, value) => {
        size[key] = value
    }

    const getInput = () => {
        for (const [key, value] of Object.entries(size)) {
            sizeValues.push(value)
        }
          
        return setSizeValues(sizeValues.join(' x '))
    }

    const setItemTrue = (func) => {
        const [fields, image] = func(stamps, stampName, callbackInput)
        
        setItemFields(fields)
        setItemImage(image)
    }


    const setFalse = e => {
        setAddPromo(false)
    }

    return (
    <>
    <h2>Размещение объявления</h2>
    <SimpleGrid cols={1}>
        <Grid justify="space-between" align='flex-end' columns={4} style={{marginTop: 15}}>
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
            
        <Grid justify="space-between" columns={5} style={{marginTop: 15}}>
            <Grid.Col span={4}>
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
                    <Grid columns={3} align='flex-end' spacing='10px' style={{marginTop: 20}}>
                        <Grid.Col span={1}>
                            <Select
                            label='Выберите категорию товара'
                            value={category}
                            data={categories}
                            nothingFound="Ничего не найдено"
                            clearButtonLabel="Clear selection"
                            onChange={value => updateValueMetals(value)}>
                            </Select>
                        </Grid.Col>
                        {(category !== '') && <>
                            <Grid.Col span={1}>
                                <Select
                                label='Выберите металл'
                                value={metal}
                                data={metalData}
                                nothingFound="Ничего не найдено"
                                clearButtonLabel="Clear selection"
                                onChange={value => updateMetalItems(value)}>
                                </Select>
                            </Grid.Col>
                        </>}
                        {((category !== '') && (metal !== ''))  && <>
                            <Grid.Col span={1}>
                                <Select
                                label='Выберите наименование товара'
                                value={item}
                                data={itemsData}
                                nothingFound="Ничего не найдено"
                                clearButtonLabel="Clear selection"
                                onChange={value => updateItemItems(value)}>
                                </Select>
                            </Grid.Col>
                        </>}
                    </Grid>
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
                                onChange={event => {setPrice(event.target.value)}}
                            />
                            </InputWrapper>
                            <InputWrapper
                                required
                                label="Выберите валюту"
                            >
                            <Select
                                placeholder="Выберите валюту" 
                                value={currency} 
                                justify='center'
                                style={{width: '75%'}}  
                                onChange={value => setCurrency(value)} 
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
                    onClick={getInput}
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
            <tbody>
                <td>{sizeValues}</td>
            </tbody>
            {/* <tbody>{result.map(item => 
            <tr key={item.name}>
                <td>{size}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.value}</td>
            </tr>)}</tbody> */}
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