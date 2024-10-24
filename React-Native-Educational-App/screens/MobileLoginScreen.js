import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function MobileLoginScreen({ navigation }) {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleOTPRequest = () => {
    console.log('Requesting OTP for:', mobileNumber);
  };

  return (
    <LinearGradient
      colors={['#f5f7fa', '#c3cfe2']}
      style={styles.gradientBackground}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image source={{ uri: 'logo-url' }} style={styles.logo} />
          <Text style={styles.title}>Welcome Back!</Text>
          <Text style={styles.subtitle}>
            Unlock Focused, Distraction-free Learning. Login now.
          </Text>
        </View>

        <View style={styles.inputCard}>
          <TextInput
            style={styles.input}
            placeholder="Enter Mobile Number"
            keyboardType="phone-pad"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.otpButton} onPress={handleOTPRequest}>
            <Text style={styles.otpText}>Request OTP</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.orText}>Or continue with</Text>

        <View style={styles.socialLogin}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={{ uri: 'google-logo-url' }} style={styles.icon} />
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image source={{ uri: 'apple-logo-url' }} style={styles.icon} />
            <Text style={styles.socialText}>Apple</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signupText}>Don’t have an account? Sign up</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputCard: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#f9f9f9',
  },
  otpButton: {
    backgroundColor: '#00416D',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  otpText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 15,
    color: '#666',
    fontSize: 14,
  },
  socialLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  socialText: {
    fontSize: 16,
    color: '#333',
  },
  signupText: {
    textAlign: 'center',
    color: '#00416D',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
