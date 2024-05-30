import "./maps.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";

export default function App() {
    const markers =[
        {
            geocode: [-0.9247883992009672, 100.41795467310912]
        }
    ]

    const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/1397/1397898.png",
        iconSize: [50, 50]
    })

    return (
        <div className="map-wrapper">
            <h2>Maps Of West Sumatra</h2>
            <MapContainer center={[-0.9247883992009672, 100.41795467310912]} zoom={9} className="leaflet-container">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {markers.map(marker => (
                <Marker position={marker.geocode} icon={customIcon}></Marker>
                ))
            }
            </MapContainer>
        </div>
    );
}
