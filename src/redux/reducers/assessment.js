import { createSlice } from '@reduxjs/toolkit'
import {STATUS} from "../../util";
import {SET_STATUS} from "../actionTypes";

const initialState = {
  status: STATUS.PRISTINE
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_STATUS:
      const newStatus = action.payload
      return {
        ...state,
        status: newStatus
      }
    default:
      return state
  }
}
