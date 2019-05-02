import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Navbar from './Components/Navbar/Navbar'
import Todo from './Components/Todo/Todo'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
});

class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Navbar/>
        <Todo />
      </View>
    );
  }
}

export default App