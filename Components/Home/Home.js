import React from 'react' 
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  homeContainer: {
    height: '75%'
  }
})

const Home = (props) => {
  return (
    <View style={styles.homeContainer}>
      <Text>Home</Text>
    </View>
  )
}

export default Home