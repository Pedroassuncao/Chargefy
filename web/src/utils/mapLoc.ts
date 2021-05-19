import Leaflet from 'leaflet';

import mapMarkerLoc from '../images/placeholder.svg';

const mapIconLoc = Leaflet.icon({
  iconUrl: mapMarkerLoc,

  iconSize: [50, 68],
  iconAnchor: [25, 68],
  popupAnchor: [170, 2],
});

export default mapIconLoc;
