import React from 'react';
import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import thymeImage from './../images/thyme.jpg';
import image1 from './../images/image1.jpg'
import image2 from './../images/image2.jpg'
import image3 from './../images/image3.jpg'
import ThymeTakeaway from './ThymeTakeaway';

export default class Thyme extends React.Component {
    setIconColor=()=>{
        if(this.state.starColor=='#000000'){
        this.setState({starColor:'#ffffff'})
        }else{
            this.setState({starColor:'#000000'})
        }
    }
    state={
        starColor:'#000000'
    }
  render() {
    return (
        <View style={{flex:1,marginTop:23,backgroundColor:'#E0E0E0'}}>
            <View style={styles.header}>
                <TouchableOpacity style={{borderRadius:60}} onPress={()=>this.props.navigation.goBack()}>
                <Icon
                    containerStyle={{}}
                    name='ios-arrow-back'
                    type='ionicon'
                    color='#ffffff'
                    size={32} />
                </TouchableOpacity>
                <Text style={{fontSize:20,color:'#ffffff'}}>THYME SQUARE CAFE</Text>
                <View style={{paddingRight:5}}>
                <Icon
                    containerStyle={{}}
                    name='md-star-outline'
                    type='ionicon'
                    onPress={this.setIconColor}
                    color={this.state.starColor}
                    size={32} />
                </View>
            </View>
            <ScrollView style={styles.container}>
                <View style={{alignItems:'center',padding:15}}>
                    <Image
                    source={thymeImage}
                    style={styles.thymeimage} />
                </View>
                <View style={{flex:1,flexDirection:'row', alignItems:'flex-start'}}>
                    <Image source={image1} style={styles.image}/>
                    <Image source={image2} style={styles.image}/>
                    <Image source={image3} style={styles.image}/>
                </View>
                <View style={{flex:1,marginTop:5,marginHorizontal:21,justifyContent:'flex-start',alignItems:'flex-start'}}>
                    <Text style={{fontSize:16,marginTop:25,color:'#616161'}} >Come and enjoy a truly relaxing experience in</Text>
                    <Text style={{fontSize:16,marginTop:5,color:'#616161'}} >the heart of Bora Bora!</Text>
                    <Text style={{fontSize:16,marginTop:10,color:'#616161'}}>We've got palm trees and everything, No lies.</Text>
                    <Text style={{fontSize:16,marginTop:5,color:'#616161'}}>Sure?</Text>
                </View>
                <View style={{borderTopColor: '#E0E0E0',borderTopWidth: 1,marginTop:5}}/>
                <View style={{flex:1,justifyContent:'flex-start',alignItems:'center',marginTop:10,marginBottom:40}}>
                    <Text style={{fontSize:16,color:'#000000',marginTop:0}}>How would you like to check-in today?</Text>
                    <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('ThymeTakeaway')}>
                        <Text style={styles.buttonText}>TAKEAWAY</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>DINE IN</Text>
                    </TouchableOpacity>
                </View>
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
  },
  header:{
    height:60,justifyContent:'space-between',backgroundColor:'#FF3D00',flexDirection:'row',padding:15
  },
  button:{
    width:250,
    //backgroundColor:BUTTON_COLOR,
    borderRadius:25,
    borderWidth: 2,
    borderColor: '#ff0000',
    marginVertical:10,
    paddingVertical:14
  },
  buttonText:{
    fontSize:20,
    fontWeight:'400',
    color:'#ff0000',
    textAlign:'center'
  },
  thymeimage:{
    width:160,
    height:60,
  },
  image:{
    width:100,
    marginLeft:21,
    height:120
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
