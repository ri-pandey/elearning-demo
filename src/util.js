export const STATUS = {
  PRISTINE: 0,
  IN_PROGRESS: 1,
  FINISHED: 2
}

export const arraysAreEqual = (arr1, arr2) => {
  if ((arr1 === null || arr2 === null) ||
    (arr1.length !== arr2.length)) {
    return false
  }
  return arr1.every((e, i) => e === arr2[i])
}
