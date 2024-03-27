import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Center } from 'native-base';
import { AntDesign, Entypo } from '@expo/vector-icons';
import Colors from '../colors';
import HomeScreen from '../Screen/HomeScreen'; // Import the HomeScreen component
import CartScreen from '../Screen/CartScreen'; // Import the CartScreen component
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook

const Tab = createBottomTabNavigator();

const CustomTab = ({ children, onPress }) => (
  <Pressable onPress={onPress}>
    <Text style={{ textAlign: 'center', marginBottom: 5, color: Colors.main }}>{children}</Text>
  </Pressable>
);

function BottomNav() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator initialRouteName="Main" screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: styles.tabBar,
      headerShown: false,
      tabBarHideOnKeyboard: true
    }}>
      <Tab.Screen name="Main" component={HomeScreen} options={{
        tabBarIcon: ({ focused }) => (
          <Center>
            {focused ? (
              <Entypo name="home" size={24} color={Colors.main} />
            ) : (
              <AntDesign name="home" size={24} color={Colors.gray} />
            )}
            <CustomTab>Home</CustomTab>
          </Center>
        )
      }} />

      <Tab.Screen name="Cart" component={CartScreen} options={{
        tabBarIcon: ({ focused }) => (
          <Center>
            {focused ? (
              <Entypo name="shopping-cart" size={24} color={Colors.main} />
            ) : (
              <AntDesign name="shopping-cart" size={24} color={Colors.gray} />
            )}
            <CustomTab onPress={() => navigation.navigate('Cart')}>Cart</CustomTab>
          </Center>
        )
      }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.black,
    borderTopColor: 'transparent',
    elevation: 0,
    shadowOpacity: 0,
    height: 60,
  },
});

export default BottomNav;
