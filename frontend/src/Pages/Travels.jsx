import '../Styles/Travels.css';
import { MapContainer, Marker, GeoJSON } from 'react-leaflet';
import worldGeoJSON from '../worldMap.json';
import L from 'leaflet';
import { useState } from 'react';

function Travels() {
    const [selectedLocation, setSelectedLocation] = useState(null);

    const geoStyle = {
        fillColor: "#25A9E0",
        weight: 1,
        color: "white",
        fillOpacity: 0.8
    };

    const mapPin = new L.Icon({
        iconUrl: "src/assets/mapPin.png",
        iconSize: [40, 35]
    });

    const locations = [
        { position: [48.861999, 2.333255], img: "src/assets/travel2.jpg", country: "FRANCE" },
        { position: [37.571751, 127.028848], img: "src/assets/travel1.jpg", country: "South Korea" },
        { position: [50.84677, 4.347253], img: "src/assets/travel3.jpg", country: "Belgium" },
        { position: [55.760923, 37.610743], img: "src/assets/travel4.jpg", country: "Russia" },
        { position: [22.292952, 114.147375], img: "src/assets/travel5.jpg", country: "Hong Kong" },
        { position: [35.721663, 139.963889], img: "src/assets/travel6.jpg", country: "Japan" },
        { position: [1.280963, 103.912629], img: "src/assets/travel7.jpg", country: "Singapore" },
        { position: [-42.644982, 172.411135], img: "src/assets/travel8.jpg", country: "New Zealand" },
    ];

    return (
        <>
            <div className='mapContainer'>
                <MapContainer className='map' center={[57.06, -14.53]} zoom={1.4} scrollWheelZoom={false}>
                    <GeoJSON data={worldGeoJSON} style={geoStyle} />
                    {locations.map((loc, index) => (
                        <Marker
                            key={index}
                            icon={mapPin}
                            position={loc.position}
                            eventHandlers={{
                                click: () => setSelectedLocation(loc)
                            }}
                        />
                    ))}
                </MapContainer>
            </div>

            {selectedLocation && (
                <div className="modalOverlay" onClick={() => setSelectedLocation(null)}>
                    <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedLocation.img} alt={selectedLocation.country} className="modalImg" />
                        <h2 className="modalCountry">{selectedLocation.country}</h2>
                        <button className="closeBtn" onClick={() => setSelectedLocation(null)}>×</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Travels;
