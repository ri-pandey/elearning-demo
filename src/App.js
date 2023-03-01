import { Footer, Header } from "rivet-react";
import Assessment from "./components/Assessment";

export const App = ({}) => {
  return (
    <>
      <Header title={"eLearning Development Demo"} />
      <Assessment />
      <Footer />
    </>
  );
};
