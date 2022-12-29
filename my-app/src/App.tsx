import './App.css';
import {cn} from "@bem-react/classname"
import { useState } from 'react';
import data from "./tickets.json"
import Air from "./pictures/air.png"
import Company from "./pictures/company.png"
import AirTransfer from "./pictures/airtransfer.png"

function App() {
  const cnApp = cn('App')
  const [tickets, setTickets] = useState(data.tickets)
  console.log(tickets)

  
  

  return (
    <div className={cnApp()}>
      <img src={Air} alt="logo" className={cnApp("Image")} />

        <div className={cnApp('Content')}>
          <div className={cnApp('Parameters')}>
            <div className={cnApp("Currency")}>
              <p className={cnApp("Paragraph")}>Валюта</p>
              <button className={cnApp("Button")}>RUB</button>
              <button className={cnApp("Button")}>USD</button>
              <button className={cnApp("Button")}>EUR</button>
            </div>

            <div className={cnApp("Transfers")}>
            <p className={cnApp("Paragraph")}>Количество пересадок</p>
            <p className={cnApp("Paragraph",{size:'small'})}><input type="checkbox" className={cnApp("Checkbox")} /> Все</p>
            <p className={cnApp("Paragraph",{size:'small'})}><input type="checkbox" className={cnApp("Checkbox")} /> Без пересадок</p>
            <p className={cnApp("Paragraph",{size:'small'})}><input type="checkbox" className={cnApp("Checkbox")} /> 1 пересадка</p>
            <p className={cnApp("Paragraph",{size:'small'})}><input type="checkbox" className={cnApp("Checkbox")} /> 2 пересадки</p>
            <p className={cnApp("Paragraph",{size:'small'})}><input type="checkbox" className={cnApp("Checkbox")} /> 3 пересадки</p>
            </div>

          </div>
          <div className={cnApp("Tickets")}>
            <div className={cnApp("Price")}>
              <img src={Company} alt="logo"  className={cnApp("Logo")}/>
              <button className={cnApp("Buy")}>Купить за 20000₽</button>
            </div>
            <div className={cnApp("Data")}>
                      <div className={cnApp("Departure")}>
                      <p className={cnApp("Paragraph", {size:"big"})}>9:25</p>
                      <p className={cnApp("Paragraph",{size:'small', positon:"underTime"})}>VVO, Владивосток</p>
                      <p className={cnApp("Paragraph",{size:'tiny', positon:"under"})}>9 окт 2018, Пт</p>
                      </div>
                      <div className={cnApp('Transfer')}>
                      <p className={cnApp("Paragraph",{size:'tiny', positon:"upper"})}>1 пересадка</p>
                            <img src={AirTransfer} alt="" className={cnApp("ImageTransfer")} />
                      </div>
                      <div className={cnApp("Landing")}>
                      <p className={cnApp("Paragraph", {size:"big"})}>11:45</p>
                      <p className={cnApp("Paragraph",{size:'small', positon:"underTime"})}>Тель-Авив, TLV</p>
                      <p className={cnApp("Paragraph",{size:'tiny', positon:"under"})}>10 окт 2018, Пт</p>
                      </div>
            </div>
          </div>

        </div>

    </div>
  );
}

export default App;
