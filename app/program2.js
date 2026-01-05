import { useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Alert
} from 'react-native';
import { useRouter } from 'expo-router';
import { FormContext } from './_layout';

export default function CreateProgram2Screen() {
  const router = useRouter();
  const { formData, updateField } = useContext(FormContext);

  const handleFinish = () => {
    console.log('Form Data:', formData);
    Alert.alert(
      'Программа создана!',
      `Имя: ${formData.name}\nЦель: ${formData.goal}\nУровень: ${formData.level}`,
      [{ text: 'OK', onPress: () => router.push('/') }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Create program</Text>
        
        <View style={styles.imageBox} />
        
        <Text style={styles.label}>Lifestyle</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[
              styles.thirdButton,
              formData.lifestyle === 'Sedentary' && styles.activeButton
            ]}
            onPress={() => updateField('lifestyle', 'Sedentary')}
          >
            <Text style={[
              styles.buttonText,
              formData.lifestyle === 'Sedentary' && styles.activeButtonText
            ]}>
              Sedentary
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.thirdButton,
              formData.lifestyle === 'Moderate' && styles.activeButton
            ]}
            onPress={() => updateField('lifestyle', 'Moderate')}
          >
            <Text style={[
              styles.buttonText,
              formData.lifestyle === 'Moderate' && styles.activeButtonText
            ]}>
              Moderate
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.thirdButton,
              formData.lifestyle === 'High activity' && styles.activeButton
            ]}
            onPress={() => updateField('lifestyle', 'High activity')}
          >
            <Text style={[
              styles.buttonText,
              formData.lifestyle === 'High activity' && styles.activeButtonText
            ]}>
              High activity
            </Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.label}>Training per week</Text>
        <View style={styles.buttonGroup}>
          {['1', '2', '3', '4', '5'].map((num) => (
            <TouchableOpacity
              key={num}
              style={[
                styles.fifthButton,
                formData.training === num && styles.activeButton
              ]}
              onPress={() => updateField('training', num)}
            >
              <Text style={[
                styles.buttonText,
                formData.training === num && styles.activeButtonText
              ]}>
                {num}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <Text style={styles.label}>Practice sports</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[
              styles.halfButton,
              formData.practice === 'In gym' && styles.activeButton
            ]}
            onPress={() => updateField('practice', 'In gym')}
          >
            <Text style={[
              styles.buttonText,
              formData.practice === 'In gym' && styles.activeButtonText
            ]}>
              In gym
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.halfButton,
              formData.practice === 'At home' && styles.activeButton
            ]}
            onPress={() => updateField('practice', 'At home')}
          >
            <Text style={[
              styles.buttonText,
              formData.practice === 'At home' && styles.activeButtonText
            ]}>
              At home
            </Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleFinish}
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
  fifthButton: {
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