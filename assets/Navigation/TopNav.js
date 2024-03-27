import React from 'react';
import { HStack, Input, Image, Icon, Pressable } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Add this import
import Colors from '../colors';

function TopNav() {
  const navigation = useNavigation(); // Hook to access navigation object

  const handleCartPress = () => {
    // Handle cart icon press
    console.log('Cart icon pressed');
    // Navigate to the cart screen
    navigation.navigate('CartScreen'); // Assumes the screen name for the cart screen is 'Cart'
  };

  return (
    <HStack space={4} px={4} py={5} bg={Colors.black} alignItems="center">
      <Image
        source={require('../logo.png')} 
        alt="Logo"
        size="sm"
      />
      <Input
        placeholder='Search'
        flex={1}
        bg={Colors.main}
        type="search"
        h={9}
        borderWidth={0}
        _focus={{ bg: Colors.main }} 
      />

    </HStack>
  );
}

export default TopNav;
