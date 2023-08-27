import { WEATHER_API_KEY } from "@env";
import * as Location from "expo-location";
import { useEffect, useState } from "react";

function useGetWeather() {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState({
    lat: [],
    long: [],
  });
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState([]);

  const fetchWeatherData = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${location?.lat}&lon=${location?.long}&appid=${WEATHER_API_KEY}&units=metric`
      );
      const data = await res.json();
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      setError("Could not fetch weather");
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        lat: location.coords.latitude,
        long: location.coords.longitude,
      });
      await fetchWeatherData();
    })();
  }, [location?.lat, location?.long]);

  return {
    loading,
    error,
    weatherData,
  };
}

export default useGetWeather;
