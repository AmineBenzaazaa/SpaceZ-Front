import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    padding: 13,
    marginVertical: 8,
  },
  text: {
    color: colors.purpledark,
    fontSize: 16,
    fontWeight: "normal",
  },
  blueBg: {
    backgroundColor: colors.purplelight,
  },
});

export default styles;
