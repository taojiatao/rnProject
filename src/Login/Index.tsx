// LoginPage.js
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input, Button, Icon} from 'react-native-elements';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  // 点击登录
  const handleLogin = () => {
    // 这里可以添加登录逻辑
    console.log('phone:', phone);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginWrap}>
        <Text style={styles.title}>登录</Text>
        <Input
          value={phone}
          onChangeText={setPhone}
          leftIcon={{type: 'font-awesome', name: 'phone', color: '#999'}}
          keyboardType="phone-pad"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="请输入手机号"
        />
        <Input
          value={password}
          onChangeText={setPassword}
          leftIcon={{
            type: 'font-awesome',
            name: 'lock',
            size: 26,
            iconStyle: {marginLeft: 2},
            color: '#999',
          }}
          secureTextEntry
          placeholder="请输入密码"
        />
        <Button title="登录" onPress={handleLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  loginWrap: {
    margin: 16,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderColor: '1px solid #ccc',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
});

export {Login};
