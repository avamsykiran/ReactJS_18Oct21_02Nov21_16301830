import { Fragment } from 'react';
import Header from "./components/Header";
import Statement from "./components/Statement";

const App = () => (
  <Fragment>
    <Header title="Budget Tracker" />
    <Statement />
  </Fragment>
);

export default App;
