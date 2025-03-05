// navigation/RootNavigation.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './Login/Index';
import { HomeScreen } from './HomeScreen';
import { DetailScreen } from './DetailsScreen';

// 定义屏幕参数类型
type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Detail: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
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
