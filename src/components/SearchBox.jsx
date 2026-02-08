import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps';
import { useCallback, useEffect, useState } from 'react';

// Components
import Icon from '~/components/Icon';
import PlaceAutocompleteInput from '~/components/PlaceAutocompleteInput';

// Deps
import './SearchBox.scss';

const SearchBox = ({ onSelectAutocompletePlace }) => {
   const map = useMap();
   const googleMaps = useMapsLibrary('places');

   const [placeService, setPlaceService] = useState(null);

   useEffect(() => {
      if (googleMaps && map) {
         setPlaceService(new googleMaps.PlacesService(map));
      }
   }, [map, googleMaps]);

   const handlePlaceSelect = useCallback(
      (autocompletePlace) => {
         onSelectAutocompletePlace(autocompletePlace);
      },
      [placeService],
   );

   return (
      <div className="SearchBox">
         <label className="label">Location</label>

         <div className="input-group">
            <PlaceAutocompleteInput onPlaceSelect={handlePlaceSelect} />
         </div>
      </div>
   );
};

export default SearchBox;
