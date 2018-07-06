import React from 'react';
import { StyleSheet,TouchableOpacity, Text,TextInput, View,ScrollView } from 'react-native';

export default class Meza extends React.Component {
  render() {
    return (
        <View style={{flex:1,marginTop:23,backgroundColor:'#E0E0E0'}}>
            <View style={styles.header}>
                <Text style={{fontSize:28,color:'#ffffff',fontWeight:'bold'}}>meza</Text>
            </View>
            <ScrollView style={styles.container}>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',marginBottom:20,marginLeft:40}}>
                    <View>
                    <TouchableOpacity style={{width:105,height:105,borderRadius:80,backgroundColor:'#ffffff',marginRight:50}}>
                    </TouchableOpacity>
                    <Text style={{fontSize:16,paddingLeft:22,fontWeight:'500'}}>LOCATE</Text>
                    </View>
                    <View>
                    <TouchableOpacity style={{width:105,height:105,borderRadius:80,backgroundColor:'#ffffff'}}>
                    </TouchableOpacity>
                    <Text style={{fontSize:16,paddingLeft:15,fontWeight:'500'}}>MESSAGES</Text>
                    </View>
                </View> 
                <View style={{flex:1,flexDirection:'row',alignItems:'center',marginBottom:20,marginLeft:40}}>
                <View>
                    <TouchableOpacity style={{width:105,height:105,borderRadius:80,backgroundColor:'#ffffff',marginRight:50}}>
                    </TouchableOpacity>
                    <Text style={{fontSize:16,paddingLeft:11,fontWeight:'500'}}>FAVOURITES</Text>
                    </View>
                    <View>
                    <TouchableOpacity style={{width:105,height:105,borderRadius:80,backgroundColor:'#ffffff'}}>
                    </TouchableOpacity>
                    <Text style={{fontSize:16,paddingLeft:8,fontWeight:'500'}}>MY RECEIPTS</Text>
                    </View>
                </View> 
                <View style={{flex:1,flexDirection:'row',alignItems:'center',marginBottom:20,marginLeft:40}}>
                <View>
                    <TouchableOpacity style={{width:105,height:105,borderRadius:80,backgroundColor:'#ffffff',marginRight:50}}>
                    </TouchableOpacity>
                    <Text style={{fontSize:16,paddingLeft:13,fontWeight:'500'}}>MY PROFILE</Text>
                    </View>
                    <View>
                    <TouchableOpacity style={{width:105,height:105,borderRadius:80,backgroundColor:'#ffffff'}}>
                    </TouchableOpacity>
                    <Text style={{fontSize:16,paddingLeft:0,fontWeight:'500'}}>MY PREFERENCES</Text>
                    </View>
                </View>  
                <View style={{flex:1,flexDirection:'row',alignItems:'center',marginLeft:40}}>
                <View>
                    <TouchableOpacity style={{width:105,height:105,borderRadius:80,backgroundColor:'#ffffff',marginRight:50}}>
                    </TouchableOpacity>
                    <Text style={{fontSize:16,paddingLeft:20,fontWeight:'500'}}>FEEDBACK</Text>
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
    padding:15,
    alignItems:'center',
    justifyContent:'center'
  },
  
});
