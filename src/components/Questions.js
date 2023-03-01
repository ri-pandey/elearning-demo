import {Alert, Button, Checkbox, Col, InlineAlert, List, Panel, Row} from "rivet-react";
import * as React from "react";
import {useState} from "react";
import {ValidationResult} from "./ValidationResult";
import Options from "./Options";
import Buttons from "./Buttons";
import {connect} from "react-redux";

const Questions = ({questions}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [noOptionsSelectedAlertVisible, setNoOptionsSelectedAlertVisible] = useState(false)

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

  return <form>
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
          setNoOptionsSelectedAlertVisible={setNoOptionsSelectedAlertVisible}
        />
      </Panel>
      {
        answerIsValidated &&
        <div className={"rvt-m-top-lg rvt-m-bottom-xxs"}>
          <ValidationResult question={currentQuestion}/>
        </div>
      }
      {
        noOptionsSelectedAlertVisible &&
        <div className={"rvt-m-top-lg rvt-m-bottom-xxs"}>
          <InlineAlert variant={"warning"} standalone>Please make a choice before continuing</InlineAlert>
        </div>
      }
    </Panel>
    <Buttons
      question={currentQuestion}
      answerIsValidated={answerIsValidated}
      isFirstQuestion={currentQuestionIndex === 0}
      isLastQuestion={currentQuestionIndex === questions.length - 1}
      gotoNextQuestion={gotoNextQuestion}
      gotoPreviousQuestion={gotoPreviousQuestion}
      setNoOptionsSelectedAlertVisible={setNoOptionsSelectedAlertVisible}
    />
  </form>
}

const mapStateToProps = (state) => {
  return {
    questions: state.assessment.questions
  }
}

export default connect(mapStateToProps)(Questions)
