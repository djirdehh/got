import * as React from 'react';
import House from './houses/views/House'
import './App.css';

class App extends React.Component<{}, null> {
  render() {
    return (
      <House />
    );
  }
}

export default App;
