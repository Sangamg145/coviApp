import * as React from 'react';
import {
  Text,
  View,
  Platform,
  ScrollView,
  Linking,
} from 'react-native';
import {
  Avatar,
  Appbar,
  Button,
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
export default class InformationScreen extends React.Component {
  state = {
    text: 'Loading',
  };
  componentDidMount() {
    fetch('https://api.covid19api.com/summary')
      .then(data => data.json())
      .then(data2 => {
        this.setState({
          Country: data2['Countries'][76].Country,
          Tot: data2['Countries'][76].TotalConfirmed,
          New: data2['Countries'][76].NewConfirmed,
          Det: data2['Countries'][76].TotalDeaths,
        });
      });
  }
  render() {
    return (
      <View style={{backgroundColor:'#fff'}}>
        <Appbar.Header style={{marginTop:25,backgroundColor:'#fff'}}>
          <Appbar.Content
            title="More Information"
            subtitle="दवाई भी और कड़ाई भी"
          />
          <Appbar.Action icon="magnify" />
          <Appbar.Action icon="dots-vertical" />
        </Appbar.Header>
        <ScrollView>
          <View style={{marginTop: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor: '#F5FFFA',
                borderRadius: 20,
                marginVertical: 1,
                marginHorizontal: 5,
              }}>
              <Avatar.Image
                size={74}
                source={require('../Assets/img/ind.png')}
              />
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 'bold',
                  marginHorizontal: 15,
                }}>
                {' '}
                {this.state.Country}{' '}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor: '#F5FFFA',
                borderRadius: 20,
                marginVertical: 1,
                marginHorizontal: 5,
              }}>
              <Avatar.Image
                size={74}
                source={require('../Assets/img/dist.png')}
              />
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 'bold',
                  marginHorizontal: 15,
                }}>
                Total {this.state.Tot}{' '}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor: '#F5FFFA',
                borderRadius: 20,
                marginVertical: 1,
                marginHorizontal: 5,
              }}>
              <Avatar.Image
                size={74}
                source={require('../Assets/img/mask.png')}
              />
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 'bold',
                  marginHorizontal: 15,
                }}>
                Tooday {this.state.New}{' '}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor: '#F5FFFA',
                borderRadius: 20,
                marginVertical: 1,
                marginHorizontal: 5,
              }}>
              <Avatar.Image
                size={74}
                source={require('../Assets/img/deth.png')}
              />
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 'bold',
                  marginHorizontal: 15,
                }}>
                {' '}
                TotalDeaths {this.state.Det}{' '}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                backgroundColor: '#FFDAB9',
              }}>
              {' '}
              Find more{' '}
            </Text>

            <Card
              onPress={() => {
                //on clicking we are going to open the URL using Linking
                Linking.openURL('https://www.mygov.in/covid-19');
              }}>
              <Card.Title title="Stay Home Stay Safe" subtitle="" />

              <Card.Cover
                source={{
                  uri: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                }}
              />
              <Card.Content style={{backgroundColor: '#F0F8FF'}}>
                <Title>Covid Hospitals</Title>
                <Paragraph>list of covid 19 Hospitals and so on</Paragraph>
              </Card.Content>
            </Card>
            <Card
              onPress={() => {
                //on clicking we are going to open the URL using Linking
                Linking.openURL(
                  'https://www.who.int/health-topics/coronavirus#tab=tab_1',
                );
              }}>
              <Card.Cover
                source={{
                  uri: 'https://images.unsplash.com/photo-1582974006777-1117ffbdd7d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                }}
              />
              <Card.Content style={{backgroundColor: '#F0F8FF'}}>
                <Title>What Things You Should Know</Title>
                <Paragraph>this is in process</Paragraph>
              </Card.Content>
            </Card>
            <Card
              style={{marginBottom: 100}}
              onPress={() => {
                //on clicking we are going to open the URL using Linking
                Linking.openURL(
                  'https://www.vupune.ac.in/blog/6-simple-tips-to-survive-the-covid-19-lockdown',
                );
              }}>
              <Card.Cover
                source={{
                  uri: 'https://images.unsplash.com/photo-1583947581279-4eec08383c38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                }}
              />
              <Card.Content style={{backgroundColor: '#F0F8FF'}}>
                <Title>How to Survive</Title>
                <Paragraph>Use thise things to beat corona virus</Paragraph>
              </Card.Content>
            </Card>
          </View>
        </ScrollView>
      </View>
    );
  }
}
