import {Button, Col, Row} from "rivet-react";
import * as React from "react";
import {submitResponse} from "../api/api";
import {STATUS} from "../util";
import {setLoading, setStatus, setValidationResult} from "../redux/actions";
import {connect} from "react-redux";
import {LoadingButton} from "./LoadingButton";

const Buttons = ({question, validating, answerIsValidated, gotoNextQuestion, gotoPreviousQuestion, validateResponse,
                 isFirstQuestion, isLastQuestion, assessmentIsFinished, setStatus}) => {
  return <Row padding={{top: "md"}}>
    {
      !isFirstQuestion &&
      <Col md={6}>
        <Button
          type={"button"}
          onClick={gotoPreviousQuestion}
          disabled={validating}
        >
          Previous
        </Button>
      </Col>
    }
    <Col md={isFirstQuestion ? 12 : 6} className={"align-content-right"}>
      {
        validating ?
          <LoadingButton />
          :
          <Button
            type={"button"}
            onClick={() => {
              if (!answerIsValidated) {
                validateResponse()
              } else if (!isLastQuestion) {
                gotoNextQuestion()
              } else {
                setStatus(STATUS.FINISHED)
              }
            }}
          >
            {
              answerIsValidated ? (isLastQuestion ? "See score" : "Next") : "Submit"
            }
          </Button>
      }
    </Col>
  </Row>
}

const mapStateToProps = (state) => {
  return {
    validating: state.assessment.loading,
    assessmentIsFinished: state.assessment.status === STATUS.FINISHED
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    validateResponse: () => {
      dispatch(setLoading(true))
      const question = ownProps.question
      submitResponse(question).then(response => {
        dispatch(setValidationResult(question.id, response))
      }).finally(() => {
        dispatch(setLoading(false))
      })
    },
    setStatus: (status) => {
      dispatch(setStatus(status))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons)
