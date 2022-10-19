import { 
  Grid, 
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';
import { useEffect } from 'react';

export default function ForecastItem(props: any) {
  const maxList: number[] = [];
  const minList: number[] = [];
  const tempList: number[] = [];
  const humidityList: number[] = [];
  const windList: number[] = [];
  const rainList: number[] = [];
  const date = new Date(props.forecast[1].dt * 1000);
  const weekDay = date.getDay();

  const displayWeekDay = () => {
    switch (weekDay) {
      case 0:
        return 'Domingo';
        break;
      case 1: 
        return 'Segunda-Feira';
        break;
      case 2: 
        return 'Terça-Feira';
        break;
      case 3:
        return 'Quarta-Feira';
        break;
      case 4:
        return 'Quinta-Feira';
        break;
      case 5:
        return 'Sexta-Feira';
        break;
      case 6:
        return 'Sábado';
        break;
      default:
        return '';
    }
  };

  const getMaxList = props.forecast === undefined ? null : props.forecast.forEach((el: any) => {
    maxList.push(el.main.temp_max);
  });

  const getMinList = props.forecast === undefined ? null : props.forecast.forEach((el: any) => {
    minList.push(el.main.temp_min);
  });

  const getTempList = props.forecast === undefined ? null : props.forecast.forEach((el: any) => {
    tempList.push(el.main.temp);
  });

  const getHumidityList = props.forecast === undefined ? null : props.forecast.forEach((el: any) => {
    humidityList.push(el.main.humidity);
  });

  const getWindList = props.forecast === undefined ? null : props.forecast.forEach((el: any) => {
    windList.push(el.wind.speed);
  });

  const getRainList = props.forecast === undefined ? null : props.forecast.forEach((el: any) => {
    rainList.push(el.rain === undefined ? 0 : el.rain['3h']);
  });

  const temp = (tempList.reduce((pre: number, cur: number) => pre + cur, 0)) / tempList.length;
  const humidity = (humidityList.reduce((pre: number, cur: number) => pre + cur, 0)) / humidityList.length;
  const wind = (windList.reduce((pre: number, cur: number) => pre + cur, 0)) / windList.length;
  const rain = (rainList.reduce((pre: number, cur: number) => pre + cur, 0))

  return(
    <Grid maxHeight='100%' templateColumns='repeat(6, 1fr)' templateRows='0.5fr 4fr'>
      <GridItem colSpan={6}>
        <Heading fontFamily='Comfortaa, cursive' textAlign='center' as='h4' size='md'>
          {displayWeekDay()}
        </Heading>
      </GridItem>

      <GridItem display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
        <Heading fontFamily='Comfortaa, cursive' as='h4' size='md'>
          ⇡ {Math.ceil(Math.max(...maxList))}ºC
        </Heading>
        <Text color='#423F3E' fontSize='sm'>
          Máxima
        </Text>
      </GridItem>

      <GridItem display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
        <Heading fontFamily='Comfortaa, cursive' as='h4' size='md'>
          ⇣ {Math.ceil(Math.min(...minList))}ºC
        </Heading>
        <Text color='#423F3E' fontSize='sm'>
          Mínima
        </Text>
      </GridItem>

      <GridItem display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
        <Heading fontFamily='Comfortaa, cursive' as='h4' size='md'>
          🌡 {Math.ceil(temp)}ºC
        </Heading>
        <Text color='#423F3E' fontSize='sm'>
          Média
        </Text>
      </GridItem>

      <GridItem display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
        <Heading fontFamily='Comfortaa, cursive' as='h4' size='md'>
          🌢 {Math.ceil(humidity)}%
        </Heading>
        <Text color='#423F3E' fontSize='sm'>
          Humidade
        </Text>
      </GridItem>

      <GridItem display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
        <Heading fontFamily='Comfortaa, cursive' as='h4' size='md'>
          ༄ {Math.ceil(wind)}m/s
        </Heading>
        <Text color='#423F3E' fontSize='sm'>
          Vento
        </Text>
      </GridItem>

      <GridItem display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
        <Heading fontFamily='Comfortaa, cursive' as='h4' size='md'>
          ☂ {rain.toFixed(2)}mm
        </Heading>
        <Text color='#423F3E' fontSize='sm'>
          Chuva
        </Text>
      </GridItem>
    </Grid>
  );
};