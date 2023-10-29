import React, { useEffect, useState } from "react";
import styles from "../styles/homepage.module.css";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import TaskBar from "../components/TaskBar";
import { useSelector, useDispatch } from "react-redux";
import { addTask, getData } from "../redux/action";

const Homepage = () => {
  const { todos, isLoading } = useSelector((state) => state);
  const [taskName, setName] = useState("");
  const dispatch = useDispatch();

  const handleKey = (e) => {
    let payload = {
      name: taskName,
    };
    if (e.key === "Enter") {
      dispatch(addTask(payload)).then((res) => {
        if (res.type === "ADD_TASK_SUCCESS") {
          setName("");
          dispatch(getData());
        }
      });
    }
  };


  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <Box className={styles.container}>
      <Box className={styles.nav}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Google_Tasks_2021.svg/1200px-Google_Tasks_2021.svg.png"
          alt="logo"
        />
        <p>TrackMe</p>
      </Box>

      <Box className={styles.mainCont}>
        <Box className={styles.searchbar}>
          <input
            type="text"
            placeholder="Add Task..."
            onChange={(e) => setName(e.target.value)}
            onKeyDown={handleKey}
            value={taskName}
          />
        </Box>
        <Box className={styles.taskCont}>
          {isLoading ? (
            <Box className={styles.loadingDiv}>
              <Spinner />
            </Box>
          ) : (
            <Box>
              {todos?.length !== 0 ? (
                <Box>
                  <Flex className={styles.tabs}>
                    <p>No.</p>
                    <p>Name</p>
                    <p>Status</p>
                    <p>modify</p>
                  </Flex>
                  {todos
                    ?.map((e, index) => {
                      return (
                        <TaskBar
                          key={index}
                          serial={todos?.length - index}
                          {...e}
                        />
                      );
                    })
                    .reverse()}
                </Box>
              ) : (
                "Add Your First Task 😊"
              )}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;
