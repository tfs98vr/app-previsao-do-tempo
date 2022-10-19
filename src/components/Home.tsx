import { 
  Grid, 
  GridItem,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Heading,
  useToast
} from '@chakra-ui/react';
import {
  grid,
  gridItem1,
  gridItem2,
  button,
  heading
} from '../styles/homeStyle';
import { Search2Icon } from '@chakra-ui/icons';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import "@fontsource/comfortaa";
import { useState } from 'react';

export default function Home(props: any) {
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
  }

  return(
    <Grid minHeight= '100vh' templateRows='0.8fr 0.8fr 8fr' style={grid.Style} {...grid.Theme}>
      <GridItem alignItems= 'center' justifyContent= 'center' style={gridItem1.Style} {...gridItem1.Theme}>
        <InputGroup size='lg'>
          <Input isInvalid={inputInvalid} value={inCity} onChange={e => setInCity(e.target.value)} bg='white' _placeholder={{color: inputInvalid ? 'red' : 'black'}} placeholder='Insira o nome de uma cidade'/>
          <InputRightElement width='4rem'>
            <Button style={button.Style} {...button.Theme} onClick={getCityList}>
              <Search2Icon/>
            </Button>
          </InputRightElement>
        </InputGroup>
      </GridItem>

      <GridItem {...gridItem2}>
        <Heading {...heading}>
          {props.cityName ? props.cityName : 'aguardando...'}
        </Heading>
      </GridItem>

      <GridItem>
        <CurrentWeather currentWeather={props.currentWeather}/>
      </GridItem>

      <GridItem>
        <Forecast forecast={props.forecast} time={props.currentWeather.dt}/>
      </GridItem>
    </Grid>
  );
};