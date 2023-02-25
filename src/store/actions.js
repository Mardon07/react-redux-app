import * as actions from "./actionTypes";

export const titleChange = (id) => {
  return {
    type: actions.taskUpdated,
    payload: { id, title: `New title for ${id}` },
  };
};

export const taskComplete = (id) => {
  return {
    type: actions.taskUpdated,
    payload: { id, completed: true },
  };
};

export const taskDeleted = (id) => {
  return {
    type: actions.taskDeleted,
    payload: { id },
  };
};
