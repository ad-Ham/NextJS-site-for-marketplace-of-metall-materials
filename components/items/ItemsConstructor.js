import { TextInput, Input, Table, Select, Button, SimpleGrid, Grid, Image, Card, InputWrapper, Textarea } from '@mantine/core';
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
        <SimpleGrid cols={2} justify="center" align="center">                        
            <InputWrapper
                required
                label="Выберите номинальный диаметр"
            >
            <Select
                placeholder="Выберите номинальный диаметр" 
                data={diametrData} 
                style={{width: '75%'}}
                onChange={value => CallbackInput('Диаметр', `${value}`)} 
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Введите длину"
            >
            <Input
                placeholder="Введите длину" 
                style={{width: '75%'}}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>
    </>,
    <Image
        width='35%'
        // justify='center'
        src='/items/Armature.png'
    />
    ]
    )
}


// export function beam (metalData, stampName, CallbackInput) {
//     const data = {}

//     const beamsType = [
//         { value: 'ГОСТ 8239-89', label: 'ГОСТ 8239-89' },
//         { value: 'Нормальный двутавр (Б)', label: 'Нормальный двутавр (Б)' },
//         { value: 'Широкополочный двутавр (Ш)', label: 'Широкополочный двутавр (Ш)' },
//         { value: 'Колонный двутавр (К)', label: 'Колонный двутавр (К)' },
//         { value: 'Двутавр дополнительной серии (Д)', label: 'Двутавр дополнительной серии (Д)' },
//         { value: 'Сварной двутавр (С)', label: 'Сварной двутавр (С)' }
//     ]

//     return ([<>
//         <SimpleGrid cols={3} justify="center" align="center">     
//             <InputWrapper
//                 required
//                 label={`Выберите тип балки`}
//             >
//             <Select
//                 placeholder={`Выберите тип балки`}
//                 data={metalData}
//                 // style={{width: '75%'}}
//                 onChange={value => CallbackInput('stamp', `${value}`)} 
//                 />
//             </InputWrapper>
//             <InputWrapper
//                 required
//                 label="Введите сторону квадрата"
//             >
//             <Input
//                 placeholder="Введите сторону квадрата"
//                 // value={price} 
//                 // style={{width: '75%'}}
//                 onChange={event => CallbackInput('Сторона', `${event.target.value} мм.`)}   
//                 rightSection="мм."
//                 />
//             </InputWrapper>
//             <InputWrapper
//                 required
//                 label="Введите длину"
//             >
//             <Input
//                 placeholder="Введите длину" 
//                 // value={price} 
//                 // style={{width: '75%'}}
//                 onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
//                 rightSection="м."
//                 />
//             </InputWrapper>
//         </SimpleGrid>
//     </>,
//     <>
//         <Image
//             width='35%'
//             // justify='center'
//             src='/Armature.png'
//         />
//     </>
//     ])
// }



export function square (metalData, stampName, CallbackInput) {
    return ([<>
        <SimpleGrid cols={3} justify="center" align="center">     
            <InputWrapper
                required
                label={`Выберите марку ${stampName}`}
            >
            <Select
                placeholder={`Выберите марку ${stampName}`}
                data={metalData}
                // style={{width: '75%'}}
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
                // style={{width: '75%'}}
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
                // style={{width: '75%'}}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>
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
        <SimpleGrid cols={3} justify="center" align="center">     
            <InputWrapper
                required
                label={`Выберите марку ${stampName}`}
            >
            <Select
                placeholder={`Выберите марку ${stampName}`}
                data={metalData}
                // style={{width: '75%'}}
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
                // style={{width: '75%'}}
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
                // style={{width: '75%'}}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>
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
        <SimpleGrid cols={2} justify="center" align="center">     
            <InputWrapper
                required
                label={`Выберите марку ${stampName}`}
            >
            <Select
                placeholder={`Выберите марку ${stampName}`}
                data={metalData}
                style={{width: '75%'}}
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
                style={{width: '75%'}}
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
                style={{width: '75%'}}
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
                style={{width: '75%'}}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>
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
        <SimpleGrid cols={2} justify="center" align="center">     
            <InputWrapper
                required
                label={`Выберите марку ${stampName}`}
            >
            <Select
                placeholder={`Выберите марку ${stampName}`}
                data={metalData}
                style={{width: '75%'}}
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
                style={{width: '75%'}}
                onChange={event => CallbackInput('Ширина', `${event.target.value} м.`)}
                rightSection="мм."
                />
            </InputWrapper>
        </SimpleGrid>
        <SimpleGrid cols={3} justify="center" align="center" style={{marginTop: 15}}>
            <InputWrapper
                required
                label="Введите длину листа"
            >
            <Input
                placeholder="Введите длину листа"
                // value={price} 
                // style={{width: '75%'}}
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
                // style={{width: '75%'}}
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
                // style={{width: '75%'}}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>
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


export function roundPipe (metalData, stampName, CallbackInput) {
    return ([<>
        <SimpleGrid cols={2} justify="center" align="center">     
            <InputWrapper
                required
                label={`Выберите марку ${stampName}`}
            >
            <Select
                placeholder={`Выберите марку ${stampName}`}
                data={metalData}
                style={{width: '75%'}}
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
                style={{width: '75%'}}
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
                style={{width: '75%'}}
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
                style={{width: '75%'}}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>
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
        <SimpleGrid cols={2} justify="center" align="center">     
            <InputWrapper
                required
                label={`Выберите марку ${stampName}`}
            >
            <Select
                placeholder={`Выберите марку ${stampName}`}
                data={metalData}
                style={{width: '75%'}}
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
                style={{width: '75%'}}
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
                style={{width: '75%'}}
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
                style={{width: '75%'}}
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
                style={{width: '75%'}}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>
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
        <SimpleGrid cols={3} justify="center" align="center">     
            <InputWrapper
                required
                label={`Выберите марку ${stampName}`}
            >
            <Select
                placeholder={`Выберите марку ${stampName}`}
                data={metalData}
                // style={{width: '75%'}}
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
                // style={{width: '75%'}}
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
                // style={{width: '75%'}}
                onChange={event => CallbackInput('Высота', `${event.target.value} мм.`)}
                rightSection="мм."
                />
            </InputWrapper>
        </SimpleGrid>
        <SimpleGrid cols={2} justify="center" align="center" style={{marginTop: 10}}>     
            <InputWrapper
                required
                label="Введите толщину полки"
            >
            <Input
                placeholder="Введите толщину полки"
                // value={price} 
                style={{width: '75%'}}
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
                style={{width: '75%'}}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>
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
        <SimpleGrid cols={3} justify="center" align="center">     
            <InputWrapper
                required
                label={`Выберите марку ${stampName}`}
            >
            <Select
                placeholder={`Выберите марку ${stampName}`}
                data={metalData}
                // style={{width: '75%'}}
                onChange={value => CallbackInput('stamp', `${value}`)} 
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Введите сторону квадрата"
            >
            <Input
                placeholder="Введите номер шестигранника"
                // value={price} 
                // style={{width: '75%'}}
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
                // style={{width: '75%'}}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>
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
        <SimpleGrid cols={2} justify="center" align="center">                        
            <InputWrapper
                required
                label="Выберите номер швеллера"
            >
            <Select
                placeholder="Выберите номер швеллера" 
                data={channelData} 
                style={{width: '75%'}}
                onChange={value => CallbackInput('Номер швеллера', `${value}`)} 
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Введите длину"
            >
            <Input
                placeholder="Введите длину" 
                style={{width: '75%'}}
                onChange={event => CallbackInput('Длина', `${event.target.value} м.`)}
                rightSection="м."
                />
            </InputWrapper>
        </SimpleGrid>
    </>,
    <Image
        width='35%'
        // justify='center'
        src='/items/Hexagon.png'
    />
    ]
    )
}