import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InputComp from './components/InputComp';
import { useState } from 'react';
import Tasks from './components/Tasks';
import SubmitBtn from './components/SubmitBtn';
import DoneBtn from './components/DoneBtn';

export default function App() {
    const [task, setTask] = useState(null)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <StatusBar style="auto" />
                <Text style={{ fontWeight: 'bold' }}>TODO LIST - ORGANISER</Text>
            </View>
            <View style={styles.inputContainer}>
                <InputComp />
                <SubmitBtn />
                <DoneBtn />
            </View>
            {task ? <Tasks /> : <Text>Nothing to do!</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#fff',
        gap: 20,
        
    },
    header: {
        marginTop: 20,
        alignSelf: 'center'
    },
    inputContainer: {
        flexDirection: 'row',
        gap: 5,
    }
});
