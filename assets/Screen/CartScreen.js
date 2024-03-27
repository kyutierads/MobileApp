import React from 'react';
import { Box, Center, ScrollView, Text } from 'native-base';
import Colors from '../colors';
import CartEmpty from '../Component/CartEmpty';
import CartItem from '../Component/CartItem';

function CartScreen() {
  const cartItems = []; // Replace this with your actual cart items

  return (
    <Box flex={1} safeAreaTop bg={Colors.main}>
      <Center w="100%" py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          Cart
        </Text>
      </Center>
      {cartItems.length === 0 ? (
        <CartEmpty />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </ScrollView>
      )}
    </Box>
  );
}

export default CartScreen;
