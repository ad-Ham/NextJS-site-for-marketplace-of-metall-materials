import Head from 'next/head'
import { PromosMultiSelect } from '../../components/promos/PromosMultiSelect.js'
const axios = require('axios').default;
import { Button, Grid, Card, Title, Table, Space, Group } from '@mantine/core';
import { MultiSelect } from '@mantine/core';
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
    const rows = [...promos].filter(el => el.id).map((element) => {
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
    });

    const [darkMetallStatus, setDarkMetallStatus] = useState(false)
  const [colorMetallStatus, setColorMetallStatus] = useState(false)
  const [equipmentStatus, setEquipmentStatus] = useState(false)
  const [rawMaterilStatus, setRawMaterialStatus] = useState(false)
  const [data, setData] = useState([]);
  const [sections, setSections] = useState([])

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


  const updateSectionsValue = e => {
      if ((e.indexOf('Черные металлы') !== -1) && (darkMetallStatus === false)) {
        setDarkMetallStatus(true)
        setData(data.concat(darkMet))
      }
      else if ((e.indexOf('Цветные металлы') !== -1) && (colorMetallStatus === false)) {
        setColorMetallStatus(true)
        setData(data.concat(colorMet))
      }
      else if ((e.indexOf('Цветные металлы') === -1) && (colorMetallStatus === true)) {
        setColorMetallStatus(false)
        setData(data.filter(n => colorMet.find(met => met.value === n.value) === undefined))
      }
      else if ((e.indexOf('Черные металлы') === -1) && (darkMetallStatus === true)) {
        setDarkMetallStatus(false)
        setData(data.filter(n => darkMet.find(met => met.value === n.value) === undefined))
      }
      
      setSections(e)
  }

  const updateSubsectionsValue = e => {
    console.log(sections)
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
                <Button variant="light">
                  Разместить объявление
                </Button>
            </div>
            <MultiSelect
              data={categories}
              label="Выберите раздел"
              searchable
              nothingFound="Ничего не найдено"
              clearButtonLabel="Clear selection"
              clearable
              onChange={updateSectionsValue}
            />
            {((darkMetallStatus === true) || (colorMetallStatus === true)) && <><MultiSelect
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