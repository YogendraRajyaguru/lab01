import React from 'react';
import { View, Text, FlatList, Switch, TouchableOpacity, StyleSheet } from 'react-native';

const TodoList = ({ tasks, toggleStatus, deleteTask }) => {
  return (
    <FlatList
      contentContainerStyle={styles.flatListContainer}
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.taskCard}>
          <Text style={[styles.taskTitle, item.status && styles.completedTask]}>
            {item.title}
          </Text>
          
          <Switch
            value={item.status}
            onValueChange={() => toggleStatus(item.id)}
          />

          <TouchableOpacity onPress={() => deleteTask(item.id)}>
            <Text style={styles.deleteButton}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    paddingVertical: 10,
    paddingBottom: 20,
  },
  taskCard: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#FFF7D1',
    padding: 20,
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: 'blue',
  },
  taskTitle: {
    fontSize: 22,
    color: '#333',
    marginBottom:15,
  },
  completedTask: {
    textDecorationLine: 'underline line-through',
    color: 'blue',
  },
  deleteButton: {
    color: '#ff6347',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop:10
  },
});

export default TodoList;
