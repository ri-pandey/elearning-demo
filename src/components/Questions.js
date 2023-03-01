import {Alert, Button, Checkbox, Col, List, Panel, Row} from "rivet-react";
import * as React from "react";
import _ from "lodash"
import {STATUS} from "../util";
import {submitResponse} from "../api/api";
import {useState} from "react";
import {ValidationResult} from "./ValidationResult";
import Options from "./Options";
import Buttons from "./Buttons";
import {connect} from "react-redux";

const Questions = ({questions}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const currentQuestion = questions[currentQuestionIndex]
  const answerIsValidated = currentQuestion.isAnsweredCorrectly || (currentQuestion.correctOptions && currentQuestion.correctOptions.length > 0)

  const gotoNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const gotoPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  return <>
    <Panel>
      <div className="rvt-text-bold">
        <p className={"margin-top-none"}>
          Question {currentQuestionIndex + 1}
        </p>
      </div>
      <p>{currentQuestion.text}</p>
      <Panel variant={"light"}>
        <Options
          question={currentQuestion}
          answerIsValidated={answerIsValidated}
        />
      </Panel>
      {
        answerIsValidated &&
        <div className={"rvt-m-top-lg"}>
          <ValidationResult question={currentQuestion}/>
        </div>
      }
    </Panel>
    <Buttons
      question={currentQuestion}
      answerIsValidated={answerIsValidated}
      gotoNextQuestion={gotoNextQuestion}
      gotoPreviousQuestion={gotoPreviousQuestion}
      isFirstQuestion={currentQuestionIndex === 0}
      isLastQuestion={currentQuestionIndex === questions.length - 1}
    />
  </>
}

const mapStateToProps = (state) => {
  return {
    questions: state.assessment.questions
  }
}

export default connect(mapStateToProps
  // , mapDispatchToProps
)(Questions)
