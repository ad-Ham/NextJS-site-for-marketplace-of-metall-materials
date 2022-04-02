export function MainPageHelp() {
    return (<>
        <div className="maindiv">
            <h3 className="helpheader">Здесь вы можете задать любой вопрос <strong>о нашем сайте</strong>!</h3>
            <input className="emailinput" type="text" placeholder="Введите e-mail для обратной связи" />
            <input className="probleminput" type="text" placeholder="Опишите вашу проблему или вопрос в двух словах" />
            <input className="problemdesrciptioninput" type="text" placeholder="Опишите вашу проблему или вопрос в двух словах" />
            <button className="sendbutton" type="button">Отправить</button>
        </div>
        <style jsx>{`
        .maindiv {
            margin-top:36px;
            margin-bottom: 357px ;
            }
        .helpheader { 
            text-align: center;  
            height: 33px;
            left: 373px;
            top: 272px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 30px;
            line-height: 99.69%;   
        }
        .emailinput {
            margin-top:38px;
            padding-left:34px;
            display: block;
            width: 1164px;
            height: 40px;
            left: 215px;
            top: 343px;
            background: #F5F5F5;
            border: 1px solid #000000;
            box-sizing: border-box;
            border-radius: 4px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 99.69%;
        }
        .probleminput {    
            margin-top:22px;  
            padding-left:34px;      
            display: block;
            width: 1164px;
            height: 40px;
            left: 215px;
            top: 405px;
            background: #F5F5F5;
            border: 1px solid #000000;
            box-sizing: border-box;
            border-radius: 4px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 99.69%;
        }
        .problemdesrciptioninput {  
            margin-top:48px;    
            padding-bottom: 93px;  
            padding-left:34px;
            padding            
            display: block;
            width: 1164px;
            height: 133px;
            left: 215px;
            top: 493px;
            background: #F5F5F5;
            border: 1px solid #000000;
            box-sizing: border-box;
            border-radius: 4px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 99.69%;
        }
        .sendbutton {
            margin-top:54px;
            display: block;
            width: 188px;
            height: 56px;
            left: 215px;
            top: 680px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 99.69%;
            background: #C4C4C4;
            border-radius: 4px;
        }
        `}</style>
    </>)
}