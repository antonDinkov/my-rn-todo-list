import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <StatusBar style="auto" />
                <Text style={{fontWeight: 'bold'}}>TODO LIST - ORGANISER</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#fff',
        gap: 20,
        alignSelf: 'center'
    },
    header: {
        marginTop: 20
    }
});
