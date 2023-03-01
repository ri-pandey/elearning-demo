import { Button, Panel } from "rivet-react";
import { STATUS } from "../util";
import * as React from "react";
import { connect } from "react-redux";
import { setLoading, setQuestions, setStatus } from "../redux/actions";
import { fetchQuestions } from "../api/api";
import { LoadingButton } from "./LoadingButton";

const StartAssessment = ({ beginAssessment, loading }) => {
  return (
    <Panel>
      <p className={"margin-top-none"}>
        Here is some description of this Multiple Choice Assessment. Here is
        some description of this Multiple Choice Assessment. Here is some
        description of this Multiple Choice Assessment. Here is some description
        of this Multiple Choice Assessment.
      </p>
      {loading ? (
        <LoadingButton />
      ) : (
        <Button type={"button"} onClick={beginAssessment}>
          Start Quiz
        </Button>
      )}
    </Panel>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.assessment.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    beginAssessment: () => {
      dispatch(setLoading(true));
      fetchQuestions().then((questions) => {
        dispatch(setQuestions(questions));
        dispatch(setStatus(STATUS.IN_PROGRESS));
        dispatch(setLoading(false));
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartAssessment);
