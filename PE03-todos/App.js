import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Button } from 'react-native'; 
import Heading from './Heading';
import Input from './Input';
import TodoItem from './TodoItem'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };
  }

  inputChange(inputValue) {
    console.log('Input Value: ', inputValue);
    this.setState({ inputValue });
  }

  // Create a function to handle adding new to-do items
  addTodo() {
    if (this.state.inputValue !== '') {
      const newTodos = this.state.todos.slice();
      newTodos.push(this.state.inputValue);
      this.setState({
        todos: newTodos,
        inputValue: '',
      });
      console.log('New Todo Added:', this.state.inputValue);
    }
  }

  render() {
    const { inputValue, todos } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={text => this.inputChange(text)}
          />
          <Button
            title="Add Todo"
            onPress={() => this.addTodo()} 
          />
          {todos.map((todo, index) => (
            <TodoItem key={index} text={todo} /> 
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
