import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter as Router } from 'react-router-native'

import Navbar from './screens/Navbar/Navbar'
import routes from './routes'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  content: {
    height: '85%'
  }
});

class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Router>
        <Navbar />
          <View style={styles.content}>{routes}</View>
        </Router>
      </View>
    );
  }
}

export default App