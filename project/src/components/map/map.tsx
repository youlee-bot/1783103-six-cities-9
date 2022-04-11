import {useRef, useEffect, memo} from 'react';

import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import useMap from '../../hooks/use-map';
import {City, Points, Point} from '../../types/types';

import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const/const';

type MapProps = {
  points: Points;
  styleString:React.CSSProperties;
  city:City;
  hoveredCardPoints: Point|null;
}

function Map({points, styleString, city, hoveredCardPoints}:MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      map.setView(city);
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          },
          {
            icon: (point.latitude === hoveredCardPoints?.latitude && point.longitude === hoveredCardPoints?.longitude)
              ?
              currentCustomIcon
              :
              defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points, city, hoveredCardPoints, currentCustomIcon, defaultCustomIcon]);

  return <div style={styleString} ref={mapRef}></div>;
}

export default memo (Map);
