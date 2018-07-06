import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import { MapView } from 'expo';
import { Icon } from 'react-native-elements'

export default class Map extends React.Component {
  render() {
    return (
        <View style={{flex:1,marginTop:23,backgroundColor:'#E0E0E0'}}>
            <View style={styles.header}>
            <View style={{flexDirection:'row',marginTop:8}}>
                <Icon
                containerStyle={{paddingLeft:30}}
                name='md-list'
                type='ionicon'
                color='#ffffff'
                size={32} />
                <Text style={{paddingTop:5,paddingLeft:125,fontSize:26,color:'#ffffff',fontWeight:'bold'}}>meza</Text>
            </View>
            <View style={{paddingTop:10}}>
            <TextInput style={styles.textinput}
                placeholder={'Enter'}
                placeholderTextColor='#000000'
                underlineColorAndroid='transparent'
                // onChangeText={(address)=>this.setState({address:address})} 
            />
            </View>
            </View>
            <View style={styles.container}>
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
            
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column' ,
    backgroundColor: '#ffffff',
    margin:0
  },
  header:{
    height:120,backgroundColor:'#FF3D00',flexDirection:'column'
  },
  body:{
      flex:1,
      backgroundColor:'#FAFAFA'
  },
  textinput:{
    width:350,
    backgroundColor:'#ffffff',
    paddingHorizontal:15,
    fontSize:17,
    borderRadius:25,
    color:'#000000',
    marginBottom:5,
    marginTop:10,
    margin:30,
    height:40,
    
  }
});
