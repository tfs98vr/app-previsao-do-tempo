import { 
  Heading,
  Box 
} from '@chakra-ui/react';
import {
  box1,
  box2,
  heading1,
  heading2
} from '../styles/listStyle';
import organizeForecastList from './utils/organizeForecastList';

export default function List(props: any) {
  const fetchForecast = (lat: string, lon: string, time: number) => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        const forecastArr = organizeForecastList(time, data.list)
        props.cityForecast(forecastArr)
        props.deleteCityList()
      })
  };

  const sendForecast = (lat: string, lon: string, cityName: string) => {
    props.cityName(cityName)
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        props.currentWeather(data);
        fetchForecast(lat, lon, data.dt);
      })
  };

  return(
    <Box alignItems= 'center' justifyContent= 'center' minHeight= '100vh' style={box1}>
      <Box boxShadow= 'dark-lg' borderRadius= '9px' style={box2}>
        <Heading {...heading1}>
          Escolha uma cidade
        </Heading>

        {props.cityList.map((val: any) => {
          const name: string = `${val.name} ${val.state ? `- ${val.state}` : ''} ${val.country ? `- ${val.country}` : ''}`
          return(
            <Heading key={val.lat} onClick={() => sendForecast(val.lat, val.lon, name)} style={heading2.Style} {...heading2.Theme} _hover={heading2.hover}>
              {name}
            </Heading>
          )
        })}
      </Box>
    </Box>
  )
};