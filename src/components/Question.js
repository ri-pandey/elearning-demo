import {Alert, Button, Checkbox, Col, List, Panel, Row} from "rivet-react";
import * as React from "react";
import _ from "lodash"
import {STATUS} from "../util";
import {submitResponse} from "../api/api";
import {useState} from "react";
import {SubmissionResult} from "./SubmissionResult";
import Options from "./Options";
import Buttons from "./Buttons";
import {connect} from "react-redux";

const Question = ({questions}) => {
  const [questionIndex, setQuestionIndex] = useState(0)

  const question = questions[questionIndex]
  const answerIsValidated = question.isAnsweredCorrectly || (question.correctOptions && question.correctOptions.length > 0)

  const gotoNextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1)
    }
  }

  const gotoPreviousQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1)
    }
  }

  return <>
    <Panel>
      <div className="rvt-text-bold">
        <p className={"margin-top-none"}>
          Question {questionIndex + 1}
        </p>
      </div>
      <p>{question.text}</p>
      <Panel variant={"light"}>
        <Options
          question={question}
          answerIsValidated={answerIsValidated}
        />
      </Panel>
      {
        answerIsValidated &&
        <div className={"rvt-m-top-lg"}>
          <SubmissionResult question={question}/>
        </div>
      }
    </Panel>
    <Buttons
      question={question}
      answerIsValidated={answerIsValidated}
      gotoNextQuestion={gotoNextQuestion}
      gotoPreviousQuestion={gotoPreviousQuestion}
      isFirstQuestion={questionIndex === 0}
      isLastQuestion={questionIndex === questions.length - 1}
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
)(Question)
