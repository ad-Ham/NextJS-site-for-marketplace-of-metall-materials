import Head from 'next/head'
import { PromosMultiSelect } from '../../components/promos/PromosMultiSelect.js'
const axios = require('axios').default;
import { Button, Grid, Card, Title, Table, Space, Group } from '@mantine/core';

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
            <PromosMultiSelect/>
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