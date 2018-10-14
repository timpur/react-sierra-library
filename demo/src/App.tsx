import React, { Component } from "react";

import Buttons from "./sections/Buttons";
import Texts from "./sections/Texts";

class App extends Component {
  public render() {
    return (
      <main>
        <Texts />
        <Buttons />
      </main>
    );
  }
}

export default App;
