import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const quizzes = [
  { id: '1', name: 'Quiz Name 1', date: '10/09/2024', time: '10:00 AM' },
  { id: '2', name: 'Quiz Name 2', date: '10/09/2024', time: '10:00 AM' },
  { id: '3', name: 'Quiz Name 3', date: '10/09/2024', time: '10:00 AM' },
  { id: '4', name: 'Quiz Name 4', date: '10/09/2024', time: '10:00 AM' },
];

export default function QuizListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Quizzes</Text>
      <FlatList
        data={quizzes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.quizItem}>
            <Text style={styles.quizName}>{item.name}</Text>
            <Text style={styles.quizDetails}>{item.date} | {item.time}</Text>
            <Text style={styles.rewardText}>Surprise Reward for Top 3 Winners</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#fff' 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    textAlign: 'center',
    color: '#333' 
  },
  quizItem: { 
    padding: 20, 
    backgroundColor: '#ffeb3b', 
    marginVertical: 10, 
    borderRadius: 12, 
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 3 
  },
  quizName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8
  },
  quizDetails: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8
  },
  rewardText: {
    fontSize: 14,
    color: '#777',
    fontStyle: 'italic'
  }
});
