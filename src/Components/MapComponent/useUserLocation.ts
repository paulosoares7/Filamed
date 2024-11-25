import { useState, useEffect } from 'react';

const useUserLocation = () => {
  const [coordinates, setCoordinates] = useState<{ Lat: number, Lon: number }>({
    Lat: -3.0950691490721183,
    Lon: -60.02380528459728
});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          if (latitude !== undefined && longitude !== undefined) {
            setCoordinates({ Lat: latitude, Lon: longitude }); 
          } else {
            setError('Erro: coordenadas indefinidas');
          }
        },
        (error) => {
          setError('Erro ao obter a localização');
          console.error(error);
        }
      );
    } else {
      setError('Geolocation não é suportada pelo navegador');
    }
  }, []);

  return { coordinates, error };
};

export default useUserLocation;
