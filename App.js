import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';

export default function App() {
  const [addInputText, setAddInputText] = useState('');
  const [goals, setGoals] = useState([]);

  const handleSetInputChange = (text) => {
    setAddInputText(text)
  }

  const addGoal = () => {
    if (addInputText.trim() !== '') {
      setGoals([...goals, addInputText]);
      setAddInputText('');
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <GoalInput
        addInputText={addInputText}
        setAddInputText={handleSetInputChange}
        addGoal={addGoal}
      />
      <GoalList goals={goals} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
