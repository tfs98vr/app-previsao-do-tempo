import { 
  Spinner,
  Flex,
  Heading
} from '@chakra-ui/react';
import { flex, spinner, heading } from '../styles/loadingStyle';

export default function Loading() {
  return(
    <Flex alignItems= 'center' justifyContent= 'center' minHeight= '100vh' flexDirection='column' style={flex}>
      <Spinner {...spinner}/>
      <Heading {...heading}>
        Carregando
      </Heading>
    </Flex>
  );
};