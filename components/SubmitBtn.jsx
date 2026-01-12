import { Button, View } from "react-native";

export default function SubmitBtn(props) {
    return (
        <View>
            <Button title="Create" onPress={() => props.createHandler()} />
        </View>
    )
}