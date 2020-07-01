import { UserActionTypes } from "./user.types";

//this setCurrentUser functin just returns the object that contains information of action..
export const setCurrentUser = (user) => {
  return {
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user,
  };
};
