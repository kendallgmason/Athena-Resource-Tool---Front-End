import { Result } from ".";
import { render } from "@testing-library/react";

const testProps = {
    list: ["item 1", "item 2"],
    handleClick: jest.fn(),
 };

test("Result renders successfully", () => {
    const { getByTestId } = render(<Result {...testProps} />);
    const actual = getByTestId("object");
    expect(actual).toBeInTheDocument();
 });