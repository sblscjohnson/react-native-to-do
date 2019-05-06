import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter as Router } from 'react-router-native'

import Navbar from './Components/Navbar/Navbar'
import routes from './routes'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center'
  },
});

class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Router>
        <Navbar />
          {routes}
        </Router>
      </View>
    );
  }
}

export default App