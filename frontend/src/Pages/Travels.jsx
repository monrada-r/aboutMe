import '../Styles/Travels.css'
import { MapContainer, Marker, Popup, GeoJSON } from 'react-leaflet'
import worldGeoJSON from '../worldMap.json'
import L from 'leaflet'

function Travels() {

    const geoStyle = {
        fillColor: "#25A9E0",
        weight: 1,
        color: "white",
        fillOpacity: 0.8
    };

    const mapPin = new L.Icon({
        iconUrl: "src/assets/mapPin.png",
        iconSize: [40, "auto"]
    })

    return (
        <>
            <div className='mapContainer'>
                <MapContainer className='map' center={[57.061332611927185, -14.539058370474153]} zoom={1.4} scrollWheelZoom={false}>
                    <GeoJSON data={worldGeoJSON} style={geoStyle} />
                    <Marker icon={mapPin} position={[48.861999081259896, 2.333254909509487]}>
                        <Popup >
                            <div className='popup'><img className="img" src="src/assets/travel2.jpg" alt="img2" />
                                <h2 className='country'>FRANCE</h2></div>
                        </Popup>
                    </Marker>
                    <Marker icon={mapPin} position={[37.57175091932262, 127.02884800890774]}>
                        <Popup >
                            <div className='popup'><img className="img" src="src/assets/travel1.jpg" alt="img1" />
                                <h2 className='country'>South Korea</h2>
                            </div>
                        </Popup>
                    </Marker>
                    <Marker icon={mapPin} position={[50.84677002983734, 4.347252811523467]}>
                        <Popup >
                            <div className='popup'>
                                <img className="img" src="src/assets/travel3.jpg" alt="img1" />
                                <h2 className='country'>Belgium</h2>
                            </div>
                        </Popup>
                    </Marker>
                    <Marker icon={mapPin} position={[55.76092350593521, 37.610743237210244]}>
                        <Popup >
                            <div className='popup'>
                                <img className="img" src="src/assets/travel4.jpg" alt="img1" />
                                <h2 className='country'>Russia</h2>
                            </div>
                        </Popup>
                    </Marker>
                    <Marker icon={mapPin} position={[22.2929524481661, 114.14737463481997]}>
                        <Popup >
                            <div className='popup'>
                                <img className="img" src="src/assets/travel5.jpg" alt="img1" />
                                <h2 className='country'>Hong Kong</h2>
                            </div>
                        </Popup>
                    </Marker>
                    <Marker icon={mapPin} position={[35.721662935783684, 139.96388884681872]}>
                        <Popup >
                            <div className='popup'>
                                <img className="img" src="src/assets/travel6.jpg" alt="img1" />
                                <h2 className='country'>Japan</h2>
                            </div>
                        </Popup>
                    </Marker>
                    <Marker icon={mapPin} position={[1.2809630762671826, 103.91262851742277]}>
                        <Popup >
                            <div className='popup'>
                                <img className="img" src="src/assets/travel7.jpg" alt="img1" />
                                <h2 className='country'>Singapore</h2>
                            </div>
                        </Popup>
                    </Marker>
                    <Marker icon={mapPin} position={[-42.644981767600335, 172.41113513992087]}>
                        <Popup >
                            <div className='popup'>
                                <img className="img" src="src/assets/travel8.jpg" alt="img1" />
                                <h2 className='country'>New Zealand</h2>
                            </div>
                        </Popup>
                    </Marker>

                </MapContainer>
            </div>

        </>



    )

}

export default Travels