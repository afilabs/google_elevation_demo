import { useMap } from '@vis.gl/react-google-maps';
import { useEffect } from 'react';

// Deps
import { getLatLng } from '~/utils';

const MapHandler = ({ place }) => {
   const map = useMap();

   useEffect(() => {
      if (!map || !place) return;

      const position = getLatLng(place.geometry.location);
      map.panTo(position);

      if (map.getZoom() < 13) {
         map.setZoom(14);
      }
   }, [map, place]);

   return null;
};

export default MapHandler;
