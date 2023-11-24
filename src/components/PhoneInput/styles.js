import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row", // Align icon and input horizontally
    alignItems: "center", // Vertically center icon and input
    marginVertical:10,
    borderBottomWidth: 0.7,
    borderRadius:9,
    borderColor: colors.grey,
    backgroundColor: colors.purpleinput,
    marginBottom: 12,
    padding:6,
    fontSize: 14,
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
