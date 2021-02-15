import { combineReducers } from "redux";
import { appData } from "./app-data/app-data";
import { appProcess } from "./app-process/app-process";

export const NameSpace = {
  DATA: `DATA`,
  APP: `APP`,
};

export default combineReducers({
  [NameSpace.DATA]: appData,
  [NameSpace.APP]: appProcess,
});
