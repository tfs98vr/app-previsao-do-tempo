import { 
  Flex,
  Box 
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import ForecastItem from './ForecastItem';

export default function Forecast(props: any) {

  return(
    <Flex paddingRight='1rem' paddingTop='1rem' maxHeight='100%' flexDirection='column'>
      <ForecastItem forecast={props.forecast[0]}/>
      <Box marginBottom='0.7rem' bg='gray.400' height='1px'/>
      <ForecastItem forecast={props.forecast[1]}/>
      <Box marginBottom='0.7rem' bg='gray.400' height='1px'/>
      <ForecastItem forecast={props.forecast[2]}/>
      <Box marginBottom='0.7rem' bg='gray.400' height='1px'/>
      <ForecastItem forecast={props.forecast[3]}/>
      <Box marginBottom='0.7rem' bg='gray.400' height='1px'/>
    </Flex>
  );
};