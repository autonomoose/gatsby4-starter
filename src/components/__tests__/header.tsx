import React from "react"
import { render } from "@testing-library/react";

import Header from "../header"

// headerpub describes blank uname header
describe("Header", () => {
  it("renders snapshot correctly", () => {
    const {asFragment} = render(<Header location="/" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders logged in dark snapshot correctly", () => {
    const {asFragment} = render(<Header location="/home" mode="dark"/>);
    expect(asFragment()).toMatchSnapshot();
  });

});
