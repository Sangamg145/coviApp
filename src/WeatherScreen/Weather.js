import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  ActivityIndicator,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const api = {
  key: '82bd0d853a272798784eedea7cb75e40',
  base: 'https://api.openweathermap.org/data/2.5/',
};

class Weather extends React.Component {
  state = {
    text: '',
    ci: 'City',
    des: 'Description',
  };
  fetchCities(text) {
    this.setState({text});
    fetch(`${api.base}weather?q=${text}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(city => {
        this.setState({
          ci: city.name,
          temp: city.main.temp,
          max: city.main.temp_max,
          min: city.main.temp_min,
          des: city.weather[0].description,
          pres: city.main.pressure,
          win: city.wind.speed,
          icon: city.weather[0].icon,
         
        });
        console.log("sangam",city.weather[0].icon)
      });
  }

  render() {
    return (
      <ImageBackground
        source={require('../Assets/img/back1.jpg')}
        style={{
          resizeMode: 'cover',
          justifyContent: 'center',
          height: '100%',
        }}>
        <View style={{height: '100%'}}>
          <View
            style={{
              height: 50,
              borderBottomEndRadius: 200,
              backgroundColor: 'rgba(255,255,255,1)',
              borderBottomLeftRadius: 200,
              marginTop:22
            }}>
            <TextInput
              placeholder="Search Here...."
              value={this.state.text}
              onChangeText={text => this.fetchCities(text)}
              style={{
                marginVertical: 5,
                fontSize: 17,
                fontWeight: 'bold',
                marginHorizontal: 10,
                borderRadius: 30,
                paddingHorizontal: 20,
              }}
            />
          </View>
          <View
            style={{
              height: 350,
              backgroundColor: 'rgba(255,255,255,1)',
              marginTop: 50,
              marginHorizontal: 25,
              borderRadius: 20,
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={{width: 90, height: 70}}
                source={{
                  uri:
                    'https://openweathermap.org/img/w/' +
                    this.state.icon +
                    '.png',
                }}
              />
            </View>

            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 60,
                color: 'orange',
              }}>
              {this.state.temp}°C
            </Text>

            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 15,
                color: '#000',
              }}>
              ({this.state.ci})
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20,
                color: '#000',
              }}>
              {this.state.des}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 17,
                color: '#000',
              }}>
              {this.state.pres} bar
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 17,
                color: '#000',
              }}>
              {this.state.win} mph
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                marginTop: 50,
                marginHorizontal: 20,
                color: 'orange',
              }}>
              {'min \n'}
              {this.state.min}
            </Text>

            <Text
              style={{
                textAlign: 'right',
                fontWeight: 'bold',
                fontSize: 20,
                marginTop: -50,
                marginHorizontal: 20,
                color: 'orange',
              }}>
              {'max \n'}
              {this.state.max}
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
export default Weather;
