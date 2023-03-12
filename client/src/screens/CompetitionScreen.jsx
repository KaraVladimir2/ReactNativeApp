import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../styles/CompetitionScreen.styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View></View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back to main</Text>
      </TouchableOpacity>
    </View>
  );
}
