import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddTask = () => {
    if (task) {
      if (editIndex !== -1) {
        // Edit existing task
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = task;
        setTasks(updatedTasks);
        setEditIndex(-1);
      } else {
        // Add new task
        setTasks([...tasks, task]);
      }
      setTask("");
    }
  };

  const handleEditTask = (index) => {
    const taskToEdit = tasks[index];
    setTask(taskToEdit);
    setEditIndex(index);
  };

  const handleDoneTask = (index) => {
    // You can implement your "Done" functionality here
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.task}>
      <Text style={styles.itemList}>{item}</Text>
      <View style={styles.taskButtons}>
        <TouchableOpacity onPress={() => handleDoneTask(index)}>
          <Text style={styles.doneButton}>Done</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleEditTask(index)}>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteTask(index)}>
          <Text style={styles.deleteButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>CS624</Text>
      <Text style={styles.title}>ToDo App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.addButtonText}>
          {editIndex !== -1 ? "Update Task" : "Submit"}
        </Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity>
          <Text style={styles.bottomBarButton}>ALL</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.bottomBarButton}>ACTIVE</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.bottomBarButton}>COMPLETED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 40, 
    marginTop: 40, 
}, 
title: { 
    fontSize: 24, 
    fontWeight: "bold", 
    marginBottom: 20, 
}, 
heading: { 
    fontSize: 30, 
    fontWeight: "bold", 
    marginBottom: 7, 
    color: "green", 
}, 
input: { 
    borderWidth: 3, 
    borderColor: "#ccc", 
    padding: 10, 
    marginBottom: 10, 
    borderRadius: 10, 
    fontSize: 18, 
}, 
addButton: { 
    backgroundColor: "green", 
    padding: 10, 
    borderRadius: 5, 
    marginBottom: 10, 
}, 
addButtonText: { 
    color: "white", 
    fontWeight: "bold", 
    textAlign: "center", 
    fontSize: 18, 
}, 
task: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    marginBottom: 15, 
    fontSize: 18, 
}, 
itemList: { 
    fontSize: 19, 
}, 
taskButtons: { 
    flexDirection: "row", 
}, 
editButton: { 
    marginRight: 10, 
    color: "green", 
    fontWeight: "bold", 
    fontSize: 18, 
}, 
deleteButton: { 
    color: "red", 
    fontWeight: "bold", 
    fontSize: 18,
},
doneButton: {
  marginRight: 20,
  color: "green",
  fontWeight: "bold",
  fontSize: 18,
},

  // Add styles for the bottom bar
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "lightgray",
    padding: 10,
  },
  bottomBarButton: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;