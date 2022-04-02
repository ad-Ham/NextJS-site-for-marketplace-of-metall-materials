export function YourData() {
    return (<>
        <div className="maindiv">
            <h3 className="editprofileheader">Ваши данные</h3>
            <div className="inputs">
                <div className="firstrow">
                    <label className="surname">Фамилия:<input className="surnameinput" type="text" placeholder="Введите вашу фамилию" /></label>
                    <label className="email">Email:<input className="emailinput" type="text" placeholder="Введите ваш Email" /></label>
                </div>
                <div className="secondrow">
                    <label className="name">Имя:<input className="nameinput" type="text" placeholder="Введите ваше имя" /></label>
                    <label className="tel">Телефон:<input className="telinput" type="text" placeholder="Введите ваш номер телефона" /></label>
                </div>
                <div className="thirdrow">
                    <label className="fathername">Отчество:<input className="fathernameinput" type="text" placeholder="Введите ваше отчество" /></label>
                    <label className="login">Логин:<input className="logininput" type="text" placeholder="Введите ваш логин" /></label>
                </div>
            </div>
            <button className="savebutton" type="button">Сохранить изменения</button>
            <hr></hr>
        </div>
        <style jsx>{`
            .maindiv {
                margin-top: 80px;
                width: 735px;
                height: 359px;
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
                margin-top: 41px;
            }
            .firstrow, .secondrow, .thirdrow {
    			display: flex;
				flex-direction: row;
                margin-bottom: 13px;
            }
            .surname {
                display: block;
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 99.69%;
            }
            .surnameinput {
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
            .name {
                display: block; font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 99.69%;
            }
            .nameinput {
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
            .fathername {
                display: block;font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 99.69%;
            }
            .fathernameinput {
                display: block;
                margin: 7px 80px 0 0;
                padding: 0 7px;
                width: 328px;
                height: 26px;
                left: 430px;
                top: 536px;
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
            .email {
                display: block;font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 99.69%;
            }
            .emailinput {
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
            .tel {
                display: block;font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 99.69%;
            }
            .telinput {
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
            .login {
                display: block;font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 99.69%;
            }
            .logininput {
                display: block;
                margin: 7px 80px 0 0;
                padding: 0 7px;
                width: 328px;
                height: 26px;
                left: 837px;
                top: 536px;
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
                margin: 41px 0 25px 205px;
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