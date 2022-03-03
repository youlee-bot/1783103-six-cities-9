import {useRef, useEffect} from 'react';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import useMap from '../../hooks/useMap';
import {City, Points} from '../../types/types';

import {URL_MARKER_DEFAULT} from '../../const';

type MapProps = {
  city: City;
  points: Points;
};

export default function Map(props: MapProps): JSX.Element {
  const {points, city} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.lat,
            lng: point.lng,
          },
          {
            icon: currentCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points]);

  return <div style={{height: '1000px'}} ref={mapRef}></div>;
}
