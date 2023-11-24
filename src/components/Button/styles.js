import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 30,
    padding: 13,
    alignSelf: 'stretch', // Ensures the button expands to fill the width
    width: '100%', // Sets the width to 100% of the screen
  },
  text: {
    color: colors.purpledark,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "normal",
  },
  blueBg: {
    backgroundColor: colors.purplelight,
  },
});

export default styles;
