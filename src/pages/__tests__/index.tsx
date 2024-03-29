import React from "react";
import { render } from "@testing-library/react";

import IndexPage from "../index";

const mockEnqueue = jest.fn();
jest.mock('notistack', () => ({
  ...jest.requireActual('notistack'),
  useSnackbar: () => {
    return {
      enqueueSnackbar: mockEnqueue
    };
  }
}));

describe("IndexPage", () => {
  it("renders snapshot correctly", () => {
    const {asFragment} = render(<IndexPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
