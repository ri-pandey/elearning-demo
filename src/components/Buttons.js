import {Button, Col, Row} from "rivet-react";
import * as React from "react";
import _ from "lodash";
import {submitResponse} from "../api/api";
import {STATUS} from "../util";
import {setStatus, setValidationResult, updateOptionSelection} from "../redux/actions";
import {connect} from "react-redux";

const Buttons = ({question, answerIsValidated, gotoNextQuestion, gotoPreviousQuestion, validateResponse,
                 isFirstQuestion, isLastQuestion}) => {
  return <Row padding={{top: "md"}}>
    {
      !isFirstQuestion &&
      <Col md={6}>
        <Button
          type={"button"}
          onClick={gotoPreviousQuestion}
        >
          Previous
        </Button>
      </Col>
    }
    <Col md={isFirstQuestion ? 12 : 6} className={"align-content-right"}>
      <Button
        type={"button"}
        onClick={answerIsValidated ? gotoNextQuestion : validateResponse}
      >
        {
          answerIsValidated ? "Next" : "Submit"
        }
      </Button>
    </Col>
  </Row>
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    validateResponse: () => {
      const question = ownProps.question
      submitResponse(question).then(response => {
        dispatch(setValidationResult(question.id, response))
      }).finally(() => {
        if (ownProps.isLastQuestion) {
          dispatch(setStatus(STATUS.FINISHED))
        }
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(Buttons)
