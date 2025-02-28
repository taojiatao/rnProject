import React, { useState } from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 这里可以添加实际的登录逻辑，比如发送请求到服务器验证用户名和密码
    // 为了简单起见，这里直接跳转到主页
    navigation.navigate('Home');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text style={styles.title}>登录页面</Text>
      <Input
        placeholder="用户名"
        value={username}
        onChangeText={(text) => setUsername(text)}
        />
      <Input
        placeholder="密码"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="登录" onPress={handleLogin} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  }
});

export default LoginScreen;