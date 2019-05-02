import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  navContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'black'
  },
  navTitle: {
    color: 'white',
    marginTop: 'auto',
    fontSize: 40
  }
})

const Navbar = (props) => {

  return (
    <View style={styles.navContainer}>
      <Text style={styles.navTitle}>To-Do List</Text>
    </View>
  )
}

export default Navbar