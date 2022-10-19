import { 
  Grid, 
  GridItem,
  Heading,
  Image,
  Text
} from '@chakra-ui/react';
import icons from './icons/icons';

export default function CurrentWeather(props: any) {
  const date = new Date(props.currentWeather.dt * 1000);
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

  return(
    <Grid height='100%' templateRows='0.8fr 0.8fr 4fr 4fr'>
      <GridItem paddingLeft='0.8rem'>
        <Heading fontFamily='Comfortaa, cursive' as='h3' size='lg'>
          {props.currentWeather.weather[0].description.toUpperCase()}
        </Heading>
      </GridItem>
         
      <GridItem paddingLeft='0.8rem'>
        <Heading fontFamily='Comfortaa, cursive' as='h4' size='md'>
          {displayWeekDay()}
        </Heading>
      </GridItem>

      <GridItem display='flex' alignItems='center' justifyContent='center' gap='1rem'>
        <Image src={icons[props.currentWeather.weather[0].icon]} boxSize='12rem' objectFit='cover'/>
        <Heading fontFamily='Comfortaa, cursive' as='h2' size='xl'>
          {Math.ceil(props.currentWeather.main.temp)}ºC
        </Heading>
      </GridItem>

      <GridItem>
        <Grid height='100%' templateRows='1fr 1fr' templateColumns='1fr 1fr'>
          <GridItem display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            <Heading fontFamily='Comfortaa, cursive' as='h2' size='xl'>
              🌡 {Math.ceil(props.currentWeather.main.feels_like)}ºC
            </Heading>
            <Text fontSize='md'>
              Sensação
            </Text>
          </GridItem>

          <GridItem display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            <Heading fontFamily='Comfortaa, cursive' as='h2' size='xl'>
              🌢 {props.currentWeather.main.humidity}%
            </Heading>
            <Text fontSize='md'>
              Humidade
            </Text>
          </GridItem>

          <GridItem display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            <Heading fontFamily='Comfortaa, cursive' as='h2' size='xl'>
              ༄ {props.currentWeather.wind.speed ? props.currentWeather.wind.speed : '0'}m/s
            </Heading>
            <Text fontSize='md'>
              Vento
            </Text>
          </GridItem>

          <GridItem display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            <Heading fontFamily='Comfortaa, cursive' as='h2' size='xl'>
              ☂ {props.currentWeather.rain ? props.currentWeather.rain['1h'] : '0'}mm
            </Heading>
            <Text fontSize='md'>
              Chuva
            </Text>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};