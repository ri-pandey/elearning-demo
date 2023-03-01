import * as React from "react";
import {Alert, Panel} from "rivet-react";

export const Score = ({questions}) => {
  const maxScore = questions.length
  const calculatedScore = questions.filter(e => e.isAnsweredCorrectly).length

  return <Panel><Alert variant={"info"} title={"Assessment Complete"}>You scored {calculatedScore}/{maxScore} in this assessment</Alert></Panel>
}
