'use client';
import React from 'react';
import L from 'leaflet';
import MarkerIcon from '../../../../node_modules/leaflet/dist/images/marker-icon.png';
import MarkerShadow from '../../../../node_modules/leaflet/dist/images/marker-shadow.png';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

type Props = {};

const Map = (props: Props) => {
	return (
		<>
			<MapContainer
				center={[51.505, -0.09]}
				zoom={13}
				scrollWheelZoom={true}
				style={{ height: '100%', width: '100%' }}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker
					position={[51.505, -0.09]}
					icon={
						new L.Icon({
							iconUrl: MarkerIcon.src,
							iconRetinaUrl: MarkerIcon.src,
							iconSize: [25, 41],
							iconAnchor: [12.5, 41],
							popupAnchor: [0, -41],
							shadowUrl: MarkerShadow.src,
							shadowSize: [41, 41],
						})
					}
				>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</>
	);
};

export default Map;
