import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import APIKit from './APIKit';
import { login} from '../AuthProvider';

const Auth = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    
    const onUsernameChange = username => {
        setCredentials({
            ...credentials, username: username
        });
    };

    const onPasswordChange = password => {
        setCredentials({
            ...credentials, password: password
        });
    };

    const onPressAuth = () => {
        const payload = credentials;

        const onSuccess = ({data}) => {
            login(data.token);
        };
      
        const onFailure = error => {
            console.log(error || error.response);
        };
            
        APIKit.post('/user/authenticate', payload)
            .then(onSuccess)
            .catch(onFailure);
    };

    return (
        <View>
            <TextInput value={credentials.username} onChangeText={onUsernameChange} label="Username"></TextInput>
            <TextInput value={credentials.password} onChangeText={onPasswordChange} label="Password" secureTextEntry></TextInput>
            <Button mode="contained" onPress={onPressAuth}>Войти</Button>
        </View>
    );
};

export default Auth;

