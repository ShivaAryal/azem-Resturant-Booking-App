import React from 'react';
import { StyleSheet,TouchableOpacity, Text,TextInput, View,ScrollView,Image } from 'react-native';
import { Icon } from 'react-native-elements';
import Meza from './Meza';
export default class MyProfile extends React.Component {
  render() {
    return (
        <View style={{flex:1,marginTop:23,backgroundColor:'#E0E0E0'}}>
            <View style={styles.header}>
                <TouchableOpacity style={{borderRadius:70}} onPress={()=> this.props.navigation.navigate('Meza')}>
                <Icon
                    containerStyle={{}}
                    name='md-list'
                    type='ionicon'
                    color='#ffffff'
                    size={32} />
                </TouchableOpacity>
                <Text style={{paddingLeft:120,fontSize:20,color:'#ffffff'}}>MY PROFILE</Text>
            </View>
            <ScrollView style={styles.container}>
                <View style={{justifyContent:'center',alignItems:'center',paddingBottom:10,paddingTop:10}}>
                    <Image
                        style={{width:150,height:150,borderRadius:100}}
                        source={require('./../images/ronaldo.jpg')}
                    />
                </View>
                <Text style={styles.text}>Name</Text>
                <TextInput style={styles.textinput}
                    placeholderTextColor='#000000'
                    underlineColorAndroid='transparent'
                    // onChangeText={(address)=>this.setState({address:address})} 
                />
                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.textinput}
                    placeholderTextColor='#000000'
                    underlineColorAndroid='transparent'
                    // onChangeText={(address)=>this.setState({address:address})} 
                />
                <Text style={styles.text}>Comments and Requests</Text>
                <TextInput style={styles.textinput2}
                    placeholderTextColor='#000000'
                    underlineColorAndroid='transparent'
                    // onChangeText={(address)=>this.setState({address:address})} 
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Update</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column' ,
    backgroundColor: '#ffffff',
    margin:15,
    padding:20
  },
  header:{
    height:60,backgroundColor:'#FF3D00',flexDirection:'row',padding:15
  },
  textinput:{
    borderColor:'#E0E0E0',
    borderWidth: 1,
    alignSelf:'stretch',
    height:40 ,
    fontSize:16
  },
  textinput2:{
    borderColor:'#E0E0E0',
    borderWidth: 1,
    alignSelf:'stretch',
    height:100 
  },
  text:{
      fontSize:18,
      color:'#616161',
      marginTop:15,
      marginBottom:5
  },
  button:{
    width:200,
    borderRadius:25,
    borderWidth: 2,
    borderColor: '#ff0000',
    marginVertical:30,
    paddingVertical:10,
    alignSelf:'center'
  },
  buttonText:{
    fontSize:20,
    fontWeight:'400',
    color:'#ff0000',
    textAlign:'center'
  },
});
