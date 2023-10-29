import React from "react";
import styles from "../styles/taskbar.module.css";
import { Box, Flex } from "@chakra-ui/react";
import AlertBox from "../components/AlertBox";
import { BiRefresh } from "react-icons/bi";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { deleteTask, editTask, getData, updateTask } from "../redux/action";
import { useDispatch } from "react-redux";
import { EditModal } from "./EditModal";

const TaskBar = ({ name, status, serial, _id }) => {
  const dispatch = useDispatch();

  let deleteMsg = {
    header: "Want to make change",
    msg: "Are you sure you want to delete your task ?",
    id: _id,
  };

  let updateMsg = {
    header: "Want to update",
    msg: `Are you sure, you want to change status of your task ?`,
    id: _id,
  };

  const handleDelete = (id) => {
    if (id) {
      dispatch(deleteTask(id)).then((res) => {
        if (res.type === "DELETE_TASK_SUCCESS") {
          dispatch(getData());
        }
      });
    }
  };

  const handleUpdate = (id) => {
    let payload = {
      status: true,
    };
    if (status) {
      payload.status = false;
    } else {
      payload.status = true;
    }

    dispatch(updateTask(id, payload)).then((res) => {
      if (res.type === "UPDATE_TASK_SUCCESS") {
        dispatch(getData());
      }
    });
  };

  const handleEdit = (id, payload) => {
    if (id && payload) {
      dispatch(editTask(id, payload)).then((res) => {
        if (res.type === "EDIT_TASK_SUCCESS") {
          dispatch(getData());
        }
      });
    }
  };

  return (
    <Box className={styles.bar}>
      <div>{`${serial}.`}</div>
      <div>{name.length > 15 ? name.substring(0, 15) + "..." : name}</div>
      <div>
        {status ? (
          <span className={styles.completed}>Completed</span>
        ) : (
          <span className={styles.notCompleted}>Not Completed</span>
        )}
      </div>
      <Box className={styles.icons}>
        <AlertBox
          msg={updateMsg}
          func={handleUpdate}
          iconColor={"#32CD30"}
          iconStyle={<BiRefresh color="white" />}
        />
        <EditModal
          name={name}
          id={_id}
          func={handleEdit}
          iconColor={"#145DA0"}
          iconStyle={<AiFillEdit color="white" />}
        />
        <AlertBox
          msg={deleteMsg}
          func={handleDelete}
          iconColor={"#BA0F30"}
          iconStyle={<AiFillDelete color="white" />}
        />
      </Box>
    </Box>
  );
};

export default TaskBar;
