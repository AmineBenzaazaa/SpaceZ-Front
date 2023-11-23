import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purpledark,
    paddingHorizontal: 24,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start", // Updated from "top"
    padding: 10,
    height: "100%",
  },
  columnLeft: {
    flex: 1,
    alignItems: "flex-start", // Updated from "left"
    justifyContent: "flex-start", // Updated from "top"
  },
  columnCenter: {
    flex: 1,
    alignItems: "center", // Updated from "left"
    justifyContent: "flex-start", // Updated from "top"
  },
  
  columnRight: {
    flex: 1,
    alignItems: "flex-end", // Updated from "right"
    justifyContent: "flex-start", // Updated from "top"
  },
  text: {
    marginBottom: 36,
    color: colors.grey,
    fontSize: 12,
  },
  token: {
    color: colors.white,
    fontSize: 14,
  },
  image: {
    width: "180%", // Adjusted to take the full width of the container
    height: "20%", // Adjusted to maintain aspect ratio
    resizeMode: "contain",

  },
  
});

export default styles;
