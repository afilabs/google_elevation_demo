import { APIProvider } from '@vis.gl/react-google-maps';
import { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import GoogleMap from '~/components/GoogleMap';
import SearchBox from '~/components/SearchBox';

// Deps
import './App.scss';

function App() {
   const [autocompletePlace, setAutocompletePlace] = useState(null);
   const [elevation, setElevation] = useState(null);

   const handleSearchPlace = async ({ lat, lng }) => {

      // Fetch elevation data
      console.log('Fetching elevation for:', lat, lng);
      try {
         const elevationRes = await axios.get(`${import.meta.env.VITE_API_URL}/elevation`, {
            params: { lat, lng },
         });
         console.log('Elevation response:', elevationRes);
         if (elevationRes.data && elevationRes.data.results && elevationRes.data.results.length > 0) {
            setElevation(elevationRes.data.results[0]);
            console.log(JSON.stringify(elevationRes.data.results[0]));
         }
      } catch (error) {
         console.error('Error fetching elevation data:', error);
         setElevation(null);
      }
   };

   const handleDragEnd = (location) => {
      handleSearchPlace(location);
   };
   // Fetch elevation when autocomplete place is selected
   useEffect(() => {
      if (autocompletePlace) {
         
         // Extract coordinates and fetch elevation
         const lat = autocompletePlace.geometry.location.lat();
         const lng = autocompletePlace.geometry.location.lng();
         
         // Fetch elevation data for the selected place
         const fetchElevation = async () => {
            try {
               const elevationRes = await axios.get(`${import.meta.env.VITE_API_URL}/elevation`, {
                  params: { lat, lng },
               });
               console.log('Autocomplete elevation:', elevationRes);
               if (elevationRes.data && elevationRes.data.results && elevationRes.data.results.length > 0) {
                  setElevation(elevationRes.data.results[0]);
               }
            } catch (error) {
               console.error('Error fetching elevation data:', error);
               setElevation(null);
            }
         };
         
         fetchElevation();
      }
   }, [autocompletePlace]);

   return (
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
         <div className="App">
            <SearchBox onSelectAutocompletePlace={setAutocompletePlace} />

            <GoogleMap
               autocompletePlace={autocompletePlace}
               elevation={elevation}
               onDragEnd={handleDragEnd}
            />
         </div>
      </APIProvider>
   );
}

export default App;
