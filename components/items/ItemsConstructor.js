import { TextInput, Input, Table, Select, Button, SimpleGrid, Grid, Image, Card, InputWrapper, Textarea } from '@mantine/core';


export function armature(metalData, stampName) {
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
                label="Введите номинальный диаметр"
            >
            <Select
                placeholder="Введите номинальный диаметр" 
                data={diametrData} 
                style={{width: '75%'}}
                // onChange={event => setPrice(event.target.value)} 
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
                // onChange={event => setPrice(event.target.value)} 
                />
            </InputWrapper>
        </SimpleGrid>
    </>,
        <Image
            width='35%'
            // justify='center'
            src='/Armature.png'
        />
    ]
    )
}


export function square (metalData, stampName) {
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
                // onChange={event => event.target.value)}
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
                // onChange={event => setPrice(event.target.value)} 
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
                // onChange={event => setPrice(event.target.value)} 
                />
            </InputWrapper>
        </SimpleGrid>
    </>,
    <>
        <Image
            width='35%'
            // justify='center'
            src='/Armature.png'
        />
    </>
    ])
}


export function circle (metalData, stampName) {
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
                // onChange={event => event.target.value)}
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
                // onChange={event => setPrice(event.target.value)} 
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
                // onChange={event => setPrice(event.target.value)} 
                />
            </InputWrapper>
        </SimpleGrid>
    </>,
    <>
        <Image
            width='35%'
            // justify='center'
            src='/Armature.png'
        />
    </>
    ])
}


export function ribbon (metalData, stampName) {
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
                // onChange={event => event.target.value)}
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
                // onChange={event => setPrice(event.target.value)} 
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
                // onChange={event => setPrice(event.target.value)} 
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
                // onChange={event => setPrice(event.target.value)} 
                />
            </InputWrapper>
        </SimpleGrid>
    </>,
    <>
        <Image 
            width='35%'
            // justify='center'
            // align='center'
            src='/Armature.png'
        />
    </>
    ])
}


export function sheet (metalData, stampName) {
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
                // onChange={event => event.target.value)}
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
                // onChange={event => setPrice(event.target.value)} 
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Введите длину листа"
            >
            <Input
                placeholder="Введите длину листа"
                // value={price} 
                style={{width: '75%'}}
                // onChange={event => setPrice(event.target.value)} 
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
                // onChange={event => setPrice(event.target.value)} 
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
                // onChange={event => setPrice(event.target.value)} 
                />
            </InputWrapper>
        </SimpleGrid>
    </>,
    <>
        <Image
            width='35%'
            // justify='center'
            src='/Armature.png'
        />
    </>
    ])
}


export function roundPipe (metalData, stampName) {
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
                // onChange={event => event.target.value)}
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
                // onChange={event => setPrice(event.target.value)} 
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
                // onChange={event => setPrice(event.target.value)} 
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
                // onChange={event => setPrice(event.target.value)} 
                />
            </InputWrapper>
        </SimpleGrid>
    </>,
    <>
        <Image
            width='35%'
            // justify='center'
            src='/Armature.png'
        />
    </>
    ])
}


export function profilePipe (metalData, stampName) {
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
                // onChange={event => event.target.value)}
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
                // onChange={event => setPrice(event.target.value)} 
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
                // onChange={event => setPrice(event.target.value)} 
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
                // onChange={event => setPrice(event.target.value)} 
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
                // onChange={event => setPrice(event.target.value)} 
                />
            </InputWrapper>
        </SimpleGrid>
    </>,
    <>
        <Image
            width='35%'
            // justify='center'
            src='/Armature.png'
        />
    </>
    ])
}


export function corner (metalData, stampName) {
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
                // onChange={event => event.target.value)}
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Введите ширину уголка"
            >
            <Input
                placeholder="Введите ширину уголка"
                // value={price} 
                style={{width: '75%'}}
                // onChange={event => setPrice(event.target.value)} 
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Введите высоту уголка"
            >
            <Input
                placeholder="Введите высоту уголка"
                // value={price} 
                style={{width: '75%'}}
                // onChange={event => setPrice(event.target.value)} 
                />
            </InputWrapper>
            <InputWrapper
                required
                label="Введите толщину полки"
            >
            <Input
                placeholder="Введите толщину полки"
                // value={price} 
                style={{width: '75%'}}
                // onChange={event => setPrice(event.target.value)} 
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
                // onChange={event => setPrice(event.target.value)} 
                />
            </InputWrapper>
        </SimpleGrid>
    </>,
    <>
        <Image
            width='35%'
            // justify='center'
            src='/Armature.png'
        />
    </>
    ])
}