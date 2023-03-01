import { Button, Col, Row } from "rivet-react";
import * as React from "react";
import { submitResponse } from "../api/api";
import { STATUS } from "../util";
import { setLoading, setStatus, setValidationResult } from "../redux/actions";
import { connect } from "react-redux";
import { LoadingButton } from "./LoadingButton";

const Buttons = ({
  question,
  validating,
  answerIsValidated,
  isFirstQuestion,
  isLastQuestion,
  noOptionsSelected,
  assessmentIsFinished,
  gotoNextQuestion,
  gotoPreviousQuestion,
  validateResponse,
  setStatus,
  setNoOptionsSelectedAlertVisible,
}) => {
  return (
    <Row padding={{ top: "md" }}>
      {!isFirstQuestion && (
        <Col md={6}>
          <Button
            type={"button"}
            onClick={() => {
              setNoOptionsSelectedAlertVisible(false);
              gotoPreviousQuestion();
            }}
            disabled={validating}
          >
            Previous
          </Button>
        </Col>
      )}
      <Col md={isFirstQuestion ? 12 : 6} className={"align-content-right"}>
        {validating ? (
          <LoadingButton />
        ) : (
          <Button
            type={"button"}
            onClick={() => {
              if (noOptionsSelected) {
                setNoOptionsSelectedAlertVisible(true);
                return;
              }
              if (!answerIsValidated) {
                validateResponse();
              } else if (!isLastQuestion) {
                gotoNextQuestion();
              } else {
                setStatus(STATUS.FINISHED);
              }
            }}
          >
            {answerIsValidated
              ? isLastQuestion
                ? "See score"
                : "Next"
              : "Submit"}
          </Button>
        )}
      </Col>
    </Row>
  );
};

const mapStateToProps = (state, ownProps) => {
  const assessment = state.assessment;
  const noOptionsSelected =
    ownProps.question.options.filter((option) => option.selected).length === 0;

  return {
    validating: assessment.loading,
    assessmentIsFinished: assessment.status === STATUS.FINISHED,
    noOptionsSelected,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    validateResponse: () => {
      dispatch(setLoading(true));
      const question = ownProps.question;
      submitResponse(question)
        .then((response) => {
          dispatch(setValidationResult(question.id, response));
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    },
    setStatus: (status) => {
      dispatch(setStatus(status));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
