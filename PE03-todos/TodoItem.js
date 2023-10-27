import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TodoItem = ({ text }) => (
  <View style={styles.todoItem}>
    <Text>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
  },
});

export default TodoItem;
