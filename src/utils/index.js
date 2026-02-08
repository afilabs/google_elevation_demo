export const getLatLng = (location) => {
   if (typeof location.lat === 'function' && typeof location.lng === 'function') {
      return { lat: location.lat(), lng: location.lng() };
   }
   return location;
};
