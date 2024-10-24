import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // For background gradient
import { MaterialIcons } from '@expo/vector-icons'; // For icons (optional)

const data = [
  { id: 1, name: 'User 1', points: 1000, designation: 'Designation 1', position: 1 },
  { id: 2, name: 'User 2', points: 900, designation: 'Designation 2', position: 2 },
  { id: 3, name: 'User 3', points: 850, designation: 'Designation 3', position: 3 },
  { id: 4, name: 'User 4', points: 800, designation: 'Designation 4', position: 4 },
  { id: 5, name: 'User 5', points: 750, designation: 'Designation 5', position: 5 },
  { id: 6, name: 'User 6', points: 700, designation: 'Designation 6', position: 6 },
];

export default function LeaderboardScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.rankContainer}>
      <Text style={styles.rank}>{item.position}</Text>
      <View style={styles.rankInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.designation}>{item.designation}</Text>
      </View>
      <Text style={styles.points}>{item.points} Points</Text>
    </View>
  );

  return (
    <LinearGradient colors={['#FFFDE7', '#FFD600']} style={styles.container}>
      {/* Tab Section for Today, Weekly, All Time */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, styles.inactiveTab]}>
          <Text style={styles.inactiveTabText}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, styles.inactiveTab]}>
          <Text style={styles.inactiveTabText}>All Time</Text>
        </TouchableOpacity>
      </View>

      {/* Top 3 Users */}
      <View style={styles.topThreeContainer}>
        <View style={styles.secondPlace}>
          <View style={styles.circle}>
            <MaterialIcons name="emoji-events" size={30} color="#silver" />
          </View>
          <Text style={styles.name}>{data[1].name}</Text>
          <Text style={styles.points}>{data[1].points} Points</Text>
        </View>
        <View style={styles.firstPlace}>
          <View style={[styles.circle, { backgroundColor: '#FFD700' }]}>
            <MaterialIcons name="emoji-events" size={35} color="white" />
          </View>
          <Text style={styles.name}>{data[0].name}</Text>
          <Text style={styles.points}>{data[0].points} Points</Text>
        </View>
        <View style={styles.thirdPlace}>
          <View style={styles.circle}>
            <MaterialIcons name="emoji-events" size={30} color="#CD7F32" />
          </View>
          <Text style={styles.name}>{data[2].name}</Text>
          <Text style={styles.points}>{data[2].points} Points</Text>
        </View>
      </View>

      {/* Rest of the leaderboard */}
      <FlatList
        data={data.slice(3)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFDE7', // Light yellow as fallback background
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tab: {
    borderBottomWidth: 3,
    borderColor: '#FFD700', // Active tab color
    paddingBottom: 10,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  inactiveTab: {
    borderBottomWidth: 0,
  },
  inactiveTabText: {
    fontSize: 16,
    color: '#999',
  },
  topThreeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    alignItems: 'center',
  },
  firstPlace: {
    alignItems: 'center',
    transform: [{ scale: 1.2 }],
  },
  secondPlace: {
    alignItems: 'center',
  },
  thirdPlace: {
    alignItems: 'center',
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#eee', // Placeholder color for other ranks
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginBottom: 10,
  },
  rankContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  rank: {
    fontSize: 18,
    fontWeight: 'bold',
    width: 30,
    textAlign: 'center',
    color: '#666',
  },
  rankInfo: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  designation: {
    fontSize: 12,
    color: '#999',
  },
  points: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  list: {
    marginTop: 20,
  },
});
