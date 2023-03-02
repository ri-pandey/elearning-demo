import {
  SET_LOADING,
  SET_QUESTIONS,
  SET_STATUS,
  SET_RESULT,
  SET_OPTION_SELECTION,
} from "./actionTypes";

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  payload: status,
});

export const setQuestions = (questions) => ({
  type: SET_QUESTIONS,
  payload: questions,
});

export const setOptionSelection = (questionId, optionId, selected) => ({
  type: SET_OPTION_SELECTION,
  payload: {
    questionId,
    optionId,
    selected,
  },
});

export const setResult = (questionId, result) => ({
  type: SET_RESULT,
  payload: {
    questionId,
    result,
  },
});
