import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,ScrollView } from 'react-native';
import { MapView } from 'expo';
import { Dialog } from 'react-native-simple-dialogs';
import Icon from 'react-native-vector-icons/Ionicons';
export default class Bill extends React.Component {
    state={
        'items':[{'name':'Garlic Bread','description':'No description available','quantity':1,'price':20.00},
    {'name':'Chicekn Burger','description':'Choook chook','quantity':2,'price':30.00},
    {'name':'Wagu Burger','description':'Best beef in the planet','quantity':1,'price':20.00},
    {'name':'Hawaijahaj Pizza','description':'No description available','quantity':3,'price':15.00}],
    'sum':0,
    'gst':1.82,
    }
    componentWillMount(){
        let sum=0;
        this.state.items.map(item=>(
            sum=sum+(item.price*item.quantity)
        ))
        this.setState({sum:sum})   
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
                <Text style={{fontSize:20,color:'#ffffff'}}>ORDER A1(TAKEAWAY)</Text>
                <View></View>
            </View>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={{flex:1,backgroundColor:'#EEEEEE'}}>
                    <Text style={{fontSize:19,color:'#212121',alignSelf:'center',paddingVertical:15}}>Amount Due: $20.00</Text>
                </View>
                <View style={{padding:15}}>
                    <View style={{alignItems:'center'}} >
                        <Text style={{fontSize:17,color:'#424242'}}>Thyme Square Cafe</Text>
                        <Text style={{fontSize:17,marginTop:2,color:'#424242'}}>Hampshire</Text>
                        <Text style={{fontSize:18,marginTop:5,color:'#212121'}}>TAX INVOICE</Text>
                    </View>
                    <View style={{borderTopColor: '#E0E0E0',borderTopWidth: 1,marginVertical:10}}></View>
                    {this.state.items.map((item,i)=>(
                    <View  key={i} >
                        <View style={{flex:1,flexDirection:'row', justifyContent:'space-between',marginBottom:5}}>
                            <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start',paddingTop:2}}>
                                    <Text style={{fontSize:18,color:'#424242'}}>{item.name}({item.quantity})</Text>
                                    <Text style={{fontSize:16,color:'#616161'}}>{item.description}</Text>
                            </View>
                            <Text style={{fontSize:16,marginVertical:8}}>{item.price.toFixed(2)}</Text>
                        </View>
                        <View style={{borderTopColor: '#E0E0E0',borderTopWidth: 1,marginVertical:8}}></View>
                    </View>
                    ))} 
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',padding:15}} >
                    <View></View>
                    <Text style={{fontSize:18,marginLeft:40}}>SUBTOTAL</Text>
                    <Text style={{fontSize:16}}>{this.state.sum.toFixed(2)}</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',padding:15}} >
                    <View></View>
                    <Text style={{fontSize:18,marginLeft:40,marginVertical:5}}>GST</Text>
                    <Text style={{fontSize:16,marginVertical:5}}>{this.state.gst.toFixed(2)}</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',padding:15}} >
                    <View></View>
                    <Text style={{fontSize:18,marginLeft:40,marginVertical:5,fontWeight:'300'}}>TOTAL DUE</Text>
                    <Text style={{fontSize:16,marginVertical:5,fontWeight:'300'}}>{(this.state.gst+this.state.sum).toFixed(2)}</Text>
                </View>
                <Text style={{fontSize:16,color:'#616161',alignSelf:'flex-end',padding:15}}>(Total is inclusive of GST)</Text>
                <View style={{borderTopColor: '#E0E0E0',borderTopWidth: 1,marginVertical:8,marginHorizontal:15}}></View>
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
    backgroundColor:'#ffffff'
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
