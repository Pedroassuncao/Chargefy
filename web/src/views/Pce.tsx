import React, { useEffect, useState } from 'react';

import { FiBatteryCharging, FiClock } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { useParams } from 'react-router-dom';

import '../styles/pages/pce.css';
import Sidebar from '../components/Sidebar';
import mapIcon from '../utils/mapIcon';

import noImages from '../images/no-images.svg';

import api from '../services/api';

interface Pce {
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  charger_type: string;
  opening_hours: string;
  images: Array<{
    id: number;
    url: string;
  }>;
}

interface PceParams {
  id: string;
}

export default function Pce() {
  const params = useParams<PceParams>();
  const [pce, setPce] = useState<Pce>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    api.get(`pces/${params.id}`).then((response) => {
      setPce(response.data);
    });
  }, [params.id]);

  if (!pce) {
    return <p>Loading...</p>;
  }

  return (
    <div id="page-pce">
      <Sidebar />
      <main>
        <div className="pce-details">
          <img
            src={
              pce.images.length === 0
                ? noImages
                : pce.images[activeImageIndex].url
            }
            alt={pce.name}
          />

          <div className="images">
            {pce.images.map((image, index) => {
              if (pce.images === []) return null;
              return (
                <button
                  key={image.id}
                  className={index === activeImageIndex ? 'active' : ''}
                  type="button"
                  onClick={() => {
                    setActiveImageIndex(index);
                  }}
                >
                  <img src={image.url} alt={pce.name} />
                </button>
              );
            })}
          </div>

          <div className="pce-details-content">
            <h1>{pce.name}</h1>
            <p>{pce.about}</p>

            <div className="map-container">
              <Map
                center={[pce.latitude, pce.longitude]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  // url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                  url="https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGVkcm9hc3N1bmNhbyIsImEiOiJja253N256cWcwOW1tMm9tcGNqZHFwOHFjIn0.Z077Z511SWshLZ4cw-hq-Q"  
                />
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[pce.latitude, pce.longitude]}
                />
              </Map>

              <footer>
                <a
                //evitar ataques
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.pt/maps/dir/?api=1&destination=${pce.latitude},${pce.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </div>

            <hr />

            <h2>Horário de funcionamento</h2>
            {/* <p>{pce.charger_type}</p> */}

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Todos os dias
                <br />
                {pce.opening_hours}
              </div>
              { pce.charger_type ? (
                <div className="open-on-weekends">
                  <FiBatteryCharging size={32} color="#39CC83" />
                  {pce.charger_type} <br />
                  
                </div>
              ) : (
                <div> </div>
              )}
            </div>

            
            <div className="me">
              <span>
                    Made with 💜 by Pedro Assunção, Pedro Rodrigues
                    {/* <FiHeart size={20} color="#472da0"/> */}
                    
              </span>
           
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}
