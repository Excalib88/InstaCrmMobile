import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import APIKit from './APIKit';
import { login } from '../AuthProvider';
import DateTimePicker from '@react-native-community/datetimepicker';

const Register = () => {
    const [account, setAccount] = useState({
        username: '',
        password: '',
        birthDate: '',
        firstName:'',
        lastName: '',
        patronymic: '',
        email: '',

    });
    
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');

    //#region birthDate
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };
    //#endregion
    
    //#region InputsEvent
    const onUsernameChange = username => {
        setAccount({
            ...account, username: username
        });
    };

    const onPasswordChange = password => {
        setAccount({
            ...account, password: password
        });
    };

    const onFirstNameChange = firstName => {
        setAccount({
            ...account, firstName: firstName
        });
    };

    const onLastNameChange = lastName => {
        setAccount({
            ...account, lastName: lastName
        });
    };

    const onPatronymicChange = patronymic => {
        setAccount({
            ...account, patronymic: patronymic
        });
    };

    const onEmailChange = email => {
        setAccount({
            ...account, email: email
        });
    };
    //#endregion

    const onPressRegister = () => {
        const payload = account;

        const onSuccess = ({data}) => {
            login(data.token);
        };
      
        const onFailure = error => {
            console.log(error || error.response);
        };
            
        APIKit.post('/user/register', payload)
            .then(onSuccess)
            .catch(onFailure);
    };

    return (
        <View>
            <TextInput value={account.username} onChangeText={onUsernameChange} label="Имя пользователя"></TextInput>
            <TextInput value={account.password} onChangeText={onPasswordChange} label="Пароль" secureTextEntry></TextInput>
            <TextInput value={account.lastName} onChangeText={onLastNameChange} label="Фамилия"></TextInput>
            <TextInput value={account.firstName} onChangeText={onFirstNameChange} label="Имя"></TextInput>
            <TextInput value={account.patronymic} onChangeText={onPatronymicChange} label="Отчество"></TextInput>
            <DateTimePicker
                testID="birthDate"
                value={account.birthDate}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}/>
            <TextInput value={account.email} onChangeText={onEmailChange} label="Email"></TextInput>
            <Button mode="contained" onPress={onPressRegister}>Войти</Button>
        </View>
    );
};

export default Register;

