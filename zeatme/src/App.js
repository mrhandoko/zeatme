import React from 'react'
import { Navigator, View, Text } from 'react-native'

import Header from './components/Header'

class App extends React.Component {
  render () {
    return (
      <Navigator
        initialRoute={{ title: 'home', pagesObj:{} }}
        renderScene={(route, navigator) => {
          switch (route.title) {
            case 'home':
              return <Header navigator={navigator} />
            case 'categories':
              return <Categories navigator={navigator} />
            default:
              return <Header />
          }
        }}
        />
      <View>
        <Header />
      </View>
    )
  }
}

export default App
