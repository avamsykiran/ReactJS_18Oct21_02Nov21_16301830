import { Fragment } from 'react';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import Header from "./components/Header";
import Statement from "./components/Statement";

const App = () => (
  <Fragment>
    <Header />
    <Counter />
    <Counter2 />
    <Statement />
  </Fragment>
);

export default App;
