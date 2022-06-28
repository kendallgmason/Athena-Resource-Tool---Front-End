import { Typedropdown } from "./index";
import { render } from "@testing-library/react";

const testProps = {
    handleChange: jest.fn(),
    buttonText: "Submit",
 };

test("search renders successfully", () => {
    const { getByTestId } = render(<Typedropdown {...testProps} />);
    const actual = getByTestId("tdropdown-test");
    expect(actual).toBeInTheDocument();
 });