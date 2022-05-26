import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../constants';
import { View, Image } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import OnBoardScreen from '../screens/OnBoardScreen';
import CartContext from '../context/CartContext';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  const { getTotalItems, cartItems } = useContext(CartContext);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home-filled" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="LocalMall"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="local-mall" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="OnBoardScreen"
        component={OnBoardScreen}
        options={{
          tabBarIcon: ({ _color }: any) => (
            <View
              style={{
                height: 60,
                width: 60,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.white,
                borderColor: COLORS.primary,
                borderWidth: 2,
                borderRadius: 30,
                elevation: 5,
                top: -20,
              }}>
              <Image
                style={{
                  resizeMode: 'contain',
                  height: 60,
                  width: 60,
                }}
                source={require('../assets/favicon.png')}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="favorite" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="shopping-cart" color={color} size={28} />
          ),
          tabBarBadge: getTotalItems(cartItems),
          tabBarBadgeStyle: { backgroundColor: COLORS.primary },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
