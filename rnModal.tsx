import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const RNModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = React.useState("Useless Text");

  return (
    <View style={styles.centeredView}>
      <Pressable
        style={styles.button}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text>Show Modal</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.modalView}
        >
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
          <Pressable
            style={styles.button}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text>Hide Modal</Text>
          </Pressable>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    marginTop: "auto",
    backgroundColor: "aqua",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },
  button: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#F194FF",
    marginBottom: 30,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
});

export default RNModal;
