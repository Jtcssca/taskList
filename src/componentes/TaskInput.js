import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function TaskInput({ onAddTask }) {
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task) {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma tarefa"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <Button title="ADIC" onPress={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    
    flexDirection : `row`,
    backgroundColor :  `whitek`
 
    
    
  },
  input: {
    height: 40,
    borderColor: '#880E4F', // Borda rosa escuro
    borderWidth: 1,
    paddingLeft: 10,
    color: '#880E4F', // Cor do texto rosa escuro
    
  },
});