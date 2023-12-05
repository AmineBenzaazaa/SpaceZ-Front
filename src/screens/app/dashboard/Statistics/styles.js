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
  columnLeft: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  columnRight: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  card: {
    marginVertical:8,
    backgroundColor: colors.purplebold,
    borderRadius: 8,
    paddingVertical: 12,
  },
  text: {
    color: colors.grey,
    fontSize:12,
    marginHorizontal:18,
  },
  CardText: {
    marginHorizontal: 10,
    color: colors.white,
    fontSize: 14,
  },
  transactionsLight: {
    flexDirection: "row",
    backgroundColor: colors.purplebold,
    borderRadius: 8,
    justifyContent: "space-between",
    padding: 8,
  },
  buttonsContainer: {
    flexDirection: "column",
    marginVertical: 10,
  },
  button: {
    // flex: 1,
    marginVertical: 5,
    backgroundColor: colors.white,
    borderRadius: 30,
    padding: 13,
    alignSelf: 'stretch',
  },
  btnText: {
    color: colors.purpledark,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "normal",
  },
  btnbg: {
    backgroundColor: colors.purplelight
  }
});

export default styles;
