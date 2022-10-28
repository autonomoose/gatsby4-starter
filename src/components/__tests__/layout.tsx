import React from "react"
import { render } from "@testing-library/react";
import Layout from "../layout"

// headerpub describes blank uname header
describe("Layout", () => {

  it("renders index snapshot correctly", () => {
    const {asFragment} = render(<Layout location='/'><div>Test</div></Layout>);
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders home snapshot correctly", () => {
    const {asFragment} = render(<Layout location='/home'><div>Test</div></Layout>);
    expect(asFragment()).toMatchSnapshot();
  });

});

