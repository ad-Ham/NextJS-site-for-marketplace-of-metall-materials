import styles from './GostsList.module.scss'

export function GostsList() {
    return (<>
        <div className={styles.maindiv}>
            <ul className={styles.gostslist}>

                {/* Ферросплавы */}
                <li className={styles.listitemheader}>
                    <p className={styles.listitemheadertext}>
                        Феррросплавы
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Феррохром
                    </p>
                    <p>
                        ГОСТ 4757 - 91
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Марганец металлический
                    </p>
                    <p>	ГОСТ 6008 - 82 <br />
                        ГОСТ 6008 - 90<br />
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Ферромарганец
                    </p>
                    <p>	ГОСТ 4755 – 80<br />
                        ГОСТ 4755 – 91<br />
                        ДСТУ 3547 - 97</p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Ферросилиций
                    </p>
                    <p>
                        ГОСТ 1415 – 93<br />
                        ДСТУ 4127 - 2002
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Феррованадий
                    </p>
                    <p>
                        ГОСТ 27130-94
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Ферромолибден
                    </p>
                    <p>
                        ГОСТ 4759 - 91
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Ферровольфрам
                    </p>
                    <p>
                        ГОСТ 17293 - 93
                    </p>
                </li><li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Феррониобий
                    </p>
                    <p>
                        ГОСТ 16773 - 2003
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Ферротитан
                    </p>
                    <p>
                        ГОСТ 4761 - 91
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Ферросиликомарганец
                    </p>
                    <p>
                        ГОСТ 4756 – 91<br />
                        ДСТУ 3548 - 97
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Силикокальций
                    </p>
                    <p>
                        ГОСТ 4762 - 71
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Хром металлический
                    </p>
                    <p>
                        ГОСТ 5905 - 2004
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Ферробор
                    </p>
                    <p>
                        ГОСТ 14848 - 69
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Ферросиликохром
                    </p>
                    <p>
                        ГОСТ 11861 - 91
                    </p>
                </li>

                {/* Цветные металлы */}
                <li className={styles.listitemheader}>
                    <p className={styles.listitemheadertext}>
                        Цветные металлы
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Алюминий вторичный
                    </p>
                    <p>
                        ГОСТ 295 - 98
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Никель первичный
                    </p>
                    <p>
                        ГОСТ 849 - 97<br />
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Медь
                    </p>
                    <p>
                        ГОСТ 859 - 2001
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Титан губчатый
                    </p>
                    <p>
                        ГОСТ 17746-96
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Цинк
                    </p>
                    <p>
                        ГОСТ 3640 - 94
                    </p>
                </li>

                {/* Чугуны */}
                <li className={styles.listitemheader}>
                    <p className={styles.listitemheadertext}>
                        Чугуны
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Чугун антифрикционный для отливок
                    </p>
                    <p>
                        ГОСТ 1585-85
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Чугун с вермикулярным графитом для отливок
                    </p>
                    <p>
                        ГОСТ 28394-89
                    </p>
                </li>

                {/* Сталь */}
                <li className={styles.listitemheader}>
                    <p className={styles.listitemheadertext}>
                        Сталь
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Прокат для строительных стальных конструкций
                    </p>
                    <p>
                        ГОСТ 27772-88
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Приемка, маркировка, упаковка, <br />транспортирование и хранение металлопродукции
                    </p>
                    <p>
                        ГОСТ 7566-94
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Прокат сортовой и фасонный<br /> из стали углеродистой обыкновенного качества
                    </p>
                    <p>
                        ГОСТ 535-88
                    </p>
                </li>

                {/* Металлопрокат */}
                <li className={styles.listitemheader}>
                    <p className={styles.listitemheadertext}>
                        Металлопрокат
                    </p>
                </li>

                {/* Арматура */}
                <li className={styles.listitemheader}>
                    <p className={styles.listitemsubheadertext}>
                        Арматура
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Сталь горячекатаная для армирования железобетонных конструкций
                    </p>
                    <p>
                        ГОСТ 5781-82
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Прокат арматурный свариваемый периодического профиля классов<br />
                        А500С и В500С для армирования железобетонных конструкций
                    </p>
                    <p>
                        ГОСТ Р 52544-2006
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Прокат периодического профиля из арматурной стали
                    </p>
                    <p>
                        СТО АСЧМ 7-93
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Прокат периодического профиля для армирования<br /> железобетонных конструкций
                    </p>
                    <p>
                        ТУ 14-1-5254-94
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Полосы стальные арматурные
                    </p>
                    <p>
                        DIN 488-2-1986
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Сетка стальная и проволока арматурные
                    </p>
                    <p>
                        DIN 488-4-1986
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Сталь арматурная термомеханически упрочненная для железобетонных конструкций
                    </p>
                    <p>
                        ГОСТ 10884-94
                    </p>
                </li>

                {/* Балки двутавровые  */}
                <li className={styles.listitemheader}>
                    <p className={styles.listitemsubheadertext}>
                        Балки двутавровые
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Балка двутавровая горячекатаная
                    </p>
                    <p>
                        ГОСТ 8239-89
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Балка двутавровая стальная специальная
                    </p>
                    <p>
                        ГОСТ 19425-74
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Балка двутавровая стальная горячекатаная с параллельными гранями полок
                    </p>
                    <p>
                        ГОСТ 26020-83
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Балка двутавровая
                    </p>
                    <p>
                        СТО АСЧМ 20-93
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Профили горячекатаные двутавровые узкие ряда I
                    </p>
                    <p>
                        DIN 1025-1-1995
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Профили горячекатаные двутавровые широкие рядов IPB и IB
                    </p>
                    <p>
                        DIN 1025-2-1995
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Профили горячекатаные двутавровые широкие легкой конструкции ряда IPBI
                    </p>
                    <p>
                        DIN 1025-3-1994
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Профили горячекатаные двутавровые широкие упрочненной конструкции ряда IPBv
                    </p>
                    <p>
                        DIN 1025-4-1994
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Профили горячекатаные двутавровые средней ширины ряда IPE
                    </p>
                    <p>
                        DIN 1025-5-1994
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Балки из горячекатаной стали Z-образные с закругленными кромками
                    </p>
                    <p>
                        DIN 1027-2004
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Сталь тавровая горячекатаная с острыми кромками
                    </p>
                    <p>
                        DIN 59051-2004
                    </p>
                </li>

                {/* Жесть  */}
                <li className={styles.listitemheader}>
                    <p className={styles.listitemsubheadertext}>
                        Жесть
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Жесть
                    </p>
                    <p>
                        ГОСТ 13345-85
                    </p>
                </li>

                {/* Катанка  */}
                <li className={styles.listitemheader}>
                    <p className={styles.listitemsubheadertext}>
                        Катанка
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Катанка из углеродистой стали обыкновенного качества
                    </p>
                    <p>
                        ГОСТ 30136-95
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Катанка для перетяжки на проволоку
                    </p>
                    <p>
                        ТУ 14-15-212-89
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Катанка для упаковки и других целей
                    </p>
                    <p>
                        ТУ 14-15-213-89
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Пруток стальной для волочения и/или холодной прокатки
                    </p>
                    <p>
                        DIN EN 10017-2005
                    </p>
                </li>
                <li className={styles.listitem}>
                    <p className={styles.listitemtext}>
                        Прутки стальные круглого сечения для холодной высадки и холодной экструзии
                    </p>
                    <p>
                        DIN EN 10108-2005
                    </p>
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
            </ul>
        </div>
    </>)
}