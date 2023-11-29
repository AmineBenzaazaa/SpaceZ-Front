import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purpledark,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 35,
    width: 153,
  },
  content: {
    paddingHorizontal: 46,
    paddingBottom: 46,
  },
  title: {
    color: colors.black,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
  },
  subtitle: {
    color: colors.grey,
    textAlign: "center",
    fontSize: 15,
    marginVertical: 16,
  },
  footer: {
    position: "absolute",
    bottom: 0,

    height: 46,
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: colors.white,
  },
});

export default styles;
