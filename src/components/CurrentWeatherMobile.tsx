import { 
  Grid,
  GridItem,
  Image,
  Heading,
  Text
} from '@chakra-ui/react';
import icons from './icons/icons';

export default function CWeatherMobile(props: any) {
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
    <Grid height='fit-content' templateRows='1.5fr 1fr 7fr' templateColumns='1fr 1fr'>
      <GridItem paddingLeft='0.8rem' paddingRight='0.8rem' colSpan={2} noOfLines={2}>
        <Heading as='h4' size='md'>
          {props.cityName}
        </Heading>
      </GridItem>

      <GridItem paddingLeft='0.8rem' paddingRight='0.8rem' colSpan={2}>
        <Heading as='h3' size='lg'>
          {props.currentWeather.weather[0].description.toUpperCase()}
        </Heading>
      </GridItem>

      <GridItem padding='0.8rem'>
        <Grid height='fit-content' templateRows='5fr 1fr' justifyContent='center' alignItems='center'>
          <GridItem>
            <Image src={icons[props.currentWeather.weather[0].icon]} boxSize='9rem' objectFit='cover'/>
          </GridItem>
          <GridItem>
            <Heading textAlign='center' color='black' as='h2' size='xl'>
              {Math.ceil(props.currentWeather.main.temp)}ºC
            </Heading>
          </GridItem>
        </Grid>
      </GridItem>

      <GridItem paddingRight='0.9rem'>
        <Grid gap='0.2rem' height='fit-content' templateRows='1fr 4fr 4fr' templateColumns='1fr 1fr' justifyContent='center' alignItems='center'>
          <GridItem textAlign='center' colSpan={2}>
            <Heading as='h4' size='md'>
              {displayWeekDay()}
            </Heading>
          </GridItem>

          <GridItem textAlign='center' display='flex' flexDirection='column'>
            <Heading as='h4' size='md'>
              🌡 {Math.ceil(props.currentWeather.main.feels_like)}ºC
            </Heading>
            <Text fontSize='sm'>
              Sensação Térmica
            </Text>
          </GridItem>

          <GridItem textAlign='center' display='flex' flexDirection='column'>
            <Heading as='h4' size='md'>
              🌢 {props.currentWeather.main.humidity}%
            </Heading>
            <Text fontSize='sm'>
              Humidade
            </Text>
          </GridItem>

          <GridItem textAlign='center' display='flex' flexDirection='column'>
            <Heading as='h4' size='md'>
              ༄ {props.currentWeather.wind.speed ? props.currentWeather.wind.speed : '0'}m/s
            </Heading>
            <Text fontSize='sm'>
              Vento
            </Text>
          </GridItem>

          <GridItem textAlign='center' display='flex' flexDirection='column'>
            <Heading as='h4' size='md'>
              ☂ {props.currentWeather.rain ? props.currentWeather.rain['1h'] : '0'}mm
            </Heading>
            <Text fontSize='sm'>
              Chuva
            </Text>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};