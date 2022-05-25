import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from './src/constants';
import BottomNavigator from './src/navigation/BottomNavigator';
import DetailsScreen from './src/screens/DetailsScreen';
import OnBoardScreen from './src/screens/OnBoardScreen';
import { apolloClient } from './src/graphql/apolloClient';
import { ApolloProvider } from '@apollo/client';

const Stack = createStackNavigator();

const App = () => {
  const client = apolloClient('');
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
          <Stack.Screen name="Home" component={BottomNavigator} />
          <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
