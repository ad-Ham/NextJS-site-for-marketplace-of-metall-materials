import Head from 'next/head'
import Link from 'next/link'
import { PromosMultiSelect } from '../../components/promos/PromosMultiSelect.js'
const axios = require('axios').default;
import { Button, Grid, Card, Title, Table, Space, Group } from '@mantine/core';
import { Select } from '@mantine/core';
import { useState, useEffect } from 'react';

export async function getServerSideProps(context) {
    const promos = await axios.get('https://api.metalmarket.pro/promosquery', {
        headers: {
            'Accept': 'application/json'
        }
    })
    return {
        props: {
            promos: promos.data.promos.reverse()
        },
    }
}

const Promos = ({ promos }) => {
    const [rows, setRows] = useState([...promos].filter(el => el.id).map((element) => {
        let date = new Date(element.date);
        return (<tr key={element.id}>
            <td>
                {
                    (date.getDate().toString().length === 1 ? '0' + date.getDate().toString() : date.getDate().toString()) + '.' +
                    ((date.getMonth() + 1).toString().length === 1 ? '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString()) + '.' +
                    date.getFullYear()
                }
            </td>
            <td>{element.category}</td>
            <td>{element.title}</td>
            <td>{element.organizationName}</td>
            <td>{element.region}</td>
        </tr>)
    })); 

  const [darkMetallStatus, setDarkMetallStatus] = useState(false)
  const [colorMetallStatus, setColorMetallStatus] = useState(false)
  const [equipmentStatus, setEquipmentStatus] = useState(false)
  const [rawMaterilStatus, setRawMaterialStatus] = useState(false)
  const [servicesStatus, setServicesStatus] = useState(false)
  const [buySellStatus, setBuySellStatus] = useState(false)
  const [data, setData] = useState([]);
  const [sections, setSections] = useState('null')
  const [category, setCategory] = useState('null')
  const [subsections, setSubsections] = useState('null')

  const categories = [
    { value: 'Черные металлы', label: 'Черные металлы' },
    { value: 'Цветные металлы', label: 'Цветные металлы' },
    { value: 'Оборудование', label: 'Оборудование' },
    { value: 'Сырье', label: 'Сырье' },
    { value: 'Транспортные услуги', label: 'Транспортные услуги' },
    { value: 'Прочие услуги', label: 'Прочие услуги' },
  ];

  const darkMet = [
    { value: 'Арматура', label: 'Арматура' },
    { value: 'Балка', label: 'Балка' },
    { value: 'Катанка', label: 'Катанка' },
    { value: 'Квадрат', label: 'Квадрат' },
    { value: 'Круг', label: 'Круг' },
    { value: 'Полоса', label: 'Полоса' },
    { value: 'Рельсы', label: 'Рельсы' },
    { value: 'Уголок', label: 'Уголок' },
    { value: 'Шары стальные', label: 'Шары стальные' },
    { value: 'Швеллер', label: 'Швеллер' },
    { value: 'Шестигранник', label: 'Шестигранник' },
    { value: 'Шпунт', label: 'Шпунт' },
    { value: 'Ларсена', label: 'Ларсена' },
    { value: 'Жесть', label: 'Жесть' },
    { value: 'Лист', label: 'Лист' },
    { value: 'Профнастил', label: 'Профнастил' },
    { value: 'Труба бесшовная', label: 'Труба бесшовная' },
    { value: 'Труба вентури', label: 'Труба вентури' },
    { value: 'Труба водогазопроводная', label: 'Труба водогазопроводная' },
    { value: 'Болты', label: 'Болты' },
    { value: 'Винты', label: 'Винты' },
    { value: 'Гвозди', label: 'Гвозди' },
    { value: 'Заклепки', label: 'Заклепки' },
    { value: 'Канаты', label: 'Канаты' },
    { value: 'Лента', label: 'Лента' },
    { value: 'Проволока', label: 'Проволока' },
    { value: 'Саморезы', label: 'Саморезы' },
    { value: 'Сетка', label: 'Сетка' },
    { value: 'Шайбы', label: 'Шайбы' },
    { value: 'Шурупы', label: 'Шурупы' },
    { value: 'Электроды', label: 'Электроды' },
    { value: 'Крепеж', label: 'Крепеж' },
    { value: 'Прочие черные металлы', label: 'Прочие черные металлы' },
  ];

  const colorMet = [
    { value: 'Алюминий', label: 'Алюминий' },
    { value: 'Бронза', label: 'Бронза' },
    { value: 'Латунь', label: 'Латунь' },
    { value: 'Медь', label: 'Медь' },
    { value: 'Никель', label: 'Никель' },
    { value: 'Олово', label: 'Олово' },
    { value: 'Свинец', label: 'Свинец' },
    { value: 'Титан', label: 'Титан' },
    { value: 'Цинк', label: 'Цинк' },
    { value: 'Прочие цветные металлы', label: 'Прочие цветные металлы' },
  ];

  function updateSectionRows(sections, subsections, category) {
        axios.get('https://api.metalmarket.pro/getNewRows', {params: {sections: sections, subsections: subsections, category: category}})
        .then(function(response) {
            promos = response.data.promos
            setRows([...promos].filter(el => el.id).map((element) => {
        let date = new Date(element.date);
        return (<tr key={element.id}>
            <td>
                {
                    (date.getDate().toString().length === 1 ? '0' + date.getDate().toString() : date.getDate().toString()) + '.' +
                    ((date.getMonth() + 1).toString().length === 1 ? '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString()) + '.' +
                    date.getFullYear()
                }
            </td>
            <td>{element.category}</td>
            <td>{element.title}</td>
            <td>{element.organizationName}</td>
            <td>{element.region}</td>
        </tr>)
    }));
        })
        .catch(function (error) {
            console.log(error);
        })
  }

  const updateSectionsValue = e => {
        setDarkMetallStatus
        setData(darkMet)

        setColorMetallStatus
        setData(colorMet)

        setBuySellStatus

        setServicesStatus

      if (e === 'Черные металлы') {
        setData(darkMet)
        setDarkMetallStatus(true)
        setColorMetallStatus(false)
        setBuySellStatus(true)
        setServicesStatus(false)
      }
      else if (e === 'Цветные металлы') {
        setData(colorMet)
        setDarkMetallStatus(false)
        setColorMetallStatus(true)
        setBuySellStatus(true)
        setServicesStatus(false)
      }
      else if ((e === 'Оборудование')||(e === 'Сырье')) {
        setDarkMetallStatus(false)
        setColorMetallStatus(false)
        setBuySellStatus(true)
        setServicesStatus(false)
      }
      else if ((e === 'Транспортные услуги')||(e === 'Прочие')) {
        setDarkMetallStatus(false)
        setColorMetallStatus(false)
        setBuySellStatus(false)
        setServicesStatus(true)
      }
      else if (e === null) {
        setDarkMetallStatus(false)
        setColorMetallStatus(false)
        setBuySellStatus(false)
        setServicesStatus(false)
      }



      if (e !== null) {
          setSections(e)
          setSubsections('null')
          setCategory('null')
          updateSectionRows(e, 'null', 'null')
      }
      else {
          setSections('null')
          setSubsections('null')
          setCategory('null')
          updateSectionRows('null', 'null', 'null')
      }
  }

  const updateServiceCategory = e => {
    console.log('CHECK' + e)
    if (e !== null) {
        setCategory(e)
        updateSectionRows(sections, subsections, e)
    } else {
        setCategory('null')
        updateSectionRows(sections, subsections, 'null')
    }
  }

  const updateSubsectionsValue = e => {
    if (e !== null) {
        setSubsections(e)
        updateSectionRows(sections, e, category)
    } else {
        setSubsections('null')
        updateSectionRows(sections, 'null', category)
    }
  }

    return (
        <>
            <Head>
                <title>Объявления</title>
                <meta name="keywords" content="next, javascript" />
                <meta name="description" content="this is" />
                <meta charSet="utf-8" />
            </Head>
            <div className='headerDiv'>
                <h1>Доска объявлений</h1>
                <Link href="/promos/{pid}" passHref>
                  <Button variant="light">
                    Разместить объявление
                  </Button>
                </Link>                                                            
            </div>
            <Select
              id='mainSections'
              data={categories}
              label="Выберите раздел"
              placeholder="--Разделы--"
              searchable
              nothingFound="Ничего не найдено"
              clearButtonLabel="Clear selection"
              clearable
              onChange={updateSectionsValue}
            />

            {(buySellStatus === true) && <><Select
              data={[{value: 'Продам', label: 'Продам'}, {value: 'Куплю', label: 'Куплю'}]}
              label="Выберите категорию"
              placeholder="--Продам/Куплю--"
              nothingFound="Ничего не найдено"
              clearButtonLabel="Clear selection"
              clearable
              onChange={updateServiceCategory}
            /></>}

            {(servicesStatus === true) && <><Select
                  data={[{value: 'Предложение', label: 'Предложение'}, {value: 'Поиск', label: 'Поиск'}]}
                  label="Выберите категорию"
                  placeholder="--предложение/поиск--"
                  nothingFound="Ничего не найдено"
                  clearButtonLabel="Clear selection"
                  clearable
                  onChange={updateServiceCategory}
                /></>}

            {((darkMetallStatus === true) || (colorMetallStatus === true)) && <><Select
                  data={data}
                  label="Выберите подраздел"
                  searchable
                  nothingFound="Ничего не найдено"
                  clearButtonLabel="Clear selection"
                  clearable
                  onChange={updateSubsectionsValue}
                /></>}
            <Table striped highlightOnHover>
                <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Категория</th>
                        <th>Название объявления</th>
                        <th>Организация</th>
                        <th>Регион</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
            <style jsx>{`
                .headerDiv {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between
                }
            `}</style>
        </>
    )
}

export default Promos;