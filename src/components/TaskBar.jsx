import React from "react";
import styles from "../styles/taskbar.module.css";
import { Box, Flex } from "@chakra-ui/react";
import AlertBox from "../components/AlertBox";
import { BiRefresh } from "react-icons/bi";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const TaskBar = ({ taskName, description, status, serial }) => {
  return (
    <Box className={styles.bar}>
      <div>{`${serial}.`}</div>
      <div>{taskName}</div>
      <div>
        {status ? (
          <span className={styles.completed}>Completed</span>
        ) : (
          <span className={styles.notCompleted}>Not Completed</span>
        )}
      </div>
      <Box className={styles.icons}>
          <AlertBox
            iconColor={"#32CD30"}
            iconStyle={<BiRefresh color="white" />}
          />
          <AlertBox
            iconColor={"#145DA0"}
            iconStyle={<AiFillEdit color="white" />}
          />
          <AlertBox
            iconColor={"#BA0F30"}
            iconStyle={<AiFillDelete color="white" />}
          />
      </Box>
    </Box>
  );
};

export default TaskBar;
