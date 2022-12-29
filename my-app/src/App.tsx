import './App.css';
import {cn} from "@bem-react/classname"
import { useState } from 'react';
import data from "./tickets.json"
import Air from "./pictures/air.png"
import Card from './Card/Card';

function App() {
  const cnApp = cn('App')
  const [tickets, setTickets] = useState(data.tickets)

  console.log(tickets)
  
 
  const All = () => {
    
    const all = data.tickets
    setTickets(all)
    
  }

  const nullTransfers =  () => {
    
    const zero = data.tickets.filter((el) => el.stops === 0)
    setTickets(zero)
    
  }

  const oneTransfers = () => {
   
    const one = data.tickets.filter((el) => el.stops === 1)
    setTickets(one)
    
  }

  const twoTransfers = () => {
    
    const two = data.tickets.filter((el) => el.stops === 2)
    setTickets(two)
    
  }

  const threeTransfers = () => {
      
        const three = data.tickets.filter((el) => el.stops === 3)
        setTickets(three)
  
  }

  

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
            <p className={cnApp("Paragraph",{size:'small'})}><input type="checkbox" onChange={All} className={cnApp("Checkbox")} /> Все</p>
            <p className={cnApp("Paragraph",{size:'small'})}><input type="checkbox" onChange={nullTransfers} className={cnApp("Checkbox")} /> Без пересадок</p>
            <p className={cnApp("Paragraph",{size:'small'})}><input type="checkbox" onChange={oneTransfers} className={cnApp("Checkbox")} /> 1 пересадка</p>
            <p className={cnApp("Paragraph",{size:'small'})}><input type="checkbox" onChange={twoTransfers} className={cnApp("Checkbox")} /> 2 пересадки</p>
            <p className={cnApp("Paragraph",{size:'small'})}><input type="checkbox" onChange={threeTransfers}  className={cnApp("Checkbox")} /> 3 пересадки</p>
            </div>

          </div>
          <div>
          {tickets.map((el, index) =>
            <Card origin={el.origin} origin_name={el.origin_name} destination={el.destination} destination_name={el.destination_name} departure_date={el.departure_date} departure_time={el.departure_time} arrival_date={el.arrival_date} arrival_time={el.arrival_time} stops={el.stops} price={el.price}  key={index} />
            )
          }
          </div>

        </div>

    </div>
  );
}

export default App;
