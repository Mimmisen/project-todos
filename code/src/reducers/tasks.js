import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";

const tasks = createSlice({
  name: "tasks",
  initialState: {
    items: [],
  },
  reducers: {
    addTask: (store, action) => {
      const newTask = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
      };
      // console.log(action);

      store.items = [...store.items, newTask];
    },
    toggleTask: (store, action) => {
      // console.log(action);
      const updatedItems = store.items.map((item) => {
        if (item.id === action.payload) {
          const updatedTask = {
            ...item,
            isComplete: !item.isComplete,
          };
          return updatedTask;
        } else {
          return item;
        }
      });
      store.items = updatedItems;
    },
    deleteTasks: (store, action) => {
      const deleteItems = store.items.filter(
        (item) => item.id !== action.payload
      );

      store.items = deleteItems;
    },
  },
});

export default tasks;