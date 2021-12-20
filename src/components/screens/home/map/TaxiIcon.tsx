import logo from '../../../../assets/img/car.png'
import {FC} from "react";

interface ITaxi {
  title: string
  lng: number
  lat: number
}

const TaxiIcon:FC<ITaxi> = ({title, lng, lat}) => {
  return (
    <div className="map-icon">
      <img src={logo} alt=""/>
    </div>
  )
}

export default TaxiIcon