import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor:colors.purplebold,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    paddingHorizontal: 28,
    paddingTop: 50,
    marginBottom:14,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  titleContainer: {
    flex: 1,

  },
  title: {
    color: colors.white,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "normal",
  },
  subtitle: {
    color: colors.purplelight,
    fontSize: 14,
    textAlign: "center",
    fontWeight: "normal",
  },
  icon: {
    // marginHorizontal: 12, // Adjust the margin as needed
    color: 'white', // Adjust the color as needed
    fontSize: 20, // Adjust the font size as needed
  },
});

export default styles;
