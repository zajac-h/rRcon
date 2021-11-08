import React from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import moment from 'moment';

export default function Console({ navigation }) {
    const socket = navigation.getParam('socket');
    const serverIp = navigation.getParam('serverIp');

    const [consoleData, editConsoleData] = React.useState([]);
    const [consoleInput, setConsoleInput] = React.useState('');

    //Buttons functionalities
    const openSettings = () => {
        navigation.navigate('Settings');
    }

    const openUtilities = () => {
        navigation.navigate('Utilities');
    }

    const closeSocket = () => {
        socket.close();
        navigation.navigate('Login');
    }
    //=====

    //Console input
    const messageSend = () => {
        const message = JSON.stringify({
            'Identifier': 1,
            'Message': consoleInput,
            'Name': 'WebRcon'});
        socket.send(message);

        const date = moment().format('HH:mm');       
        editConsoleData(state => [...state, {
            identifier: 1,
            time: date,
            message: consoleInput,
            type: 'Command'}]);

        setConsoleInput('');

        //if (consoleData.length() > 1000) {
        //    
        //}
    }
    //=====

    //Socket event handling (socket)
    socket.onmessage = (event) => {
        const message = event.data;
        const date = moment().format('HH:mm');
        const data = JSON.parse(message);
        editConsoleData(state => [...state, {
            identifier: 0,
            time: date,
            message: data.Message,
            type: data.Type}]);

        //if (consoleData.length > 100) {
        //    
        //}
    }

    socket.onerror = (event) => {
        alert('Socket error.');
        socket.close();
    }
    //=====

    return (
        <View>
            <Text>Connection with {serverIp}</Text>

            <Button title='Settings' onPress={openSettings} />
            <Button title='Utilities' onPress={openUtilities} />
            <Button title='Close connection' onPress={closeSocket} />

            <FlatList
                style={{height: 400}}
                data={consoleData}
                invertet={true}
                renderItem={({ item }) => (
                    <Text>{ item.time } --- { item.message }</Text>
                )}
            />

            <TextInput
                value={consoleInput}
                onChangeText={(val) => setConsoleInput(val)}
                onSubmitEditing={messageSend}            
             />
        </View>
    );
} 

