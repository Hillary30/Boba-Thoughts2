import React from 'react';
import { Flex, Text, Image, Badge } from '@chakra-ui/react';
import { Rating } from '@material-ui/lab';
import { IoLocation } from 'react-icons/io5';

const PlaceDetail = ({ places }) => {
  return (
    <Flex
      bg={'whiteAlpha.900'}
      px={4}
      py={2}
      mb={2}
      shadow='lg'
      direction={'column'}
      alignItems={'start'}
      justifyContent='space-between'
    >
      <Flex justifyContent={'space-between'} width='full'>
        <Flex
          direction={'column'}
          justifyContent={'start'}
          alignItems={'start'}
          width='full'
          px={2}
        >
          <Flex
            alignItems={'center'}
            width={'full'}
            justifyContent={'space-between'}
          >
            <Text 
              textTransform={'capitalize'} 
              width={'40'} 
              fontSize={'lg'} 
              fontWeight={'500'} 
              isTruncated
            >{places.name}</Text>

            <Text
              fontSize={'sm'}
              fontWeight={'500'}
              color={'gray.500'}
            >{places.price}</Text>
          </Flex>

          {/*RATINGS*/}
          <Flex alignItems={'center'} width={'full'}>
            <Rating size='small' value={Number(places.rating)} readOnly/>
            <Text fontSize={'sm'} fontWeight={'500'} color={'gray.500'}>{places.num_reviews}</Text>
            <Text fontSize={'sm'} fontWeight={'500'} color={'gray.500'} ml={'auto'}>{places.price_level}</Text>
          </Flex>

          {/*RANKING*/}
          <Text fontSize={'sm'} fontWeight={'500'} color={'gray.400'}>{places.ranking}</Text>
          {/*OPEN/CLOSED STATUS*/}
          <Text fontSize={'sm'} fontWeight={'500'} color={'gray.600'}>{places.open_now_text}</Text>

          {/*DIETRY RESTRICTIONS*/}
          {
            places?.dietary_restrictions && (
              <Flex width={'full'} flexWrap={'wrap'}>
                {
                  places.dietary_restrictions.map((n, i) => (
                    <Badge colorScheme={'orange'} cursor={'pointer'} key={i} m={1} fontSize={10}>
                      {n.name}
                    </Badge>
                  ))
                }
              </Flex>
            )
          }
        </Flex>
        <Image
          objectFit={'cover'}
          width={'120px'}
          height={'120px'}
          rounded='lg'
          src={
            places.photo 
            ? places.photo.images.large.url 
            : "https://explorelompoc.com/wp-content/uploads/2021/06/food_placeholder.jpg"
          }
        />
      </Flex>
      { 
        places?.address && (
          <Flex alignItems={'center'} width={'full'} px={1} my={2}>
            <IoLocation fontSize={20} color='gray'/>
            <Text isTruncated fontSize={'small'} fontWeight={500} color={'gray.700'} ml={1}>{places.address}</Text>
          </Flex>
        )
      }

    </Flex>
  );
};

export default PlaceDetail