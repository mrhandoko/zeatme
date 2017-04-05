import React from 'react'
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'

import styles from '../assets/css/Header.style'

const Header = (props) => ((
  <View style={styles.homePage}>
    <Image source={{ uri: 'https://s-media-cache-ak0.pinimg.com/originals/f8/16/35/f8163551c03f6f455a5e938f1946635d.jpg' }} style={styles.bannerHomepage}>
      <Image source={ require('../assets/images/zeatme.png') } style={styles.Logo} />
      <View>
        <TouchableOpacity style={styles.buttonSearch} onPress={() => props.navigator.push({title:'categories'})}>
          <Image source={{ uri: 'https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-128.png'}} style={styles.searchIcon}/>
          <Text style={styles.textSearch}>Search for restaurants, cuisins... </Text>
        </TouchableOpacity>
      </View>
    </Image>
  </View>
))

export default Header
