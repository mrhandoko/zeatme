import React from 'react'
import { View, ScrollView, Text } from 'react-native'

class RestaurantsList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      restaurants: []
    }
  }

  componentDidMount () {
    fetch('https://developers.zomato.com/api/v2.1/search', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'user-key': 'ec774bd6f296b71e5ff539dadf4232d8'
      }
    })
    .then( response => response.json())
    .then( data => {
      console.log(data.restaurants[0].restaurant.name);
      this.setState({
        restaurants: data.restaurants
      })
    })
    .catch( err => console.log(err))
  }

  render() {
    return (
      <View style={{ height: '50%', backgroundColor: '#fcfcfc' }}>
        <View style={{ height: 100, margin:3, backgroundColor: 'orange' }}><Text>alalalal</Text></View>
        <View style={{ height: 100, margin:3, backgroundColor: 'orange' }}><Text>alalalal</Text></View>
        <View style={{ height: 100, margin:3, backgroundColor: 'orange' }}><Text>alalalal</Text></View>
        <View>
          {
            this.state.restaurants.map((item, index) => {
              <View key={index} style={{ height: 100 }}><Text>{item.restaurant.name}</Text></View>
            })
          }
        </View>
      </View>
    )
  }
}

export default RestaurantsList
