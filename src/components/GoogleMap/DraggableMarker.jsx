import { AdvancedMarker, InfoWindow, Pin, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';

// Deps
import { getLatLng } from '~/utils';
import './Marker.scss';

const DraggableMarker = ({ place, reversePlace, elevation, onDragEnd }) => {
   const [position, setPosition] = useState(() => getLatLng(place.geometry.location));
   const [infoOpen, setInfoOpen] = useState(false);
   const [markerRef, marker] = useAdvancedMarkerRef();

   const handleDragEnd = (e) => {
      const location = { lat: e.latLng.lat(), lng: e.latLng.lng() };
      setPosition(location);
      onDragEnd(location);
   };

   useEffect(() => {
      setPosition(getLatLng(place.geometry.location));
      setInfoOpen(true);
   }, [place]);

   return (
      <>
         <AdvancedMarker
            ref={markerRef}
            draggable={true}
            zIndex={2}
            position={position}
            onDragEnd={handleDragEnd}
            onClick={() => setInfoOpen((prev) => !prev)}
         >
            <Pin />
         </AdvancedMarker>

         {infoOpen && marker && (
            <InfoWindow
               anchor={marker}
               onCloseClick={() => setInfoOpen(false)}
               headerContent={<h4>{reversePlace?.formatted_address}</h4>}
            >
               <div className="info-location">
                  <div className="coordinates">
                     <strong>Coordinates:</strong> {position.lat.toFixed(6)}, {position.lng.toFixed(6)}
                  </div>
                  {elevation && (
                     <div className="elevation">
                        <strong>Elevation:</strong>{' '}
                        {elevation.elevation.toFixed(2)} meters ({(elevation.elevation * 3.28084).toFixed(2)} feet)
                        <div className="resolution">
                           <small>Resolution: {elevation.resolution.toFixed(2)} meters</small>
                        </div>
                     </div>
                  )}
               </div>
            </InfoWindow>
         )}
      </>
   );
};

export default DraggableMarker;
