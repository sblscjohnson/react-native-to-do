import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Link, withRouter } from 'react-router-native'

const styles = StyleSheet.create({
  navContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 25,
    backgroundColor: 'green'
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
      <Link to={`/`}><Text>Home</Text></Link>
      <Link to={`/Todo`}><Text>To Do</Text></Link>
    </View>
  )
}

export default Navbar