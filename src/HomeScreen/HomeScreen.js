import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
export default function HomeScreen() {
  const [countryData, setCountryData] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.covid19api.com/summary')
      .then(data => data.json())
      .then(data2 => {
        setCountryData(data2['Countries'][76]);
        setLoading(false)
        console.log(data2['Countries'][76].Country);

      });
  }, []);

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
 
 <View
        style={{
          width: 'auto',
          height: 100,

          marginTop: 22,
        }}>
        <Image
          style={{width: 500, height: 180, position: 'absolute'}}
          source={require('../Assets/img/aaa.jpg')}
        />

        <Text
          style={{
            fontSize: 40,
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#fafafa',
          }}>
          Live Corona Update
        </Text>
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'green',
          }}>
          ({countryData.Country})
        </Text>
      </View>

      <View
        style={{
          width: 'auto',
          height: 200,
          backgroundColor: '#3498db',
          borderRadius: 30,
          marginHorizontal: 15,
          marginTop: 25,
          borderBottomLeftRadius: 15,
        }}>
        <Text style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold'}}>
          <Image
            style={{width: 50, height: 50}}
            source={require('../Assets/img/home.png')}
          />{' '}
          Total Confirmed
        </Text>
        {loading?<ActivityIndicator animating={true} color="#fff" size="large" style={{marginTop:20}}  />:
       <View>
          <Text
          style={{
            fontSize: 50,
            textAlign: 'center',
            fontWeight: 'bold',
            marginVertical: 20,
            color: '#f5f6fa',
          }}>
        {countryData.TotalConfirmed}
        </Text>
        <Text
          style={{
            fontSize: 10,
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#f5f6fa',
          }}>
          {countryData.Date}
        </Text>
         </View>
}
      </View>

      <View
        style={{
          width: 'auto',
          height: 200,
          backgroundColor: '#e056fd',
          borderRadius: 30,
          marginHorizontal: 15,
          borderBottomEndRadius: 150,
          marginTop: 20,
        }}>
        <Text style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold'}}>
          <Image
            style={{width: 50, height: 50}}
            source={require('../Assets/img/dist.png')}
          />{' '}
          Today Confirmed
        </Text>
        {loading?<ActivityIndicator animating={true} color="#fff" size="large" style={{marginTop:20}}  />:
        <Text
          style={{
            fontSize: 50,
            textAlign: 'center',
            fontWeight: 'bold',
            marginVertical: 20,
            color: '#f5f6fa',
          }}>
          {countryData.NewConfirmed}
        </Text>
}
        <Text
          style={{
            fontSize: 10,
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#f5f6fa',
          }}>
          {/* {this.state.Date} */}
        </Text>
      </View>

      <View
        style={{
          width: 'auto',
          height: 200,
          backgroundColor: 'rgb(32,178,170)',
          borderRadius: 30,
          borderBottomLeftRadius: 200,
          borderBottomEndRadius: 200,
          marginHorizontal: 15,
          marginTop: 20,
        }}>
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#f5f6fa',
          }}>
          <Image
            style={{width: 50, height: 50}}
            source={require('../Assets/img/mask.png')}
          />{' '}
          Today Recovered
        </Text>
        {loading?<ActivityIndicator animating={true} color="#fff" size="large" style={{marginTop:20}}  />:
        <Text
          style={{
            fontSize: 50,
            textAlign: 'center',
            fontWeight: 'bold',
            marginVertical: 30,
            color: '#f5f6fa',
          }}>
          {countryData.NewRecovered}
        </Text>
}
      </View>

      <View
        style={{
          width: 'auto',
          height: 200,
          backgroundColor: 'rgb(32,178,170)',
          borderRadius: 30,
          borderTopEndRadius: 200,
          borderBottomEndRadius: 200,
          marginHorizontal: 15,
          marginTop: 20,
        }}>
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#FFFAFA',
          }}>
          <Image
            style={{width: 50, height: 50}}
            source={require('../Assets/img/dist.png')}
          />{' '}
          Total Recovered
        </Text>
        {loading?<ActivityIndicator animating={true} color="#fff" size="large" style={{marginTop:20}}  />:
        <Text
          style={{
            fontSize: 50,
            textAlign: 'center',
            fontWeight: 'bold',
            marginVertical: 30,
            color: '#FFFAFA',
          }}>
          {countryData.TotalRecovered}
        </Text>
}
      </View>

      <View
        style={{
          width: 'auto',
          height: 200,
          backgroundColor: 'tomato',
          borderRadius: 30,
          marginHorizontal: 15,
          borderBottomLeftRadius: 150,
          marginTop: 20,
        }}>
        <Text style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold'}}>
          <Image
            style={{width: 50, height: 50}}
            source={require('../Assets/img/deths.png')}
          />{' '}
          Today Deaths
        </Text>
        {loading?<ActivityIndicator animating={true} color="#fff" size="large" style={{marginTop:20}}  />:
        <Text
          style={{
            fontSize: 50,
            textAlign: 'center',
            fontWeight: 'bold',
            marginVertical: 20,
            color: '#f5f6fa',
          }}>
          {countryData.NewDeaths}
        </Text>
}
        <Text
          style={{
            fontSize: 10,
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#f5f6fa',
          }}>
          {/* {Date()} */}
        </Text>
      </View>

      <View
        style={{
          width: 'auto',
          height: 200,
          backgroundColor: '#f6e58d',
          borderRadius: 30,
          marginHorizontal: 15,
          marginTop: 20,
          marginBottom: 10,
        }}>
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'red',
          }}>
          <Image
            style={{width: 55, height: 55}}
            source={require('../Assets/img/deth.png')}
          />{' '}
          Total Deaths
        </Text>
        {loading?<ActivityIndicator animating={true} color="#fff" size="large" style={{marginTop:20}}  />:
        <Text
          style={{
            fontSize: 50,
            textAlign: 'center',
            fontWeight: 'bold',
            marginVertical: 30,
            color: 'red',
          }}>
          {' '}
          {countryData.TotalDeaths}
        </Text>
}
      </View>
    </ScrollView>
  );
}
