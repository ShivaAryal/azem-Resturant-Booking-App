import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,ScrollView } from 'react-native';
import { MapView } from 'expo';
import { Dialog } from 'react-native-simple-dialogs';
import Icon from 'react-native-vector-icons/Ionicons';
import Bill from './Bill';
export default class CurrentOrders extends React.Component {
  render() {
    return (
        <View style={{flex:1,marginTop:23,backgroundColor:'#E0E0E0'}}>
            <View style={styles.header}>
                <TouchableOpacity style={{borderRadius:50}} onPress={()=>this.props.navigation.goBack()}>
                <Icon
                    containerStyle={{}}
                    name='ios-arrow-back'
                    type='ionicon'
                    color='#ffffff'
                    size={32} />
                </TouchableOpacity>
                <Text style={{fontSize:20,color:'#ffffff'}}>MY CURRENT ORDERS</Text>
                <View></View>
            </View>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={{backgroundColor: '#ffffff',marginBottom:10,padding:15}}>
                    <Text style={{fontSize:19,color:'#424242'}}>Latest/Open Order</Text>
                    <Text style={{fontSize:17,color:'#424242',marginTop:4}}>NOTE:</Text>
                    <Text style={{fontSize:15,color:'#616161',marginVertical:4}}>Order not submitted yet! Tap order to Submit</Text>
                    <View style={{borderTopColor: '#E0E0E0',borderTopWidth: 1,marginVertical:8}}></View>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',marginVertical:5}} >
                        <Text style={{fontSize:16,color:'#424242',marginVertical:4}}>1 Chicken Burger</Text>
                        <Text style={{fontSize:16,color:'#424242',marginVertical:4}}>$10.00</Text>
                    </View>
                    <View style={{borderTopColor: '#E0E0E0',borderTopWidth: 1,marginVertical:5}}></View>
                    <Text style={{fontSize:16,color:'#424242',marginVertical:5}}>Additional Comments</Text>
                    <TextInput style={styles.textinput}
                        placeholderTextColor='#000000'
                        underlineColorAndroid='transparent'
                        // onChangeText={(address)=>this.setState({address:address})} 
                    />
                    <View style={{borderTopColor: '#E0E0E0',borderTopWidth: 1,marginVertical:5}}></View>
                    <TouchableOpacity style={styles.button} onPress={()=>this.setState({dialogVisible:true})} >
                            <Text style={styles.buttonText}>Send Order Now</Text>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor: '#ffffff',marginBottom:10,padding:15}}>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                        <View style={{flex:1,flexDirection:'column'}}>
                            <View style={{flex:1,flexDirection:'row'}} >
                                <View style={{width:15,height:15,borderRadius:15,backgroundColor:'#FF3D00',marginTop:6}}></View>
                                <Text style={{fontSize:19,color:'#424242',marginLeft:4}}>OrderA31/0</Text>
                            </View>
                            <Text style={{fontSize:15,color:'#616161',marginLeft:4}}>Your bill(OrderA31/0) is available</Text>
                        </View>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Bill')} style={{borderRadius:40,borderWidth: 2,borderColor: '#ff0000',width:100}} >
                            <Text style={{fontSize:17,alignSelf:'center',color:'#ff0000',marginTop:8}} >VIEW BILL</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{borderTopColor: '#E0E0E0',borderTopWidth: 3,marginVertical:5}}></View>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',marginVertical:5}} >
                        <Text style={{fontSize:16,color:'#424242',marginVertical:4}}>1 Chicken Burger</Text>
                        <Text style={{fontSize:16,color:'#424242',marginVertical:4}}>$10.00</Text>
                    </View>
                    <View style={{borderTopColor: '#E0E0E0',borderTopWidth: 1,marginVertical:8}}></View>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',marginVertical:5}} >
                        <Text style={{fontSize:16,color:'#424242',marginVertical:4}}>1 Cheese Burger</Text>
                        <Text style={{fontSize:16,color:'#424242',marginVertical:4}}>$30.00</Text>
                    </View>
                </View>
                <View style={{backgroundColor: '#ffffff',marginBottom:10,padding:15}}>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                        <View style={{flex:1,flexDirection:'column'}}>
                            <View style={{flex:1,flexDirection:'row'}} >
                                <View style={{width:15,height:15,borderRadius:15,backgroundColor:'#FF3D00',marginTop:6}}></View>
                                <Text style={{fontSize:19,color:'#424242',marginLeft:4}}>OrderA32/1</Text>
                            </View>
                            <Text style={{fontSize:15,color:'#616161',marginLeft:4}}>Order submitted and in progress</Text>
                            <Text style={{fontSize:15,color:'#616161',marginLeft:4}}>Received by Thymes Square Cafe at 3:40PM</Text>
                        </View>
                        <View></View>
                    </View>
                    <View style={{borderTopColor: '#E0E0E0',borderTopWidth: 3,marginVertical:5}}></View>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',marginVertical:5}} >
                        <Text style={{fontSize:16,color:'#424242',marginVertical:4}}>1 Chicken Burger</Text>
                        <Text style={{fontSize:16,color:'#424242',marginVertical:4}}>$10.00</Text>
                    </View>
                    <View style={{borderTopColor: '#E0E0E0',borderTopWidth: 1,marginVertical:8}}></View>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',marginVertical:5}} >
                        <Text style={{fontSize:16,color:'#424242',marginVertical:4}}>1 Cheese Burger</Text>
                        <Text style={{fontSize:16,color:'#424242',marginVertical:4}}>$30.00</Text>
                    </View>
                </View>
                <View style={{backgroundColor: '#ffffff',marginBottom:10,padding:15}}>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                        <View style={{flex:1,flexDirection:'column'}}>
                            <View style={{flex:1,flexDirection:'row'}} >
                                <View style={{width:15,height:15,borderRadius:15,backgroundColor:'#FF3D00',marginTop:6}}></View>
                                <Text style={{fontSize:19,color:'#424242',marginLeft:4}}>OrderA33/0</Text>
                            </View>
                            <Text style={{fontSize:15,color:'#616161',marginLeft:4}}>Paypal payment available</Text>
                        </View>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Bill')} style={{borderRadius:40,borderWidth: 2,borderColor: '#ff0000',width:100}} >
                            <Text style={{fontSize:17,alignSelf:'center',color:'#ff0000',marginTop:8}} >GET BILL</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{borderTopColor: '#E0E0E0',borderTopWidth: 3,marginVertical:5}}></View>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',marginVertical:5}} >
                        <Text style={{fontSize:16,color:'#424242',marginVertical:4}}>1 Chicken Burger</Text>
                        <Text style={{fontSize:16,color:'#424242',marginVertical:4}}>$10.00</Text>
                    </View>
                    <View style={{borderTopColor: '#E0E0E0',borderTopWidth: 1,marginVertical:8}}></View>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',marginVertical:5}} >
                        <Text style={{fontSize:16,color:'#424242',marginVertical:4}}>1 Cheese Burger</Text>
                        <Text style={{fontSize:16,color:'#424242',marginVertical:4}}>$30.00</Text>
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
    margin:15,
  },
  header:{
    height:60,justifyContent:'space-between',backgroundColor:'#FF3D00',flexDirection:'row',padding:15
  },
  textinput:{
    borderColor:'#E0E0E0',
    borderWidth: 1,
    alignSelf:'stretch',
    height:100,
    marginVertical:10
  },
  button:{
    alignSelf:'stretch',
    borderRadius:25,
    borderWidth: 2,
    borderColor: '#ff0000',
    marginTop:10,
    paddingVertical:10,
    marginHorizontal:0
  },
  buttonText:{
    fontSize:17,
    fontWeight:'400',
    color:'#ff0000',
    textAlign:'center'
  },
});
