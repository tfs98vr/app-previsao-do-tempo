import {
  Accordion,
} from '@chakra-ui/react';
import AIMobile from './AIMobile';

export default function ForecastMobile(props: any) {
  return(
    <Accordion defaultIndex={[0]} allowMultiple>
      <AIMobile forecast={props.forecast[0]}/>
      <AIMobile forecast={props.forecast[1]}/>
      <AIMobile forecast={props.forecast[2]}/>
      <AIMobile forecast={props.forecast[3]}/>
    </Accordion>
  );
};