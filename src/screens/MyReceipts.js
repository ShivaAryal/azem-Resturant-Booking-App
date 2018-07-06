import React from 'react';
import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class MyReceipts extends React.Component {
    state={
        receipts:[{'name':'Thyme Square Cafe','date':'Fri,Mar 30,2018, 11:30AM'},
               {'name':'Thyme Square Cafe','date':'Thu,Mar 20,2018, 01:30AM'},
               {'name':'The Hangry Cafe','date':'Sun,Apr 19,2018, 09:30AM'}]
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
                <Text style={{fontSize:20,color:'#ffffff'}}>MY RECEIPTS</Text>
                <View></View>
            </View>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {this.state.receipts.map((receipt,i)=>(
                    <View key={i} >
                        <View style={{flex:1,flexDirection:'row', justifyContent:'center',marginBottom:10}}>
                            <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start',paddingLeft:30,paddingTop:15}}>
                                <Text style={{fontSize:18,color:'#616161'}}>{receipt.name}</Text>
                                <Text style={{fontSize:15,color:'#616161'}}>{receipt.date}</Text>
                            </View>
                            <TouchableOpacity style={{paddingTop:20,paddingRight:25,borderRadius:60}}>
                                <Icon
                                    style={{}}
                                    name='ios-arrow-forward'
                                    type='ionicon'
                                    size={32} />
                            </TouchableOpacity>
                        </View>
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
   
  },
  header:{
    height:60,backgroundColor:'#FF3D00',flexDirection:'row',padding:15, justifyContent:'space-between'
  },
});
