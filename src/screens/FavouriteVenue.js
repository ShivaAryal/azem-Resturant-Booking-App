import React from 'react';
import { StyleSheet, ScrollView,Text, View,TextInput,Image,TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import thyme from './../images/thyme.jpg';
import hangry from './../images/hangry.png';
import Meza from './Meza'
import Thyme from './Thyme'
export default class FavouriteVenue extends React.Component {
    state={
        favourites:[{'name':'THYME SQAURE CAFE','location':'Hampshire','logo':thyme,'id':'Thyme'},{name:'THE HANGRY CAFE','location':'Hampshire','logo':hangry,'id':'Thyme'}]
    }
  render() {
    return (
        <View style={{flex:1,marginTop:23,backgroundColor:'#E0E0E0'}}>
            <View style={styles.header}>
                <View style={{flexDirection:'row',marginTop:8,marginLeft:30}}>
                    <Icon
                    onPress={()=>this.props.navigation.navigate('Meza')}
                    containerStyle={{paddingLeft:30}}
                    name='md-list'
                    type='ionicon'
                    color='#ffffff'
                    size={32} />
                    <Text style={{paddingTop:5,paddingLeft:50,fontSize:20,color:'#ffffff',textAlign:'center',fontWeight:'300'}}>YOUR FAVOURITE VENUES</Text>
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
            <ScrollView style={styles.container}>
                {this.state.favourites.map((favourite,i)=>(
                    <View key={i} >
                    <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate(favourite.id)}>
                    <View style={{flex:1,flexDirection:'row', justifyContent:'center'}}>
                    
                        <View style={{}}>
                            <Image source={favourite.logo} style={{width:90,height:70,borderRadius:90}}/>
                        </View>
                        <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start',paddingLeft:30,paddingTop:15}}>
                            <Text style={{fontSize:16}}>{favourite.name}</Text>
                            <Text style={{fontSize:14}}>{favourite.location}</Text>
                        </View>
                        <View style={{alignItems:'center',paddingTop:20}}>
                            <Icon
                                style={{}}
                                name='ios-arrow-forward'
                                type='ionicon'
                                size={32} />
                        </View>
                    
                    </View>
                    </TouchableWithoutFeedback>
                    <View style={{borderTopColor: '#E0E0E0',borderTopWidth: 1,marginTop:5}}/>
                    </View>
                ))}
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
    padding:10,
   
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
