import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purpledark,
  },
  body: {
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center", // Center content horizontally
    backgroundColor: colors.purpledark,
    // flex: 1, // Take up available vertical space
  },
  token: {
    marginTop:34,
    color: colors.white,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
  text: {
    marginBottom: 50,
    color: colors.purplelight,
    textAlign: "center",
    fontSize: 14,
  },
  coinImage: {
    width: 90,
    height: 90,
    resizeMode: "contain", // Maintain aspect ratio and fit within the specified dimensions
  },
  button: {
    backgroundColor: colors.green, // Adjust the color as needed
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 'auto', // Pushes the button to the bottom
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default styles;
