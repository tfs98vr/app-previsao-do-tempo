import { 
  Grid,
  GridItem,
  InputGroup,
  Input,
  InputRightElement,
  Button
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import CWeatherMobile from './CurrentWeatherMobile';
import ForecastMobile from './ForecastMobile';
import { useState } from 'react';

export default function HomeMobile(props: any) {
  const [inCity, setInCity] = useState('');
  const [inputInvalid, setInputInvalid] = useState(false);
  const [emptyList, setEmptyList] = useState(false);

  const getCityList = () => {
    if(!inCity) {
      setInputInvalid(true)
    }
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inCity}&limit=5&appid=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        if(data.length === 0) { setEmptyList(true) }
        props.sendList(data);
      })
  };

  return(
    <Grid color='black' minHeight='100vh' templateRows='0.6fr 3fr auto' bg='linear-gradient(30deg, rgba(242,242,242,1) 15%, rgba(238,238,238,1) 36%, rgba(230,230,230,1) 63%, rgba(217,217,217,1) 85%)'>
      <GridItem padding='2rem'>
        <InputGroup size='lg'>
          <Input
            bg='white'
            type='text'
            placeholder='Digite o nome de cidade...'
            value={inCity}
            onChange={(e) => setInCity(e.target.value)}
            _placeholder={{ color: inputInvalid ? 'red' : 'black' }}
            isInvalid={inputInvalid}
          />
          <InputRightElement width='4rem'>
            <Button boxShadow='base' color='white' colorScheme='blue' h='1.75rem' size='md' onClick={getCityList}>
              <Search2Icon/>
            </Button>
          </InputRightElement>
        </InputGroup>
      </GridItem>

      <GridItem>
        <CWeatherMobile cityName={props.cityName ? props.cityName : 'aguardando...'} currentWeather={props.currentWeather}/>
      </GridItem>

      <GridItem padding='0.3rem'>
        <ForecastMobile forecast={props.forecast}/>
      </GridItem>
    </Grid>
  );
};