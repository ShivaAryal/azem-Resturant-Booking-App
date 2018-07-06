import React from 'react';
import { Image,StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Onboarding from 'react-native-onboarding-swiper';
import Map from './MainScreen'
export default class OnBoarding extends React.Component {
  render() {
    return (
      <Onboarding
        onSkip={() => this.props.navigation.navigate('Map')}
        onDone={() => this.props.navigation.navigate('Map')}
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image  style={styles.image} source={require('./../images/waiter.jpg')} />,
            title: 'REQUEST A WAITER',
            subtitle: 'Summon a waiter with just a tap',
          },
          {
            backgroundColor: '#fff',
            image: <Image style={styles.image} source={require('./../images/menu.jpg')} />,
            title: 'BROWSE AND ORDER FROM THE MENU',
            subtitle: 'Place a order',
          },
          {
            backgroundColor: '#fff',
            image: <Image  style={styles.image} source={require('./../images/pizza.jpg')} />,
            title: 'ENJOY YOUR MEAL',
            subtitle: "Eat to your heart's content",
          },
          {
            backgroundColor: '#fff',
            image: <Image style={styles.image} source={require('./../images/android.png')} />,
            title: 'PAY FROM THE APP ITSELF',
            subtitle: 'Request, view and pay your bill',
          },
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  image:{
    width:250,
    height:250,
    borderRadius:250
  }
});