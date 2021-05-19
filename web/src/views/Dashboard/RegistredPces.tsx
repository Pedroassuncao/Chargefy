import React, { useEffect, useState } from 'react';
import { FiTrash, FiEye } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';

import mapIcon from '../../utils/mapIcon';

import noOrph from '../../images/no-orph.svg';

import DashSideBar from '../../components/DashSideBar';

import '../../styles/pages/dashboard.css';

import api from '../../services/api';
import Pce from '../Pce';
import { Link, useHistory } from 'react-router-dom';

interface Pce {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  approved: boolean;
}

export default function Registred() {
  const history = useHistory();
  const [pces, setPces] = useState<Pce[]>([]);

  function isApproved(pce: Pce) {
    return pce.approved;
  }

  useEffect(() => {
    api.get('pces').then((response) => {
      setPces(response.data);
    });
  }, []);

  const filteredPces = pces.filter(isApproved);

  async function handleRemove(id: any) {
    await api.post(`/pces/remove/${id}`);

    history.push('/removeSuccess');
  }

  return (
    <div id="page-registred">
      <DashSideBar />
      <div className="content-wrapper">
        <main className="dashboard-main">
          <div className="registred-pces">
            <div className="info">
              <h1>Postos de carregamento registados</h1>
              <p>{filteredPces.length} posto(s)</p>
            </div>
            <div className="cards-wrapper">
              {filteredPces.length === 0 ? (
                <img src={noOrph} alt="Sem Postos" className="no-orph" />
              ) : null}

              {filteredPces.map((pce) => {
                return (
                  <div key={pce.id} className="card">
                    <Map
                      key={pce.id}
                      center={[pce.latitude, pce.longitude]}
                      style={{ width: '100%', height: 280 }}
                      zoom={13}
                    >
                      <TileLayer
                      // url = "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                      />
                      <Marker
                        interactive={false}
                        icon={mapIcon}
                        position={[pce.latitude, pce.longitude]}
                      />
                      )
                    </Map>

                    <div className="card-info">
                      <h2>{pce.name}</h2>

                      <div className="card-buttons">
                        <Link
                          to={`/pces/${pce.id}`}
                          className="card-btn"
                        >
                          <FiEye size={20} />
                        </Link>
                        <button
                          onClick={() => handleRemove(pce.id)}
                          className="card-btn"
                        >
                          <FiTrash size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
