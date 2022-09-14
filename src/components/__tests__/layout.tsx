import React from "react"
import { render } from "@testing-library/react";
import Layout from "../layout"

// headerpub describes blank uname header
describe("Layout", () => {

  it("renders index snapshot correctly", () => {
    const {container} = render(<Layout location='/'><div>Test</div></Layout>);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("renders home snapshot correctly", () => {
    const {container} = render(<Layout location='/home'><div>Test</div></Layout>);
    expect(container.firstChild).toMatchSnapshot();
  });

});

