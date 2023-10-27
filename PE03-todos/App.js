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
  const [currentFilter, setCurrentFilter] = useState("ALL");

  const handleAddTask = () => {
    if (task) {
      if (editIndex !== -1) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = { text: task, completed: tasks[editIndex].completed };
        setTasks(updatedTasks);
        setEditIndex(-1);
      } else {
        setTasks([...tasks, { text: task, completed: false }]);
      }
      setTask("");
    }
  };

  const handleEditTask = (index) => {
    const taskToEdit = tasks[index].text;
    setTask(taskToEdit);
    setEditIndex(index);
  };

  const handleDoneTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const getFilteredTasks = () => {
    if (currentFilter === "ACTIVE") {
      return tasks.filter((task) => !task.completed);
    } else if (currentFilter === "COMPLETED") {
      return tasks.filter((task) => task.completed);
    }
    return tasks;
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.task}>
      <Text style={item.completed ? styles.completedTask : styles.itemList}>
        {item.text}
      </Text>
      <View style={styles.taskButtons}>
        <TouchableOpacity onPress={() => handleDoneTask(index)}>
          <Text style={styles.doneButton}>Done</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleEditTask(index)}>
          <Text style={styles.editButton}> Edit </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteTask(index)}>
          <Text style={styles.deleteButton}> Delete </Text>
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
        data={getFilteredTasks()}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.tasksList}
      />

      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => setCurrentFilter("ALL")}>
          <Text
            style={
              currentFilter === "ALL" ? styles.activeButton : styles.bottomBarButton
            }
          >
            ALL
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentFilter("ACTIVE")}>
          <Text
            style={
              currentFilter === "ACTIVE"
                ? styles.activeButton
                : styles.bottomBarButton
            }
          >
            ACTIVE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentFilter("COMPLETED")}>
          <Text
            style={
              currentFilter === "COMPLETED"
                ? styles.activeButton
                : styles.bottomBarButton
            }
          >
            COMPLETED
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    color: "green",
  },
  input: {
    borderWidth: 1,
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
  tasksList: {
    flex: 1,
    marginTop: 20,
  },
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  itemList: {
    fontSize: 18,
    color: "#333",
  },
  completedTask: {
    fontSize: 18,
    color: "#888",
    textDecorationLine: "line-through",
  },
  taskButtons: {
    flexDirection: "row",
  },
  editButton: {
    color: "green",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },
  deleteButton: {
    color: "red",
    fontWeight: "bold",
    fontSize: 16,
  },
  doneButton: {
    color: "green",
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 10,
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 10,
  },
  bottomBarButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  activeButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
});

export default App;
