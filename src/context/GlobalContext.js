import React, { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  // Global States.
  const [countryTimezone, setCountryTimezone] = useState([]);
  const [currentCountry, setCurrentCountry] = useState([]);
  const [currentWeather, setCurrentWeather] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const [additional, setAdditional] = useState(false);

  // Handle Additional Div Function
  const handleDiv = () => {
    setAdditional(!additional);
  };

  // Fetching Data Function From Api.
  const fetchApi = async (api) => {
    setLoader(true);
    try {
      setTimeout(() => setLoader(false), 3000);
      let response = await fetch(api);
      return await response.json();
    } catch (err) {
      console.error(`Error in fetchApi: ${err}`);
    }
  };

  // Fetching Data From Quotes Api Another Time When Clicking Button.
  const randomQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const json = await response.json();
      if (json) {
        setQuotes(json);
      }
    } catch (err) {
      console.error(`Error in randomQuote: ${err}`);
    }
  };

  // Fetch Api Data And Set It As A State.
  useEffect(() => {
    fetchApi(`http://worldtimeapi.org/api/ip`).then((res) =>
      setCountryTimezone(res)
    );
  }, []);

  useEffect(() => {
    fetchApi("https://api.quotable.io/random").then((res) => setQuotes(res));
  }, []);

  useEffect(() => {
    if (currentCountry.city) {
      fetchApi(
        `https://api.openweathermap.org/data/2.5/weather?q=${currentCountry.city},${currentCountry.countryCode}&appid=fdfd8bff8ab5b53fdd7ca82ef272712e&units=metric`
      ).then((res) => setCurrentWeather(res));
    } else {
      setCurrentWeather([]);
    }
  }, [currentCountry.city, currentCountry.countryCode]);

  useEffect(() => {
    fetchApi(`http://ip-api.com/json/?fields=country,countryCode,city`).then(
      (res) => setCurrentCountry(res)
    );
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        loader,
        countryTimezone,
        currentCountry,
        ...currentWeather,
        quotes,
        error,
        randomQuote,
        additional,
        handleDiv,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
