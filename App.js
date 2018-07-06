import React from 'react';
import {StackNavigator} from 'react-navigation'
import OnBoarding from './src/screens/OnBoarding'
import Map from './src/screens/MainScreen';
import Meza from './src/screens/Meza';
import FavouriteVenue from './src/screens/FavouriteVenue';
import Thyme from './src/screens/Thyme';
import ThymeTakeaway from './src/screens/ThymeTakeaway';
import Menu from './src/screens/Menu';
import Burger from './src/screens/Burger';
import AddItems from './src/screens/AddItems';
import MyCurrentOrders from './src/screens/MyCurrentOrders';
import CurrentOrders from './src/screens/CurrentOrders';
import Bill from './src/screens/Bill';
import MyReceipts from './src/screens/MyReceipts';
import MyProfile from './src/screens/MyProfile';
import Feedback from './src/screens/Feedback';
import MyPreferences from './src/screens/MyPreferences'
export default class App extends React.Component {
  render() {
    return (
      <MainStackNavigator/>
    );
}
}

const MainStackNavigator = new StackNavigator({
  OnBoarding:{screen : OnBoarding},
  Map:{screen:Map},
  Meza:{screen:Meza},
  FavouriteVenue:{screen:FavouriteVenue},
  Thyme:{screen:Thyme},
  ThymeTakeaway:{screen:ThymeTakeaway},
  Menu:{screen:Menu},
  Burger:{screen:Burger},
  AddItems:{screen:AddItems},
  MyCurrentOrders:{screen:MyCurrentOrders},
  CurrentOrders:{screen:CurrentOrders},
  Bill:{screen:Bill},
  MyReceipts:{screen:MyReceipts},
  MyProfile:{screen:MyProfile},
  Feedback:{screen:Feedback},
  MyPreferences:{screen:MyPreferences}
},
{
  initialRouteName: 'OnBoarding',
  headerMode:'none'
},
)