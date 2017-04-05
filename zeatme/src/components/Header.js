import React from 'react'
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'

const Header = () => ((
  <View style={styles.homePage}>
    <Image source={{ uri: 'https://s-media-cache-ak0.pinimg.com/originals/f8/16/35/f8163551c03f6f455a5e938f1946635d.jpg' }} style={styles.bannerHomepage}>
      <Image source={ require('../assets/images/zeatme.png') } style={styles.Logo} />
      <View>
        <TouchableOpacity style={styles.buttonSearch}>
          <Image source={{ uri: 'https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-128.png'}} style={styles.searchIcon}/>
          <Text style={{ fontSize: 18, textAlign: 'center', padding: 5 }}>Search for restaurants, cuisins... </Text>
        </TouchableOpacity>
      </View>
    </Image>
  </View>
))

const styles = {
  homePage: {
  },
  bannerHomepage: {
    width: '100%',
    height: 300
  },
  overlayHomepage: {
    height: '20%',
    width: '100%'
  },
  Logo: {
    height: 80,
    width: 80,
  },
  buttonSearch:{
    height: 40,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'row'
  },
  searchIcon: {
    height: 30,
    width: 30,
    margin: 3
  }
}

export default Header
