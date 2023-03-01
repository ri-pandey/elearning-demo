import {SET_LOADING, SET_QUESTIONS, SET_STATUS, SET_VALIDATION_RESULT, UPDATE_OPTION_SELECTION} from './actionTypes'

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading
})

export const setStatus = (status) => ({
  type: SET_STATUS,
  payload: status
})

export const setQuestions = (questions) => ({
  type: SET_QUESTIONS,
  payload: questions
})

export const updateOptionSelection = (questionId, optionId, selected) => ({
  type: UPDATE_OPTION_SELECTION,
  payload: {
    questionId,
    optionId,
    selected
  }
})

export const setValidationResult = (questionId, result) => ({
  type: SET_VALIDATION_RESULT,
  payload: {
    questionId,
    result
  }
})
