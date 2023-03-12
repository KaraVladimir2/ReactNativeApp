import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  title: {
    marginLeft: 10,
    fontSize: 30,
  },
  titleContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    marginLeft: 20,
    marginTop: 20,
    flexDirection: "row",
  },
  titleImage: {
    width: 50,
    height: 50,
  },
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 2,
    paddingVertical: 40,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 200,
    backgroundColor: "transparent",
  },
  buttonText: {
    fontSize: 20,
  },
  imageContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -173 }, { translateY: -212 }],
  },
  image: {
    width: 346,
    height: 424,
  },
});
