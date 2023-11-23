import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purpledark,
    paddingHorizontal: 24,
    // justifyContent: "center", // Center content vertically
  },
  keyContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Space evenly
    alignItems: "center", // Center content vertically
  },
  warning: {
    color: colors.purplelight,
    paddingVertical: 20,
  },
  key: {
    flex: 8, // 60% width
    backgroundColor: colors.purplebold,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 16,
    fontSize:12,
    flexDirection: "row", // Align items horizontally
    alignItems: "center", // Center content vertically
  },
  copy: {
    flex: 1, // 20% width
    backgroundColor: "#2B2A57",
    // marginLeft: 8, // Add margin left for separation
    padding: 22,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally

  },
  walletPublicKey: {
    color: colors.white,
    paddingHorizontal: 20,
    fontSize: 12,
    marginLeft: 8, // Add margin left for separation
  },
  icon: {
    width: 24, // Adjust as needed
    height: 24, // Adjust as needed
    
  },
  text:{
    color: colors.white,
    paddingHorizontal: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    marginHorizontal: 8,
    marginVertical: 4,
  },
});

export default styles;
