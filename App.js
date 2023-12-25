import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';
import GoalDeleteModal from './components/GoalDeleteModal';

export default function App() {
  const [addInputText, setAddInputText] = useState('');
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(null);

  const handleSetInputChange = (text) => {
    setAddInputText(text)
  }

  const addGoal = () => {
    if (addInputText.trim() !== '') {
      setGoals([...goals, addInputText]);
      setAddInputText('');
    }
  }

  const handlePress = (goal) => {
    setSelectedGoal(goal);
    setModalVisible(true);
  };

  const handleDelete = () => {
    const updatedGoals = goals.filter((goal) => goal !== selectedGoal);
    setGoals(updatedGoals);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <GoalInput
        addInputText={addInputText}
        setAddInputText={handleSetInputChange}
        addGoal={addGoal}
      />
      <GoalList
        goals={goals}
        openDeleteModal={handlePress}
      />
      <GoalDeleteModal
        deleteGoal={handleDelete}
        setShowDeleteModal={setModalVisible}
        showDeleteModal={modalVisible}
        
      />
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
