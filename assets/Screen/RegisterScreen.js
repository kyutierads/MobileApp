import React, { useState } from 'react';
import { Box, Heading, Input, Image, Button } from 'native-base';
import Colors from '../colors';

function RegisterScreen() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Perform registration logic here
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
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
          placeholder="Full Name"
          mb="2"
          value={fullName}
          onChangeText={setFullName}
          variant=""
          bg="yellow.400"
          _placeholder={{ color: 'white' }}
          _focus={{ color: 'black' }} 
        />
        <Input
          placeholder="Email"
          mb="2"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          variant=""
          bg="yellow.400"
          _placeholder={{ color: 'white' }}
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
          _placeholder={{ color: 'white' }}
          _focus={{ color: 'black' }}
        />
        
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
  );
}

export default RegisterScreen;
