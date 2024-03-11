
class GoogleMapsHelper {
    constructor(apiKey) {
      this.apiKey = "AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik";
    }
  
    loadMapScript() {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&libraries=places`;
      script.async = true;
      document.head.appendChild(script);
  
      return new Promise((resolve, reject) => {
        script.onload = resolve;
        script.onerror = reject;
      });
    }
  
    createMap(container, options) {
      return new window.google.maps.Map(container, options);
    }
  
    createMarker(map, position) {
      return new window.google.maps.Marker({
        position,
        map,
      });
    }
  }
  
  export default GoogleMapsHelper;
  