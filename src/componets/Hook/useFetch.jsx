import { useEffect, useState } from "react";

export const useFetch = (url, searchText) => {
  const [locationData, setLocationData] = useState(null);
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      const response = await fetch(
        "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBsCqMQPppOetez5oQYur-Sub4MNfmEuwQ",
        {
          method: "POST",
          headers: {
            Accept: "*/*",
          },
          body: JSON.stringify({}),
        }
      );
      if (!response.ok) {
        setErrorMessage(`${response.error.status} `);
        setHasError(true);
        setloading(false);
      }
      const data = await response.json();
      setLocationData(data.location.lat + "," + data.location.lng);
    };

    const getWeather = async () => {
      const response = await fetch(
        !searchText ? `${url}${locationData}` : `${url}${searchText}`
      );
      const data = await response.json();

      if (data.error) {
        setErrorMessage(data.error.message);
        setHasError(true);
        setloading(false);
      } else {
        setdata(data);
        setloading(false);
      }
    };
    getLocation();
    getWeather();
  }, [loading, searchText]);
  return { data, loading, hasError, errorMessage };
};
