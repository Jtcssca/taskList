import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

export default function TaskList({ tasks, onRemoveTask }) {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.taskItem}>
            <Text>{item}</Text>
            <Button title="Remover" onPress={() => onRemoveTask(index)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    listContainer: {
      flex: 1,
    },
    taskItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderColor: '#F48FB1', // Borda rosa claro
      borderWidth: 1,
      padding: 10,
      marginBottom: 5,
      backgroundColor: '#FCE4EC', // Cor de fundo rosa claro
    },
  });