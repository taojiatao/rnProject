// navigation/RootNavigation.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './HomeScreen';
import { DetailScreen } from './DetailsScreen';

// 定义屏幕参数类型
type RootStackParamList = {
  Home: undefined;
  Detail: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home Screen' }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: 'Detail Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
export type { RootStackParamList };
