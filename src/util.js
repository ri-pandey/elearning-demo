export const STATUS = {
  PRISTINE: 0,
  IN_PROGRESS: 1,
  FINISHED: 2,
};

export const isSelectionCorrect = (selectedOptions, correctOptions) => {
  if (
    selectedOptions === null ||
    correctOptions === null ||
    selectedOptions.length !== correctOptions.length
  ) {
    return false;
  }
  return selectedOptions.every(
    (option, i) => option.id === correctOptions[i].id
  );
};
