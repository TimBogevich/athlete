import { Stack } from 'expo-router';
import { createContext, useState } from 'react';

export const FormContext = createContext();

export default function Layout() {
  const [formData, setFormData] = useState({
    name: '',
    gender: 'Male',
    age: '',
    goal: 'Weight loss',
    level: 'Beginner',
    height: '',
    weight: '',
    lifestyle: 'Sedentary',
    training: '2',
    practice: 'In gym'
  });

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <FormContext.Provider value={{ formData, updateField }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="program1" />
        <Stack.Screen name="program2" />
      </Stack>
    </FormContext.Provider>
  );
}