import { Button, Panel } from "rivet-react";
import { STATUS } from "../util";
import * as React from "react";
import { connect } from "react-redux";
import { setLoading, setQuestions, setStatus } from "../redux/actions";
import { retrieveQuestions } from "../api/api";
import { LoadingButton } from "./LoadingButton";

const StartAssessment = ({ beginAssessment, loading }) => {
  return (
    <Panel>
      <p className={"margin-top-none"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
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
      retrieveQuestions().then((questions) => {
        dispatch(setQuestions(questions));
        dispatch(setStatus(STATUS.IN_PROGRESS));
        dispatch(setLoading(false));
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartAssessment);
