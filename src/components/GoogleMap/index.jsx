import { Map } from '@vis.gl/react-google-maps';

// Compoents
import MapHandler from './MapHandler';
import DraggableMarker from './DraggableMarker';

// Deps
const DEFAULT_CENTER = { lat: 49.25307278849622, lng: -123.12095840000302 };

const GoogleMap = ({ autocompletePlace, reversePlace, elevation, onDragEnd }) => {

   return (
      <div className="GoogleMap">
         <Map
            style={{
               height: '100dvh',
               width: '100dvw',
            }}
            defaultZoom={12}
            mapId={import.meta.env.VITE_GOOGLE_MAP_ID}
            defaultCenter={DEFAULT_CENTER}
            gestureHandling="greedy"
            disableDefaultUI
            reuseMaps
         >
            <MapHandler place={autocompletePlace} />

            {autocompletePlace && (
               <DraggableMarker
                  place={autocompletePlace}
                  reversePlace={reversePlace}
                  elevation={elevation}
                  onDragEnd={onDragEnd}
               />
            )}
         </Map>
      </div>
   );
};

export default GoogleMap;
