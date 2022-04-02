export function JurData() {
    return (<>
        <div className="maindiv">
            <h3 className="editprofileheader">Юридические данные</h3>
            <div className="inputs">
                <div className="firstrow">
                    <label className="firmname">Название фирмы:<input className="firmnameinput" type="text" placeholder="Введите название вашей фирмы" /></label>
                    <label className="adress">Юридический адрес:<input className="adressinput" type="text" placeholder="Введите юридический адрес фирмы" /></label>
                </div>
                <div className="secondrow">
                    <label className="inn">ИНН:<input className="inninput" type="text" placeholder="Введите ИНН" /></label>
                    <label className="ogrn">ОГРН:<input className="ogrninput" type="text" placeholder="Введите ОГРН" /></label>
                </div>
            </div>
            <button className="savebutton" type="button">Сохранить изменения</button>
        </div>
        <style jsx>{`
            .maindiv {
                margin: 80px 0 158px 0;
                width: 735px;
                height: 264px;
                left: 430px;
                top: 316px;
            }
            .editprofileheader {
                width: 431px;
                height: 29px;
                left: 430px;
                top: 316px;
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 600;
                font-size: 36px;
                line-height: 99.69%;
                display: flex;
                align-items: center;
            }
            .inputs {
                margin-top: 13px;
            }
            .firstrow, .secondrow {
    			display: flex;
				flex-direction: row;
                margin-bottom: 13px;
            }
            .firmname {
                display: block;
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 99.69%;
            }
            .firmnameinput {
                display: block;
                margin: 7px 80px 0 0;
                padding: 0 7px;
                width: 328px;
                height: 26px;
                left: 430px;
                top: 410px;
                background: #EAEAEA;
                border: 1px solid #000000;
                box-sizing: border-box;
                border-radius: 4px;
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 99.69%;
            }
            .inn {
                display: block; font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 99.69%;
            }
            .inninput {
                display: block;
                margin: 7px 80px 0 0;
                padding: 0 7px;
                width: 328px;
                height: 26px;
                left: 430px;
                top: 473px;
                background: #EAEAEA;
                border: 1px solid #000000;
                box-sizing: border-box;
                border-radius: 4px;
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 99.69%;
            }
            .adress {
                display: block;font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 99.69%;
            }
            .adressinput {
                display: block;
                margin: 7px 80px 0 0;
                padding: 0 7px;
                width: 328px;
                height: 26px;
                left: 837px;
                top: 410px;
                background: #EAEAEA;
                border: 1px solid #000000;
                box-sizing: border-box;
                border-radius: 4px;
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 99.69%;
            }
            .ogrn {
                display: block;font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 99.69%;
            }
            .ogrninput {
                display: block;
                margin: 7px 80px 0 0;
                padding: 0 7px;
                width: 328px;
                height: 26px;
                left: 837px;
                top: 473px;
                background: #EAEAEA;
                border: 1px solid #000000;
                box-sizing: border-box;
                border-radius: 4px;
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 99.69%;
            }
            .savebutton {
                margin: 25px 0 25px 205px;
                width: 324px;
                height: 47px;
                left: 631px;
                top: 603px;
                background: #C4C4C4;
                border-radius: 5px;
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-size: 24px;
                line-height: 99.69%;
                align-items: center;
                text-align: center;
            }

        `}</style>
    </>)
}