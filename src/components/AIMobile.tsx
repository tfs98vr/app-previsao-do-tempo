import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Grid,
  GridItem,
  Box,
  Heading,
  Text
} from '@chakra-ui/react';

export default function AIMobile(props: any) {
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
  const rain = (rainList.reduce((pre: number, cur: number) => pre + cur, 0));

  return(
    <AccordionItem padding='0.3rem' marginBottom='0.8rem'>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            {displayWeekDay()}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
          <Grid height='fit-content' templateRows='1fr 1fr' templateColumns='1fr 1fr 1fr' justifyContent='center' alignItems='center' gap='0.1rem'>
            <GridItem height='fit-content'>
              <Grid templateRows='1.2fr 1fr'>
                <GridItem>
                  <Heading textAlign='center' as='h6' size='xs'>
                    ⇡ {Math.ceil(Math.max(...maxList))}ºC
                  </Heading>
                </GridItem>

                <GridItem>
                  <Text textAlign='center' fontSize='xs'>
                    Máxima
                  </Text>
                </GridItem>
              </Grid>
            </GridItem>

            <GridItem height='fit-content'>
              <Grid  templateRows='1.2fr 1fr'>
                <GridItem>
                  <Heading textAlign='center' as='h6' size='xs'>
                    ⇣ {Math.ceil(Math.min(...minList))}ºC
                  </Heading>
                </GridItem>

                <GridItem>
                  <Text textAlign='center' fontSize='xs'>
                    Mínima
                  </Text>
                </GridItem>
              </Grid>
            </GridItem>

            <GridItem height='fit-content'>
              <Grid templateRows='1.2fr 1fr'>
                <GridItem>
                  <Heading textAlign='center' as='h6' size='xs'>
                    🌡 {Math.ceil(temp)}ºC
                  </Heading>
                </GridItem>

                <GridItem>
                  <Text textAlign='center' fontSize='xs'>
                    Média
                  </Text>
                </GridItem>
              </Grid>
            </GridItem>

            <GridItem height='fit-content'>
              <Grid templateRows='1.2fr 1fr'>
                <GridItem>
                  <Heading textAlign='center' as='h6' size='xs'>
                    🌢 {Math.ceil(humidity)}%
                  </Heading>
                </GridItem>

                <GridItem>
                  <Text textAlign='center' fontSize='xs'>
                    Humidade
                  </Text>
                </GridItem>
              </Grid>
            </GridItem>

            <GridItem height='fit-content'>
              <Grid templateRows='1.2fr 1fr'>
                <GridItem>
                  <Heading textAlign='center' as='h6' size='xs'>
                    ༄ {Math.ceil(wind)}m/s
                  </Heading>
                </GridItem>

                <GridItem>
                  <Text textAlign='center' fontSize='xs'>
                    Vento
                  </Text>
                </GridItem>
              </Grid>
            </GridItem>

            <GridItem height='fit-content'>
              <Grid templateRows='1.2fr 1fr'>
                <GridItem>
                  <Heading textAlign='center' as='h6' size='xs'>
                    ☂ {rain.toFixed(2)}mm
                  </Heading>
                </GridItem>

                <GridItem>
                  <Text textAlign='center' fontSize='xs'>
                    Chuva
                  </Text>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
      </AccordionPanel>
    </AccordionItem>
  );
};