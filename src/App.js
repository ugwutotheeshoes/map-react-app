import GoogleMap from "./components/GoogleMap";

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, California.',
  lat: 37.42216,
  lng: -122.08427,
}


function App() {
  return (
    <div className="App">
      <h1>Google Maps</h1>
      <GoogleMap location={location} zoomLevel={17} />
    </div>
  );
}

export default App;
