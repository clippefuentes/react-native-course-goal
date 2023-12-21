import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function GoalInput({
  addInputText,
  setAddInputText,
  addGoal
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setAddInputText}
        value={addInputText}
      />
      <Pressable style={styles.button} onPress={addGoal}>
        <Text style={styles.text}>Add Button</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '95%',
    height: '60%',
    
  },
  input: {
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 5,
    width: '70%',
    borderRadius: 10, 
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginLeft: 4,
    width: '30%'
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
