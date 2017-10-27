import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import Intro from './Components/intro'
import AboutUs from './Components/about_us'
import JoinUs from './Components/join_us'
import Loading from './Components/loading'
import Profile from './Components/profile'

const NavApp = StackNavigator({
  Home: { screen: Intro },
  AboutUs: { screen: AboutUs },
  JoinUs: { screen: JoinUs },
  Loading: { screen: Loading },
  Profile: { screen: Profile }
})

export default class App extends Component {
  render() {
    return <NavApp />;
  }
}