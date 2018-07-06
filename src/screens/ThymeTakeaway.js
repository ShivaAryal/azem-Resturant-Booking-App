import React from 'react';
import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity,TouchableWithoutFeedback,ScrollView } from 'react-native';
import IoniIcon from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements';
import MyCurrentOrders from './MyCurrentOrders';
import { Dialog } from 'react-native-simple-dialogs';
import thymeImage from './../images/thyme.jpg';
import image1 from './../images/image1.jpg'
import image2 from './../images/image2.jpg'
import image3 from './../images/image3.jpg'
import image4 from './../images/pizza.jpg'
import image5 from './../images/waiter.jpg';
import Menu from './Menu'

export default class ThymeTakeaway extends React.Component {
    setIconColor=()=>{
        if(this.state.starColor=='#000000'){
        this.setState({starColor:'#ffffff'})
        }else{
            this.setState({starColor:'#000000'})
        }
    }
    state={
        starColor:'#000000',
        takeAwayDialogVisible:false,
        BillDialogVisible:false
    }
  render() {
    return (
        <View style={{flex:1,marginTop:23,backgroundColor:'#E0E0E0'}}>
            <View style={styles.header}>
                <TouchableOpacity style={{borderRadius:60}} onPress={()=>this.props.navigation.goBack()}>
                <IoniIcon
                    containerStyle={{}}
                    name='ios-arrow-back'
                    type='ionicon'
                    color='#ffffff'
                    size={32} />
                </TouchableOpacity>
                <Text style={{fontSize:20,color:'#ffffff'}}>THYME SQUARE CAFE-TAKEAWAY</Text>
                <View style={{paddingRight:5}}>
                <IoniIcon
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
                <ScrollView style={{flex:1}} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Image source={image1} style={styles.image}/>
                    <Image source={image2} style={styles.image}/>
                    <Image source={image3} style={styles.image}/>
                    <Image source={image4} style={styles.image}/>
                    <Image source={image5} style={styles.image}/>
                    <Image source={image1} style={styles.image}/>
                    <Image source={image2} style={styles.image}/>
                    <Image source={image3} style={styles.image}/>
                    <Image source={image4} style={styles.image}/>
                </ScrollView>
                <View style={{flex:1,flexDirection:'row',marginVertical:20,marginHorizontal:50}}>
                    <View style={{marginRight:40,alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity style={{borderRadius:120,width:120,height:120,borderWidth:1,borderColor:'#BDBDBD'}}>
                        <Icon
                           containerStyle={{marginTop:20}}
                           name='drink'
                           type='entypo'
                           color='#FF3D00'
                           size={80} /> 
                    </TouchableOpacity>
                    <Text style={{color:'#616161',fontSize:17}} >Drinks</Text>
                    </View>
                    <View  style={{alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Menu')} style={{borderRadius:120,width:120,height:120,borderWidth:1,borderColor:'#BDBDBD'}}>
                    <Icon
                           containerStyle={{marginTop:20}}
                           name='text-document'
                           type='entypo'
                           color='#FF3D00'
                           size={80} /> 
                    </TouchableOpacity>
                    <Text style={{color:'#616161',fontSize:17}} >Menu</Text>
                    </View>
                </View>
                <View style={{flex:1,flexDirection:'row',marginHorizontal:50}}>
                    <View style={{marginRight:40,alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('MyCurrentOrders')} style={{borderRadius:120,width:120,height:120,borderWidth:1,borderColor:'#BDBDBD'}}>
                        <Icon
                           containerStyle={{marginTop:20}}
                           name='calculator'
                           type='entypo'
                           color='#FF3D00'
                           size={80} /> 
                    </TouchableOpacity>
                    <Text style={{color:'#616161',fontSize:17}} >My Orders</Text>
                    </View>
                    <View  style={{alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity style={{borderRadius:120,width:120,height:120,borderWidth:1,borderColor:'#BDBDBD'}} onPress={()=>this.setState({takeAwayDialogVisible:true})} >
                    <Icon
                           containerStyle={{marginTop:20}}
                           name='bell'
                           type='entypo'
                           color='#FF3D00'
                           size={80} /> 
                    </TouchableOpacity>
                    <Text style={{color:'#616161',fontSize:17}} >Call Waiter</Text>
                    </View>
                </View>
                <TouchableOpacity style={{alignSelf:'center',width:150,paddingVertical:10,paddingHorizontal:20,borderRadius:30,borderWidth:2,borderColor:'#FF3D00',marginTop:20}}  onPress={()=>this.setState({BillDialogVisible:true})}>
                    <Text style={{fontSize:18,color:'#FF3D00',alignSelf:'center'}} >BILL PLEASE</Text>
                </TouchableOpacity>
            </ScrollView>
            <Dialog 
                visible={this.state.takeAwayDialogVisible} 
                onTouchOutside={() => this.setState({takeAwayDialogVisible: false})} >
                <View style={{alignItems:'center',padding:10}} >
                    <Text style={{fontSize:23,color:'#FF3D00',alignSelf:'center'}}>NOT AVAILABLE</Text>
                    <Text style={{fontSize:15,color:'#616161',paddingTop:10}}>You can't call a waiter for takeaway orders</Text>
                    <Text style={{fontSize:15,color:'#616161'}}>Please check with staff</Text>
                    <TouchableOpacity style={{width:80,height:40,marginTop:25,borderRadius:20,borderWidth:1,borderColor:'#FF3D00'}} onPress={() => this.setState({takeAwayDialogVisible: false})} >
                        <Text style={{fontSize:18,color:'#FF3D00',alignSelf:'center',marginTop:5}}>OK</Text>
                    </TouchableOpacity>
                </View>
            </Dialog>  
            <Dialog 
                visible={this.state.BillDialogVisible} 
                onTouchOutside={() => this.setState({BillDialogVisible: false})} >
                <View style={{alignItems:'center',padding:7}} >
                    <Text style={{fontSize:23,color:'#FF3D00',alignSelf:'center'}}>SUCCESS</Text>
                    <Text style={{fontSize:15,color:'#616161',paddingTop:10}}>A bill request is already active for your table</Text>
                    <Text style={{fontSize:15,color:'#616161'}}>Someone should be with you soon.</Text>
                    <TouchableOpacity style={{width:80,height:40,marginTop:25,borderRadius:20,borderWidth:1,borderColor:'#FF3D00'}} onPress={() => this.setState({BillDialogVisible: false})} >
                        <Text style={{fontSize:18,color:'#FF3D00',alignSelf:'center',marginTop:5}}>OK</Text>
                    </TouchableOpacity>
                </View>
            </Dialog>    
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column' ,
    backgroundColor: '#ffffff',
    margin:15
  },
  header:{
    height:60,backgroundColor:'#FF3D00',justifyContent:'space-between',flexDirection:'row',padding:15
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
    width:150,
    marginLeft:21,
    height:120
  },

});
