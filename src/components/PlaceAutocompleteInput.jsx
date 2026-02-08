import { useMapsLibrary } from '@vis.gl/react-google-maps';
import { useEffect, useRef, useState } from 'react';

const PlaceAutocompleteInput = ({ onPlaceSelect }) => {
   const [placeAutocomplete, setPlaceAutocomplete] = useState(null);
   const inputRef = useRef(null);
   const places = useMapsLibrary('places');

   useEffect(() => {
      if (!places || !inputRef.current) return;

      const options = {
         fields: ['place_id', 'geometry', 'name', 'formatted_address'],
      };

      setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
   }, [places]);

   useEffect(() => {
      if (!placeAutocomplete) return;

      placeAutocomplete.addListener('place_changed', () => {
         onPlaceSelect(placeAutocomplete.getPlace());
      });
   }, [onPlaceSelect, placeAutocomplete]);

   return (
      <div className="PlaceAutocompleteInput">
         <input ref={inputRef} />
      </div>
   );
};

export default PlaceAutocompleteInput;
