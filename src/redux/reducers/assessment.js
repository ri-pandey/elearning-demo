import _ from "lodash"
import {STATUS} from "../../util";
import {SET_QUESTIONS, SET_STATUS, SET_VALIDATION_RESULT, UPDATE_OPTION_SELECTION} from "../actionTypes";

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
    case UPDATE_OPTION_SELECTION:
      var { questionId, optionId, selected } = action.payload
      var questionsClone = _.cloneDeep(state.questions)
      var question = questionsClone.find(e => e.id === questionId)
      var option = question.options.find(e => e.id === optionId)
      option.selected = selected
      return {
        ...state,
        questions: questionsClone
      }
    case SET_VALIDATION_RESULT:
      var { questionId, result } = action.payload
      var questionsClone = _.cloneDeep(state.questions)
      var question = questionsClone.find(e => e.id === questionId)
      const isAnsweredCorrectly = result.isAnsweredCorrectly
      question.isAnsweredCorrectly = isAnsweredCorrectly
      if (!isAnsweredCorrectly) {
        question.correctOptions = result.correctOptions
      }
      return {
        ...state,
        questions: questionsClone
      }
    default:
      return state
  }
}
