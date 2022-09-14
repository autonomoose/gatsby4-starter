import React from "react";
import { render } from "@testing-library/react";

import HomePage from "../home";

const mockEnqueue = jest.fn();
jest.mock('notistack', () => ({
  ...jest.requireActual('notistack'),
  useSnackbar: () => {
    return {
      enqueueSnackbar: mockEnqueue
    };
  }
}));

describe("HomePage", () => {
  it("renders snapshot correctly", () => {
    const {container} = render(<HomePage />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
