import React from 'react';
import { View, Text, Center, Box, Button } from 'native-base';
import Colors from '../colors';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CartEmpty = () => {
    const navigation = useNavigation();

    const handleStartShopping = () => {
        navigation.navigate('HomeScreen'); // Assuming 'Home' is the name of your home screen
    };

    return (
        <Box flex={1}>
            <Center h="90%">
                <Center w={200} h={200} bg={Colors.white} rounded="full">
                    <FontAwesome name="shopping-basket" size={64} color={Colors.main} />
                </Center>
                <Text color={Colors.main} bold mt={5}>
                    CART IS EMPTY
                </Text>
            </Center>
            <Button
                bg={Colors.black}
                _text={{ color: Colors.white, fontSize: 'lg', fontWeight: 'bold' }}
                size="lg"
                borderRadius={10}
                mt={5}
                onPress={handleStartShopping}
            >
                START SHOPPING
            </Button>
        </Box>
    );
};

export default CartEmpty;
