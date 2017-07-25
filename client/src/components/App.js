import React from 'react';
import Header from './Header';

import Editor from './Editor';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainContainer">
        <Header />
        <Editor />
      </div>
  )}
}


export default App;
