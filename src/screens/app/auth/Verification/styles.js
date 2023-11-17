import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    paddingHorizontal:24,
  },
  text: {
    textAlign: "center",
    color: colors.grey,
    fontSize: 15,
    marginTop: 28,
  },
  link: {
    color: colors.purple,
    paddingLeft: 4,
    fontWeight: "bold"
  }
});

export default styles;
