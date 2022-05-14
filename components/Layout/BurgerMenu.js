import Link from 'next/link'

export function BurgerMenu() {
  return (<>
    <div className="hamburger-menu">
      <input id="menutoggle" type="checkbox" />
      <label className="menubtn" htmlFor="menutoggle">
        <span></span>
      </label>

      <ul className="menubox">
        <hr></hr>
        <li><a className="menuitem" ><a className='menuelement'><Link href="/news">Новости</Link></a></a></li>
        <hr></hr>
        <li><a className="menuitem" ><Link href="/news">Аналитика</Link></a></li>
        <hr></hr>
        <li><a className="menuitem" ><Link href="/promos">Объявления</Link></a></li>
        <hr></hr>
        <li><a className="menuitem" ><Link href="/gosts">ГОСТы</Link></a></li>
        <hr></hr>
        <li><a className="menuitem" ><Link href="/news">Калькулятор металлурга</Link></a></li>
        <hr></hr>
        <li><a className="menuitem" ><Link href="/news">Справочник металлурга</Link></a></li>
        <hr></hr>
        <li><a className="menuitem" ><Link href="/news">Расчет ж/д тарифов</Link></a></li>
        <hr></hr>
        <li><a className="menuitem" ><Link href="/news">Полезные материалы</Link></a></li>
        <hr></hr>
        <li><a className="menuitem" ><Link href="/news">Прогнозы</Link></a></li>
        <hr></hr>
        <li><a className="menuitem" ><Link href="/news">Индекс цен</Link></a></li>
        <hr></hr>
        <li><a className="menuitem" ><Link href="/news">Индекс цен LME</Link></a></li>
        <hr></hr>
        <li><a className="menuitem" ><Link href="/news">Конференции</Link></a></li>
        <hr></hr>
      </ul>
    </div>
    <style jsx>{`

 #menutoggle {
  opacity: 0;
}

#menutoggle:checked ~ .menubtn > span {
  transform: rotate(45deg);
}
#menutoggle:checked ~ .menubtn > span::before {
  top: 0;
  transform: rotate(0);
}
#menutoggle:checked ~ .menubtn > span::after {
  top: 0;
  transform: rotate(90deg);
}
#menutoggle:checked ~ .menubox {
  visibility: visible;
  left: 0;
}

.menubtn {
  display: flex;
  align-items: center;
  position: fixed;
  top: 20px;
  left: 20px;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 1;
}

.menubtn > span {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #616161;
  transition-duration: .25s;
}
.menubtn > span::before{
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #616161;
  transition-duration: .25s;
}
.menubtn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #616161;
  transition-duration: .25s;
}
.menubtn > span::before {
  content: '';
  top: -8px;
}
.menubtn > span::after {
  content: '';
  top: 8px;
}

.menubox {
  display: block;
  position: fixed;
  visibility: hidden;
  top: 0;
  left: -100%;
  width: 60%;
  height: 100%;
  margin: 0;
  padding: 80px 0;
  list-style: none;
  text-decoration: none;
  background-color: #ECEFF1;
  box-shadow: 1px 0px 6px rgba(0, 0, 0, .2);
  transition-duration: .25s;
}

.menuitem {
  display: block;
  padding: 12px 24px;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition-duration: .25s;
}
.menuitem:hover {
  background-color: #CFD8DC;
}

.hamburger-menu {
  display: none;
  z-index: 1;
}

@media (max-width: 1150px) {
  .hamburger-menu {
    display: block;
  }
}

@media (max-width: 660px) {
  .menubox {
    width: 100%;
  }
}
		`}</style>
  </>)
}