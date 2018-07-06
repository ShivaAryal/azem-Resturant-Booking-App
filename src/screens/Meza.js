import React from 'react';
import { StyleSheet,TouchableOpacity, Text,TextInput, View,ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import Map from './MainScreen';
import FavouriteVenue from './FavouriteVenue';
import MyReceipts from './MyReceipts';
import MyProfile from './MyProfile';
import Feedback from './Feedback';
import MyPreferences from './MyPreferences';

export default class Meza extends React.Component {
  render() {
    return (
        <View style={{flex:1,marginTop:23,backgroundColor:'#E0E0E0'}}>
            <View style={styles.header}>
                <TouchableOpacity style={{borderRadius:70}} onPress={()=> this.props.navigation.goBack()}>
                <Icon
                    containerStyle={{paddingLeft:10}}
                    name='cross'
                    type='entypo'
                    color='#ffffff'
                    size={32} />
                </TouchableOpacity>
                <Text style={{fontSize:28,color:'#ffffff',fontWeight:'bold'}}>meza</Text>
                <View style={{marginHorizontal:25}}></View>
            </View>
            <ScrollView style={styles.container}>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',marginBottom:20,marginLeft:40}}>
                    <View>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Map')} style={{width:105,height:105,borderRadius:80,backgroundColor:'#ffffff',marginRight:50}}>
                        <Icon
                        containerStyle={{marginTop:5}}
                        name='location-pin'
                        type='entypo'
                        color='#FF3D00'
                        size={90} />
                    </TouchableOpacity>
                    <Text style={{fontSize:16,paddingLeft:22,fontWeight:'500',color:'#616161'}}>LOCATE</Text>
                    </View>
                    <View>
                    <TouchableOpacity style={{width:105,height:105,borderRadius:80,backgroundColor:'#ffffff'}}>
                    <Icon
                        //onPress={this.goBack}
                        containerStyle={{marginTop:15}}
                        name='chat'
                        type='entypo'
                        color='#FF3D00'
                        size={75} />
                    </TouchableOpacity>
                    <Text style={{fontSize:16,paddingLeft:15,fontWeight:'500',color:'#616161'}}>MESSAGES</Text>
                    </View>
                </View> 
                <View style={{flex:1,flexDirection:'row',alignItems:'center',marginBottom:20,marginLeft:40}}>
                <View>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('FavouriteVenue')} style={{width:105,height:105,borderRadius:80,backgroundColor:'#ffffff',marginRight:50}}>
                    <Icon
                        
                        containerStyle={{marginTop:10}}
                        name='star-outlined'
                        type='entypo'
                        color='#FF3D00'
                        size={75} />
                    </TouchableOpacity>
                    <Text style={{fontSize:16,paddingLeft:11,fontWeight:'500',color:'#616161'}}>FAVOURITES</Text>
                    </View>
                    <View>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('MyReceipts')} style={{width:105,height:105,borderRadius:80,backgroundColor:'#ffffff'}}>
                    <Icon
                        containerStyle={{marginTop:15}}
                        name='news'
                        type='entypo'
                        color='#FF3D00'
                        size={75} />
                    </TouchableOpacity>
                    <Text style={{fontSize:16,paddingLeft:8,fontWeight:'500',color:'#616161'}}>MY RECEIPTS</Text>
                    </View>
                </View> 
                <View style={{flex:1,flexDirection:'row',alignItems:'center',marginBottom:20,marginLeft:40}}>
                <View>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('MyProfile')} style={{width:105,height:105,borderRadius:80,backgroundColor:'#ffffff',marginRight:50}}>
                    <Icon
                        //onPress={this.goBack}
                        containerStyle={{marginTop:15}}
                        name='emoji-happy'
                        type='entypo'
                        color='#FF3D00'
                        size={75} />
                    </TouchableOpacity>
                    <Text style={{fontSize:16,paddingLeft:13,fontWeight:'500',color:'#616161'}}>MY PROFILE</Text>
                    </View>
                    <View>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('MyPreferences')} style={{width:105,height:105,borderRadius:80,backgroundColor:'#ffffff'}}>
                    <Icon
                        //onPress={this.goBack}
                        containerStyle={{marginTop:15}}
                        name='settings'
                        type='feather'
                        color='#FF3D00'
                        size={75} />
                    </TouchableOpacity>
                    <Text style={{fontSize:16,paddingLeft:0,fontWeight:'500',color:'#616161'}}>MY PREFERENCES</Text>
                    </View>
                </View>  
                <View style={{flex:1,flexDirection:'row',alignItems:'center',marginLeft:40}}>
                <View>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Feedback')} style={{width:105,height:105,borderRadius:80,backgroundColor:'#ffffff',marginRight:50}}>
                    <Icon
                        //onPress={this.goBack}
                        containerStyle={{marginTop:15}}
                        name='users'
                        type='entypo'
                        color='#FF3D00'
                        size={60} />
                    </TouchableOpacity>
                    <Text style={{fontSize:16,paddingLeft:20,fontWeight:'500',color:'#616161'}}>FEEDBACK</Text>
                    </View>
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
    backgroundColor: '#E0E0E0',
    margin:15,
    padding:15
  },
  header:{
    height:60,
    backgroundColor:'#FF3D00',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  
});
