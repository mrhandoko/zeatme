import React from 'react'
import { Navigator, View, Text } from 'react-native'

import Homepage from './components/Homepage'
import Categories from './components/Categories'

class App extends React.Component {
  render () {
    return (
      <Navigator
        initialRoute={{ title: 'home', pagesObj:{} }}
        renderScene={(route, navigator) => {
          switch (route.title) {
            case 'home':
              return <Homepage navigator={navigator} />
            case 'categories':
              return <Categories navigator={navigator} />
            default:
              return <Header />
          }
        }}
      />
    )
  }
}

export default App
