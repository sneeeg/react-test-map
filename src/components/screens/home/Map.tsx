import GoogleMapReact from "google-map-react";
import React from "react";
import '../../../assets/styles/main.sass'
import '../../../assets/styles/map/map-icon.sass'
import carLogo from '../../../assets/img/car.png'
import TaxiIcon from "./map/TaxiIcon";
import OfficeIcon from "./map/OfficeIcon";

const Office = ({text, lat, lng}:{ text:string, lat:number, lng: number }) => <div><img src={carLogo} alt=""/></div>

const Map = () => {
  return (
    <div className="app">
      <GoogleMapReact
        bootstrapURLKeys={{key: String('AIzaSyD068qygIUNoq13lKWP0NSyOdfrwCJwnNE')}}
        defaultCenter={{
          lat: 1.285194,
          lng: 103.8522982
        }}
        defaultZoom={13}
      >
        <OfficeIcon
          title={'Office name'}
          lat={1.285194}
          lng={103.8522982}
          street={'Street Name'}
        />

        <TaxiIcon
          title={'Taxi 1'}
          lat={1.270950}
          lng={103.856426}
        />
        <TaxiIcon
          title={'Taxi 2'}
          lat={1.276767}
          lng={103.848608}
        />
        <TaxiIcon
          title={'Taxi 3'}
          lat={1.291363}
          lng={103.854987}
        />
        <TaxiIcon
          title={'Taxi 4'}
          lat={1.298592}
          lng={103.860346}
        />
        <TaxiIcon
          title={'Taxi 5'}
          lat={1.307148}
          lng={103.874392}
        />
      </GoogleMapReact>
    </div>
  )
}

export default Map