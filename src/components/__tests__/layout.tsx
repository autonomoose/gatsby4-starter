import React from "react"
import { render } from "@testing-library/react";

import Layout from "../layout"

// headerpub describes blank uname header
describe("Layout", () => {
  it("renders snapshot correctly", () => {
    const {asFragment} = render(<Layout><div>Test</div></Layout>);
    expect(asFragment()).toMatchSnapshot();
  });
});

