import { TextInput, View } from "react-native";

export default function InputComp(props) {
    return (
        <View style={{flex:1}}>
            <TextInput value={props.value} style={{
                flex: 1,
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 6,
                paddingHorizontal: 10,
                paddingVertical: 8,
                fontSize: 16,
            }} placeholder="Type your task here" onChangeText={props.textChangeHandler} />
        </View>
    )
}