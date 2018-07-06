import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,ScrollView } from 'react-native';
import { MapView } from 'expo';
import { Dialog } from 'react-native-simple-dialogs';
import Icon from 'react-native-vector-icons/Ionicons';
import CurrentOrders from './CurrentOrders'
export default class MyCurrentOrders extends React.Component {
    state={
        dialogVisible:false
    }
    onOkPress=()=>{
        this.setState({dialogVisible: false})
        this.props.navigation.navigate('CurrentOrders')
    }
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
            <ScrollView style={styles.container}>
                <Text style={{fontSize:19,color:'#424242'}}>Latest/Open Order</Text>
                <Text style={{fontSize:17,color:'#424242',marginTop:15}}>NOTE:</Text>
                <Text style={{fontSize:15,color:'#616161',marginVertical:5}}>Order not submitted yet! Tap order to Submit</Text>
                <View style={{borderTopColor: '#E0E0E0',borderTopWidth: 1,marginVertical:10}}></View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',marginVertical:10}} >
                <Text style={{fontSize:16,color:'#424242',marginVertical:5}}>1 Chicken Burger</Text>
                <Text style={{fontSize:16,color:'#424242',marginVertical:5}}>$10.00</Text>
                </View>
                <View style={{borderTopColor: '#E0E0E0',borderTopWidth: 1,marginVertical:10}}></View>
                <Text style={{fontSize:16,color:'#424242',marginVertical:10}}>Additional Comments</Text>
                <TextInput style={styles.textinput}
                    placeholderTextColor='#000000'
                    underlineColorAndroid='transparent'
                    // onChangeText={(address)=>this.setState({address:address})} 
                />
                <View style={{borderTopColor: '#E0E0E0',borderTopWidth: 1,marginVertical:10}}></View>
                <TouchableOpacity style={styles.button} onPress={()=>this.setState({dialogVisible:true})} >
                    <Text style={styles.buttonText}>Send Order Now</Text>
                </TouchableOpacity>
                <Dialog 
                    visible={this.state.dialogVisible} 
                    onTouchOutside={() => this.setState({dialogVisible: false})} >
                    <View style={{alignItems:'center'}}>
                        <Text style={{fontSize:19,color:'#424242'}}>Success</Text>
                        <Text style={{fontSize:17,color:'#616161',marginTop:10}}>Your order has been submitted to</Text>
                        <Text style={{fontSize:17,color:'#616161'}}>Thymes Square Cafe</Text>
                        <TouchableOpacity style={{width:80,height:40,marginTop:30,borderRadius:20,borderWidth:1,borderColor:'#FF3D00'}} onPress={this.onOkPress} >
                            <Text style={{fontSize:18,color:'#FF3D00',alignSelf:'center',marginTop:5}}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </Dialog>
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
    padding:15
  },
  header:{
    height:60,justifyContent:'space-between',backgroundColor:'#FF3D00',flexDirection:'row',padding:15
  },
  textinput:{
    borderColor:'#E0E0E0',
    borderWidth: 1,
    alignSelf:'stretch',
    height:170,
    marginVertical:20
  },
  button:{
    alignSelf:'stretch',
    borderRadius:25,
    borderWidth: 2,
    borderColor: '#ff0000',
    marginVertical:20,
    paddingVertical:14,
    marginHorizontal:0
  },
  buttonText:{
    fontSize:17,
    fontWeight:'400',
    color:'#ff0000',
    textAlign:'center'
  },
});
