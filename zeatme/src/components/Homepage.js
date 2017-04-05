import React from 'react'
import { ScrollView } from 'react-native'

import Header from './Header'
import RestaurantsList from './RestaurantsList'

const Homepage = () => ((
  <ScrollView style={{ flexDirection: 'column' }}>
    <Header />
    <RestaurantsList />
  </ScrollView>
))

export default Homepage
