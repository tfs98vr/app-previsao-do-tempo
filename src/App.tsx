import * as React from "react";
import {
  ChakraProvider,
} from "@chakra-ui/react";
import Home from "./components/Home";
import HomeMobile from "./components/HomeMobile";
import List from "./components/List";
import Loading from "./components/Loading";
import organizeForecastList from "./components/utils/organizeForecastList";


export const App = () => {
  const [cityList, setCityList] = React.useState([]);
  const [currentWeather, setCurrentWeather] = React.useState(false);
  const [cityName, setCityName] = React.useState('Brasília - Distrito Federal - BR');
  const [cityForecast, setCityForecast] = React.useState(false);

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  };

  const [windowSize, setWindowSize] = React.useState(getWindowSize());

  React.useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const fetchForecast = (time: number) => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=-15.7801&lon=-47.9292&units=metric&lang=pt_br&appid=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        const tempArr: any = organizeForecastList(time, data.list)
        setCityForecast(tempArr);
      })
  };

  React.useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=-15.7801&lon=-47.9292&units=metric&lang=pt_br&appid=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setCurrentWeather(data);
        fetchForecast(data.dt);
      })
  }, []);

  const getCityList = (val: any) => setCityList(val);
  const getCurrentWeather = (val: any) => setCurrentWeather(val);
  const deleteCityList = () => setCityList([]);
  const getCityName = (val: string) => setCityName(val);
  const getCityForecast = (val: any) => setCityForecast(val);
  const handleResize = () => windowSize.innerWidth < 800 ? <HomeMobile forecast={cityForecast} currentWeather={currentWeather} cityName={cityName} sendList={getCityList} /> : <Home forecast={cityForecast} currentWeather={currentWeather} cityName={cityName} sendList={getCityList} />; 
  const handleLoading = () => !cityForecast ? <Loading /> : handleResize();

  return(
    <ChakraProvider>
      {cityList.length > 0 ? <List cityForecast={getCityForecast} cityName={getCityName} deleteCityList={deleteCityList} currentWeather={getCurrentWeather} cityList={cityList} /> : handleLoading()}
    </ChakraProvider>
  )
};
