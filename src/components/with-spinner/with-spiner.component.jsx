import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles";

export const WithSpinner = (WrappedComponent, name) => {
  console.log(name, WrappedComponent);
  return ({ isLoading, ...otherProps }) =>
    isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer></SpinnerContainer>
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
};
