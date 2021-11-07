import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default function Login({ navigation }) {

    const [serverIp, setIp] = React.useState('');
    const [port, setPort] = React.useState('');
    const [password, setPassword] = React.useState('');

    async function login() {
        try {
            const socket = new WebSocket(`ws://${serverIp}:${port}/${password}`);

            socket.onopen = () => {
                navigation.navigate('Console', socket);
            }
        } catch (error) {
            alert(error);
        }
    }

    return (
        <View>
            <Text>rRcon</Text>

            <TextInput
                placeholder='Ip'
                value={serverIp}
                maxLength={15}
                onChangeText={(val) => setIp(val)}
                keyboardType='numeric'
            />
            <TextInput
                placeholder='Port'
                value={port}
                maxLength={5}
                onChangeText={(val) => setPort(val)}
                keyboardType='numeric'
            />
            <TextInput
                placeholder='Password'
                value={password}
                maxLength={256}
                onChangeText={(val) => setPassword(val)}
                secureTextEntry={true}
            />

            <Button title='Login' onPress={login} />
        </View>
    );
}	
