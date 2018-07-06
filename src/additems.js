import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,ScrollView } from 'react-native';
import { MapView } from 'expo';
import Icon from 'react-native-vector-icons/Ionicons';
export default class AddItems extends React.Component {
    setIconColor=()=>{
        if(this.state.starColor=='#000000'){
        this.setState({starColor:'#ffffff'})
        }else{
            this.setState({starColor:'#000000'})
        }
    }
    increaseQuantity=()=>{
        let temp = this.state.quantity+1;
        this.setState({'quantity':temp})
    }
    decreaseQuantity=()=>{
        let temp = this.state.quantity-1;
        if(temp<0){
            temp=0;
        }
        this.setState({'quantity':temp})
    }
    state={
        starColor:'#000000',
        quantity:0
    }
  render() {
    return (
        <View style={{flex:1,marginTop:23,backgroundColor:'#E0E0E0'}}>
            <View style={styles.header}>
                <Icon
                    containerStyle={{}}
                    name='ios-arrow-back'
                    type='ionicon'
                    color='#ffffff'
                    size={32} />
                <Text style={{paddingLeft:40,fontSize:20,color:'#ffffff'}}>ADD ITEMS TO YOUR ORDER</Text>
                <View style={{alignItems:'flex-end',paddingLeft:40}}>
                <Icon
                    containerStyle={{alignItems: 'flex-end',marginLeft:10}}
                    name='md-star-outline'
                    type='ionicon'
                    onPress={this.setIconColor}
                    color={this.state.starColor}
                    size={32} />
                </View>
            </View>
            <ScrollView style={styles.container}>
                <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start'}}>
                    <Text style={{fontSize:20,color:'#424242',fontWeight:'200'}}>Chicken Burger</Text>
                    <Text style={{fontSize:16,color:'#616161'}}>Menu: Burger</Text>
                    <Text style={{fontSize:15,color:'#616161',marginTop:10}}>No additional infromation available</Text>
                </View>
                <View style={{borderTopColor: '#E0E0E0',borderTopWidth: 1,marginVertical:15}}>
                </View>
                <View style={{flex:1,flexDirection:'row', alignItems:'flex-start'}}>
                    <Text style={{fontSize:17,color:'#616161',alignSelf:'center'}}>Change Order Quantity</Text>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center',borderColor:'#9E9E9E',borderWidth:1,marginVertical:5,marginLeft:20,width:50,height:50}}>
                        <TouchableOpacity onPress={this.decreaseQuantity}>
                            <Text style={{fontSize:19,fontWeight:'200',padding:10}}>-</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center',borderColor:'#9E9E9E',borderTopWidth:1,borderBottomWidth:1,borderLeftWidth:0,borderRightWidth:1,marginVertical:5,width:60,height:50}}>
                        <Text style={{fontSize:19}}>{this.state.quantity}</Text>
                    </View>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center',borderColor:'#9E9E9E',borderTopWidth:1,borderBottomWidth:1,borderLeftWidth:0,borderRightWidth:1,marginVertical:5,width:50,height:50}}>
                    <TouchableOpacity onPress={this.increaseQuantity}>
                        <Text style={{fontSize:19,padding:10}}>+</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={{borderTopColor: '#E0E0E0',borderTopWidth: 1,marginVertical:15}}>
                </View>
                <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start',marginBottom:10}}>
                    <Text style={{fontSize:17,color:'#616161'}}>Comments and Requests</Text>
                </View>
                <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start'}}>
                <TextInput style={styles.textinput}
                    placeholderTextColor='#000000'
                    underlineColorAndroid='transparent'
                    // onChangeText={(address)=>this.setState({address:address})} 
                />
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>PLACE MY ITEMS INTO CART</Text>
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
    padding:15
  },
  header:{
    height:60,backgroundColor:'#FF3D00',flexDirection:'row',padding:15
  },
  textinput:{
    borderColor:'#9E9E9E',
    borderWidth: 1,
    alignSelf:'stretch',
    height:150 
  },
  button:{
    alignSelf:'stretch',
    borderRadius:25,
    borderWidth: 2,
    borderColor: '#ff0000',
    marginVertical:35,
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
