import { Card, Table, MediaQuery, ScrollArea } from '@mantine/core';
import Link from 'next/link'
import styles from './GostsList.module.scss'


export const GOSTS = [
    {
        title: 'Феррросплавы',
        list: [
            {
                title: 'Феррохром',
                standards: [
                    {
                        title: 'ГОСТ 4757 - 91',
                        link: ''
                    }
                ]
            },
            {
                title: 'Марганец металлический',
                standards: [
                    {
                        title: 'ГОСТ 6008 - 82',
                        link: ''
                    },
                    {
                        title: 'ГОСТ 6008 - 90',
                        link: ''
                    },
                ]
            },
            {
                title: 'Ферромарганец',
                standards: [
                    {
                        title: 'ГОСТ 4755 – 80',
                        link: ''
                    },
                    {
                        title: 'ГОСТ 4755 – 91',
                        link: ''
                    },
                    {
                        title: 'ДСТУ 3547 - 97',
                        link: ''
                    },
                ]
            },
            {
                title: 'Ферромарганец',
                standards: [
                    {
                        title: 'ГОСТ 4755 – 80',
                        link: ''
                    },
                    {
                        title: 'ГОСТ 4755 – 91',
                        link: ''
                    },
                    {
                        title: 'ДСТУ 3547 - 97',
                        link: ''
                    },
                ]
            },
            {
                title: 'Ферросилиций',
                standards: [
                    {
                        title: 'ГОСТ 1415 – 93',
                        link: ''
                    },
                    {
                        title: 'ДСТУ 4127 - 2002',
                        link: ''
                    },
                ]
            },
            {
                title: 'Феррованадий',
                standards: [
                    {
                        title: 'ГОСТ 27130-94',
                        link: ''
                    }
                ]
            },
            {
                title: 'Ферромолибден',
                standards: [
                    {
                        title: 'ГОСТ 4759 - 91',
                        link: ''
                    }
                ]
            },
            {
                title: 'Ферровольфрам',
                standards: [
                    {
                        title: 'ГОСТ 17293 - 93',
                        link: ''
                    }
                ]
            },
            {
                title: 'Феррониобий',
                standards: [
                    {
                        title: 'ГОСТ 16773 - 2003',
                        link: ''
                    }
                ]
            },
            {
                title: 'Ферротитан',
                standards: [
                    {
                        title: 'ГОСТ 4761 - 91',
                        link: ''
                    }
                ]
            },
            {
                title: 'Ферросиликомарганец',
                standards: [
                    {
                        title: 'ГОСТ 4756 – 91',
                        link: ''
                    },
                    {
                        title: 'ДСТУ 3548 - 97',
                        link: ''
                    },
                ]
            },
            {
                title: 'Силикокальций',
                standards: [
                    {
                        title: 'ГОСТ 4762 - 71',
                        link: ''
                    }
                ]
            },
            {
                title: 'Хром металлический',
                standards: [
                    {
                        title: 'ГОСТ 5905 - 2004',
                        link: ''
                    }
                ]
            },
            {
                title: 'Ферробор',
                standards: [
                    {
                        title: 'ГОСТ 14848 - 69',
                        link: ''
                    }
                ]
            },
            {
                title: 'Ферросиликохром',
                standards: [
                    {
                        title: 'ГОСТ 11861 - 91',
                        link: ''
                    }
                ]
            },
        ]
    },
    {
        title: 'Цветные металлы',
        list: [
            {
                title: 'Алюминий вторичный',
                standards: [
                    {
                        title: 'ГОСТ 295 - 98',
                        link: ''
                    }
                ]
            },
            {
                title: 'Никель первичный',
                standards: [
                    {
                        title: 'ГОСТ 849 - 97',
                        link: ''
                    }
                ]
            },
            {
                title: 'Медь',
                standards: [
                    {
                        title: 'ГОСТ 859 - 2001',
                        link: ''
                    }
                ]
            },
            {
                title: 'Титан губчатый',
                standards: [
                    {
                        title: 'ГОСТ 17746-96',
                        link: ''
                    }
                ]
            },
            {
                title: 'Цинк',
                standards: [
                    {
                        title: 'ГОСТ 3640 - 94',
                        link: ''
                    }
                ]
            }
        ]
    },
    {
        title: 'Чугуны',
        list: [
            {
                title: 'Чугун антифрикционный для отливок',
                standards: [
                    {
                        title: 'ГОСТ 1585-85',
                        link: ''
                    }
                ]
            },
            {
                title: 'Чугун с вермикулярным графитом для отливок',
                standards: [
                    {
                        title: 'ГОСТ 28394-89',
                        link: ''
                    }
                ]
            },
        ]
    },
    {
        title: 'Сталь',
        list: [
            {
                title: 'Прокат для строительных стальных конструкций',
                standards: [
                    {
                        title: 'ГОСТ 27772-88',
                        link: ''
                    }
                ]
            },
            {
                title: 'Приемка, маркировка, упаковка, транспортирование и хранение металлопродукции',
                standards: [
                    {
                        title: 'ГОСТ 7566-94',
                        link: ''
                    }
                ]
            },
            {
                title: 'Прокат сортовой и фасонный из стали углеродистой обыкновенного качества',
                standards: [
                    {
                        title: 'ГОСТ 535-88',
                        link: ''
                    }
                ]
            },
        ]
    },
    {
        title: 'Металлопрокат',
        subtitle: 'Арматура',
        list: [
            {
                title: 'Сталь горячекатаная для армирования железобетонных конструкций',
                standards: [
                    {
                        title: 'ГОСТ 5781-82',
                        link: ''
                    }
                ]
            },
            {
                title: 'Прокат арматурный свариваемый периодического профиля классов А500С и В500С для армирования железобетонных конструкций',
                standards: [
                    {
                        title: 'ГОСТ Р 52544-2006',
                        link: ''
                    }
                ]
            },
            {
                title: 'Прокат периодического профиля из арматурной стали',
                standards: [
                    {
                        title: 'СТО АСЧМ 7-93',
                        link: ''
                    }
                ]
            },
            {
                title: 'Прокат периодического профиля для армирования железобетонных конструкций',
                standards: [
                    {
                        title: 'ТУ 14-1-5254-94',
                        link: ''
                    }
                ]
            },
            {
                title: 'Полосы стальные арматурные',
                standards: [
                    {
                        title: 'DIN 488-2-1986',
                        link: ''
                    }
                ]
            },
            {
                title: 'Сетка стальная и проволока арматурные',
                standards: [
                    {
                        title: 'DIN 488-4-1986',
                        link: ''
                    }
                ]
            },
            {
                title: 'Сталь арматурная термомеханически упрочненная для железобетонных конструкций',
                standards: [
                    {
                        title: 'ГОСТ 10884-94',
                        link: ''
                    }
                ]
            },
        ]
    },
    {
        subtitle: 'Балки двутавровые',
        list: [
            {
                title: 'Балка двутавровая горячекатаная',
                standards: [
                    {
                        title: 'ГОСТ 8239-89',
                        link: ''
                    }
                ]
            },
            {
                title: 'Балка двутавровая стальная специальная',
                standards: [
                    {
                        title: 'ГОСТ 19425-74',
                        link: ''
                    }
                ]
            },
            {
                title: 'Балка двутавровая стальная горячекатаная с параллельными гранями полок',
                standards: [
                    {
                        title: 'ГОСТ 26020-83',
                        link: ''
                    }
                ]
            },
            {
                title: 'Балка двутавровая',
                standards: [
                    {
                        title: 'СТО АСЧМ 20-93',
                        link: ''
                    }
                ]
            },
            {
                title: 'Профили горячекатаные двутавровые узкие ряда I',
                standards: [
                    {
                        title: 'DIN 1025-1-1995',
                        link: ''
                    }
                ]
            },
            {
                title: 'Профили горячекатаные двутавровые широкие рядов IPB и IB',
                standards: [
                    {
                        title: 'DIN 1025-2-1995',
                        link: ''
                    }
                ]
            },
            {
                title: 'Профили горячекатаные двутавровые широкие легкой конструкции ряда IPBI',
                standards: [
                    {
                        title: 'DIN 1025-3-1994',
                        link: ''
                    }
                ]
            },
            {
                title: 'Профили горячекатаные двутавровые широкие упрочненной конструкции ряда IPBv',
                standards: [
                    {
                        title: 'DIN 1025-4-1994',
                        link: ''
                    }
                ]
            },
            {
                title: 'Профили горячекатаные двутавровые средней ширины ряда IPE',
                standards: [
                    {
                        title: 'DIN 1025-5-1994',
                        link: ''
                    }
                ]
            },
            {
                title: 'Балки из горячекатаной стали Z-образные с закругленными кромками',
                standards: [
                    {
                        title: 'DIN 1027-2004',
                        link: ''
                    }
                ]
            },
            {
                title: 'Сталь тавровая горячекатаная с острыми кромками',
                standards: [
                    {
                        title: 'DIN 59051-2004',
                        link: ''
                    }
                ]
            },
        ]
    },
    {
        subtitle: 'Жесть',
        list: [
            {
                title: 'Жесть',
                standards: [
                    {
                        title: 'ГОСТ 13345-85',
                        link: ''
                    }
                ]
            }
        ]
    },
    {
        subtitle: 'Катанка',
        list: [
            {
                title: 'Катанка из углеродистой стали обыкновенного качества',
                standards: [
                    {
                        title: 'ГОСТ 30136-95',
                        link: ''
                    }
                ]
            },
            {
                title: 'Катанка для перетяжки на проволоку',
                standards: [
                    {
                        title: 'ТУ 14-15-212-89',
                        link: ''
                    }
                ]
            },
            {
                title: 'Катанка для упаковки и других целей',
                standards: [
                    {
                        title: 'ТУ 14-15-213-89',
                        link: ''
                    }
                ]
            },
            {
                title: 'Пруток стальной для волочения и/или холодной прокатки',
                standards: [
                    {
                        title: 'DIN EN 10017-2005',
                        link: ''
                    }
                ]
            },
            {
                title: 'Прутки стальные круглого сечения для холодной высадки и холодной экструзии',
                standards: [
                    {
                        title: 'DIN EN 10108-2005',
                        link: ''
                    }
                ]
            },
        ]
    },
]

export const GostsList = () => {
    return (<>
    <div style={{ width: '100%'}}>
      <Card>      
            <Table>
                <li className={styles.listitemheader}>
                <p className={styles.listitemsubheadertext}>
                        Катанка
                </p>                
                </li>
                <li className={styles.listitem}>
                   <p className={styles.listitemtext}>
                        Прутки стальные круглого сечения для холодной высадки и холодной экструзии
                    </p>
                    
                    <Link href="https://docs.cntd.ru/document/1200005128" >
                    <p>
                        DIN EN 10108-2005
                    </p>
                    </Link>
                </li>

                {/* Квадрат    */}
                <li className={styles.listitemheader}>
                    <p className={styles.listitemsubheadertext}>
                        Квадрат
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Сталь кованая квадратная
                    </p>
                    <p>
                        ГОСТ 1133-71
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Прокат стальной горячекатаный квадратный
                    </p>
                    <p>
                        ГОСТ 2591-2006
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Прутки квадратные из инструментальной нелегированной стали
                    </p>
                    <p>
                        ГОСТ 1435-99
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Сталь калиброванная квадратная
                    </p>
                    <p>
                        ГОСТ 8559-75
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Прутки квадратные из быстрорежущей стали
                    </p>
                    <p>
                        ГОСТ 19265-73
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Прокат стальной горячекатаный квадратный общего назначения
                    </p>
                    <p>
                        DIN EN 10059-2004
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Сталь прецизионная квадратного профиля
                    </p>
                    <p>
                        DIN 59350-1982
                    </p>
                </li>

                {/* Круг    */}
                <li className={styles.listitemheader}>
                    <p className={styles.listitemsubheadertext}>
                        Круг
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Сталь кованая круглая
                    </p>
                    <p>
                        ГОСТ 1133-71
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Прутки круглые из инструментальной нелегированной стали
                    </p>
                    <p>
                        ГОСТ 1435-99
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Прокат стальной горячекатаный круглый
                    </p>
                    <p>
                        ГОСТ 2590-2006
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Прутки круглые из инструментальной нелегированной стали
                    </p>
                    <p>
                        ГОСТ 1435-99
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Сталь калиброванная круглая
                    </p>
                    <p>
                        ГОСТ 7417-75
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Сталь качественная круглая со специальной отделкой поверхности
                    </p>
                    <p>
                        ГОСТ 14955-77
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Прутки круглые из быстрорежущей стали
                    </p>
                    <p>
                        ГОСТ 19265-73
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Прокат стальной горячекатаный круглый общего назначения
                    </p>
                    <p>
                        DIN EN 10060-2004
                    </p>
                </li>

                {/* Лента    */}
                <li className={styles.listitemheader}>
                    <p className={styles.listitemsubheadertext}>
                        Лента
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Лента холоднокатаная из низкоуглеродистой стали
                    </p>
                    <p>
                        ГОСТ 503-81
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Лента холоднокатаная из инструментальной и пружинной стали
                    </p>
                    <p>
                        ГОСТ 2283-79
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Лента холоднокатаная из углеродистой конструкционной стали
                    </p>
                    <p>
                        ГОСТ 2284-79
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Лента стальная упаковочная
                    </p>
                    <p>
                        ГОСТ 3560-73
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Лента горячекатаная
                    </p>
                    <p>
                        ГОСТ 6009-74
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Лента из электротехнической нелегированной тонколистовой стали
                    </p>
                    <p>
                        ГОСТ 3836-83
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Лента холоднокатаная из коррозионно-стойкой и жаростойкой стали
                    </p>
                    <p>
                        ГОСТ 4986-79
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Лента из стали марок 11КП и 11ЮА
                    </p>
                    <p>
                        ГОСТ 8851-75
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Лента стальная холоднокатаная термообработанная
                    </p>
                    <p>
                        ГОСТ 21996-76
                    </p>
                </li>

                {/* Лист    */}
                <li className={styles.listitemheader}>
                    <p className={styles.listitemsubheadertext}>
                        Лист
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Прокат листовой горячекатаный
                    </p>
                    <p>
                        ГОСТ 19903-74
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Прокат листовой холоднокатаный
                    </p>
                    <p>
                        ГОСТ 19904-90
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Сталь тонколистовая оцинкованная
                    </p>
                    <p>
                        ГОСТ 14918-80
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Лист горячеоцинкованный
                    </p>
                    <p>
                        ГОСТ Р 52246-2004
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Профили стальные с трапециевидными гофрами для строительства
                    </p>
                    <p>
                        ГОСТ 24045-2010
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Профили стальные гнутые листовые с трапециевидным гофром
                    </p>
                    <p>
                        ГОСТ 9234-74
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Лист стальной рифленый
                    </p>
                    <p>
                        ГОСТ 8568-77
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Прокат толстолистовой и широкополосный из конструкционной качественной стали
                    </p>
                    <p>
                        ГОСТ1577-93
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Прокат тонколистовой холоднокатаный из стали низкоуглеродистой качественной для холодной штамповки
                    </p>
                    <p>
                        ГОСТ 9045-93
                    </p>
                </li>

                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Прокат толстолистовой из углеродистой стали обыкновенного качества
                    </p>
                    <p>
                        ГОСТ 14637-89
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Прокат листовой из углеродистой стали качественной и обыкновенного качества общего назначения
                    </p>
                    <p>
                        ГОСТ 16523-97
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Прокат тонколистовой из стали повышенной прочности
                    </p>
                    <p>
                        ГОСТ 17066-94
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Прокат тонколистовой холоднокатаный из стали низкоуглеродистой для эмалированной посуды
                    </p>
                    <p>
                        ГОСТ 24244-80
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Прокат листовой из углеродистой, низколегированной и легированной <br /> стали для котлов и сосудов, работающих под давлением
                    </p>
                    <p>
                        ГОСТ 5520-79
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Прокат листовой из коррозионно-стойких, жаростойких и жаропрочных сплавов
                    </p>
                    <p>
                        ГОСТ 24982-81
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Листы стальные просечно-вытяжные
                    </p>
                    <p>
                        ТУ 36.26.11-5-89<br />
                        ТУ 5262-001-23083253-96<br />
                        ТУ 0971-001-44028369-2011
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Лист стальной  электролитически оцинкованный
                    </p>
                    <p>
                        ТУ 14-1-4766-90
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Лист стальной  электролитически оцинкованный с полимерным покрытием
                    </p>
                    <p>
                        ТУ 14-1-4695-89
                    </p>
                </li>

                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Лист профилированный
                    </p>
                    <p>
                        ТУ 14-116-16-92
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Листовой прокат с чечевичным рифлением
                    </p>
                    <p>
                        ТУ 14-2-818-88
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Прокат листовой для холодной штамповки из конструкционной качественной стали
                    </p>
                    <p>
                        ГОСТ 4041-71
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Прокат тонколистовой из стали коррозионно-стойкой, жаростойкой и жаропрочной
                    </p>
                    <p>
                        ГОСТ 5582-75<br />
                        ГОСТ 7350-77
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Сталь листовая горячекатаная двухслойная коррозионно-стойкая
                    </p>
                    <p>
                        ГОСТ 10885-85
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Прокат листовой и широкополосный универсальный из стали конструкционной легированной<br />
                        высококачественной специального назначения
                    </p>
                    <p>
                        ГОСТ 11269-76
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Листы перфорированные
                    </p>
                    <p>
                        ТУ 1812-001-50336739-2005
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Листы стальные горячекатаные рифленые
                    </p>
                    <p>
                        DIN 59220-2000
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Листы волнистые и кровельные листы с покрытием
                    </p>
                    <p>
                        DIN 59231-2003
                    </p>
                </li>

                {/* Полоса    */}
                <li className={styles.listitemheader}>
                    <p className={styles.listitemsubheadertext}>
                        Полоса
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Прокат сортовой стальной горячекатаный полосовой
                    </p>
                    <p>
                        ГОСТ 103-2006
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Прокат стальной горячекатаный широкополосный универсальный
                    </p>
                    <p>
                        ГОСТ 82-70
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Полосы из инструментальной нелегированной стали
                    </p>
                    <p>
                        ГОСТ 1435-99
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Полосы горячекатаные и кованые из инструментальной стали
                    </p>
                    <p>
                        ГОСТ 4405-75
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Полосы стальные горячекатаные узкие общего назначения
                    </p>
                    <p>
                        DIN EN 10058-2004
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Полосы стальные горячекатаные пружинные плоские
                    </p>
                    <p>
                        DIN EN10092-1-2004
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Прокат стальной горячекатаный широкополосный универсальный
                    </p>
                    <p>
                        DIN 59200-2001
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Сталь прецизионная полосовая
                    </p>
                    <p>
                        DIN 59350-1982
                    </p>
                </li>

                {/* Проволока    */}
                <li className={styles.listitemheader}>
                    <p className={styles.listitemsubheadertext}>
                        Проволока
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Проволока из низкоуглеродистой стали холоднотянутая для армирования железобетонных конструкций
                    </p>
                    <p>
                        ГОСТ 6727-80
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Проволока из углеродистой стали для армирования предварительно напряженных железобетонных конструкций
                    </p>
                    <p>
                        ГОСТ 7348-81
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Проволока из углеродистой конструкционной стали
                    </p>
                    <p>
                        ГОСТ 17305-91
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Проволока стальная низкоуглеродистая общего назначения
                    </p>
                    <p>
                        ГОСТ 3282-74
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Проволока низкоуглеродистая качественная
                    </p>
                    <p>
                        ГОСТ 792-67
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Проволока стальная пружинная термически обработанная
                    </p>
                    <p>
                        ГОСТ 1071-81
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Проволока стальная сварочная
                    </p>
                    <p>
                        ГОСТ 2246-70
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Проволока круглая холоднотянутая
                    </p>
                    <p>
                        ГОСТ 2771-81
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Проволока стальная кабельная
                    </p>
                    <p>
                        ГОСТ 3920-70
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Проволока стальная углеродистая пружинная
                    </p>
                    <p>
                        ГОСТ 9389-75
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Проволока стальная легированная пружинная
                    </p>
                    <p>
                        ГОСТ 4963-78
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Проволока порошковая для дуговой сварки углеродистых и низколегированных сталей
                    </p>
                    <p>
                        ГОСТ 26271-84
                    </p>
                </li>
            </Table>
    </Card>
    </div>
    </>)
}