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

export default function CreateProgram1Screen() {
  const router = useRouter();
  const { formData, updateField } = useContext(FormContext);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Create program</Text>
        
        <View style={styles.imageBox} />
        
        <Text style={styles.label}>Goal</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[
              styles.halfButton,
              formData.goal === 'Weight loss' && styles.activeButton
            ]}
            onPress={() => updateField('goal', 'Weight loss')}
          >
            <Text style={[
              styles.buttonText,
              formData.goal === 'Weight loss' && styles.activeButtonText
            ]}>
              Weight loss
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.halfButton,
              formData.goal === 'Build muscles' && styles.activeButton
            ]}
            onPress={() => updateField('goal', 'Build muscles')}
          >
            <Text style={[
              styles.buttonText,
              formData.goal === 'Build muscles' && styles.activeButtonText
            ]}>
              Build muscles
            </Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.label}>Your level</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[
              styles.thirdButton,
              formData.level === 'Beginner' && styles.activeButton
            ]}
            onPress={() => updateField('level', 'Beginner')}
          >
            <Text style={[
              styles.buttonText,
              formData.level === 'Beginner' && styles.activeButtonText
            ]}>
              Beginner
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.thirdButton,
              formData.level === 'Sporting' && styles.activeButton
            ]}
            onPress={() => updateField('level', 'Sporting')}
          >
            <Text style={[
              styles.buttonText,
              formData.level === 'Sporting' && styles.activeButtonText
            ]}>
              Sporting
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.thirdButton,
              formData.level === 'Experienced' && styles.activeButton
            ]}
            onPress={() => updateField('level', 'Experienced')}
          >
            <Text style={[
              styles.buttonText,
              formData.level === 'Experienced' && styles.activeButtonText
            ]}>
              Experienced
            </Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.row}>
          <View style={styles.halfWidth}>
            <Text style={styles.label}>Your Height</Text>
            <TextInput
              style={styles.input}
              placeholder="Height"
              keyboardType="numeric"
              value={formData.height}
              onChangeText={(text) => updateField('height', text)}
            />
          </View>
          
          <View style={styles.halfWidth}>
            <Text style={styles.label}>Your Weight</Text>
            <TextInput
              style={styles.input}
              placeholder="Weight"
              keyboardType="numeric"
              value={formData.weight}
              onChangeText={(text) => updateField('weight', text)}
            />
          </View>
        </View>
        
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => router.push('/program2')}
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
  thirdButton: {
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
  row: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 12,
  },
  halfWidth: {
    flex: 1,
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