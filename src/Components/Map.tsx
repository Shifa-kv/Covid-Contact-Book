import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import image from '../Assets/images/location.svg'
import { icon } from 'leaflet';

const Map = ({ data }: any) => {

  return (
    <MapContainer center={[30, 70]} zoom={3} scrollWheelZoom={false} style={{ height: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        data.map((doc: any, index: number) => {
          const lat = doc?.countryInfo.lat;
          const lon = doc?.countryInfo?.long;
          return <Marker
            position={[lat, lon]}
            icon={icon({ iconUrl: image, iconSize: [30, 41], iconAnchor: [15, 41] })}
            key={index}
          >
            <Popup>
              <ul>
                <li className='font-bold mb-1'>{doc.country}, {doc.continent}</li>
                <li>Total cases: <span className='text-red-700 font-semibold'>{doc.cases}</span></li>
                <li>Active cases: <span className='text-red-700 font-semibold'>{doc.active}</span></li>
                <li>Recovered cases: <span className='text-red-700 font-semibold'>{doc.recovered}</span></li>
                <li>Deaths: <span className='text-red-700 font-semibold'>{doc.deaths}</span></li>
              </ul>
            </Popup>
          </Marker>
        })
      }
    </MapContainer>
  );
};

export default Map;
