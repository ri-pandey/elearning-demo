import {SET_QUESTIONS, SET_STATUS} from './actionTypes'

export const setStatus = (status) => ({
  type: SET_STATUS,
  payload: status
})

export const setQuestions = (questions) => ({
  type: SET_QUESTIONS,
  payload: questions
})
