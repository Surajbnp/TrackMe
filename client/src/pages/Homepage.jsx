import React from "react";
import styles from "../styles/homepage.module.css";
import { Box, Flex } from "@chakra-ui/react";
import TaskBar from "../components/TaskBar";

const Homepage = () => {
  let data = [
    {
      taskName: "my first task ",
      description: "",
      status: false,
    },
    {
      taskName: "my second task ",
      description: "",
      status: true,
    },
    {
      taskName: "my first task ",
      description: "",
      status: false,
    },
    {
      taskName: "my second task ",
      description: "",
      status: true,
    },
    {
      taskName: "my first task ",
      description: "",
      status: false,
    },
    {
      taskName: "my second task ",
      description: "",
      status: true,
    },
    {
      taskName: "my second task ",
      description: "",
      status: true,
    },
    {
      taskName: "my first task ",
      description: "",
      status: false,
    },
    {
      taskName: "my second task ",
      description: "",
      status: true,
    },
    {
      taskName: "my second task ",
      description: "",
      status: true,
    },
    {
      taskName: "my first task ",
      description: "",
      status: false,
    },
    {
      taskName: "my second task ",
      description: "",
      status: true,
    },
  ];

  return (
    <Box className={styles.container}>
      <Box className={styles.nav}>
        <p>TrackMe</p>
      </Box>

      <Box className={styles.mainCont}>
        <Box className={styles.searchbar}>
          <input type="text" placeholder="Add Task..." />
        </Box>
        <Box className={styles.taskCont}>
          <Flex className={styles.tabs}>
            <p>No.</p>
            <p>Name</p>
            <p>Status</p>
            <p>modify</p>
          </Flex>
          {data?.map((e, index) => {
            return <TaskBar key={index} serial={index + 1} {...e} />;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;
