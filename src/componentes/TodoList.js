import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function TodoList(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [isTrashClicked, setIsTrashClicked] = useState(false);

  const handleCheckPress = () => {
    setIsChecked(!isChecked);
  };

  const handleTrashPress = () => {
    setIsTrashClicked(true);
    props.deleteTodo(props.todo.key);
  };

  const handlePressOut = () => {
    setIsTrashClicked(false);
  };

  return (
    <TouchableHighlight
      style={styles.touchableTile}
      onPress={handleCheckPress}
      onPressOut={handlePressOut}
      underlayColor="white" 
    >
      <View style={styles.listTile}>
        <Icon
          name={isChecked ? "check-circle" : "radio-button-unchecked"}
          style={[
            styles.leading,
            isChecked ? { color: "green" } : null,
          ]}
          size={20}
          onPress={handleCheckPress}
        />
        <Text style={styles.title}>{props.todo.name}</Text>
        <Icon
          name="delete"
          style={[
            styles.trailing,
            isTrashClicked ? { color: "red" } : null,
          ]}
          size={20}
          onPress={handleTrashPress}
        />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  touchableTile: {
    overflow: "hidden",
    borderRadius: 10,
  },
  listTile: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E6CCFF", 
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#A080D3", 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5, 
    shadowRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  leading: {
    width: "20%",
    marginRight: 16,
    alignItems: "flex-start",
  },
  title: {
    flex: 1,
    fontSize: 18,
    color: "#333", 
  },
  trailing: {
    width: "20%",
    alignItems: "flex-end",
  },
});
