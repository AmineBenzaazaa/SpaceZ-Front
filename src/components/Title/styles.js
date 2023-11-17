import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: 50,
    marginBottom: 24,
  },
  title: {
    color: colors.purplelight,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "normal",
  },
  subtitle: {
    color: colors.white,
    fontSize: 14,
    textAlign: "center",
    fontWeight: "normal",
  },
});

export default styles;
