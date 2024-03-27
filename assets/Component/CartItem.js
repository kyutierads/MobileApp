import React from 'react';
import { Box, Text, Center, Image, Swiper } from 'native-base';
import products from '../Data/Product';

const CartItem = ({ product }) => {
    return (
        <Box
            bg="white"
            shadow={2}
            rounded="lg"
            overflow="hidden"
            width="100%"
            p={2}
        >
            <Swiper
                autoplay
                autoplayTimeout={3}
                height={200}
                paginationStyle={{ bottom: -23 }}
            >
                {product.images.map((image, index) => (
                    <Box key={index}>
                        <Image
                            source={image}
                            alt={`Image ${index + 1}`}
                            resizeMode="cover"
                            height={200}
                            width="100%"
                        />
                    </Box>
                ))}
            </Swiper>
            <Center p={2}>
                <Text fontSize="md" fontWeight="bold" numberOfLines={1} mb={1}>
                    {product.name}
                </Text>
                <Text fontSize="md" fontWeight="bold" color="green.500">
                    {product.price}
                </Text>
            </Center>
        </Box>
    );
};

const CartItems = () => {
    return (
        <>
            {products.map((product) => (
                <CartItem key={product.id} product={product} />
            ))}
        </>
    );
};

export default CartItems;
