import {useRef, useEffect} from 'react';
import {useAppSelector} from '../../hooks/index';

import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import useMap from '../../hooks/useMap';
import {Points} from '../../types/types';

import {URL_MARKER_DEFAULT} from '../../const/const'; //, URL_MARKER_CURRENT

type MapProps = {
  points: Points;
}

export default function Map({points}:MapProps): JSX.Element {
  const currentState = useAppSelector((state) => state);

  const city = currentState.currentCity;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  // const currentCustomIcon = leaflet.icon({
  //   iconUrl: URL_MARKER_CURRENT,
  //   iconSize: [40, 40],
  //   iconAnchor: [20, 40],
  // });

  useEffect(() => {
    if (map) {
      map.setView(city);
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.lat,
            lng: point.lng,
          },
          {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points]);

  return <div style={{height: '1000px'}} ref={mapRef}></div>;
}
