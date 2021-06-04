import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight, FiArrowLeft, FiHome } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import '../styles/pages/pces-map.css';

import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';
// import placeholder from '../images/placeholder.svg';
import mapIconLoc from '../utils/mapLoc';
import api from '../services/api';
import Pce from './Pce';

interface Pce {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  approved: boolean;
}

function PcesMap() {
  const [position, setPosition] = useState({ latitude: 41.1438288, longitude: -8.6075782 });

  const [pces, setPces] = useState<Pce[]>([]);

  useEffect(() => {
    api.get('pces').then((response) => {
      setPces(response.data);
    });

    navigator.geolocation.getCurrentPosition((position) => {
      setPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} width="150" alt="Logo" />

          <h2>Escolha um Posto no mapa</h2>

          <p>Como é facil encontrar um posto :)</p>
        </header>

        <footer>
          <p>Sua localização: </p>
          <strong>Latidude: {position.latitude}</strong>
          <span>Longitude: {position.longitude}</span>

          <Link to="/dashboard/registred" className="dash-button">
          <FiHome size={25} />
          </Link>

          <Link to="/" className="home-back">
            <FiArrowLeft size={26} color="#FFF" />
          </Link>


        </footer>
      </aside>

      <Map
        center={[position.latitude, position.longitude]}
        zoom={13}
        style={{ width: '100%', height: '100%', zIndex: 0 }}
      >
        <TileLayer
          //  url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          url="https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGVkcm9hc3N1bmNhbyIsImEiOiJja253N256cWcwOW1tMm9tcGNqZHFwOHFjIn0.Z077Z511SWshLZ4cw-hq-Q"
        ></TileLayer>

        {pces.map((pce) => {
          if (!pce.approved) return null;
          return (
            <Marker
              position={[pce.latitude, pce.longitude]}
              icon={mapIcon}
              key={pce.id}
            >
              <Marker
              position={[position.latitude, position.longitude]}
              icon={mapIconLoc}

              ></Marker>
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {pce.name}
                <Link to={`/pces/${pce.id}`}>
                  <FiArrowRight size={20} color="#FFF" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>

      <Link to="/pces/create" className="create-pce">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default PcesMap;
