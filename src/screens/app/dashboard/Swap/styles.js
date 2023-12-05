import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purpledark,
    flex: 1,
  },
  main: {
    paddingTop: 24,
    paddingHorizontal: 20,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  columnContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 25,
    marginVertical: 5,
    backgroundColor: colors.purplelight,
    padding: 30,
    borderRadius: 50,
    color: colors.purpledark,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 6,
      height: 5,
    },
  },
  Cardcontainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.purplebold,
    // marginHorizontal: 16,
    marginVertical: 6,
    borderRadius: 8,
    borderColor: "#414154",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 7,
      height: 4,
    },
  },
  coin: {
    marginVertical: 5,
    backgroundColor: colors.purplelight,
    padding: 15,
    borderRadius: 10,
    color: colors.purpledark,
  },
  // fixedSizeIcon: {
  //   width: 20,  // Set a fixed width for the icon
  //   height: 20, // Set a fixed height for the icon
  //   color: colors.purpledark,
  //   padding: 15,
  //   borderRadius: 10,
  //   backgroundColor: colors.purplelight
  // },
  CardText: {
    marginHorizontal: 10,
    color: colors.white,
    fontSize: 16,
  },
  text: {
    color: colors.white,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: colors.white,
    borderRadius: 30,
    padding: 13,
    alignSelf: "stretch",
  },
  btnText: {
    color: colors.purpledark,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "normal",
  },
  btnbg: {
    backgroundColor: colors.purplelight,
  },
});

export default styles;
