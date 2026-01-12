import { ScrollView, Text, View } from "react-native";
import DoneBtn from "./DoneBtn";

export default function Tasks(props) {
    return (
        <ScrollView>
            {props.tasks.map((task, index) =>
                <View key={index}>
                    <Text style={{ marginTop: 10 }}>{task}</Text>
                    {/* тук това го предавам надолу като пропърти,  не е реалния ивент */}
                    {/* по този начин предавам вградено индекса без отделен пропс */}
                    <DoneBtn onPress={() => props.onDone(index)} /> 
                </View>
            )}
        </ScrollView>
    )
}