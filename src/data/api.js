import {questionsWithCorrectOptions} from "./data";
import {arraysAreEqual} from "../util";

export const submitResponse = (question) => {
  return new Promise((resolve, reject) => {
    let selectedOptions = question.options.filter(e => !!e.selected).map(e => e.id)
    let correctOptions = questionsWithCorrectOptions.find(e => e.id === question.id).correctOptions
    let submissionIsCorrect = arraysAreEqual(selectedOptions, correctOptions)

    if (submissionIsCorrect) {
      resolve(submissionIsCorrect)
    } else {
      reject(correctOptions)
    }
  })
}
