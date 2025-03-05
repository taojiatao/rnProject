// screens/DetailScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './RootNavigation';

const DetailScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'Detail'>>();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Detail Screen</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export { DetailScreen };