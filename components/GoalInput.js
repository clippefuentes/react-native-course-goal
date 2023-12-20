import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function GoalInput() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
      <Pressable style={styles.button}>
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
  },
  input: {
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 5,
    width: '70%'
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
