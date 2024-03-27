import React from 'react';
import { Box, Text, Image, HStack, SimpleGrid, ScrollView, Button, Center } from 'native-base';
import products from '../Data/Product';
import Swiper from 'react-native-swiper';
import Colors from '../colors';
import NotVerifyScreen from '../Screen/NotVerifyScreen';
function HomeProduct() {
  const handleAddToCart = (productId) => {
    // Add logic to add product to cart
    console.log(`Product ${productId} added to cart`);
  };

  const handleViewDetails = (productId) => {
    // Add logic to view details of product
    console.log(`View details of product ${productId}`);
  };


  return (

  
    <ScrollView flex={1} bg="warmGray.400">
      <SimpleGrid columns={2} spacingX={2} spacingY={2} p={2.5} >
        {products.map((product) => (
          <Box
            key={product.id}
            bg="white"
            shadow={2}
            rounded="lg"
            overflow="hidden"
            width="100%"
          >
            <Center>
              <Image
                source={product.image}
                alt={product.name}
                resizeMode="cover"
                height={100}
                width="100%"
              />
            </Center>
            <Box p={1} alignItems="center" bg="black">
              <Text fontSize="md" fontWeight="bold" color="white" numberOfLines={1} mb={1}>
                {product.name}
              </Text>
              <HStack justifyContent="center" alignItems="center" mb={1} >
                <Button size="xs" rounded="lg" bg="gray.400" onPress={() => handleAddToCart(product.id)}>Add to Cart</Button>
                <Button size="xs" rounded="lg" bg="yellow.400" onPress={() => handleViewDetails(product.id)}>View Details</Button>
              </HStack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </ScrollView>
    
  
  );
}

export default HomeProduct;
