import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Todo = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      addTask(taskTitle);
      setTaskTitle(''); 
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add new task please!!"
        value={taskTitle}
        onChangeText={setTaskTitle}
      />

      <TouchableOpacity
        style={[styles.btn, !taskTitle.trim() && styles.btnDisabled]} // Disable button if input is empty
        onPress={handleAddTask}
        disabled={!taskTitle.trim()}
      >
        <Text style={styles.btnText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  btn: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 3,
    alignItems: 'center',
    marginBottom: 10,
    width:120,
    textAlign:'center',
    display:'flex',
    justifyContent:'center',
    margin :'auto',
    
  },
  btnDisabled: {
    backgroundColor: '#EFF2DD',
  },
  btnText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default Todo;
