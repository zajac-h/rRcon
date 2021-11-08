import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

export default function Console({ navigation }) {
    const socket = navigation.getParam(socket);
    console.log(socket);
    const [console, editConsole] = React.useState([
        {key: '0', time: '11:40' ,message: 'console test'},
        {key: '1', time: '11:41' ,message: 'krin'},
        {key: '2', time: '11:59' ,message: 'fgsdfrthrthdf'},
    ]);

    const openSettings = () => {
        navigation.navigate('Settings');
    }

    const openUtilities = () => {
        navigation.navigate('Utilities');
    }

    /*const closeSocket = () => {
        socket.close();
    }*/

    /*Socket event handling (socket)
    socket.onmessage = () => {}

    socket.onerror = () => {}

    socket.onclose = (event) => {
        navigation.navigate('Login');
        if (event.wasClean) alert('Connection closed.');
        if (!event.wasClean) alert('Connection closed unexpectedly.');
    }
    =====*/

    return (
        <View>
            <Text>Console</Text>

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

