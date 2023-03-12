import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import styles from "../styles/HomeScreen.styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"default"} />
      <View style={styles.titleContainer}>
        <Image
          style={styles.titleImage}
          source={require("../../assets/images/eagleLogo.jpg")}
        />
        <Text style={styles.title}>Kettlebell Lab</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/timer.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Competition")}
        >
          <Image source={require("../../assets/images/competitions.png")} />
          <Text style={styles.buttonText}>Competitions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../../assets/images/coaches.png")} />
          <Text style={styles.buttonText}>Coaches</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../../assets/images/activityProgress.png")} />
          <Text style={styles.buttonText}>Activity Progress</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../../assets/images/contactUs.png")} />
          <Text style={styles.buttonText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
