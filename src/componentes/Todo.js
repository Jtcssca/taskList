import React, {useState} from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

export default function Todo(props) {
  
  const [title, setTitle] = useState('');

  return (
    <View style={styles.todo}>
      <TextInput 
        placeholder="Adicionar tarefa"
        value={title}
        onChangeText={value=>setTitle(value)}
        style={styles.textbox} />
      <Button 
         title="Add" 
         color='#7F39FB'
         onPress={() => props.addTodo(title)} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    flex : 1,
    flexDirection: "row",
    width: "100%",
    justifyContent:'center',
    alignItems:'center',
    
  },
  textbox: {
    borderWidth: 1,
    borderColor: "#7F39FB",
    borderRadius: 8,
    padding: 10,
    margin: 10,
    width:'80%'
  }
});