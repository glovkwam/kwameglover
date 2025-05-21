
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapSection = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [tokenInput, setTokenInput] = useState<boolean>(true);

  // Bay Area coordinates
  const bayAreaCoordinates = [-122.2, 37.8];

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: bayAreaCoordinates,
      zoom: 6,
      projection: 'mercator',
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    map.current.on('load', () => {
      if (!map.current) return;
      
      // Add the pulsing dot
      map.current.addSource('pulse', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [{
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: bayAreaCoordinates
            },
            properties: {
              title: 'Bay Area'
            }
          }]
        }
      });
      
      // Create the animated ping using multiple layers
      const size = 200;
      
      // Outer pulse
      map.current.addLayer({
        id: 'pulse-outer',
        source: 'pulse',
        type: 'circle',
        paint: {
          'circle-radius': [
            'interpolate',
            ['linear'],
            ['get', 'pulse'],
            0, 0,
            1, size
          ],
          'circle-color': '#9b87f5',
          'circle-opacity': [
            'interpolate',
            ['linear'],
            ['get', 'pulse'],
            0, 0.4,
            1, 0
          ],
          'circle-stroke-width': 0
        }
      });
      
      // Inner dot
      map.current.addLayer({
        id: 'pulse-inner',
        source: 'pulse',
        type: 'circle',
        paint: {
          'circle-radius': 6,
          'circle-color': '#9b87f5',
          'circle-opacity': 0.8
        }
      });
      
      // Create animation properties
      let pulseData = { features: [{
        type: 'Feature',
        properties: { pulse: 0 },
        geometry: {
          type: 'Point',
          coordinates: bayAreaCoordinates
        }
      }]};
      
      // Animation function
      function animatePulse() {
        if (!map.current) return;
        
        const pulseSource = map.current.getSource('pulse') as mapboxgl.GeoJSONSource;
        
        // Update pulse property to create animation
        pulseData.features[0].properties.pulse = (pulseData.features[0].properties.pulse + 0.01) % 1;
        pulseSource.setData(pulseData as GeoJSON.FeatureCollection);
        
        // Request next frame
        requestAnimationFrame(animatePulse);
      }
      
      // Start animation
      animatePulse();
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken) {
      setTokenInput(false);
    }
  };

  return (
    <section className="my-12 animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyber-accent">Location</h2>
      
      {tokenInput ? (
        <div className="mb-8 p-4 border border-cyber-accent/30 rounded-lg">
          <p className="mb-4">To display the map, please enter your Mapbox public token:</p>
          <form onSubmit={handleTokenSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              placeholder="Enter Mapbox public token"
              className="px-4 py-2 bg-cyber-dark/50 border border-cyber-accent/30 rounded-md flex-grow"
            />
            <button 
              type="submit"
              className="cyber-button"
            >
              Submit
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-400">
            You can find your token at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-cyber-accent hover:underline">mapbox.com</a> in the Tokens section after creating an account.
          </p>
        </div>
      ) : (
        <div className="relative w-full h-96 mb-6">
          <div ref={mapContainer} className="absolute inset-0 rounded-lg" style={{ background: 'transparent' }} />
          <div className="absolute inset-0 pointer-events-none rounded-lg bg-gradient-to-b from-cyber-dark/0 to-cyber-dark/30" />
        </div>
      )}
      
      <p className="text-center text-lg">
        Based in the <span className="text-cyber-accent">San Francisco Bay Area</span>, California
      </p>
    </section>
  );
};

export default MapSection;
