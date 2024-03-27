import { Button, Center, Box, Image, VStack } from 'native-base'
import React from 'react'
import Colors from '../colors';

function NotVerifyScreen() {
  const Buttone = ({ mt, bg, color, children, onPress }) => (
    <Button
      w="full"
      h={55}
      mt={mt}
      rounded="full"
      bg={bg}
      _text={{
        color: color,
        fontWeight: "bold",
      }}
      onPress={onPress}
    >
      {children}
    </Button>
  );

  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
      <Center w="360" h={500}>
        <Image size={300} source={require('../logo.png')} alt="logo" />
      </Center>

      <VStack space={6} px={5} alignItems="center">
        <Buttone
          bg="darkgray"
          color="black"
          mt={4}
          onPress={() => console.log('Register button pressed')}
        >
          REGISTER
        </Buttone>
        <Buttone
          bg="black"
          color="yellow.400"
          onPress={() => console.log('Login button pressed')}
        >
          LOGIN
        </Buttone>
      </VStack>
    </Box>
  );
}

export default NotVerifyScreen;
