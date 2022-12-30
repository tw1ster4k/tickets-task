import './App.css';
import {cn} from "@bem-react/classname"
import { useState } from 'react';
import data from "./tickets.json"
import Air from "./pictures/air.png"
import Card from './Card/Card';

function App() {
  const cnApp = cn('App')
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)
  const [checked4, setChecked4] = useState(false)
  const [checked5, setChecked5] = useState(false)
  const [tickets, setTickets] = useState(data.tickets)

/* const arr = data.tickets.filter((el) => checked1? el.stops === 0 || 1 || 2 || 3 : checked2? el.stops === 0 : "" || checked3? el.stops === 1 : "" || checked4? el.stops === 2 : "" || checked5? el.stops === 3 : "") 



  setTickets(arr.length === 0 ? data.tickets : arr) */

  const all = data.tickets;
  const nullTransfers = data.tickets.filter(el => el.stops === 0);
  const oneTransfers = data.tickets.filter(el => el.stops === 1);
  const twoTransfers = data.tickets.filter(el => el.stops === 2);
  const threeTransfers = data.tickets.filter(el => el.stops === 3);
/* 
  let arr = [{checked: checked1, data: all}, {checked: checked2, data: nullTransfers}, {checked: checked3, data: oneTransfers}, {checked: checked4, data: twoTransfers}, {checked: checked5, data: threeTransfers}]
  
  const Func = () => {
     const filter = []

    for(let i = 0; i < arr.length; i++){
        if(!arr[i].checked === true && i !== 0){
          filter.push(arr[i].data)
        }else if(i === 0){
          filter.push(arr[i].data)
        }
    }
    console.log(filter)
  } */




 const All = () => {
  setChecked1(!checked1)
   if(!checked1) {
    setTickets(all)
  } 
}

const nullFunc = () => {
  setChecked2(!checked2)
  if(!checked2){  
    setTickets(nullTransfers)
  } 
}

const oneFunc = () => {
  setChecked3(!checked3)
      if(!checked3){  
        setTickets(oneTransfers)
      } 
}

const twoFunc = () => {
  setChecked4(!checked4)
   if(!checked4){
    setTickets(twoTransfers)
  } 
}

const threeFunc = () => {
  setChecked5(!checked5)
 if(!checked5){
    setTickets(threeTransfers)
  } 
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
            <p className={cnApp("Paragraph",{size:'small'})}><input type="checkbox" onChange={() => All()}  className={cnApp("Checkbox")} /> Все</p>
            <p className={cnApp("Paragraph",{size:'small'})}><input type="checkbox" onChange={() => nullFunc()} className={cnApp("Checkbox")} /> Без пересадок</p>
            <p className={cnApp("Paragraph",{size:'small'})}><input type="checkbox" onChange={() => oneFunc()} className={cnApp("Checkbox")} /> 1 пересадка</p>
            <p className={cnApp("Paragraph",{size:'small'})}><input type="checkbox" onChange={() => twoFunc()} className={cnApp("Checkbox")} /> 2 пересадки</p>
            <p className={cnApp("Paragraph",{size:'small'})}><input type="checkbox" onChange={() => threeFunc()} className={cnApp("Checkbox")} /> 3 пересадки</p>
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
