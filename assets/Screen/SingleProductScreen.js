import React from 'react';
import { Box, Center, Heading, Image, Text, VStack } from 'native-base';
import Colors from '../colors';

const SingleProductScreen = () => {
  return (
    <Box flex={1} bg={Colors.white}>
      <Center>
        <Image
          source={{ uri: 'https://example.com/product-image.jpg' }}
          alt="Product Image"
          size="xl"
          resizeMode="contain"
          my={5}
        />
      </Center>
      <VStack space={2} px={4}>
        <Heading size="lg" color={Colors.black} my={2}>
          Product Name
        </Heading>
        <Text fontSize="lg" color={Colors.gray} mb={2}>
          Product Description
        </Text>
        <Text fontSize="lg" color={Colors.main} mb={2}>
          $99.99
        </Text>
        <Button
          bg={Colors.black}
          _text={{ color: Colors.white, fontSize: 'lg', fontWeight: 'bold' }}
          size="lg"
          borderRadius={10}
          mt={5}
          onPress={() => console.log('Add to Cart pressed')}
        >
          ADD TO CART
        </Button>
      </VStack>
    </Box>
  );
};

export default SingleProductScreen;
