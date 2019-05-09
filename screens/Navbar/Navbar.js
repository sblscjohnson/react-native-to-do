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
    backgroundColor: 'black'
  },

  navLinks: {
    display: 'flex',
    flexDirection: 'row'
  },
  singleLink: {
    color: 'white',
  }
})

const Navbar = (props) => {

  return (
    <View style={styles.navContainer}>
      <View style={styles.navLinks}>
        <Link style={styles.singleLink} to={`/`}><Text style={styles.singleLink}>Home</Text></Link>
        <Link to={`/Todo`}><Text style={styles.singleLink}>Your List</Text></Link>
      </View>
    </View>
  )
}

export default Navbar