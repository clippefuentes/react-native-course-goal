import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Modal } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';

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
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View >
              <Text>Do you want to delete </Text>
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
              <Button title="Delete" onPress={handleDelete} />
            </View>
          </View>
        </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
});
