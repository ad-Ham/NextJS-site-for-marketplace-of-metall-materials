import { MultiSelect } from '@mantine/core';
import { useState, useEffect } from 'react';

export function PromosMultiSelect() {
  const [darkMetallStatus, setDarkMetallStatus] = useState(false)
  const [colorMetallStatus, setColorMetallStatus] = useState(false)
  const [equipmentStatus, setEquipmentStatus] = useState(false)
  const [rawMaterilStatus, setRawMaterialStatus] = useState(false)
  const [data, setData] = useState([]);

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
  const updateValue = e => {
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
  }

  return (<>
    <MultiSelect
      data={categories}
      searchable
      nothingFound="Ничего не найдено"
      clearButtonLabel="Clear selection"
      clearable
      onChange={updateValue}
    />
    {((darkMetallStatus === true) || (colorMetallStatus === true)) && <><MultiSelect
          data={data}
          searchable
          nothingFound="Ничего не найдено"
          clearButtonLabel="Clear selection"
          clearable
        /></>}
    </>
  );
}