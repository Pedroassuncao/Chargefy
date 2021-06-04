import React, { FormEvent, useState, ChangeEvent } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';

import { FiPlus } from 'react-icons/fi';

import '../styles/pages/create-pce.css';
import Sidebar from '../components/Sidebar';
import mapIcon from '../utils/mapIcon';
import api from '../services/api';
import { useHistory } from 'react-router-dom';

export default function CreatePce() {
  const [userPosition, setUserPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  navigator.geolocation.getCurrentPosition((position) => {
    setUserPosition({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  });

  const history = useHistory();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [charger_type, setChargerType] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  // const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;
    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { latitude, longitude } = position;

    const data = new FormData();

    data.append('name', name);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('about', about);
    data.append('charger_type', charger_type);
    data.append('opening_hours', opening_hours);
    // data.append('open_on_weekends', String(open_on_weekends));

    images.forEach((image) => {
      data.append('images', image);
    });

    await api.post('/pces', data);

    history.push('/success');
  }

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }
    const selectedImages = Array.from(event.target.files);
    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map((image) => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectedImagesPreview);
  }

  return (
    <div id="page-create-pce">
      <Sidebar />
      <main>
        <form onSubmit={handleSubmit} className="create-pce-form">
          <fieldset>
            <legend>Inserir dados do Posto</legend>

            <Map
              // center={[userPosition.latitude, userPosition.longitude]}
              center={ [41.1438288, -8.6075782] }
              style={{ width: '100%', height: 280 }}
              zoom={13}
              onClick={handleMapClick}
            >
              <TileLayer
              // url = "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                 url="https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGVkcm9hc3N1bmNhbyIsImEiOiJja253N256cWcwOW1tMm9tcGNqZHFwOHFjIn0.Z077Z511SWshLZ4cw-hq-Q"
              />

              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea
                id="name"
                maxLength={300}
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {previewImages.map((image) => {
                  return <img key={image} src={image} alt={name} />;
                })}
                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15D691" />
                </label>
              </div>

              <input
                multiple
                onChange={handleSelectImages}
                type="file"
                id="image[]"
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Detalhes do carregador</legend>

            <div className="input-block">
              <label htmlFor="instructions">Tipo de carregador</label>
              <textarea
                id="instructions"
                value={charger_type}
                onChange={(e) => setChargerType(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário</label>
              <input
                id="opening_hours"
                value={opening_hours}
                onChange={(e) => setOpeningHours(e.target.value)}
              />
            </div>

            {/* <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button
                  type="button"
                  className={open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </button>
                <button
                  type="button"
                  className={!open_on_weekends ? 'disactive' : ''}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </button>
              </div>
            </div> */}
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
