import React from 'react';
import { 
  StyleSheet, Text, View, Pressable, Modal 
} from 'react-native';

export default function GoalDeleteModal({ 
  showDeleteModal,
  setShowDeleteModal,
  deleteGoal
}) {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showDeleteModal}
        onRequestClose={() => setShowDeleteModal(false)}
        style={styles.modalContainer}
      >
        <View style={styles.modalContainer}>
          <View>
            <Text style={styles.modalText}>Do you want to delete </Text>
            <View style={styles.buttonContainer}>
              <Pressable style={styles.button} onPress={() => setShowDeleteModal(false)}>
                <Text care style={styles.buttonText}>Cancel</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={deleteGoal}>
                <Text style={styles.buttonText}>Delete</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  modalText: {
    color: 'white'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: 'rgb(108, 191, 225)',
    padding: 10,
  },
  buttonText: {
    color: 'black'
  }
});
