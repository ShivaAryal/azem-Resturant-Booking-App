import React from 'react';
import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class MyPreferences extends React.Component {
    state={
        autoWakeup:true,
        automaticFilterMenus:false,
        allowMessagesFromAll:true,
        allowMessagesFromFavourite:false,
        notAllowMessage:false,
        nutsAllergic:false,
        diaryIntolerance:false,
        wheatAllergic:false,
        seafoodAllergic:false,
        vegetarian:false
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
                <Text style={{fontSize:20,color:'#ffffff'}}>MY PREFERENCES</Text>
                <View></View>
            </View>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={{flex:1,flexDirection:'row', justifyContent:'space-between',marginBottom:5}}>
                <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start',paddingTop:5}}>
                    <Text style={{fontSize:16,color:'#424242',fontWeight:'bold'}}>Auto Wakeup</Text>
                    <Text style={{fontSize:16,color:'#616161'}}>Notify me when I enter a Meza venue</Text>
                </View>
                <Switch
                    onValueChange={value=>this.setState({autoWakeup:value})}
                    style={{alignSelf:'center',transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]}}
                    thumbTintColor="#ffffff"
                    onTintColor='#FF3D00'
                    value={this.state.autoWakeup}
                />
            </View>
            <View style={{flex:1,flexDirection:'row', justifyContent:'space-between',marginVertical:10}}>
                <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start',paddingTop:5}}>
                    <Text style={{fontSize:16,color:'#424242',fontWeight:'bold'}}>Automatically filter menus</Text>
                    <Text style={{fontSize:16,color:'#616161'}}>Based on my preferences</Text>
                </View>
                <Switch
                    onValueChange={value=>this.setState({automaticFilterMenus:value})}
                    style={{alignSelf:'center',transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]}}
                    thumbTintColor="#ffffff"
                    onTintColor='#FF3D00'
                    value={this.state.automaticFilterMenus}
                />
            </View>
            <View style={{borderTopColor: '#E0E0E0',borderTopWidth: 1,marginTop:5}}></View>
            <Text style={{fontSize:17,color:'#FF3D00',marginVertical:10,fontWeight:'bold'}}>Message Settings</Text>
            <View style={{flex:1,flexDirection:'row', justifyContent:'space-between',marginVertical:5}} >
                <Text style={{fontSize:16,color:'#424242'}} >Allow messages from all</Text>
                <Switch
                    onValueChange={value=>this.setState({allowMessagesFromAll:value})}
                    style={{alignSelf:'center',transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]}}
                    thumbTintColor="#ffffff"
                    onTintColor='#FF3D00'
                    value={this.state.allowMessagesFromAll}/>
            </View>
            <View style={{flex:1,flexDirection:'row', justifyContent:'space-between',marginVertical:15}} >
                <Text style={{fontSize:16,color:'#424242'}} >Only from my favourites</Text>
                <Switch
                    onValueChange={value=>this.setState({allowMessagesFromFavourite:value})}
                    style={{alignSelf:'center',transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]}}
                    thumbTintColor="#ffffff"
                    onTintColor='#FF3D00'
                    value={this.state.allowMessagesFromFavourite}/>
            </View>
            <View style={{flex:1,flexDirection:'row', justifyContent:'space-between',marginVertical:5}} >
                <Text style={{fontSize:16,color:'#424242'}} >Don't allow any messages</Text>
                <Switch
                    onValueChange={value=>this.setState({notAllowMessage:value})}
                    style={{alignSelf:'center',transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]}}
                    thumbTintColor="#ffffff"
                    onTintColor='#FF3D00'
                    value={this.state.notAllowMessage}/>
            </View>
            <View style={{borderTopColor: '#E0E0E0',borderTopWidth: 1,marginVertical:5}}></View>

            <Text style={{fontSize:17,color:'#FF3D00',marginTop:10,fontWeight:'bold'}}>Lifestyle</Text>
            <Text style={{fontSize:14,color:'#757575',marginBottom:10}}>Please tell us about you</Text>
            <View style={{flex:1,flexDirection:'row', justifyContent:'space-between',marginVertical:5}} >
                <Text style={{fontSize:16,color:'#424242'}} >Allergic to Nuts</Text>
                <Switch
                    onValueChange={value=>this.setState({nutsAllergic:value})}
                    style={{alignSelf:'center',transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]}}
                    thumbTintColor="#ffffff"
                    onTintColor='#FF3D00'
                    value={this.state.nutsAllergic}/>
            </View>
            <View style={{flex:1,flexDirection:'row', justifyContent:'space-between',marginVertical:15}} >
                <Text style={{fontSize:16,color:'#424242'}} >Diary Intolerance</Text>
                <Switch
                    onValueChange={value=>this.setState({diaryIntolerance:value})}
                    style={{alignSelf:'center',transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]}}
                    thumbTintColor="#ffffff"
                    onTintColor='#FF3D00'
                    value={this.state.diaryIntolerance}/>
            </View>
            <View style={{flex:1,flexDirection:'row', justifyContent:'space-between',marginVertical:5}} >
                <Text style={{fontSize:16,color:'#424242'}} >Wheat Allergic(Coelliac)</Text>
                <Switch
                    onValueChange={value=>this.setState({wheatAllergic:value})}
                    style={{alignSelf:'center',transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]}}
                    thumbTintColor="#ffffff"
                    onTintColor='#FF3D00'
                    value={this.state.wheatAllergic}/>
            </View>
            <View style={{flex:1,flexDirection:'row', justifyContent:'space-between',marginVertical:15}} >
                <Text style={{fontSize:16,color:'#424242'}} >Allergic to Shellfish/Seafood</Text>
                <Switch
                    onValueChange={value=>this.setState({seafoodAllergic:value})}
                    style={{alignSelf:'center',transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]}}
                    thumbTintColor="#ffffff"
                    onTintColor='#FF3D00'
                    value={this.state.seafoodAllergic}/>
            </View>
            <View style={{flex:1,flexDirection:'row', justifyContent:'space-between',marginVertical:5}} >
                <Text style={{fontSize:16,color:'#424242'}} >Vegetarian</Text>
                <Switch
                    onValueChange={value=>this.setState({vegetarian:value})}
                    style={{alignSelf:'center',transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]}}
                    thumbTintColor="#ffffff"
                    onTintColor='#FF3D00'
                    value={this.state.vegetarian}/>
            </View>
            <View style={{padding:10,backgroundColor:'#FFCCBC',marginVertical:30}} >
                <Text style={{fontSize:15,color:'#D84315'}}>We will try our best to take these into account but always check with staff.</Text>
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
    padding:15
   
  },
  header:{
    height:60,backgroundColor:'#FF3D00',flexDirection:'row',padding:15, justifyContent:'space-between'
  },
});
