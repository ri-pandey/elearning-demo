import { QUESTIONS, OPTIONS } from "./data";
import { isSelectionCorrect } from "../util";

export const fetchQuestions = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(QUESTIONS), 1000);
  });
};

export const submitResponse = (question) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let selectedOptions = question.options.filter(
        (option) => !!option.selected
      );
      let correctOptions = OPTIONS.filter(
        (option) => option.questionId === question.id
      ).filter((option) => option.correct);
      let isAnsweredCorrectly = isSelectionCorrect(
        selectedOptions,
        correctOptions
      );

      let response = {
        isAnsweredCorrectly,
        ...(!isAnsweredCorrectly && { correctOptions }),
      };
      resolve(response);
    }, 1000);
  });
};
