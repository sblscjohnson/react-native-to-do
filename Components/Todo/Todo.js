import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const styles = StyleSheet.create({
  todoContainer: {
    height: '90%',
    margin: 'auto'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    color: 'black',
    padding: 2
  },
  singleTodo: {
   display: 'flex',
   flexDirection: 'row',
   marginTop: 10,
   marginBottom: 10
  }
})

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: ['1 CodeWars kata', '1 thing for a personal project', '1 thing for Devs for Disaster Relief'],
      text: ''
    }
  }

  deleteItem = (index) => {
    let { todoList } = this.state
    let newList = todoList.filter(item => todoList.indexOf(item) !== index)
    this.setState({
      todoList: newList
    })
  }

  render() {
    let { todoList, text } = this.state
    let mappedList = todoList.map((listItem, index) => {
      return (
        <View style={styles.singleTodo} key={ index }>
          <Button title='X' onPress={ () => this.deleteItem(index) } />
          <Text>{ listItem }</Text>
        </View>
      )
    })


    return (
      <View style={ styles.todoContainer }>
        { mappedList }
        <TextInput style={ styles.input } onChangeText={ val => this.setState({ text: val }) } placeholder='new to-do' value={text} />
        <Button title='add to-do' onPress={ () => this.setState({ todoList: [...todoList, text], text: '' }) } />
      </View>
    )
  }
}

export default Todo