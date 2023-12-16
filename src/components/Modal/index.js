import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import LottieView from "lottie-react-native";

import colors from "../../constants/colors";

const CustomModal = ({ isVisible, toggleModal, modalText }) => {
  return (
    <Modal isVisible={isVisible} avoidKeyboard={true}>
      <View style={styles.modalContainer}>
        <View style={styles.animationContainer}>
          <LottieView
            source={require("../../assets/lotties/validation.json")} // Import your Lottie animation file
            autoPlay
            
            style={styles.animation}
          />
        </View>
        <Text style={styles.modalText}>{modalText}</Text>
        <TouchableOpacity onPress={toggleModal} style={styles.modalClose}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  animationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center",
  },
  modalClose: {
    backgroundColor: colors.purplelight,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: "auto",
    color: colors.purplebold,
  },
  animation: {
    width: 50, // Adjust the width of the animation as needed
    height: 50, // Adjust the height of the animation as needed
  },
});
