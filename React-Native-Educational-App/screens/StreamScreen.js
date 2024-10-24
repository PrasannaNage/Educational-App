import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.stats}>
          <Text style={styles.statsText}>World Ranking</Text>
          <Text style={styles.statsValue}>20</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.statsText}>Points earned</Text>
          <Text style={styles.statsValue}>12000</Text>
        </View>
      </View>

      <View style={styles.lastQuiz}>
        <Text style={styles.sectionTitle}>LAST QUIZ</Text>
        <Text style={styles.quizText}>UI/UX Design</Text>
        <Text style={styles.quizText}>Points: 150</Text>
        <Text style={styles.quizText}>Rank: 1</Text>
      </View>

      <View style={styles.featured}>
        <Text style={styles.sectionTitle}>FEATURED</Text>
        <Text style={styles.featuredText}>
          Amazing Quizzes lined up for you all in Upcoming Months
        </Text>
        <TouchableOpacity style={styles.notificationButton}>
          <Text style={styles.notificationButtonText}>Turn on Notifications</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Quizzes')}>
        <Text style={styles.buttonText}>View All Quizzes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 20,
    width: '100%',
  },
  stats: { 
    backgroundColor: '#eee', 
    padding: 20, 
    borderRadius: 12, 
    elevation: 4, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 3,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  statsText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  statsValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000',
  },
  lastQuiz: { 
    padding: 20, 
    backgroundColor: '#ffeb3b', 
    borderRadius: 12, 
    marginVertical: 10, 
    elevation: 4, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 3,
    width: '100%',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  quizText: {
    fontSize: 14,
    marginBottom: 5,
  },
  featured: { 
    padding: 20, 
    backgroundColor: '#03a9f4', 
    borderRadius: 12, 
    marginVertical: 10, 
    elevation: 4, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 3,
    width: '100%',
  },
  featuredText: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 10,
  },
  notificationButton: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
  },
  notificationButtonText: {
    fontWeight: 'bold',
    color: '#03a9f4',
  },
  button: { 
    padding: 15, 
    backgroundColor: '#ffeb3b', 
    alignItems: 'center', 
    borderRadius: 12, 
    elevation: 4, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 3,
    width: '100%',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  }
});
