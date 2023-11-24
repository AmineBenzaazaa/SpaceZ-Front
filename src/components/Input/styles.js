import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical:10,
    flexDirection: "row", // Align icon and input horizontally
    alignItems: "center", // Vertically center icon and input
    borderBottomWidth: 0.7,
    borderRadius:9,
    borderColor: colors.grey,
    backgroundColor: colors.purpleinput,
    marginBottom: 12,
    padding:12,
    fontSize: 14,
  },
  icon: {
    marginRight: 10, // Adjust spacing between icon and input
  },
  input: {
    flex: 1, // Allow input to expand and fill available space
    color: colors.text,
    borderRadius:10,
    fontSize: 15,
  },
});

export default styles;
