import React from "react";
import { render } from "@testing-library/react";

import ColorPage from "../colorchk";

const mockEnqueue = jest.fn();
jest.mock('notistack', () => ({
  ...jest.requireActual('notistack'),
  useSnackbar: () => {
    return {
      enqueueSnackbar: mockEnqueue
    };
  }
}));

describe("ColorPage", () => {
  it("renders snapshot correctly", () => {
    const {container} = render(<ColorPage />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
