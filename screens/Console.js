import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

export default function Console({ navigation }) {
    const socket = navigation.getParam('socket');
    const serverIp = navigation.getParam('serverIp');

    const [consoleData, editConsoleData] = React.useState([
        {key: '0', time: '11:40' ,message: 'console test'},
        {key: '1', time: '11:41' ,message: 'krin'},
        {key: '2', time: '11:59' ,message: 'fgsdfrthrthdf'},
    ]);

    //Buttons functionalities
    const openSettings = () => {
        navigation.navigate('Settings');
    }

    const openUtilities = () => {
        navigation.navigate('Utilities');
    }

    const closeSocket = () => {
        socket.close();
    }
    //=====

    //Socket event handling (socket)
    socket.onmessage = () => {}

    socket.onerror = () => {}

    socket.onclose = (event) => {
        if (event.wasClean) alert('Connection with socket closed.');
        if (!event.wasClean) alert('Connection with socket closed unexpectedly.');
        
        navigation.navigate('Login');
    }
    //=====

    return (
        <View>
            <Text>Connection with {serverIp}</Text>

            <Button title='Settings' onPress={openSettings} />
            <Button title='Utilities' onPress={openUtilities} />
            <Button title='Close connection' onPress={closeSocket} />

            <FlatList
                data={console}
                renderItem={({ item }) => (
                    <Text>{ item.time } --- { item.message }</Text>
                )}
            />
        </View>
    );
} 

