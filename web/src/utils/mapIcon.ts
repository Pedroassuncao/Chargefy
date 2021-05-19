import Leaflet from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [50, 68],
  iconAnchor: [25, 68],
  popupAnchor: [170, 2],
});

export default mapIcon;
