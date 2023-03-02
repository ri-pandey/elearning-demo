import {
  SET_LOADING,
  FETCH_QUESTIONS,
  SET_STATUS,
  VALIDATION_RESULT,
  UPDATE_OPTION_SELECTION,
} from "./actionTypes";

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  payload: status,
});

export const fetchQuestions = (questions) => ({
  type: FETCH_QUESTIONS,
  payload: questions,
});

export const updateOptionSelection = (questionId, optionId, selected) => ({
  type: UPDATE_OPTION_SELECTION,
  payload: {
    questionId,
    optionId,
    selected,
  },
});

export const validateResult = (questionId, result) => ({
  type: VALIDATION_RESULT,
  payload: {
    questionId,
    result,
  },
});
