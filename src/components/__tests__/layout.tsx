import React from "react"
import { render } from "@testing-library/react";

import Layout from "../layout"

// headerpub describes blank uname header
describe("Layout", () => {
  it("renders snapshot correctly", () => {
    const {container} = render(<Layout><div>Test</div></Layout>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

