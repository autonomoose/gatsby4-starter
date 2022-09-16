import React from "react"
import { render } from "@testing-library/react";

import Header from "../header"

// headerpub describes blank uname header
describe("Header", () => {
  it("renders snapshot correctly", () => {
    const {container} = render(<Header location="/" />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("renders logged in dark snapshot correctly", () => {
    const {container} = render(<Header location="/home" mode="dark"/>);
    expect(container.firstChild).toMatchSnapshot();
  });

});
