import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from './src/HomeScreen/HomeScreen';
import Weather from './src/WeatherScreen/Weather';
import CovidSearch from './src/SearchCountryCovid/CovidSearch';
import InformationScreen from './src/InformationScreen/InformationScreen';
const Tab = createMaterialBottomTabNavigator();

function HomeScreen1() {
  return (
    <View>
      <Text>gdfhgfj</Text>
    </View>
  );
}

function HomeScreen2() {
  return (
    <View>
      <Text>gdfhgfj</Text>
    </View>
  );
}

function HomeScreen3() {
  return (
    <View>
      <Text>gdfhgfj</Text>
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#59b84f"
        translucent={true}
      />
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{backgroundColor: '#59b84f'}}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Information') {
              iconName = focused ? 'menu' : 'tune';
            } else if (route.name === 'Covid Search') {
              iconName = focused ? 'magnify' : 'magnify';
            } else if (route.name === 'Weather') {
              iconName = focused
                ? 'weather-snowy-rainy'
                : 'weather-lightning-rainy';
            }

            return (
              <MaterialCommunityIcons
                name={iconName}
                size={23}
                color={'#F5FFFA'}
              />
            );
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Information" component={InformationScreen} />
        <Tab.Screen name="Covid Search" component={CovidSearch} />
        <Tab.Screen name="Weather" component={Weather} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
