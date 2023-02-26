const questionsWithCorrectOptions = [{
  id: 1,
  correctOptions: [11]
},
{
  id: 2,
  correctOptions: [22, 23]
},
{
  id: 3,
  correctOptions: [34]
}]

export const submitResponse = (question) => {
  const arraysAreEqual = (arr1, arr2) => {
    if ((arr1 === null || arr2 === null) ||
      (arr1.length !== arr2.length)) {
      return false
    }
    return arr1.every((e, i) => e === arr2[i])
  }

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
