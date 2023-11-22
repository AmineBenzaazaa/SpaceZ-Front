import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row", // Align icon and input horizontally
    alignItems: "center", // Vertically center icon and input
    borderBottomWidth: 1,
    borderColor: colors.grey,
    marginBottom: 12,
    fontSize: 15,
  },
  icon: {
    marginRight: 10, // Adjust spacing between icon and input
    marginVertical: 10,
  },
  input: {
    flex: 1, // Allow input to expand and fill available space
    color: colors.purplelight,
    fontSize: 15,
  },
});

export default styles;
