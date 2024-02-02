import {
    ModalBackdrop,
    ModalContent,
    ModalHeader,
    Heading,
    ModalCloseButton,
    Icon,
    CloseIcon,
    ModalBody,
    ModalFooter,
    ButtonText,
    Button,
    Modal,
    VStack,
    Text,
    InputField,
    Input,
  } from "@gluestack-ui/themed";
  import React, { useState } from "react";
  import { KeyboardAvoidingView, Platform } from "react-native";
  
  const GluestackModal = () => {
    const [showModal, setShowModal] = useState(false);
    const ref = React.useRef(null);
  
    return (
      <VStack flex={1} alignItems="center" justifyContent="center">
        <Button onPress={() => setShowModal(!showModal)}>
          <ButtonText>Show Modal</ButtonText>
        </Button>
  
        <Modal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
          }}
          finalFocusRef={ref}
        >
          <ModalBackdrop />
          <ModalContent>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{}}
            >
              <ModalHeader>
                <Heading size="lg">Engage with Modals</Heading>
                <ModalCloseButton>
                  <Icon as={CloseIcon} />
                </ModalCloseButton>
              </ModalHeader>
              <ModalBody>
                <Text size="3xl">
                  Elevate user interactions with our versatile modals. Seamlessly
                  integrate notifications, forms, and media displays. Make an
                  impact effortlessly. Elevate user interactions with our
                  versatile modals. Seamlessly integrate notifications, forms, and
                  media displays. Make an impact effortlessly.
                </Text>
  
                <Input variant="outline" size="md" mt="$5" borderWidth={"$2"}>
                  <InputField placeholder="Enter Text here" />
                </Input>
              </ModalBody>
              <ModalFooter>
                <Button
                  variant="outline"
                  size="sm"
                  action="secondary"
                  mr="$3"
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  <ButtonText>Cancel</ButtonText>
                </Button>
                <Button
                  size="sm"
                  action="positive"
                  borderWidth="$0"
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  <ButtonText>Explore</ButtonText>
                </Button>
              </ModalFooter>
            </KeyboardAvoidingView>
          </ModalContent>
        </Modal>
      </VStack>
    );
  };
  
  export default GluestackModal;
  