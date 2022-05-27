import { useState, useRef } from 'react';
import { useForm, formList } from '@mantine/form';
import { TextInput, Input, Table, Select, Button, ActionIcon,
    SimpleGrid, Grid, Group, Modal, InputWrapper, Textarea } from '@mantine/core';
import { Plus, Trash } from 'tabler-icons-react';
import { categories, darkMet, colorMet, steelItems, stainlessSteelItems, 
    stainlessSteelStamps, aluminumItems, copperItems, brassItems, bronzeItems, 
    titanItems, steelStamps,aluminumStamps, copperStamps, brassStamps, bronzeStamps, titanStamps} from '../items/itemList'
// import styles from './PromosAdd.module.scss'
import { PromoBlock } from './singlePromos/PromoBlock'
import { armature, circle, profilePipe, ribbon, roundPipe, sheet, square } from '../items/ItemsConstructor'


export function PromosAdd() {
    const [preview, setPreview] = useState(false)
    const [addPromo, setAddPromo] = useState(false)

    const [metalData, setMetalData] = useState([])
    const [itemsData, setItemsData] = useState([])

    const [category, setCategory] = useState('')
    const [metal, setMetal] = useState('')
    const [size, setSize] = useState('')
    const [price, setPrice] = useState('')
    const [currency, setCurrency] = useState('');

    const [item, setItem] = useState('')
    const [stamp, setStamp] = useState('')
    const [sizeData, setSizeData] = useState({})
    const [stamps, setStamps] = useState([])
    const [stampName, setStampName] = useState('')

    const [itemFields, setItemFields] = useState('')
    const [itemImage, setItemImage] = useState('')

    const data = useForm({
        initialValues: {
            'title': '',
            'category': '',
            'items': formList([]),
            'description': ''
        }
    })


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
            setItemFields('')
            setItemImage('')
            setItem('')
            // setStamps([])
            // setStampName('')
            
            setSizeData({})
            setSize('')
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

            else if ((value === 'Нержавейка')) {
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
                    aluminumStamps, 
                    'алюминия'
                )
            }

            else if ((value === 'Медь')) {
                setItemFullData(
                    copperItems, 
                    'Медь', 
                    copperStamps, 
                    'меди'
                )
            } 

            else if ((value === 'Латунь')) {
                setItemFullData(
                    brassItems, 
                    'Латунь', 
                    brassStamps, 
                    'латуни'
                )
            } 

            else if ((value === 'Бронза')) {
                setItemFullData(
                    bronzeItems, 
                    'Бронза', 
                    bronzeStamps, 
                    'бронзы'
                )
            } 

            else if ((value === 'Титан')) {
                setItemFullData(
                    titanItems, 
                    'Титан', 
                    titanStamps, 
                    'титана'
                )
            } 
        }
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
        if (key === 'stamp') setStamp(value)
        else sizeData[key] = value

        setConcatSize()
    }

    const setItemTrue = (func) => {
        const [fields, image] = func(stamps, stampName, callbackInput)
        
        setItemFields(fields)
        setItemImage(image)
    }

    function setConcatSize() {
        const sizeFields = ['diametr', 'width', 'depth', 'height', 'length']
        var values = []

        sizeFields.map(key => {
            if (key in sizeData) {
                if ((key == 'width') && (item === 'Арматура')) values.push(sizeData[key])

                values.push(sizeData[key])
            }
        })

        setSize(values.join(' x '))
    }

    function addItem (callback) {
        console.log(size)

        const items = {
            'category' : category,
            'metal' : metal,
            'stamp': stamp,
            'item': item,
            'size': size,
            'price' : price,
            'currency' : currency
        }

        callback(items)        
    }
    
    const confirmItem = () => {
        addItem(function (items) {
            data.addListItem('items', items)
        })

        setAddPromo(false)
        checkCategory()
    }

    return (
    <>
    <h2>Размещение объявления</h2>
    <SimpleGrid cols={1}>
        <Grid justify="space-between" align='flex-end' columns={5} style={{marginTop: 15}}>
            <Grid.Col span={4}>
                <TextInput
                placeholder="Введите название объявления"
                label="Название объявления"
                radius="sm"
                size="sm"
                required
                {...data.getInputProps('title')}
                />
            </Grid.Col>
            <Grid.Col span={1}>
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
                {...data.getInputProps('category')}
                />
            </Grid.Col>
        </Grid>
            
        <Grid justify="space-between" columns={2} style={{marginTop: 15}}>
            <Grid.Col span={1}>
                <div>
                    <h2>Добавление товаров</h2>
                </div>
            </Grid.Col>
            <Grid.Col span={1}>
                <Group position='right'>
                    <Button 
                    leftIcon={<Plus size={18}/>} 
                    variant='outline' 
                    align="center"
                    size='sm' 
                    disabled={addPromo}
                    onClick={() => setAddPromo(true)}>
                        Добавить товар
                    </Button>
                </Group>
            </Grid.Col>
        </Grid>
        <Grid columns={7} justify="flex-start" align="center">
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
                {itemImage}
                <Button style={{marginTop: 20}}
                    onClick={confirmItem}
                    // disabled={result.length == 0}
                    >
                    Добавить товар в объявление
                </Button>
                </Grid.Col>
            </>}
        </>}
        </Grid>    
        {data.values.items.length > 0 && 
            <Table style={{marginTop: 30}}>
                <thead>
                    <tr>
                        <th>Категория</th>
                        <th>Металл</th>
                        <th>Марка</th>
                        <th>Товар</th>
                        <th>Размеры</th>
                        <th>Цена</th>
                        <th>Валюта</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.values.items.map((itemFields, index) => 
                        <tr key={itemFields.name}>
                            <td>{itemFields.category}</td>
                            <td>{itemFields.metal}</td>
                            <td>{itemFields.stamp}</td>
                            <td>{itemFields.item}</td>
                            <td>{itemFields.size}</td>
                            <td>{itemFields.price}</td>
                            <td>{itemFields.currency}</td>
                            <td>    
                            <ActionIcon
                                color="red"
                                variant="hove"
                                onClick={() => data.removeListItem('items', index)}
                            >
                                <Trash size={16} />
                            </ActionIcon>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        }
        <div style={{marginTop: 20}}>
            <Textarea id="description"
                label='Описание товара или услуги'
                placeholder="Опишите товар"
                required
                cols="100"
                minRows={5}
                {...data.getInputProps('description')} 
            />
        </div>
        <Grid justify="center" align="center" style={{marginTop: 20}}>
            <Grid.Col span={2}>
                <Button type="submit">Разместить объявление</Button>
            </Grid.Col>
            <Grid.Col span={2} style={{paddingLeft: 30}}> 
                <Button 
                type="submit" 
                disabled={(data.values.items.length == 0) || (data.values.title === '') || (data.values.promoCategory === '') || (data.values.description === '')}
                onClick={() => setPreview(true)}>
                    Предпросмотр
                </Button>
                <Modal
                    size="80%"
                    opened={preview}
                    onClose={() => setPreview(false)}
                    title="Предпросмотр объявления"
                >
                <PromoBlock promoData={data.values} previewState={true}/>
                </Modal>
            </Grid.Col>
        </Grid>
    </SimpleGrid>
    </>
  )
}