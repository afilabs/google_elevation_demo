# Google Reverse Geocoding

A React-based web application that provides interactive Google Maps functionality with reverse geocoding capabilities. Users can search for locations, drag markers on the map, and get detailed address information for any point on the map.

## Features

- **Interactive Google Maps**: Full-screen map with custom styling and controls
- **Location Search**: Google Places Autocomplete for searching locations
- **Reverse Geocoding**: Get detailed address information for any map location
- **Draggable Markers**: Drag and drop markers to explore different locations
- **Real-time Updates**: Instant address lookup when markers are moved
- **Responsive Design**: Optimized for desktop and mobile devices

## Tech Stack

- **Frontend**: React 19 with Vite
- **Maps**: Google Maps API with @vis.gl/react-google-maps
- **Styling**: SCSS with custom components
- **HTTP Client**: Axios for API requests
- **Development**: ESLint, Prettier, and modern JavaScript features

## Prerequisites

Before running this application, you'll need:

1. **Google Maps API Key**: Get a Google Maps API key from the [Google Cloud Console](https://console.cloud.google.com/)
2. **Google Maps API Services**: Enable the following APIs:
   - Maps JavaScript API
   - Places API
   - Geocoding API
3. **Backend API**: A reverse geocoding API endpoint (the app expects `VITE_API_URL` environment variable)

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd google-reverse-geocoding
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory with the following variables:
   ```env
   VITE_GOOGLE_API_KEY=your_google_maps_api_key_here
   VITE_GOOGLE_MAP_ID=your_google_map_id_here
   VITE_API_URL=your_backend_api_url_here
   ```

## Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Usage

1. **Search for a Location**: Use the search box to find and select a location
2. **Explore the Map**: The map will center on your selected location
3. **Drag the Marker**: Click and drag the marker to explore different areas
4. **Get Address Details**: The application will automatically fetch and display address information for the marker's location

## Project Structure

```
src/
├── components/
│   ├── GoogleMap/          # Map components and handlers
│   ├── Icon.jsx           # Reusable icon component
│   ├── PlaceAutocompleteInput.jsx  # Google Places autocomplete
│   └── SearchBox.jsx      # Search interface
├── assets/                # Static assets and SVGs
├── utils/                 # Utility functions
└── App.jsx               # Main application component
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GOOGLE_API_KEY` | Google Maps API key | Yes |
| `VITE_GOOGLE_MAP_ID` | Google Maps Map ID for styling | Yes |
| `VITE_API_URL` | Backend API URL for reverse geocoding | Yes |

## API Integration

The application expects a backend API endpoint at `${VITE_API_URL}/reverse-geocode` that accepts `lat` and `lng` parameters and returns geocoding results in the following format:

```json
{
  "results": [
    {
      "place_id": "string",
      "formatted_address": "string",
      "plus_code": "string",
      // ... other Google Places API fields
    }
  ]
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run lint` and `npm run format`
5. Submit a pull request

## License

This project is licensed under the MIT License.
