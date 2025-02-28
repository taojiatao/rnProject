// screens/HomeScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './RootNavigation';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'Home'>>();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
};

export { HomeScreen };