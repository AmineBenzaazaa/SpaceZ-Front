import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purpledark,
    paddingHorizontal: 24,
  },
  label: {
    textAlign: "left",
    color: colors.white,
  },
  text: {
    textAlign: "center",
    color: colors.white,
    fontSize: 12,
    marginTop: 28,
  },
  link: {
    color: colors.purplelight,
    paddingLeft: 4,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 24,
    paddingTop: 12,
  },
  agreeText: {
    color: colors.purplelight,
    fontSize: 12,
  },
  agreelink: {
    color: colors.purplelight,
    textDecorationLine: "underline",
  },
  input:{
    marginHorizontal: 8,
  }
});

export default styles;
