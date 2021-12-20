import logo from '../../../../assets/img/office.png'
import {FC} from "react";

interface IOffice {
  title: string
  street: string
  lng: number
  lat: number
}

const OfficeIcon:FC<IOffice> = ({title, lng, lat, street}) => {
  return (
    <div className="map-icon office">
      <img src={logo} alt=""/>
    </div>
  )
}

export default OfficeIcon