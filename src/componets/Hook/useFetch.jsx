import { useEffect, useState } from "react";

export const useFetch = (url, searchText) => {
  const [locationData, setLocationData] = useState(null);
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      const response = await fetch("http://ip-api.com/json/", {
        method: "POST",
        headers: {
          Accept: "*/*",
          Host: "ip-api.com",
        },
        body: JSON.stringify({}),
      });
      if (!response.ok) {
        setErrorMessage(`${response.error.status} `);
        setHasError(true);
        setloading(false);
      }
      const data = await response.json();
      setLocationData(data.lat + "," + data.lon);
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
