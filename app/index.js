import { useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView
} from 'react-native';
import { useRouter } from 'expo-router';
import { FormContext } from './_layout';

export default function ProfileScreen() {
  const router = useRouter();
  const { formData, updateField } = useContext(FormContext);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Profile</Text>
        
        <View style={styles.imageBox} />
        
        <Text style={styles.label}>Your name</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={formData.name}
          onChangeText={(text) => updateField('name', text)}
        />
        
        <Text style={styles.label}>Your gender</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[
              styles.halfButton,
              formData.gender === 'Male' && styles.activeButton
            ]}
            onPress={() => updateField('gender', 'Male')}
          >
            <Text style={[
              styles.buttonText,
              formData.gender === 'Male' && styles.activeButtonText
            ]}>
              Male
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.halfButton,
              formData.gender === 'Female' && styles.activeButton
            ]}
            onPress={() => updateField('gender', 'Female')}
          >
            <Text style={[
              styles.buttonText,
              formData.gender === 'Female' && styles.activeButtonText
            ]}>
              Female
            </Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.label}>Your age</Text>
        <TextInput
          style={styles.input}
          placeholder="Age"
          keyboardType="numeric"
          value={formData.age}
          onChangeText={(text) => updateField('age', text)}
        />
        
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => router.push('/program1')}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  imageBox: {
    width: '100%',
    height: 200,
    backgroundColor: '#e0e0e0',
    borderRadius: 12,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#e0e0e0',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 8,
  },
  halfButton: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#9e9e9e',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  activeButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  nextButton: {
    backgroundColor: '#9e9e9e',
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    marginTop: 24,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});