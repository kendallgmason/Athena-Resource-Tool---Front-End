import { Result } from ".";
import { render } from "@testing-library/react";

const testProps = {
    handleClick: jest.fn(),
 };

test("Result renders successfully", () => {
    const { getByTestId } = render(<Result {...testProps} />);
    const actual = getByTestId("results-test");
    expect(actual).toBeInTheDocument();
 });