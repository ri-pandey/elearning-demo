import * as React from 'react'
import {Alert, DismissibleAlert} from "rivet-react";

function App() {
  return (
    <div>
      <DismissibleAlert variant="info">A very important message for you!</DismissibleAlert>
    </div>
  );
}

export default App;
