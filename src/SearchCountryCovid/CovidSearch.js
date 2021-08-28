import * as React from 'react';
import { FlatList,Text,Image,Modal,Button, View ,StyleSheet,StatusBar,TextInput,ImageBackground,Platform,ScrollView} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
class Newp1 extends React.Component{
    constructor(){
        super()
    this.state={
        datas:[],
        data:[],
        isVisible: false  
    }}
    componentDidMount(){
       const url= 'https://api.covid19api.com/summary'
       fetch(url)
        .then((response) => response.json())
        .then((resp) => {
                this.setState({
                datas:resp.Countries,
                data:resp.Countries
            })}
            )
    }
 searchUser(textToSearch){
     this.setState({
        datas:this.state.data.filter(i=>
            i.Country.includes(textToSearch),)
     })
 }

    render(){
       
        return(
            <View>
        
<TextInput 
        placeholder='Search Here.....'  
    onChangeText={text=>{
        this.searchUser(text)
    }}
        style={{ width:"100%",
        height:60,
      backgroundColor:'rgb(245,255,250)',      
      borderRadius:30,
      paddingHorizontal:20 
         
     }}>
       
     </TextInput>
     <FlatList  
                data={this.state.datas}
                keyExtractor={(x,i)=>i}
                renderItem={({item})=>
                <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'green',fontSize:25}}
             onPress={() => {
                this.props.navigation.navigate('Details', {
                  country: item.Country,
                  tot:item.TotalConfirmed,
                  newc:item.NewConfirmed,
                  death:item.NewDeaths,
                  totd:item.TotalDeaths,
                  trec:item.TotalRecovered,
                  nrec:item.NewRecovered
                });
              }}
            >
                {item.Country}
               
            </Text>
         
            </View>
            }
            
            />
                  <Modal            
          animationType = {"fade"}  
          transparent = {true}  
          visible = {this.state.isVisible}  
         >   
              <View style = {styles.modal}>  
        <Text style = {styles.text}>Hello</Text>

        
    
              <Button title="Click To Close Modal" onPress = {() => {  
                  this.setState({ isVisible:false})}}/>  
          </View>  
        </Modal> 
            </View>
        );
    }

}
function CovidSearch() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Newp1}  
          options={{
            title: 'Search By Country',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>
          <Stack.Screen name="Details" component={Newp2} 
          options={({ route }) => ({ title: route.params.country, headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, })}/>
        </Stack.Navigator>
      
    );
  }
  function Newp2({ route,navigation }) {
    const { country,tot,totd,death,newc,trec,nrec} = route.params;
    return (
      <ScrollView>
             <View style={{ width:'auto',height:200,
      backgroundColor:'#3498db',
      borderRadius:30,
      marginHorizontal:15,
      marginTop:25,
      borderBottomLeftRadius:15,
      }}>

<Text style={{fontSize:30,textAlign:'center',fontWeight:'bold'}}>
<Image
        style = {{ width: 50, height: 50 }}
        source={require('../Assets/img/home.png')}
       
      
      />  Total Confirmed</Text>
<Text style={{fontSize:50,textAlign:'center',fontWeight:'bold', marginVertical:20,color:'#f5f6fa'}}>  {tot} </Text>
      </View>

      <View style={{ width:'auto',height:200,
      backgroundColor:'#e056fd',
      borderRadius:30,
      marginHorizontal:15,
      borderBottomEndRadius:150,
      marginTop:20
      }}>
 
<Text style={{fontSize:30,textAlign:'center',fontWeight:'bold'}}><Image
        style = {{ width: 50, height: 50 }}
        source={require('../Assets/img/dist.png')}
      />  Today Confirmed</Text>
<Text style={{fontSize:50,textAlign:'center',fontWeight:'bold',marginVertical:20,color:'#f5f6fa' }}>

  {newc}</Text>
   </View>
      <View style={{ width:'auto',height:200,
      backgroundColor:'rgb(32,178,170)',
      borderRadius:30,
      borderBottomLeftRadius:200,
      borderBottomEndRadius:200,
      marginHorizontal:15,
      marginTop:20
      }}>
 
<Text style={{fontSize:30,textAlign:'center',fontWeight:'bold',color:'#f5f6fa'}}>
<Image
        style = {{ width: 50, height: 50, }}
        source={require('../Assets/img/mask.png')}
/>   Today Recovered</Text>
<Text style={{fontSize:50,textAlign:'center',fontWeight:'bold',marginVertical:30,color:'#f5f6fa'}}>{nrec}</Text>
      </View>
      <View style={{ width:'auto',height:200,
      backgroundColor:'rgb(32,178,170)',
      borderRadius:30,
      borderTopEndRadius:200,
      borderBottomEndRadius:200,
      marginHorizontal:15,
      marginTop:20
      }}>
 
<Text style={{fontSize:30,textAlign:'center',fontWeight:'bold',color:'#FFFAFA'}}>
<Image
        style = {{ width: 50, height: 50, }}
        source={require('../Assets/img/dist.png')}
/>   Total Recovered</Text>
<Text style={{fontSize:50,textAlign:'center',fontWeight:'bold',marginVertical:30,color:'#FFFAFA'}}>{trec}</Text>
      </View>

      <View style={{ width:'auto',height:200,
      backgroundColor:'tomato',
      borderRadius:30,
      marginHorizontal:15,
      borderBottomLeftRadius:150,
      marginTop:20
      }}>
 
<Text style={{fontSize:30,textAlign:'center',fontWeight:'bold'}}><Image
        style = {{ width: 50, height: 50 }}
        source={require('../Assets/img/deths.png')}
      />  Today Deaths</Text>
<Text style={{fontSize:50,textAlign:'center',fontWeight:'bold',marginVertical:20,color:'#f5f6fa' }}>

  {death}</Text>
      </View>

      <View style={{ width:'auto',height:200,
      backgroundColor:'#f6e58d',
      borderRadius:30,
      marginHorizontal:15,
      marginTop:20,
      marginBottom:10
      }}>
 
<Text style={{fontSize:30,textAlign:'center',fontWeight:'bold',color:'red'}}>
<Image
        style = {{ width: 55, height: 55 }}
        source={require('../Assets/img/deth.png')}
      />   Total Deaths</Text>
<Text style={{fontSize:50,textAlign:'center',fontWeight:'bold',marginVertical:30,color:'red'}}>{totd}</Text>
      </View>

      </ScrollView>
    );
  }
export default CovidSearch;

const styles = StyleSheet.create({  
    container: {  
      flex: 1,  
      alignItems: 'center',  
      justifyContent: 'center',  
      backgroundColor: '#ecf0f1',  
    },  
    modal: {  
    justifyContent: 'center',  
    alignItems: 'center',   
    backgroundColor : "#00BCD4",   
    height: 300 ,  
    width: '80%',  
    borderRadius:10,  
    borderWidth: 1,  
    borderColor: '#fff',    
    marginTop: 250,  
    marginLeft: 40,  
     
     },  
     text: {  
        color: '#3f2949',  
        marginTop: 10  
     }  
  }); 