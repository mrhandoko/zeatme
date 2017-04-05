import React from 'react'
import { View, Text } from 'react-native'

class Categories extends React.Component {
  constructor () {
    super()
    this.state = {
      categories: []
    }
  }

  componentDidMount () {
    fetch('https://developers.zomato.com/api/v2.1/categories', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'user-key': 'ec774bd6f296b71e5ff539dadf4232d8'
      }
    })
    .then( response => response.json())
    .then( data => {
      this.setState({
        categories: data.categories
      })
    })
    .catch( err => console.log(err))
  }

  render () {
    return (
      <View>
        {
          this.state.categories.map((item, index) => {
            return (
              <View key={index}><Text>{item.categories.name}</Text></View>
            )
          })
        }
      </View>
    )
  }

}


export default Categories
