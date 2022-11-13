import React from 'react'
import { Flex, SkeletonCircle, SkeletonText, Box } from '@chakra-ui/react';
import PlaceDetail from './PlaceDetail';

const List = ({places,isLoading}) => {
  if (isLoading) 
    return (
      <Flex
        direction={'column'}
        bg={'whiteAlpha.900'}
        width={'37vw'}
        height='100vh'
        position={'absolute'}
        left={0}
        top={0}
        zIndex={1}
        overflow='hidden'
        px={2}

      >
        <Box padding='6' boxShadow='lg' bg='white' mt={16}>
          <SkeletonCircle size='10' />
          <SkeletonText mt='4' noOfLines={4} spacing='4' />
        </Box>
        <Box padding='6' boxShadow='lg' bg='white' mt={3}>
          <SkeletonCircle size='10' />
          <SkeletonText mt='4' noOfLines={4} spacing='4' />
        </Box>
        <Box padding='6' boxShadow='lg' bg='white' mt={3}>
          <SkeletonCircle size='10' />
          <SkeletonText mt='4' noOfLines={4} spacing='4' />
        </Box>
        <Box padding='6' boxShadow='lg' bg='white' mt={3}>
          <SkeletonCircle size='10' />
          <SkeletonText mt='4' noOfLines={4} spacing='4' />
        </Box>
        <Box padding='6' boxShadow='lg' bg='white' mt={3}>
          <SkeletonCircle size='10' />
          <SkeletonText mt='4' noOfLines={4} spacing='4' />
        </Box>
      </Flex>
    );

    return (
      <Flex
        direction={'column'}
        bg={'whiteAlpha.900'}
        width={'37vw'}
        height='100vh'
        position={'absolute'}
        left={0}
        top={0}
        zIndex={1}
        overflow='hidden'
        px={2}
      >
        <Flex flex={1} overflowY={'scroll'} mt={16} direction={'column'}>
          {
            places && places.map((places, i) => <PlaceDetail places={places} key={i}/>)
          }
        </Flex>
      </Flex>
    );
};

export default List