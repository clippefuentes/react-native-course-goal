import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Pressable } from 'react-native';

export default function GoalList({ goals, openDeleteModal }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {goals.map((goal, index) => (
          <Pressable
            key={index}
            style={({ pressed }) => [
              styles.pressable,
              {
                opacity: pressed ? 0.5 : 1
              },
            ]}
            onPress={() => openDeleteModal(goal)}
          >
            <Text style={styles.pressableText}>
              {goal}
            </Text>
          </Pressable>
        ))}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 10,
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'black',
    width: '95%',
    marginBottom: '5%',
    borderRadius: 10,
  },
  pressable: {
    backgroundColor: 'black',
    padding: 10,
    marginVertical: 5,
    width: '90%',
    borderRadius: 10, 
  },
  pressableText: {
    color: 'white',
    textAlign: 'center',
  },
});
