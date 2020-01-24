import React from "react";

import { CustomButtonContainer } from "./custom-button.styles.js";

export const CustomButton = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};
