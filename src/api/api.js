import {questionsWithCorrectOptions, quizQuestions} from "./data";
import {arraysAreEqual} from "../util";

export const fetchQuestions = () => {
  return new Promise((resolve) => {
    resolve(quizQuestions)
  })
}

export const submitResponse = (question) => {
  return new Promise((resolve) => {
    let selectedOptions = question.options.filter(e => !!e.selected).map(e => e.id)
    let correctOptions = questionsWithCorrectOptions.find(e => e.id === question.id).correctOptions
    let isAnsweredCorrectly = arraysAreEqual(selectedOptions, correctOptions)

    let response = {
      isAnsweredCorrectly,
      ...(!isAnsweredCorrectly && {correctOptions})
    }
    resolve(response)
  })
}
