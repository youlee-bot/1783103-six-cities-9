import {useRef, useEffect} from 'react';
import {useAppSelector} from '../../hooks/index';

import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import useMap from '../../hooks/useMap';
import {Points} from '../../types/types';

import {URL_MARKER_DEFAULT} from '../../const/const';

export default function Map(): JSX.Element {
  const currentState = useAppSelector((state) => state);
  const city = currentState.currentCity;
  const offers = currentState.currentOffers;

  const prearePoints = () => {
    const points:Points = [];

    offers.forEach((offer) => {
      points.push(offer.points);
    });

    return points;
  };

  const points = prearePoints();


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
