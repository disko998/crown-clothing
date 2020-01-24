import React, { Component } from "react";

import { Directory } from "../../components";
import { HomePageContainer } from "./homepage.styles.js";

export class Homepage extends Component {
  render() {
    return (
      <HomePageContainer>
        <Directory />
      </HomePageContainer>
    );
  }
}
