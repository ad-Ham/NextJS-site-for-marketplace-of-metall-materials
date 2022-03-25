import Link from 'next/link'

export function PromosPageList() {
    return (<>
        <div className='maindiv'><Link href="/promopage"><a>
            <div className="promosrow">
                <div className="listdate">
                    <p>
                        28.02.22
                    </p>
                </div>
                <div className="listcategory">
                    <p>
                        П.
                    </p>
                </div>
                <div className="listpromoheader">
                    <p>
                        Железная деталь для трактора
                    </p>
                </div>
                <div className="listorganization">
                    <p>
                        ООО "Тракторист"
                    </p>
                </div>
                <div className="listregion">
                    <p>
                        Ленингр...
                    </p>
                </div>
            </div>
        </a></Link></div>
        <style jsx>{`
            a {
                color: #000;
            }

            .promosrow {
				margin-top: 15px;
            }
            
            .listdate {
				display: inline-block;  
				margin-right: 14px;	 
				padding-top: 5px;             
                width: 139px;
                height: 30px;
                left: 0px;
                top: 0px;
                background: #EBEBEB;
                border-radius: 4px;
				align-items: center;
				text-align: center;	
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 99.69%;
            }

            .listcategory {
				display: inline-block;
				margin-right: 14px;	
				padding-top: 5px;
                width: 50px;
                height: 30px;
                left: 153px;
                top: 0px;
                background: #EBEBEB;
                border-radius: 4px;
				align-items: center;
				text-align: center;	
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 99.69%;
            }

            .listpromoheader {
				display: inline-block;
				margin-right: 14px;	
				padding-top: 5px;
                width: 300px;
                height: 30px;
                left: 217px;
                top: 0px;
                background: #EBEBEB;
                border-radius: 4px;
				align-items: center;
				text-align: center;	
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 99.69%;
            }

            .listorganization {
				display: inline-block;
				margin-right: 14px;	
				padding-top: 5px;
                width: 200px;
                height: 30px;
                left: 531px;
                top: 0px;
                background: #EBEBEB;
                border-radius: 4px;
				align-items: center;
				text-align: center;	
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 99.69%;
            }

            .listregion {
				display: inline-block;
				padding-top: 5px;
                width: 100px;
                height: 30px;
                left: 745px;
                top: 0px;
                background: #EBEBEB;
                border-radius: 4px;
				align-items: center;
				text-align: center;	
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 99.69%;
            }
		`}</style>
    </>)
}