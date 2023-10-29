import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

export function EditModal({ iconStyle, iconColor, name, func, id }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [taskVal, setTask] = useState(name);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    func(id, { name: taskVal });
  };

  return (
    <>
      <button
        style={{ background: iconColor, padding: "4px", borderRadius: "50%" }}
        onClick={onOpen}
      >
        {iconStyle}
      </button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent fontFamily={"'Poppins', sans-serif"}>
          <ModalHeader>Edit Your Task</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody pb={6}>
              <FormLabel>Task Name</FormLabel>
              <Input
                ref={initialRef}
                defaultValue={name}
                placeholder="First name"
                onChange={(e) => setTask(e.target.value)}
              />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={5} type="submit">Save</Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
