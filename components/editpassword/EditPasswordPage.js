export function EditPasswordPage() {
    return (<>
        <div className="maindiv">
            <h3 className="editpasswordheader">Смена пароля:</h3>
            <div className="inputs">
                <input className="currentpasswordinput" type="text" placeholder="Введите текущий пароль" />
                <input className="newpasswordinput" type="text" placeholder="Введите новый пароль" />
                <input className="verifypasswordinput" type="text" placeholder="Подтвердите новый пароль" />
            </div>
            <button className="savebutton" type="button">Сменить пароль</button>
        </div>
        <style jsx>{`
            .maindiv {
                margin: 47px 0 211px 0;
                width: 816px;
                height: 477px;
                left: 389px;
                top: 283px;
                background: #FFFFFF;
                box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);

            }
            .editpasswordheader {
                padding-top: 62px;
                margin-left: 280px;
                width: 258px;
                height: 29px;
                left: 669px;
                top: 345px;
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 600;
                font-size: 36px;
                line-height: 99.69%;
                display: flex;
                align-items: center;
                text-align: center;
            }
            .inputs {
                margin: 70px 0 0 247px;
            }
            .currentpasswordinput {
                display: block;
                margin: 0 80px 29px 0;
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
            .newpasswordinput {
                display: block;
                margin: 0 80px 15px 0;
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
            .verifypasswordinput {
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
            .savebutton {
                margin: 41px 0 0 247px;
                width: 328px;
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