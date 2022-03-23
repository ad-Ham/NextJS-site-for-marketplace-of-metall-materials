export function PromosCategoriesSelector() {
    return (<>
        <div className="maindiv">
            <div className="categoriesselector">
                <h2 className="categories">Категории</h2>
                <select className='firstcategoryselector'>
                    <option value="1">Черные металлы</option>
                    <option value="2">Черные металлы</option>
                </select>
                <select className='secondcategoryselector'>
                    <option value="1">Цветные металлы</option>
                    <option value="2">Цветные металлы</option>
                </select>
                <select className='thirdcategoryselector'>
                    <option value="1">Сырье</option>
                    <option value="2">Сырье</option>
                </select>
                <select className='fourthcategoryselector'>
                    <option value="1">Прочее</option>
                    <option value="2">Прочее</option>
                </select>
                <select className='fifthcategoryselector'>
                    <option value="1">Услуги</option>
                    <option value="2">Услуги</option>
                </select>
            </div>
        </div>
        <style jsx>{`
            .categories {
                margin-bottom: 16px;
                width: 233px;
                height: 22px;
                left: 240px;
                top: 270px;
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
                line-height: 99.69%;
            }

			.categoriesselector {
                margin-top:25px;
                padding: 9px 42px 16px 25px;
                width: 300px;
                height: 240px;
                left: 215px;
                top: 261px;
                background: #FFFFFF;
                box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
                border-radius: 4px;
			}
            .firstcategoryselector, .secondcategoryselector, .thirdcategoryselector, .fourthcategoryselector {
                display: block;
                margin-bottom: 16px;
                width: 250px;
                height: 22px;
                left: 240px;
                top: 308px;
                border: none;
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 99.69%;
            }
            .fifthcategoryselector {
                display: block;
                margin-bottom: 19px;
                width: 250px;
                height: 22px;
                left: 240px;
                top: 308px;
                border: none;
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 99.69%;
            }
		`}</style>
    </>)
}