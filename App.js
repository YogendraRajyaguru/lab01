import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Todo from './src/Component/Todo'; 
import TodoList from './src/Component/Todolist'; 

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskTitle) => {
    const newTask = {
      id: Date.now().toString(),
      title: taskTitle,
      status: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleStatus = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, status: !task.status } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const filteredTasks = tasks.filter(task => task.id !== taskId);
    setTasks(filteredTasks);
  };

  return (
    <View style={styles.container}>
      <Todo addTask={addTask} />
      <TodoList tasks={tasks} toggleStatus={toggleStatus} deleteTask={deleteTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop: 40,
  },
});

export default App;
