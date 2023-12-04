import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purpledark,
  },
  bg: {
    backgroundColor: colors.purplebold,
    // paddingHorizontal: 20,
    borderRadius: 16,
  },
  head: {
    flexDirection: "row",
    paddingHorizontal: 20,
    // justifyContent: "space-between",
    // alignItems: "flex-start", // Updated from "top"
    padding: 10,
    // height: "100%",
    // flex: 1,
  },
  
  transactions: {
    flexDirection: 'row',
    maHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    marginVertical: 10,
  },

  columnRef: {
    flexDirection: 'row', // Added to align items horizontally
    alignItems: "center", // Align items vertically in the center
  },
  
  icons: {
    marginRight: 8, // Adjust the margin as needed
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
  imageContainer: {
    height: 100, // Adjust the height as needed
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "240%", // Adjusted to take the full width of the container
    height: "45%", // Adjusted to maintain aspect ratio
    resizeMode: "contain",
  },
});

export default styles;
