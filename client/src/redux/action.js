import * as types from "./actionTypes";
import axios from "axios";

const getData = () => (dispatch) => {
  dispatch({ type: types.GET_DATA_REQUEST });
  return axios
    .get("https://cyan-difficult-yak.cyclic.app/api/todos")
    .then((res) => {
      return dispatch({ type: types.GET_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_DATA_FAILURE, payload: err });
    });
};

const addTask = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_TASK_REQUEST });
  return axios
    .post("https://cyan-difficult-yak.cyclic.app/api/todos/create", payload)
    .then((res) => {
      return dispatch({ type: types.ADD_TASK_SUCCESS });
    })
    .catch((err) => {
      return dispatch({ type: types.ADD_TASK_FAILURE, payload: err });
    });
};

const deleteTask = (id) => (dispatch) => {
    dispatch({ type: types.DELETE_TASK_REQUEST });
    return axios
      .delete(`https://cyan-difficult-yak.cyclic.app/api/todos/delete/${id}`)
      .then((res) => {
        return dispatch({ type: types.DELETE_TASK_SUCCESS });
      })
      .catch((err) => {
        return dispatch({ type: types.DELETE_TASK_FAILURE, payload: err });
      });
  };

  const updateTask = (id, payload) => (dispatch) => {
    dispatch({ type: types.UPDATE_TASK_REQUEST });
    return axios
      .patch(`https://cyan-difficult-yak.cyclic.app/api/todos/update/${id}`, payload)
      .then((res) => {
        return dispatch({ type: types.UPDATE_TASK_SUCCESS });
      })
      .catch((err) => {
        console.log(err)
        return dispatch({ type: types.UPDATE_TASK_FAILURE, payload: err });
      });
  };

  const editTask = (id, payload) => (dispatch) => {
    dispatch({ type: types.EDIT_TASK_REQUEST });
    return axios
      .patch(`https://cyan-difficult-yak.cyclic.app/api/todos/update/${id}`, payload)
      .then((res) => {
        return dispatch({ type: types.EDIT_TASK_SUCCESS});
      })
      .catch((err) => {
        console.log(err)
        return dispatch({ type: types.EDIT_TASK_FAILURE, payload: err });
      });
  };

export { getData, addTask, deleteTask, updateTask, editTask };
