import "./Card.css"
import {cn} from "@bem-react/classname"
import Company from "../pictures/company.png"
import AirTransfer from "../pictures/airtransfer.png"


interface CardType{
        origin:string,
        origin_name:string,
        destination:string,
        destination_name:string,
        departure_date: string
        departure_time:string,
        arrival_date: string,
        arrival_time: string,
        stops: number,
        price: number;   
      
}

const Card = ({origin, origin_name, destination, destination_name, departure_date, departure_time,arrival_date,arrival_time,stops,price} : CardType) => {
    const cnCard = cn("Card")

  return (
    <div className={cnCard()}>
            <div className={cnCard("Price")}>
              <img src={Company} alt="logo"  className={cnCard("Logo")}/>
              <button className={cnCard("Buy")}>Купить за {price}₽</button>
            </div>
            <div className={cnCard("Data")}>
                      <div className={cnCard("Departure")}>
                      <p className={cnCard("Paragraph", {size:"big"})}>{departure_time}</p>
                      <p className={cnCard("Paragraph",{size:'small', positon:"underTime"})}>{origin}, {origin_name}</p>
                      <p className={cnCard("Paragraph",{size:'tiny', positon:"under"})}>{departure_date}</p>
                      </div>
                      <div className={cnCard('Transfer')}>
                      <p className={cnCard("Paragraph",{size:'tiny', positon:"upper"})}>{stops}  пересадки</p>
                            <img src={AirTransfer} alt="" className={cnCard("ImageTransfer")} />
                      </div>
                      <div className={cnCard("Landing")}>
                      <p className={cnCard("Paragraph", {size:"big"})}>{arrival_time}</p>
                      <p className={cnCard("Paragraph",{size:'small', positon:"underTime"})}>{destination_name}, {destination}</p>
                      <p className={cnCard("Paragraph",{size:'tiny', positon:"under"})}>{arrival_date}</p>
                      </div>
            </div>
          </div>
        
  )
}

export default Card