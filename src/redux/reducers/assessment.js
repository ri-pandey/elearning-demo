import {STATUS} from "../../util";
import {SET_QUESTIONS, SET_STATUS} from "../actionTypes";

const initialState = {
  status: STATUS.PRISTINE,
  questions: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_STATUS:
      const newStatus = action.payload
      return {
        ...state,
        status: newStatus
      }
    case SET_QUESTIONS:
      const questions = action.payload
      return {
        ...state,
        questions
      }
    default:
      return state
  }
}
