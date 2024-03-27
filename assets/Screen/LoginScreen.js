import React, { useState } from 'react';
import { Box, Image, Heading, Input, Button } from 'native-base';
import Colors from '../colors';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleRegister = () => {
   
    console.log('Registration logic');
  };

  return (
    <Box flex={1} bg={Colors.E1F0D7} alignItems="center" justifyContent="center">
      <Image
        alt="background"
        resizeMode="cover"
        size="lg"
        w="500"
        h="100%" 
        source={require('../yellow.jpg')}
      />
      <Box
        bg="black" 
        w="90%"
        px="6"
        py="4"
        rounded="lg"
        shadow={1}
        position="absolute"
        alignItems="center" 
        justifyContent="center" 
      >

        <Box mb="4">
          <Image
            alt="Logo"
            size="md"
            source={require('../logo.png')}
          />
        </Box>
    
        <Input
          placeholder="Email"
          mb="2"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          variant=""
          bg="yellow.400"
          _placeholder={{ color: 'black' }}
          _focus={{ color: 'black' }} 
        />
        <Input
          placeholder="Password"
          mb="4"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          variant=""
          bg="yellow.400"
          _placeholder={{ color: 'black' }}
          _focus={{ color: 'black' }}
        />
        <Box flexDirection="row"> 
          <Button
            onPress={handleLogin}
            bg="yellow.400"
            px="4"
            py="2"
            rounded="lg"
            _text={{ fontWeight: 'bold', color:"black" }}
            shadow={2}
            _pressed={{ opacity: 0.8 }}
            mr="2" 
          >
            Login
          </Button>
          <Button
            onPress={handleRegister}
            bg="yellow.400"
            px="4"
            py="2"
            rounded="lg"
            _text={{ fontWeight: 'bold', color:"black" }}
            shadow={2}
            _pressed={{ opacity: 0.8 }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginScreen;
