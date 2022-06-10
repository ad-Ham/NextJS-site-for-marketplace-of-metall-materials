import { Input, Select, SimpleGrid, Image, InputWrapper, MediaQuery } from '@mantine/core';
// import { useState, useRef } from 'react';


export function armature(metalData, stampName, CallbackInput) {
    const diametrData = [
        { value : 6, label : "6" },
        { value : 8, label : "8" },
        { value : 10, label : "10" },
        { value : 12, label : "12" },
        { value : 14, label : "14" },
        { value : 16, label : "16" },
        { value : 18, label : "18" },
        { value : 20, label : "20" },
        { value : 22, label : "22" },
        { value : 25, label : "25" },
        { value : 28, label : "28" },
        { value : 32, label : "32" },
        { value : 36, label : "36" }
    ]

    return ([<>
      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <SimpleGrid cols={2} justify="center" align="left">                        
            <InputWrapper
                required
                label="Диаметр арматуры"
            >
            <Select
                placeholder="Выберите диаметр " 
                data={diametrData} 
                style={{width: '75%' }}
                onChange={value => CallbackInput('Диаметр', `${value}`)} 
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Длина арматуры"
            >
            <Input
                placeholder="Введите длину" 
                style={{width: '75%' }}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>
        </MediaQuery> 
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <SimpleGrid cols={2} justify="center" align="left">                        
            <InputWrapper
                required
                label="Диаметр"
            >
            <Select
                placeholder="Выберите диаметр" 
                data={diametrData} 
                style={{width: '100%' }}
                onChange={value => CallbackInput('Диаметр', `${value}`)} 
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Длинa"
            >
            <Input
                placeholder="Введите длину" 
                style={{width: '100%' }}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>
        </MediaQuery>
    </>,
    <Image
        width='35%'
        // justify='center'
        src='/items/Armature.png'
    />
    ]
    )
}


export function beam (metalData, stampName, CallbackInput) {
    const beamsType = [
        { value: 'ГОСТ 8239-89', label: 'ГОСТ 8239-89' },
        { value: 'Нормальный двутавр (Б)', label: 'Нормальный двутавр (Б)' },
        { value: 'Широкополочный двутавр (Ш)', label: 'Широкополочный двутавр (Ш)' },
        { value: 'Колонный двутавр (К)', label: 'Колонный двутавр (К)' },
        { value: 'Двутавр дополнительной серии (Д)', label: 'Двутавр дополнительной серии (Д)' },
        { value: 'Сварной двутавр (С)', label: 'Сварной двутавр (С)' }
    ]

    const gostBeam = [
        { value: 10, label: 10 },
        { value: 12, label: 12 },
        { value: 14, label: 14 },
        { value: 16, label: 16 },
        { value: 18, label: 18 },
        { value: 20, label: 20 },
        { value: 22, label: 22 },
        { value: 24, label: 24 },
        { value: 27, label: 27 },
        { value: 30, label: 30 },
        { value: 33, label: 33 },
        { value: 36, label: 36 },
        { value: 40, label: 40 },
        { value: 45, label: 45 },
        { value: 50, label: 50 },
        { value: 55, label: 55 },
        { value: 60, label: 60 },
    ]

    const normalBeam = [
        { value : '10Б1', label : '10Б1' },
        { value : '12Б1', label : '12Б1' },
        { value : '12Б2', label : '12Б2' },
        { value : '14Б1', label : '14Б1' },
        { value : '14Б2', label : '14Б2' },
        { value : '16Б1', label : '16Б1' },
        { value : '16Б2', label : '16Б2' },
        { value : '18Б1', label : '18Б1' },
        { value : '18Б2', label : '18Б2' },
        { value : '20Б1', label : '20Б1' },
        { value : '23Б1', label : '23Б1' },
        { value : '26Б1', label : '26Б1' },
        { value : '26Б2', label : '26Б2' },
        { value : '30Б1', label : '30Б1' },
        { value : '30Б2', label : '30Б2' },
        { value : '35Б1', label : '35Б1' },
        { value : '35Б2', label : '35Б2' },
        { value : '40Б1', label : '40Б1' },
        { value : '40Б2', label : '40Б2' },
        { value : '45Б1', label : '45Б1' },
        { value : '45Б2', label : '45Б2' },
        { value : '50Б1', label : '50Б1' },
        { value : '50Б2', label : '50Б2' },
        { value : '55Б1', label : '55Б1' },
        { value : '55Б2', label : '55Б2' },
        { value : '60Б1', label : '60Б1' },
        { value : '60Б2', label : '60Б2' },
        { value : '70Б1', label : '70Б1' },
        { value : '70Б2', label : '70Б2' },
        { value : '80Б1', label : '80Б1' },
        { value : '80Б2', label : '80Б2' },
        { value : '90Б1', label : '90Б1' },
        { value : '90Б2', label : '90Б2' },
        { value : '100Б1', label : '100Б1' },
        { value : '100Б2', label : '100Б2' },
        { value : '100Б3', label : '100Б3' },
        { value : '100Б4', label : '100Б4' }
    ]

    const widthBeam = [
        { value : '20Ш1', label : '20Ш1' },
        { value : '23Ш1', label : '23Ш1' },
        { value : '26Ш1', label : '26Ш1' },
        { value : '26Ш2', label : '26Ш2' },
        { value : '30Ш1', label : '30Ш1' },
        { value : '30Ш2', label : '30Ш2' },
        { value : '30Ш3', label : '30Ш3' },
        { value : '35O1', label : '35O1' },
        { value : '35Ш2', label : '35Ш2' },
        { value : '35Ш3', label : '35Ш3' },
        { value : '40Ш1', label : '40Ш1' },
        { value : '40Ш2', label : '40Ш2' },
        { value : '40Ш3', label : '40Ш3' },
        { value : '50Ш1', label : '50Ш1' },
        { value : '50Ш2', label : '50Ш2' },
        { value : '50Ш3', label : '50Ш3' },
        { value : '50Ш4', label : '50Ш4' },
        { value : '60Ш1', label : '60Ш1' },
        { value : '60Ш2', label : '60Ш2' },
        { value : '60ШЗ', label : '60ШЗ' },
        { value : '60Д1', label : '60Д1' },
        { value : '70Ш1', label : '70Ш1' },
        { value : '70Ш2', label : '70Ш2' },
        { value : '70ШЗ', label : '70ШЗ' },
        { value : '70Ш4', label : '70Ш4' },
        { value : '70Ш5', label : '70Ш5' }
    ]

    const columnBeam = [
        { value : '20K1', label : '20K1' },
        { value : '20K2', label : '20K2' },
        { value : '23K1', label : '23K1' },
        { value : '23K2', label : '23K2' },
        { value : '26K1', label : '26K1' },
        { value : '26K2', label : '26K2' },
        { value : '26K3', label : '26K3' },
        { value : '30K1', label : '30K1' },
        { value : '30K2', label : '30K2' },
        { value : '30К3', label : '30К3' },
        { value : '35К1', label : '35К1' },
        { value : '35К2', label : '35К2' },
        { value : '35K3', label : '35K3' },
        { value : '40К1', label : '40К1' },
        { value : '40К2', label : '40К2' },
        { value : '40K3', label : '40K3' },
        { value : '40К4', label : '40К4' },
        { value : '40К5', label : '40К5' }
    ]

    const additionalBeam = [
        { value : '24ДБ1', label : '24ДБ1' },
        { value : '27ДБ', label : '27ДБ' },
        { value : '36ДБ', label : '36ДБ' },
        { value : '35ДБ', label : '35ДБ' },
        { value : '40ДБ', label : '40ДБ' },
        { value : '45ДБ', label : '45ДБ' },
        { value : '45ДБ', label : '45ДБ' },
        { value : '30ДШ', label : '30ДШ' },
        { value : '40ДШ', label : '40ДШ' },
        { value : '50ДШ', label : '50ДШ' }
    ]

    const weldedBeam = [
        { value : '45БС1', label : '45БС1' },
        { value : '45БС2', label : '45БС2' },
        { value : '45БС3', label : '45БС3' },
        { value : '50БС1', label : '50БС1' },
        { value : '50БС2', label : '50БС2' },
        { value : '50БС3', label : '50БС3' },
        { value : '50БС4', label : '50БС4' },
        { value : '55БС1', label : '55БС1' },
        { value : '55БС2', label : '55БС2' },
        { value : '60БС1', label : '60БС1' },
        { value : '60БС2', label : '60БС2' },
        { value : '60БС3', label : '60БС3' },
        { value : '60БС4', label : '60БС4' },
        { value : '60БС5', label : '60БС5' },
        { value : '60БС6', label : '60БС6' },
        { value : '70БС1', label : '70БС1' },
        { value : '70БС2', label : '70БС2' },
        { value : '70БС3', label : '70БС3' },
        { value : '70БС4', label : '70БС4' },
        { value : '70БС5', label : '70БС5' },
        { value : '70БС6', label : '70БС6' },
        { value : '80БС1', label : '80БС1' },
        { value : '80БС2', label : '80БС2' },
        { value : '90БС1', label : '90БС1' },
        { value : '90БС2', label : '90БС2' },
        { value : '100БС1', label : '100БС1' },
        { value : '100БС2', label : '100БС2' },
        { value : '100БС3', label : '100БС3' },
        { value : '120БС1', label : '120БС1' },
        { value : '120БС2', label : '120БС2' },
        { value : '140БС1', label : '140БС1' },
        { value : '140БС2', label : '140БС2' },
        { value : '140БС3', label : '140БС3' },
        { value : '160БС1', label : '160БС1' },
        { value : '160БС2', label : '160БС2' },
        { value : '160БС3', label : '160БС3' },
        { value : '160БС4', label : '160БС4' },
        { value : '180БС1', label : '180БС1' },
        { value : '180БС2', label : '180БС2' },
        { value : '180БС3', label : '180БС3' },
        { value : '180БС4', label : '180БС4' },
        { value : '200БС1', label : '200БС1' },
        { value : '200БС2', label : '200БС2' },
        { value : '200БС3', label : '200БС3' }
    ]
    
    var numberData = gostBeam

    const setBeamNumberData = (value) => {
        if (numberData !== []) numberData = []

        if (value === 'ГОСТ 8239-89') numberData = gostBeam
        if (value === 'Нормальный двутавр (Б)') numberData = normalBeam
        if (value === 'Широкополочный двутавр (Ш)') numberData = widthBeam
        if (value === 'Колонный двутавр (К)') numberData = columnBeam
        if (value === 'Двутавр дополнительной серии (Д)') numberData = additionalBeam
        if (value === 'Сварной двутавр (С)') numberData = weldedBeam

        CallbackInput('Тип балки', `${value}`)
    }

    return ([<>
       <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
           <SimpleGrid cols={3} justify="center" align="left">     
            <InputWrapper
                required
                label={`Тип балки `}
            >
            <Select
                placeholder='Выберите тип балки'
                data={beamsType}
                // style={{width: '75%' }}
                onChange={value => setBeamNumberData(value)} 
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Номер балки"
            >
            <Select
                placeholder="Выберите номер балки"
                data={numberData}
                // value={price} 
                // style={{width: '75%' }}
                onChange={value => CallbackInput('Номер балки', `${value}`)}   
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Длина балки"
            >
            <Input
                placeholder="Введите длину" 
                // value={price} 
                // style={{width: '75%' }}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>
        </MediaQuery> 
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
           <>
           <SimpleGrid cols={1} justify="center" align="left">     
            <InputWrapper
                required
                label={`Тип `}
            >
            <Select
                placeholder='Выберите тип балки'
                data={beamsType}
                // style={{width: '75%' }}
                onChange={value => setBeamNumberData(value)} 
                />
            </InputWrapper>
            </SimpleGrid>
            <SimpleGrid cols={2} justify="center" align="left"> 
            <InputWrapper
                required
                label="Номер"
            >
            <Select
                placeholder="Выберите номер балки"
                data={numberData}
                // value={price} 
                // style={{width: '75%' }}
                onChange={value => CallbackInput('Номер балки', `${value}`)}   
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Длина"
            >
            <Input
                placeholder="Введите длину" 
                // value={price} 
                // style={{width: '75%' }}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>
        </>
        </MediaQuery> 
    </>,
    <>
        <Image
            width='35%'
            // justify='center'
            src='/items/Balk.png'
        />
    </>
    ])
}


export function square (metalData, stampName, CallbackInput) {
    return ([<>
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <SimpleGrid cols={3} justify="center" align="left">     
            <InputWrapper
                required
                label={`Выберите марку ${stampName}`}
            >
            <Select
                placeholder={`Выберите марку ${stampName}`}
                data={metalData}
                // style={{width: '75%' }}
                onChange={value => CallbackInput('stamp', `${value}`)} 
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Введите сторону квадрата"
            >
            <Input
                placeholder="Введите сторону квадрата"
                // value={price} 
                // style={{width: '75%' }}
                onChange={event => CallbackInput('Сторона', `${event.target.value} мм.`)}
                rightSection="мм."
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Введите длину"
            >
            <Input
                placeholder="Введите длину" 
                // value={price} 
                // style={{width: '75%' }}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>
        </MediaQuery>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <>
            <SimpleGrid cols={1} justify="center" align="left">     
            <InputWrapper
                required
                label={`Марка ${stampName}`}
            >
            <Select
                placeholder={`Выберите марку ${stampName}`}
                data={metalData}
                // style={{width: '75%' }}
                onChange={value => CallbackInput('stamp', `${value}`)} 
                />
            </InputWrapper>
            </SimpleGrid>
            <SimpleGrid cols={2} justify="center" align="left">
            <InputWrapper
                required
                label="Сторона"
            >
            <Input
                placeholder="Введите сторону квадрата"
                // value={price} 
                // style={{width: '75%' }}
                onChange={event => CallbackInput('Сторона', `${event.target.value} мм.`)}
                rightSection="мм."
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Длина"
            >
            <Input
                placeholder="Введите длину" 
                // value={price} 
                // style={{width: '75%' }}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>
        </>
        </MediaQuery>
    </>,
    <>
        <Image
            width='35%'
            // justify='center'
            src='/items/Square.png'
        />
    </>
    ])
}


export function circle (metalData, stampName, CallbackInput) {
    return ([<>
       <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
           <SimpleGrid cols={3} justify="center" align="left">     
            <InputWrapper
                required
                label={`Марка ${stampName}`}
            >
            <Select
                placeholder={`Выберите марку ${stampName}`}
                data={metalData}
                // style={{width: '75%' }}
                onChange={value => CallbackInput('stamp', `${value}`)} 
                />
            </InputWrapper> 
            <InputWrapper
                required
                label="Введите диаметр круга"
            >
            <Input
                placeholder="Введите диаметр круга"
                // value={price} 
                // style={{width: '75%' }}
                onChange={event => CallbackInput('Диаметр', `${event.target.value} мм.`)}
                rightSection="мм."
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Введите длину"
            >
            <Input
                placeholder="Введите длину" 
                // value={price} 
                // style={{width: '75%' }}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>
    </MediaQuery>
    <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <>
           <SimpleGrid cols={1} justify="center" align="left">     
            <InputWrapper
                required
                label={`Марка ${stampName}`}
            >
            <Select
                placeholder={`Выберите марку ${stampName}`}
                data={metalData}
                // style={{width: '75%' }}
                onChange={value => CallbackInput('stamp', `${value}`)} 
                />
            </InputWrapper> 
            </SimpleGrid>
            <SimpleGrid cols={2} justify="center" align="left">
            <InputWrapper
                required
                label="Диаметр"
            >
            <Input
                placeholder="Введите диаметр круга"
                // value={price} 
                // style={{width: '75%' }}
                onChange={event => CallbackInput('Диаметр', `${event.target.value} мм.`)}
                rightSection="мм."
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Длина"
            >
            <Input
                placeholder="Введите длину" 
                // value={price} 
                // style={{width: '75%' }}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>
        </>
    </MediaQuery>

    </>,
    <>
        <Image
            width='35%'
            // justify='center'
            src='/items/Circle.png'
        />
    </>
    ])
}


export function ribbon (metalData, stampName, CallbackInput) {
    return ([<>
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <SimpleGrid cols={2} justify="center" align="left">     
            <InputWrapper
                required
                label={`Выберите марку ${stampName}`}
            >
            <Select
                placeholder={`Выберите марку ${stampName}`}
                data={metalData}
                style={{width: '75%' }}
                onChange={value => CallbackInput('stamp', `${value}`)} 
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Введите ширину ленты"
            >
            <Input
                placeholder="Введите ширину ленты"
                // value={price} 
                style={{width: '75%' }}
                onChange={event => CallbackInput('Ширина', `${event.target.value} мм.`)}
                rightSection="мм."
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Введите толщину ленты"
            >
            <Input
                placeholder="Введите толщину ленты"
                // value={price} 
                style={{width: '75%' }}
                onChange={event => CallbackInput('Толщина', `${event.target.value} мм.`)}
                rightSection="мм."
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Введите длину"
            >
            <Input
                placeholder="Введите длину" 
                // value={price} 
                style={{width: '75%' }}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>
        </MediaQuery>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <SimpleGrid cols={2} justify="center" align="left">     
            <InputWrapper
                required
                label={`Mаркa ${stampName}`}
            >
            <Select
                placeholder={`Выберите марку ${stampName}`}
                data={metalData}
                style={{width: '100%' }}
                onChange={value => CallbackInput('stamp', `${value}`)} 
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Ширина"
            >
            <Input
                placeholder="Введите ширину ленты"
                // value={price} 
                style={{width: '100%' }}
                onChange={event => CallbackInput('Ширина', `${event.target.value} мм.`)}
                rightSection="мм."
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Толщина"
            >
            <Input
                placeholder="Введите толщину ленты"
                // value={price} 
                style={{width: '100%' }}
                onChange={event => CallbackInput('Толщина', `${event.target.value} мм.`)}
                rightSection="мм."
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Длина"
            >
            <Input
                placeholder="Введите длину" 
                // value={price} 
                style={{width: '100%' }}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>
        </MediaQuery> 
    </>,
    <>
        <Image 
            width='60%'
            // justify='center'
            // align='center'
            src='/items/Ribbon.png'
        />
    </>
    ])
}


export function sheet (metalData, stampName, CallbackInput) {
    return ([<>
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>       
        <SimpleGrid cols={2} justify="center" align="left">     
            <InputWrapper
                required
                label={`Выберите марку ${stampName}`}
            >
            <Select
                placeholder={`Выберите марку ${stampName}`}
                data={metalData}
                style={{width: '75%' }}
                onChange={value => CallbackInput('stamp', `${value}`)} 
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Введите ширину листа"
            >
            <Input
                placeholder="Введите ширину листа"
                // value={price} 
                style={{width: '75%' }}
                onChange={event => CallbackInput('Ширина', `${event.target.value} м.`)}
                rightSection="мм."
                />
            </InputWrapper>
        </SimpleGrid>
        </MediaQuery>
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <SimpleGrid cols={3} justify="center" align="left" style={{marginTop: 15}}>
            <InputWrapper
                required
                label="Введите длину листа"
            >
            <Input
                placeholder="Введите длину листа"
                // value={price} 
                // style={{width: '75%' }}
                onChange={event => CallbackInput('Длина листа', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Введите толщину ленты"
            >
            <Input
                placeholder="Введите толщину ленты"
                // value={price} 
                // style={{width: '75%' }}
                onChange={event => CallbackInput('Толщина', `${event.target.value} мм.`)}
                rightSection="мм."
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Введите длину"
            >
            <Input
                placeholder="Введите длину" 
                // value={price} 
                // style={{width: '75%' }}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>              
    </MediaQuery>
    <MediaQuery largerThan="sm" styles={{ display: 'none' }}>      
        <SimpleGrid cols={1} justify="center" align="left">     
            <InputWrapper
                required
                label={`Марка ${stampName}`}
            >
            <Select
                placeholder={`Выберите марку ${stampName}`}
                data={metalData}
                style={{width: '100%' }}
                onChange={value => CallbackInput('stamp', `${value}`)} 
                />
            </InputWrapper>
            </SimpleGrid>
        </MediaQuery>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}> 
            <SimpleGrid cols={2} justify="center" align="left">
            <InputWrapper
                required
                label="Ширина листа"
            >
            <Input
                placeholder="Введите ширину листа"
                // value={price} 
                style={{width: '100%' }}
                onChange={event => CallbackInput('Ширина', `${event.target.value} м.`)}
                rightSection="мм."
                />
            </InputWrapper>       
            <InputWrapper
                required
                label="Длина листа" 
            >
            <Input
                placeholder="Введите длину листа"
                // value={price} 
                style={{width: '100%' }}
                onChange={event => CallbackInput('Длина листа', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Толщина ленты"
            >
            <Input
                placeholder="Введите толщину ленты"
                // value={price} 
                style={{width: '100%' }}
                onChange={event => CallbackInput('Толщина', `${event.target.value} мм.`)}
                rightSection="мм."
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Длина ленты"
            >
            <Input
                placeholder="Введите длину" 
                // value={price} 
                style={{width: '100%' }}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>              
    </MediaQuery>
    </>,
    <>
        <Image
            width='30%'
            // justify='center'
            src='/items/Sheet.png'
        />
    </>
    ])
}


export function tap (metalData, stampName, CallbackInput) {
    const executionData = [
        { value : 'Исполнение 1', label : 'Исполнение 1' },
        { value : 'Исполнение 2', label : 'Исполнение 2' },
    ]

    const firstExecution = [
        { value : '1.3х2', label : '1.3х2' },
        { value : '1.3х3.2', label : '1.3х3.2' },
        { value : '1.35х4', label : '1.35х4' },
        { value : '6.9х2', label : '6.9х2' },
        { value : '6.9х3.2', label : '6.9х3.2' },
        { value : '6.9х4', label : '6.9х4' },
        { value : '3.7х2.3', label : '3.7х2.3' },
        { value : '3.7х2.3', label : '3.7х2.3' },
        { value : '3.7х2.3', label : '3.7х2.3' },
        { value : '42.4х2.6', label : '42.4х2.6' },
        { value : '42.4х3.6', label : '42.4х3.6' },
        { value : '42.4х5', label : '42.4х5' },
        { value : '48.3х2.6', label : '48.3х2.6' },
        { value : '48.3х3.6', label : '48.3х3.6' },
        { value : '48.3х5', label : '48.3х5' },
        { value : '60.3х2.9', label : '60.3х2.9' },
        { value : '60.3х4', label : '60.3х4' },
        { value : '60.3х5.6', label : '60.3х5.6' },
        { value : '76х2.9', label : '76х2.9' },
        { value : '76х5', label : '76х5' },
        { value : '76х7.1', label : '76х7.1' },
        { value : '89х3.2', label : '89х3.2' },
        { value : '89х5.6', label : '89х5.6' },
        { value : '89х8', label : '89х8' },
        { value : '114х3.6', label : '114х3.6' },
        { value : '114х6.3', label : '114х6.3' },
        { value : '114х8.8', label : '114х8.8' },
        { value : '139х4', label : '139х4' },
        { value : '139х6.3', label : '139х6.3' },
        { value : '139х10', label : '139х10' },
        { value : '168х4.5', label : '168х4.5' },
        { value : '168х7.1', label : '168х7.1' },
        { value : '168х11', label : '168х11' },
        { value : '219х6.3', label : '219х6.3' },
        { value : '219х8', label : '219х8' },
        { value : '219х12.5', label : '219х12.5' },
        { value : '273х6.3', label : '273х6.3' },
        { value : '273х10', label : '273х10' },
        { value : '323х7.1', label : '323х7.1' },
        { value : '323х10', label : '323х10' },
        { value : '355х8', label : '355х8' },
        { value : '355х11', label : '355х11' },
    ]

    const secondExecution = [
        { value : '32х2', label : '32х2' },
        { value : '32х2.5', label : '32х2.5' },
        { value : '32х3', label : '32х3' },
        { value : '32х3.5', label : '32х3.5' },
        { value : '38х2', label : '38х2' },
        { value : '38х2.5', label : '38х2.5' },
        { value : '38х3', label : '38х3' },
        { value : '38х3.5', label : '38х3.5' },
        { value : '38х4', label : '38х4' },
        { value : '45х2.5', label : '45х2.5' },
        { value : '45х3', label : '45х3' },
        { value : '45х3.5', label : '45х3.5' },
        { value : '45х4', label : '45х4' },
        { value : '45х5', label : '45х5' },
        { value : '57х2.5', label : '57х2.5' },
        { value : '57х3', label : '57х3' },
        { value : '57х3.5', label : '57х3.5' },
        { value : '57х4', label : '57х4' },
        { value : '57х4.5', label : '57х4.5' },
        { value : '57х5', label : '57х5' },
        { value : '57х5.5', label : '57х5.5' },
        { value : '57х6', label : '57х6' },
        { value : '76х3', label : '76х3' },
        { value : '76х3.5', label : '76х3.5' },
        { value : '76х4', label : '76х4' },
        { value : '76х4.5', label : '76х4.5' },
        { value : '76х5', label : '76х5' },
        { value : '76х5.53', label : '76х5.53' },
        { value : '76х6', label : '76х6' },
        { value : '76х7', label : '76х7' },
        { value : '76х8', label : '76х8' },
        { value : '89х3', label : '89х3' },
        { value : '89х3.5', label : '89х3.5' },
        { value : '89х4', label : '89х4' },
        { value : '89х4.5', label : '89х4.5' },
        { value : '89х5', label : '89х5' },
        { value : '89х5.5', label : '89х5.5' },
        { value : '89х6', label : '89х6' },
        { value : '89х7', label : '89х7' },
        { value : '89х8', label : '89х8' },
        { value : '102х3.5', label : '102х3.5' },
        { value : '102х4', label : '102х4' },
        { value : '102х4.5', label : '102х4.5' },
        { value : '102х5', label : '102х5' },
        { value : '102х6', label : '102х6' },
        { value : '102х7', label : '102х7' },
        { value : '102х8', label : '102х8' },
        { value : '102х9', label : '102х9' },
        { value : '102х10', label : '102х10' },
        { value : '108х10', label : '108х10' },
        { value : '108х4', label : '108х4' },
        { value : '108х4.5', label : '108х4.5' },
        { value : '108х5', label : '108х5' },
        { value : '108х6', label : '108х6' },
        { value : '108х7', label : '108х7' },
        { value : '108х8', label : '108х8' },
        { value : '108х9', label : '108х9' },
        { value : '108х10', label : '108х10' },
        { value : '114х3.5', label : '114х3.5' },
        { value : '114х3.5', label : '114х3.5' },
        { value : '114х4.5', label : '114х4.5' },
        { value : '114х5', label : '114х5' },
        { value : '114х6', label : '114х6' },
        { value : '114х7', label : '114х7' },
        { value : '114х8', label : '114х8' },
        { value : '114х9', label : '114х9' },
        { value : '114х10', label : '114х10' },
        { value : '133х3.5', label : '133х3.5' },
        { value : '133х4', label : '133х4' },
        { value : '133х4.5', label : '133х4.5' },
        { value : '133х5', label : '133х5' },
        { value : '133х6', label : '133х6' },
        { value : '133х7', label : '133х7' },
        { value : '133х85', label : '133х85' },
        { value : '133х9', label : '133х9' },
        { value : '133х10', label : '133х10' },
        { value : '133х11', label : '133х11' },
        { value : '133х12', label : '133х12' },
        { value : '159х4', label : '159х4' },
        { value : '159х4.5', label : '159х4.5' },
        { value : '159х5', label : '159х5' },
        { value : '159х6', label : '159х6' },
        { value : '159х7', label : '159х7' },
        { value : '159х8', label : '159х8' },
        { value : '159х9', label : '159х9' },
        { value : '159х10', label : '159х10' },
        { value : '159х11', label : '159х11' },
        { value : '159х12', label : '159х12' },
        { value : '159х13', label : '159х13' },
        { value : '159х14', label : '159х14' },
        { value : '168х4', label : '168х4' },
        { value : '168х4.5', label : '168х4.5' },
        { value : '168х5', label : '168х5' },
        { value : '168х6', label : '168х6' },
        { value : '168х7', label : '168х7' },
        { value : '168х8', label : '168х8' },
        { value : '168х9', label : '168х9' },
        { value : '168х10', label : '168х10' },
        { value : '168х11', label : '168х11' },
        { value : '168х12', label : '168х12' },
        { value : '168х13', label : '168х13' },
        { value : '168х14', label : '168х14' },
        { value : '219х5', label : '219х5' },
        { value : '219х6', label : '219х6' },
        { value : '219х7', label : '219х7' },
        { value : '219х8', label : '219х8' },
        { value : '219х9', label : '219х9' },
        { value : '219х10', label : '219х10' },
        { value : '219х11', label : '219х11' },
        { value : '219х12', label : '219х12' },
        { value : '219х13', label : '219х13' },
        { value : '219х14', label : '219х14' },
        { value : '219х15', label : '219х15' },
        { value : '219х16', label : '219х16' },
        { value : '219х17', label : '219х17' },
        { value : '219х18', label : '219х18' },
        { value : '273х6', label : '273х6' },
        { value : '273х7', label : '273х7' },
        { value : '273х8', label : '273х8' },
        { value : '273х9', label : '273х9' },
        { value : '273х10', label : '273х10' },
        { value : '273х11', label : '273х11' },
        { value : '273х12', label : '273х12' },
        { value : '273х13', label : '273х13' },
        { value : '273х14', label : '273х14' },
        { value : '273х15', label : '273х15' },
        { value : '273х16', label : '273х16' },
        { value : '273х17', label : '273х17' },
        { value : '273х18', label : '273х18' },
        { value : '273х20', label : '273х20' },
        { value : '273х22', label : '273х22' },
        { value : '325х7', label : '325х7' },
        { value : '325х8', label : '325х8' },
        { value : '325х9', label : '325х9' },
        { value : '325х10', label : '325х10' },
        { value : '325х11', label : '325х11' },
        { value : '325х12', label : '325х12' },
        { value : '32513', label : '32513' },
        { value : '325х14', label : '325х14' },
        { value : '325х15', label : '325х15' },
        { value : '325х16', label : '325х16' },
        { value : '325х17', label : '325х17' },
        { value : '325х18', label : '325х18' },
        { value : '325х20', label : '325х20' },
        { value : '325х22', label : '325х22' },
        { value : '325х24', label : '325х24' },
        { value : '325х26', label : '325х26' },
        { value : '325х28', label : '325х28' },
        { value : '377х9', label : '377х9' },
        { value : '377х10', label : '377х10' },
        { value : '377х11', label : '377х11' },
        { value : '377х12', label : '377х12' },
        { value : '377х13', label : '377х13' },
        { value : '377х14', label : '377х14' },
        { value : '377х15', label : '377х15' },
        { value : '377х16', label : '377х16' },
        { value : '377х17', label : '377х17' },
        { value : '377х18', label : '377х18' },
        { value : '377х19', label : '377х19' },
        { value : '377х20', label : '377х20' },
        { value : '377х21', label : '377х21' },
        { value : '377х22', label : '377х22' },
        { value : '377х23', label : '377х23' },
        { value : '377х24', label : '377х24' },
        { value : '426х8', label : '426х8' },
        { value : '426х9', label : '426х9' },
        { value : '426х10', label : '426х10' },
        { value : '426х11', label : '426х11' },
        { value : '426х12', label : '426х12' },
        { value : '426х13', label : '426х13' },
        { value : '426х14', label : '426х14' },
        { value : '426х15', label : '426х15' },
        { value : '426х16', label : '426х16' },
        { value : '426х17', label : '426х17' },
        { value : '426х18', label : '426х18' },
        { value : '426х20', label : '426х20' },
        { value : '426х22', label : '426х22' },
        { value : '426х24', label : '426х24' },
        { value : '426х26', label : '426х26' },
        { value : '426х28', label : '426х28' },
        { value : '426х30', label : '426х30' },
        { value : '426х32', label : '426х32' },
        { value : '426х34', label : '426х34' },
        { value : '530х9', label : '530х9' },
        { value : '530х10', label : '530х10' },
        { value : '530х11', label : '530х11' },
        { value : '530х12', label : '530х12' },
        { value : '530х13', label : '530х13' },
        { value : '530х14', label : '530х14' },
        { value : '530х15', label : '530х15' },
        { value : '530х16', label : '530х16' },
        { value : '530х17', label : '530х17' },
        { value : '530х18', label : '530х18' },
        { value : '530х20', label : '530х20' },
        { value : '530х22', label : '530х22' },
        { value : '530х24', label : '530х24' },
        { value : '530х26', label : '530х26' },
        { value : '530х28', label : '530х28' },
        { value : '530х30', label : '530х30' },
        { value : '530х32', label : '530х32' },
        { value : '530х34', label : '530х34' },
        { value : '530х36', label : '530х36' },
        { value : '630х9', label : '630х9' },
        { value : '630х10', label : '630х10' },
        { value : '630х11', label : '630х11' },
        { value : '630х12', label : '630х12' },
        { value : '630х13', label : '630х13' },
        { value : '630х14', label : '630х14' },
        { value : '630х15', label : '630х15' },
        { value : '630х16', label : '630х16' },
        { value : '630х17', label : '630х17' },
        { value : '630х18', label : '630х18' },
        { value : '630х20', label : '630х20' },
        { value : '630х22', label : '630х22' },
        { value : '630х24', label : '630х24' },
        { value : '630х26', label : '630х26' },
        { value : '630х28', label : '630х28' },
        { value : '630х30', label : '630х30' },
        { value : '630х32', label : '630х32' },
        { value : '720х9', label : '720х9' },
        { value : '720х10', label : '720х10' },
        { value : '720х11', label : '720х11' },
        { value : '720х12', label : '720х12' },
        { value : '720х13', label : '720х13' },
        { value : '720х14', label : '720х14' },
        { value : '720х15', label : '720х15' },
        { value : '720х16', label : '720х16' },
        { value : '720х17', label : '720х17' },
        { value : '720х18', label : '720х18' },
        { value : '720х20', label : '720х20' },
        { value : '720х22', label : '720х22' },
        { value : '720х24', label : '720х24' },
        { value : '720х26', label : '720х26' },
        { value : '720х28', label : '720х28' },
        { value : '720х30', label : '720х30' },
        { value : '720х32', label : '720х32' },
        { value : '820х9', label : '820х9' },
        { value : '820х10', label : '820х10' },
        { value : '820х11', label : '820х11' },
        { value : '820х12', label : '820х12' },
        { value : '820х13', label : '820х13' },
        { value : '820х14', label : '820х14' },
        { value : '820х15', label : '820х15' },
        { value : '820х16', label : '820х16' },
        { value : '820х17', label : '820х17' },
        { value : '820х18', label : '820х18' },
        { value : '820х20', label : '820х20' },
        { value : '820х22', label : '820х22' },
        { value : '820х24', label : '820х24' },
        { value : '820х26', label : '820х26' },
        { value : '820x28', label : '820x28' },
        { value : '820x30', label : '820x30' },
        { value : '820x32', label : '820x32' }
    ]

    var execution = firstExecution

    const setExecution = (value) => {
        if (value === 'Исполнение 1') execution = firstExecution
        if (value === 'Исполнение 2') execution = secondExecution

        CallbackInput('Исполнение', `${value}`)
    }

    return ([<>
       <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
           <SimpleGrid cols={2} justify="center" align="left">     
            <InputWrapper
                required
                label={`Выберите исполнение`}
            >
            <Select
                placeholder={`Выберите исполнение`}
                data={executionData}
                style={{width: '75%' }}
                onChange={value => setExecution(value)} 
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Выберите размер"
            >
            <Select
                placeholder="Выберите размер"
                data={execution}
                // value={price} 
                style={{width: '75%' }}
                onChange={value => CallbackInput('Размер', {value})}
                />
            </InputWrapper>
        </SimpleGrid>
        </MediaQuery> 
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
           <SimpleGrid cols={2} justify="center" align="left">     
            <InputWrapper
                required
                label={`Исполнение`}
            >
            <Select
                placeholder={`Выберите исполнение`}
                data={executionData}
                style={{width: '100%' }}
                onChange={value => setExecution(value)} 
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Размер"
            >
            <Select
                placeholder="Выберите размер"
                data={execution}
                // value={price} 
                style={{width: '100%' }}
                onChange={value => CallbackInput('Размер', {value})}
                />
            </InputWrapper>
        </SimpleGrid>
        </MediaQuery> 
    </>,
    <>
        <Image
            width='35%'
            // justify='center'
            src='/items/Tap.png'
        />
    </>
    ])
}


export function roundPipe (metalData, stampName, CallbackInput) {
    return ([<>
       <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <SimpleGrid cols={2} justify="center" align="left">     
            <InputWrapper
                required
                label={`Выберите марку ${stampName}`}
            >
            <Select
                placeholder={`Выберите марку ${stampName}`}
                data={metalData}
                style={{width: '75%' }}
                onChange={value => CallbackInput('stamp', `${value}`)} 
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Введите внешний диаметр трубы"
            >
            <Input
                placeholder="Введите внешний диаметр трубы"
                // value={price} 
                style={{width: '75%' }}
                onChange={event => CallbackInput('Диаметр', `${event.target.value} мм.`)}
                rightSection="мм."
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Введите толщину стенки"
            >
            <Input
                placeholder="Введите толщину стенки"
                // value={price} 
                style={{width: '75%' }}
                onChange={event => CallbackInput('Толщина', `${event.target.value} мм.`)}
                rightSection="мм."
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Введите длину"
            >
            <Input
                placeholder="Введите длину" 
                // value={price} 
                style={{width: '75%' }}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>
     </MediaQuery>
     <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <SimpleGrid cols={2} justify="center" align="left">     
            <InputWrapper
                required
                label={`Марка ${stampName}`}
            >
            <Select
                placeholder={`Выберите марку ${stampName}`}
                data={metalData}
                style={{width: '100%' }}
                onChange={value => CallbackInput('stamp', `${value}`)} 
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Внешний диаметр"
            >
            <Input
                placeholder="Введите внешний диаметр трубы"
                // value={price} 
                style={{width: '100%' }}
                onChange={event => CallbackInput('Диаметр', `${event.target.value} мм.`)}
                rightSection="мм."
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Толщина стенки"
            >
            <Input
                placeholder="Введите толщину стенки"
                // value={price} 
                style={{width: '100%' }}
                onChange={event => CallbackInput('Толщина', `${event.target.value} мм.`)}
                rightSection="мм."
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Длина"
            >
            <Input
                placeholder="Введите длину" 
                // value={price} 
                style={{width: '100%' }}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>
     </MediaQuery>
    </>,
    <>
        <Image
            width='40%'
            // justify='center'
            src='/items/RoundPipe.png'
        />
    </>
    ])
}


export function profilePipe (metalData, stampName, CallbackInput) {
    return ([<>
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <SimpleGrid cols={2} justify="center" align="left">     
            <InputWrapper
                required
                label={`Выберите марку ${stampName}`}
            >
            <Select
                placeholder={`Выберите марку ${stampName}`}
                data={metalData}
                style={{width: '75%' }}
                onChange={value => CallbackInput('stamp', `${value}`)} 
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Введите ширину трубы"
            >
            <Input
                placeholder="Введите ширину трубы"
                // value={price} 
                style={{width: '75%' }}
                onChange={event => CallbackInput('Ширина', `${event.target.value} мм.`)}
                rightSection="мм."
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Введите высоту трубы"
            >
            <Input
                placeholder="Введите высоту трубы"
                // value={price} 
                style={{width: '75%' }}
                onChange={event => CallbackInput('Высота', `${event.target.value} мм.`)}
                rightSection="мм."
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Введите толщину стенки"
            >
            <Input
                placeholder="Введите толщину стенки"
                // value={price} 
                style={{width: '75%' }}
                onChange={event => CallbackInput('Толщина', `${event.target.value} мм.`)}
                rightSection="мм."
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Введите длину"
            >
            <Input
                placeholder="Введите длину" 
                // value={price} 
                style={{width: '75%' }}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>
        </MediaQuery>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <>
        <SimpleGrid cols={1} justify="center" align="left">     
            <InputWrapper
                required
                label={`Марка ${stampName}`}
            >
            <Select
                placeholder={`Выберите марку ${stampName}`}
                data={metalData}
                style={{width: '100%' }}
                onChange={value => CallbackInput('stamp', `${value}`)} 
                />
            </InputWrapper>  
            </SimpleGrid>
        <SimpleGrid cols={2} justify="center" align="left">         
            <InputWrapper
                required
                label="Ширина трубы"
            >      
            <Input
                placeholder="Введите ширину трубы"
                // value={price} 
                style={{width: '100%' }}
                onChange={event => CallbackInput('Ширина', `${event.target.value} мм.`)}
                rightSection="мм."
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Высота трубы"
            >
            <Input
                placeholder="Введите высоту трубы"
                // value={price} 
                style={{width: '100%' }}
                onChange={event => CallbackInput('Высота', `${event.target.value} мм.`)}
                rightSection="мм."
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Толщина стенки"
            >
            <Input
                placeholder="Введите толщину стенки"
                // value={price} 
                style={{width: '100%' }}
                onChange={event => CallbackInput('Толщина', `${event.target.value} мм.`)}
                rightSection="мм."
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Длина"
            >
            <Input
                placeholder="Введите длину" 
                // value={price} 
                style={{width: '100%' }}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>
        </>
        </MediaQuery>
    </>,
    <>
        <Image
            width='40%'
            // justify='center'
            src='/items/ProfilePipe.png'
        />
    </>
    ])
}


export function corner (metalData, stampName, CallbackInput) {
    return ([<>
       <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
       
           <SimpleGrid cols={3} justify="center" align="left">     
            <InputWrapper
                required
                label={`Выберите марку ${stampName}`}
            >
            <Select
                placeholder={`Выберите марку ${stampName}`}
                data={metalData}
                // style={{width: '75%' }}
                onChange={value => CallbackInput('stamp', `${value}`)} 
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Введите ширину уголка"
            >
            <Input
                placeholder="Введите ширину уголка"
                // value={price} 
                // style={{width: '75%' }}
                onChange={event => CallbackInput('Ширина', `${event.target.value} м.`)}
                rightSection="мм."
                />    
            </InputWrapper>
            <InputWrapper
                required
                label="Введите высоту уголка"
            >
            <Input
                placeholder="Введите высоту уголка"
                // value={price} 
                // style={{width: '75%' }}
                onChange={event => CallbackInput('Высота', `${event.target.value} мм.`)}
                rightSection="мм."
                />
            </InputWrapper>
        </SimpleGrid>
        </MediaQuery>
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <SimpleGrid cols={2} justify="center" align="left" style={{marginTop: 10}}>     
            <InputWrapper
                required
                label="Введите толщину полки"
            >
            <Input
                placeholder="Введите толщину полки"
                // value={price} 
                style={{width: '75%' }}
                onChange={event => CallbackInput('Толщина', `${event.target.value} мм.`)}
                rightSection="мм."
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Введите длину"
            >
            <Input
                placeholder="Введите длину" 
                // value={price} 
                style={{width: '75%' }}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>      
    </MediaQuery> 
    <MediaQuery largerThan="sm" styles={{ display: 'none' }}>    
           <SimpleGrid cols={1} justify="center" align="left">     
            <InputWrapper
                required
                label={`Марка ${stampName}`}
            >
            <Select
                placeholder={`Выберите марку ${stampName}`}
                data={metalData}
                style={{width: '100%' }}
                onChange={value => CallbackInput('stamp', `${value}`)} 
                />
            </InputWrapper>
        </SimpleGrid>
        </MediaQuery>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <SimpleGrid cols={2} justify="center" align="left">
            <InputWrapper
                required
                label="Ширина"
            >      
            <Input
                placeholder="Введите ширину уголка"
                // value={price} 
                style={{width: '100%' }}
                onChange={event => CallbackInput('Ширина', `${event.target.value} м.`)}
                rightSection="мм."
                />    
            </InputWrapper>      
            <InputWrapper
                required
                label="Высотa"
            >
            <Input
                placeholder="Введите высоту уголка"
                // value={price} 
                style={{width: '100%' }}
                onChange={event => CallbackInput('Высота', `${event.target.value} мм.`)}
                rightSection="мм."
                />
            </InputWrapper>
        </SimpleGrid>
        </MediaQuery>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <SimpleGrid cols={2} justify="center" align="left" style={{marginTop: 10}}>     
            <InputWrapper
                required
                label="Толщина полки"
            >
            <Input
                placeholder="Введите толщину полки"
                // value={price} 
                style={{width: '100%' }}
                onChange={event => CallbackInput('Толщина', `${event.target.value} мм.`)}
                rightSection="мм."
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Длина"
            >
            <Input
                placeholder="Введите длину" 
                // value={price} 
                style={{width: '100%' }}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>      
    </MediaQuery> 
    </>,
    <>
        <Image
            width='40%'
            // justify='center'
            src='/items/Corner.png'
        />
    </>
    ])
}


export function hexagon (metalData, stampName, CallbackInput) {
    return ([<>
       <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <SimpleGrid cols={3} justify="center" align="left">     
            <InputWrapper
                required
                label={`Выберите марку ${stampName}`}
            >
            <Select
                placeholder={`Выберите марку ${stampName}`}
                data={metalData}
                // style={{width: '75%' }}
                onChange={value => CallbackInput('stamp', `${value}`)} 
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Номер шестригранника"
            >
            <Input
                placeholder="Введите номер шестигранника"
                // value={price} 
                // style={{width: '75%' }}
                onChange={event => CallbackInput('Номер', `${event.target.value} мм.`)}
                rightSection="мм."
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Введите длину"
            >
            <Input
                placeholder="Введите длину" 
                // value={price} 
                // style={{width: '75%' }}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>
        </MediaQuery>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <SimpleGrid cols={1} justify="center" align="left">     
            <InputWrapper
                required
                label={`Марка ${stampName}`}
            >
            <Select
                placeholder={`Выберите марку ${stampName}`}
                data={metalData}
                style={{width: '100%' }}
                onChange={value => CallbackInput('stamp', `${value}`)} 
                />
            </InputWrapper>
        </SimpleGrid>
        </MediaQuery>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <SimpleGrid cols={2} justify="center" align="left">
            <InputWrapper
                required
                label="Номер"
            >
            <Input
                placeholder="Введите номер шестигранника"
                // value={price} 
                style={{width: '100%' }}
                onChange={event => CallbackInput('Номер', `${event.target.value} мм.`)}
                rightSection="мм."
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Длина"
            >
            <Input
                placeholder="Введите длину" 
                // value={price} 
                style={{width: '100%' }}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>
        </MediaQuery>
    </>,
    <>
        <Image
            width='35%'
            // justify='center'
            src='/items/Hexagon.png'
        />
    </>
    ])
}


export function flatFlange(metalData, stampName, CallbackInput) {
    const pressureData = [
        { value : 'Ру 6', label : 'Ру 6' },
        { value : 'Ру 10', label : 'Ру 10' },
        { value : 'Ру 16', label : 'Ру 16' },
        { value : 'Ру 25', label : 'Ру 25' }
    ]

    const ru = [
        { value : '15', label : '15' },
        { value : '20', label : '20' },
        { value : '25', label : '25' },
        { value : '32', label : '32' },
        { value : '40', label : '40' },
        { value : '50', label : '50' },
        { value : '65', label : '65' },
        { value : '80', label : '80' },
        { value : '100', label : '100' },
        { value : '125', label : '125' },
        { value : '150', label : '150' },
        { value : '200', label : '200' },
        { value : '250', label : '250' },
        { value : '300', label : '300' },
        { value : '350', label : '350' },
        { value : '400', label : '400' },
        { value : '500', label : '500' },
        { value : '600', label : '600' },
        { value : '800', label : '800' },
        { value : '1000', label : '1000' },
        { value : '1200', label : '1200' }
    ]

    const ru25 = [
        { value : '15', label : '15' },
        { value : '20', label : '20' },
        { value : '25', label : '25' },
        { value : '32', label : '32' },
        { value : '40', label : '40' },
        { value : '50', label : '50' },
        { value : '65', label : '65' },
        { value : '80', label : '80' },
        { value : '100', label : '100' },
        { value : '125', label : '125' },
        { value : '150', label : '150' },
        { value : '200', label : '200' },
        { value : '250', label : '250' },
        { value : '300', label : '300' },
        { value : '350', label : '350' },
        { value : '400', label : '400' },
        { value : '500', label : '500' },
        { value : '600', label : '600' },
        { value : '800', label : '800' }
    ]

    var pressureDiametr = ru

    const setPressureDiametr = (value) => {
        if (value === 'Ру 25') pressureDiametr = ru25
        if (value !== 'Ру 25') pressureDiametr = ru

        CallbackInput('Давление', `${value}`)
    }

    return ([<>
       <MediaQuery smallerThan="sm" styles={{ display: 'none' }}> 
        <SimpleGrid cols={2} justify="center" align="left">     
            <InputWrapper
                required
                label={'Выберите давление'}
            >
            <Select
                placeholder={`Выберите давление`}
                data={pressureData}
                style={{width: '75%' }}
                onChange={value => setPressureDiametr(value)} 
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Выберите условный диаметр"
            >
            <Select
                placeholder="Выберите условный диаметр"
                data={pressureDiametr}
                // value={price} 
                style={{width: '75%' }}
                onChange={value => CallbackInput('Условный диаметр', value)}
                />
            </InputWrapper>
        </SimpleGrid>
        </MediaQuery>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}> 
        <SimpleGrid cols={2} justify="center" align="left">     
            <InputWrapper
                required
                label={'Давление'}
            >
            <Select
                placeholder={`Выберите давление`}
                data={pressureData}
                style={{width: '100%' }}
                onChange={value => setPressureDiametr(value)} 
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Диаметр"
            >
            <Select
                placeholder="Выберите условный диаметр"
                data={pressureDiametr}
                // value={price} 
                style={{width: '100%' }}
                onChange={value => CallbackInput('Условный диаметр', value)}
                />
            </InputWrapper>
        </SimpleGrid>
        </MediaQuery>
    </>,
    <>
        <Image
            width='35%'
            // justify='center'
            src='/items/Flange.png'
        />
    </>
    ])
}

export function channel(metalData, stampName, CallbackInput) {
    const channelData = [
        { value : "5П", label : "5П" },
        { value : "5У", label : "5У" },
        { value : "6,5П", label : "6,5П" },
        { value : "6,5У", label : "6,5У" },
        { value : "8П", label : "8П" },
        { value : "8У", label : "8У" },
        { value : "10П", label : "10П" },
        { value : "10У", label : "10У" },
        { value : "12П", label : "12П" },
        { value : "12У", label : "12У" },
        { value : "14П", label : "14П" },
        { value : "14у", label : "14у" },
        { value : "16аП", label : "16аП" },
        { value : "16П", label : "16П" },
        { value : "16у", label : "16у" },
        { value : "18аП", label : "18аП" },
        { value : "18аУ", label : "18аУ" },
        { value : "18П", label : "18П" },
        { value : "18у", label : "18у" },
        { value : "20П", label : "20П" },
        { value : "20У", label : "20У" },
        { value : "22П", label : "22П" },
        { value : "24П", label : "24П" },
        { value : "24У", label : "24У" },
        { value : "27П", label : "27П" },
        { value : "30П", label : "30П" },
        { value : "30У", label : "30У" },
        { value : "33П", label : "33П" },
        { value : "33У", label : "33У" },
        { value : "36П", label : "36П" },
        { value : "36у", label : "36у" },
        { value : "40П", label : "40П" },
        { value : "40У", label : "40У" }
    ]

    return ([<>
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <SimpleGrid cols={2} justify="center" align="left">                        
            <InputWrapper
                required
                label="Выберите номер швеллера"
            >
            <Select
                placeholder="Выберите номер швеллера" 
                data={channelData} 
                style={{width: '75%' }}
                onChange={value => CallbackInput('Номер швеллера', `${value}`)} 
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Введите длину"
            >
            <Input
                placeholder="Введите длину" 
                style={{width: '75%' }}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>
        </MediaQuery>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <SimpleGrid cols={2} justify="center" align="left">                        
            <InputWrapper
                required
                label="Номер"
            >
            <Select
                placeholder="Выберите номер швеллера" 
                data={channelData} 
                style={{width: '100%' }}
                onChange={value => CallbackInput('Номер швеллера', `${value}`)} 
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Длина"
            >
            <Input
                placeholder="Введите длину" 
                style={{width: '100%' }}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>
        </MediaQuery>
    </>,
    <Image
        width='35%'
        // justify='center'
        src='/items/ChannelP.png'
    />
    ]
    )
}