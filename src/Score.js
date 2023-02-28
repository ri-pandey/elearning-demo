import * as React from "react";
import {Alert} from "rivet-react";

export const Score = ({questions}) => {
  const maxScore = questions.length
  const calculatedScore = questions.filter(e => e.isAnsweredCorrectly).length

  return <Alert variant={"info"} title={"Finished"}>You scored {calculatedScore}/{maxScore}</Alert>
}
