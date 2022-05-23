import { Select } from '@mantine/core';
import { useState, useEffect } from 'react';
import { categories, darkMet, colorMet } from './const';

export function PromosSelect() {
  const [darkMetallStatus, setDarkMetallStatus] = useState(false)
  const [colorMetallStatus, setColorMetallStatus] = useState(false)
  const [equipmentStatus, setEquipmentStatus] = useState(false)
  const [rawMaterilStatus, setRawMaterialStatus] = useState(false)
  const [data, setData] = useState([]);

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
    <Select
      placeholder="Выберите товар"
      data={categories}
      searchable
      nothingFound="Ничего не найдено"
      clearButtonLabel="Clear selection"
      clearable
      onChange={updateValue}
    />
    {((darkMetallStatus === true) || (colorMetallStatus === true)) && <>
    <div>
    <Select
          data={data}
          searchable
          nothingFound="Ничего не найдено"
          clearButtonLabel="Clear selection"
          clearable
        />
        </div>
        </>}
    </>
  );
}