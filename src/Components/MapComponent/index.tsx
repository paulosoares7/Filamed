import { CircleMarker, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { LatLngExpression } from 'leaflet';
import { NavLink } from 'react-router-dom';
import './styles.css'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Importar sua imagem personalizada
import customMarkerIcon from '../../assets/maker.png';

// Criar o ícone personalizado
const customIcon = new L.Icon({
  iconUrl: customMarkerIcon, // Caminho da imagem
  iconSize: [38, 38], // Tamanho do ícone [largura, altura]
  iconAnchor: [19, 38], // Ponto de ancoragem do ícone [x, y]
  popupAnchor: [0, -38], // Ponto onde o popup será ancorado [x, y]
});
  
interface MarkerData {
    id: number;
    position: LatLngExpression; 
    popupText: string;
  }
  
export function SimpleMap (){
 
       const markerData: MarkerData[]= [
        // { id: 1, position: [-3.1018240888043658, -60.01423007175612], popupText: 'Instituto Da Mulher' },
        // { id: 2, position: [-3.0992852261011365, -60.013774567729136], popupText: 'Hospital e Pronto Socorro 28 de Agosto' },
        { id: 3, position: [-3.0886952989596503, -59.894349885419174], popupText: 'Hospital e Maternidade Chapot Prévost' },
        { id: 4, position: [-2.9960071074476144, -60.02961570817095], popupText: 'Hospital Delphina Rinaldi Abdel Aziz' },
        { id: 5, position: [-3.031471720506387, -59.963125460935], popupText: 'Hospital Universitário Francisca Mendes'},
        { id: 6, position: [-3.1181328500751087, -60.005040654731204], popupText: 'Fundação Hospital Adriano Jorge - Cachoeirinha' },
        { id: 7, position: [-3.038262958975492, -59.9412473029393], popupText: 'Hospital e Pronto Socorro Dr Aristóteles Platão Bezerra de Araújo' },
        { id: 8, position: [-3.0735283422653725, -59.96233066078121], popupText: 'Hospital e Pronto Socorro Dr. João Lúcio Pereira Machado' },
        { id: 9, position: [-3.0735390556682676, -59.961525998081704], popupText: 'Hospital e Pronto Socorro da Criança - Joãozinho' }
      ];
           
    return (  
            <MapContainer center={[-3.0971473025386764, -60.02327876847896]} zoom={14} scrollWheelZoom={true} className='mapContainer'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
             {markerData.map((marker) => (
                <Marker key={marker.id} position={marker.position} icon={customIcon}>
                    <Popup>
                        <span>💊 </span>
                        <span>{marker.popupText}</span>
                    </Popup>
                </Marker>
            ))}
            <Marker position={[-3.101490755753352, -60.01397440696059]}  icon={customIcon}>
                    <Popup>
                        <span>💊 </span>
                        <NavLink to="28-de-agosto" target="_blank" rel="noopener noreferrer">{'Hospital e Pronto Socorro 28 de Agosto'}</NavLink>
                    </Popup>
            </Marker>
            <CircleMarker
                center={[-3.0971473025386764, -60.02327876847896]}
                pathOptions={{ color: 'red' }}
                radius={10}
            >
                <Popup>Popup in CircleMarker</Popup>
                </CircleMarker>
        </MapContainer>
    
    )
}