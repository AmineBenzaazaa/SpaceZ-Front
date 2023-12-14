import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purplebold,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    paddingHorizontal: 28,
    paddingTop: 58,
    paddingBottom: 34,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleContainer: {
    marginLeft: 16, // Adjust the margin as needed
    alignItems: "center", // Center items horizontally
    flex: 1, // Allow the title to expand and take available space
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "normal",
  },
  icon: {
    color: "white",
    fontSize: 20,
  },
});

export default styles;
